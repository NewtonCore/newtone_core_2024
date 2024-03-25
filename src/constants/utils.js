import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const { phone } = require("phone");

const CryptoJS = require("crypto-js");

var FormData = require("form-data");

var MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

var DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const JsonToformData = (item) => {
  var form_data = new FormData();
  // console.log(item)
  for (var key in item) {
    //check if item is an array

    if (Array.isArray(item[key])) {
      item[key].map((i) => {
        form_data.append(key, i);
      });
    } else {
      form_data.append(key, item[key]);
    }
  }

  return form_data;
};

const combineTwoFormData = (form1, form2) => {
  var form_data = form1;

  for (var pair of form2.entries()) {
    form_data.append(pair[0], pair[1]);
  }
  // console.log(form1)

  return form_data;
};

function convertDate(d, returnArray = false) {
  var parts = d.toString().split(" ");
  var months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  return returnArray
    ? [parts[3], months[parts[1]], parts[2]]
    : parts[3] + "-" + months[parts[1]] + "-" + parts[2];
}

function FormatDate(d) {
  let date = new Date(d);
  var parts = date.toString().split(" ");

  // console.log(parts)

  var months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  return d === undefined ? "" : `${parts[1]} ${parts[2]}, ${parts[3]}`;
}

const FormatToDateFormat = (x, y) => {
  var z = {
    M: x.getMonth() + 1,
    d: x.getDate(),
    h: x.getHours(),
    m: x.getMinutes(),
    s: x.getSeconds(),
  };
  y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
    return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2);
  });

  return y.replace(/(y+)/g, function (v) {
    return x.getFullYear().toString().slice(-v.length);
  });
};

function convertTime(d) {
  // console.log(d);
  var parts = d.toString().split(" ");
  var months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  return parts[4];
}

const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};

const generateUniqueID = () => {
  return uuidv4();
};

const convertSolutionsToFormData = (solutions) => {
  let data = [];
  solutions.map((sol) => {
    return sol.selectedAnswer !== ""
      ? (data = [
          ...data,
          { selectedAnswer: sol.selectedAnswer, question_id: sol.id },
        ])
      : null;
  });

  var form_data = new FormData();

  for (var key in data) {
    // console.log(data[key])

    let mykey = `q_${data[key]["question_id"]}`;
    let myvalue = `${data[key]["selectedAnswer"]}`;

    form_data.append(mykey, myvalue);
  }

  return form_data;
};

const convertSkillsToFormData = (data, myKey = "experienceskills") => {
  var form_data = new FormData();

  for (var key in data) {
    // console.log(data[key])

    let mykey = myKey;
    let myvalue = `${data[key].id}`;

    // console.log(myvalue)

    form_data.append(mykey, myvalue);
  }

  return form_data;
};

const AddIdToCountries = (data) => {
  let countries = [];

  data.map((d) => {
    countries = [
      ...countries,
      {
        id: d.name,
        name: `${d.name} (${d.code})`,
        ...d,
      },
    ];
  });

  return countries;
};

const SpreadCompanyUserDetails = (data) => {
  // console.log(data)

  //this function adds the user email and company company_website to the results s

  let { user } = data;
  let { email, company_website } = user;

  let newData = {
    ...data,
    email,
    company_website,
  };

  return newData;
};

const AddSkillToResult = (data) => {
  if (!Array.isArray(data)) {
    return data;
  }

  let dataToBeReturned = [];

  data.map((x) => {
    let { skill, proposal_solutions } = x;
    let { id, name, picture, percent_topass } = skill;
    let new_proposal_solutions = [];
    // let {proposal_solutions} = proposal_solutions

    proposal_solutions.map((y) => {
      let solution_answer_selected = {
        ...y,
        isSelected: false,
      };

      new_proposal_solutions = [
        ...new_proposal_solutions,
        solution_answer_selected,
      ];
    });

    let newskill = {
      ...x,
      selectedAnswer: "0",
      proposal_solutions: new_proposal_solutions,
      skill_id: id,
      skill_name: name,
      skill_picture: picture,
      skill_percentage_topass: percent_topass,
    };

    dataToBeReturned = [...dataToBeReturned, newskill];
  });
  // console.log({ dataToBeReturned });

  return dataToBeReturned;
};

const CheckEndDateLessThanStart = (
  array,
  date_name_1 = "start_date",
  date_name_2 = "end_date"
) => {
  // console.log(JSON.parse(array))

  let data = JSON.parse(array);

  data = data.children.filter((d) => {
    return d.name === date_name_1 || d.name === date_name_2;
  });

  if (data.length === 2) {
    let start_date = data[0].value;
    let end_date = data[1].value;

    if (start_date !== "" && end_date !== "") {
      start_date = new Date(start_date[0], start_date[1]);
      end_date = new Date(end_date[0], end_date[1]);

      // console.log(data);

      // console.log(start_date);
      // console.log(end_date);

      if (end_date < start_date) {
        // console.log("End date is greater")

        return true;
      } else {
        // console.log("End date is smaller")
        // console.log(end_date)

        return false;
      }
    } else {
      // console.log("dates are em[ty string")

      return false;
    }
  } else {
    // console.log("dates are em[ty")
    return false;
  }
};

const CheckEndDateLessThanStart2 = (
  array,
  date_name_1 = "start_date",
  date_name_2 = "end_date"
) => {
  // console.log(JSON.parse(array))

  let data = JSON.parse(array);

  data = data.children.filter((d) => {
    return d.name === date_name_1 || d.name === date_name_2;
  });

  if (data.length === 2) {
    let start_date = data[0].value;
    let end_date = data[1].value;

    if (start_date !== "" && end_date !== "") {
      start_date = new Date(start_date);
      end_date = new Date(end_date);

      // console.log(data);

      // console.log(start_date);
      // console.log(end_date);

      if (end_date < start_date) {
        return true;
      } else {
        // console.log("End date is smaller")
        // console.log(end_date)

        return false;
      }
    } else {
      // console.log("dates are em[ty string")

      return false;
    }
  } else {
    // console.log("dates are em[ty")
    return false;
  }
};

const CheckMinMaxSalaryError = (
  array,
  date_name_1 = "min_salary",
  date_name_2 = "max_salary"
) => {
  // console.log(JSON.parse(array))

  let data = JSON.parse(array);

  data = data.children.filter((d) => {
    return d.name === date_name_1 || d.name === date_name_2;
  });

  if (data.length === 2) {
    let min_salary = data[0].value;
    let max_salary_date = data[1].value;

    if (min_salary !== "" && max_salary_date !== "") {
      if (parseInt(max_salary_date) < parseInt(min_salary)) {
        // console.log("job start date is less than application date")

        return true;
      } else {
        // console.log("End date is smaller")
        // console.log(end_date)

        return false;
      }
    } else {
      // console.log("dates are em[ty string")

      return false;
    }
  } else {
    // console.log("dates are em[ty")
    return false;
  }
};

const getSolutionAnswered = (data, answerID) => {
  if (Array.isArray(data)) {
    let filtered = data.filter((d) => {
      return parseInt(d.selectedAnswer) === parseInt(answerID);
    });
    if (filtered.length !== 0) {
      return filtered[0].selectedAnswer === answerID ? true : false;
    }
  } else {
    return false;
  }
};

const ExtractFieldsFromFormData = (
  dataToMap,
  onlyRequired = false,
  field = "isRequired"
) => {
  let dataToReturn = {};

  if (onlyRequired) {
    dataToMap.map((d1) => {
      d1.children.map((d2) => {
        // only pick the fields which have isRequired to true
        if (d2[field]) {
          // console.log(d2)
          dataToReturn[d2.name] = d2["value"];
        }
      });
    });
  } else {
    dataToMap.map((d1) => {
      d1.children.map((d2) => {
        dataToReturn[d2.name] =
          d2.input_type === "number" && d2.value === null ? "" : d2["value"];
        // return data
      });
    });
  }

  // console.log(dataToReturn)

  return dataToReturn;
};

const ExtractFieldsWithHasErrorStatus = (dataToMap) => {
  let dataToReturn = {};

  dataToMap.map((d1) => {
    d1.children.map((d2) => {
      // only pick the fields which have hasError to true
      if (d2["hasError"]) {
        // console.log(d2)
        dataToReturn[d2.hasError] = true;
      }
    });
  });

  // console.log(dataToReturn)

  return dataToReturn;
};

function checkPropertiesIsEmpty(obj) {
  for (var key in obj) {
    // console.log(obj[key])

    if (obj[key] === "" || obj[key] === null) {
      // console.log("is empty");

      return true;
    }
  }
  return false;
}

// function checkObjectHasDateError(obj) {
//   for (var key in obj) {
//     if (obj["end_date"] !== undefined) {
//       if (obj["expiration_date"] !== "" && obj["start_date"] !== "") {
//         // console.log("is empty");
//         console.log(obj);

//         return true;
//       }
//     } else {
//       return false;
//     }
//   }

//   return false;
// }

function checkObjectHasDateError(obj) {
  for (var key in obj) {
    if (obj["end_date"] !== undefined) {
      if (obj["start_date"] !== "" && obj["end_date"] !== "") {
        // console.log("is empty");
        // console.log(obj);

        return true;
      }
    } else {
      return false;
    }
  }

  return false;
}

function checkObjectHasURLerror(obj,keyToCheck="url") {
  for (var key in obj) {
    // console.log(key)
    if (obj[keyToCheck] !== undefined) {
      if (obj[keyToCheck] !== "") {
        // console.log("is empty");
        // console.log(obj);

        return true;
      }
    } else {
      return false;
    }
  }

  return false;
}

function checkObjectHasPhoneerror(obj) {
  for (var key in obj) {
    if (obj["phone"] !== undefined) {
      if (obj["phone"] !== "") {
        // console.log("is empty");
        // console.log(obj);

        return true;
      }
    } else {
      return false;
    }
  }

  return false;
}

function checkHasExpect_StartDateError(obj) {
  for (var key in obj) {
    if (obj["expiration_date"] !== undefined) {
      if (obj["expiration_date"] !== "" && obj["start_date"] !== "") {
        // console.log("is empty");
        // console.log(obj);

        return true;
      }
    } else {
      return false;
    }
  }

  return false;
}

function checkMinMaxSalaryError(obj) {
  for (var key in obj) {
    if (obj["min_salary"] !== undefined) {
      if (obj["min_salary"] !== "" && obj["max_salary"] !== "") {
        // console.log("is empty");
        // console.log(obj);

        return true;
      }
    } else {
      return false;
    }
  }

  return false;
}

const PutTalentsInArray_FromJob = (dataPassed, filter = "all") => {
  let data = dataPassed;
  if (filter === "pending") {
    data = data.filter((d) => {
      return d.status === "pending";
    });
  } else if (filter === "rejected") {
    data = data.filter((d) => {
      return d.status === "rejected";
    });
  } else if (filter === "offered") {
    data = data.filter((d) => {
      return d.status === "offered";
    });
  }

  //  console.log(data)
  let talents = [];

  let jobDetails = {};

  data.map((d) => {
    jobDetails = d.job;
    talents = [
      ...talents,
      {
        ...d.talent,
        salary: d.job !== null ? d.job.salary : undefined,
        jobcreated_at: d.job !== null ? d.job.created_at : undefined,
        created_at: d.job !== null ? d.created_at : undefined,
        status: d.status,
        dataID: uuidv4(),
        jobDetails,
        jobID: d.job !== null ? d.job.id : undefined,
        comapany:
          d.job !== null
            ? d.job.hasOwnProperty("company")
              ? d.job.company
              : undefined
            : undefined,
        jobTitle: d.job !== null ? d.job.title : undefined,
        expiry_date: d.job !== null ? d.job.expiration_date : undefined,
        id: d.id,
        talentId: d.talent !== null ? d.talent.id : undefined,
        companypaymenttransaction_set:
          d.job !== null ? d.job.companypaymenttransaction_set : [],
      },
    ];
  });

  let dataToReturn = {
    // job: jobDetails,
    talents: talents,
  };

  return dataToReturn;
};

const PutTalentsInArray_FromJob_Recommended = (dataPassed,jobsData={}) => {
  let data = dataPassed;


  //  console.log({jobsData})
  let talents = [];

  let jobDetails = {};

  data.map((d) => {
    // d.job  = d.job === undefined ? jobsData : d.job

    // const jobObjCopy = {...d}; // 👈️ create copy
    // jobObjCopy.job = d.job === undefined ? jobsData : d.job

    // d.job = {...d.job},
    jobDetails = jobsData;
    talents = [
      ...talents,
      {
        ...d,
        status: d.status,
        dataID: uuidv4(),
        jobDetails,
        job:jobsData,
        id: d.id,
        talentId: d.id,
        jobTitle: jobsData.title,
        jobID: jobsData.id 
       
        
       
      },
    ];
  });

  let dataToReturn = {
    // job: jobDetails,
    talents
  };

  // console.log(talents)

  return dataToReturn;
};
const generateGraphData = (data) => {
  let dates = [];

  let data_for_graph = [];

  data.map((d) => {
    let date_slice = d.created_at.slice(0, 10);
    if (dates.indexOf(date_slice) === -1) {
      dates.push(date_slice);
    }
  });

  dates.map((date) => {
    let filtered = data.filter((d) => {
      // console.log(d)
      let date_slice = d.created_at.slice(0, 10);
      return date_slice === date;
    }).length;

    data_for_graph = [
      ...data_for_graph,
      {
        name: FormatDate(new Date(date)),
        uv: filtered,
      },
    ];
  });

  return data_for_graph;
};

async function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function checkStringIsBinary(str) {
  let isBinary = false;
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0" || str[i] === "1") {
      isBinary = true;
    } else {
      isBinary = false;
    }
  }
}

function blobToFile(theBlob, fileName) {
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

const SearchFilterFunc = function (search, data) {
  var lowSearch = search.toLowerCase();
  return data.filter((wine) =>
    Object.values(wine).some((val) =>
      String(val).toLowerCase().includes(lowSearch)
    )
  );
};

const removeDuplicatesFromTwoObjArrays = (a, b, nameKey = "name") => {
  return b.filter(function (item) {
    for (var i = 0, len = a.length; i < len; i++) {
      if (a[i]["skill"][nameKey] === item[nameKey]) {
        return false;
      }
    }
    return true;
  });

  // console.log(a);
  // console.log(b);
};

const removeNumberBeginingOfText = (string) => {
  let splitted_string = string.split(" ");

  if (splitted_string.length !== 0) {
    if (!isNaN(splitted_string[0])) {
      splitted_string.shift();
    }
    if (splitted_string[0] === ".") {
      splitted_string.shift();
    }
  }

  splitted_string = splitted_string.join(" ");

  return splitted_string;
};

function dateDiff(dt1, dt2) {
  /*
   * setup 'empty' return object
   */
  var ret = { days: 0, months: 0, years: 0 };

  dt2 = new Date(dt2);

  /*
   * If the dates are equal, return the 'empty' object
   */
  if (dt1 === dt2) return ret;

  /*
   * ensure dt2 > dt1
   */
  if (dt1 > dt2) {
    var dtmp = dt2;
    dt2 = dt1;
    dt1 = dtmp;
  }

  /*
   * First get the number of full years
   */

  var year1 = dt1.getFullYear();
  var year2 = dt2.getFullYear();

  var month1 = dt1.getMonth();
  var month2 = dt2.getMonth();

  var day1 = dt1.getDate();
  var day2 = dt2.getDate();

  /*
   * Set initial values bearing in mind the months or days may be negative
   */

  ret["years"] = year2 - year1;
  ret["months"] = month2 - month1;
  ret["days"] = day2 - day1;

  /*
   * Now we deal with the negatives
   */

  /*
   * First if the day difference is negative
   * eg dt2 = 13 oct, dt1 = 25 sept
   */
  if (ret["days"] < 0) {
    /*
     * Use temporary dates to get the number of days remaining in the month
     */
    var dtmp1 = new Date(dt1.getFullYear(), dt1.getMonth() + 1, 1, 0, 0, -1);

    var numDays = dtmp1.getDate();

    ret["months"] -= 1;
    ret["days"] += numDays;
  }

  /*
   * Now if the month difference is negative
   */
  if (ret["months"] < 0) {
    ret["months"] += 12;
    ret["years"] -= 1;
  }

  return ret;
}

const returnTimeDifference = (res, msg = "Posted") => {
  let { days, months, years } = res;
  let message = "";

  if (years > 0) {
    if (years === 1) {
      message = `${msg} ${years} year ago`;
    } else {
      message = `${msg} ${years} years ago`;
    }
  } else if (months > 0) {
    if (months === 1) {
      message = `${msg} ${months} month ago`;
    } else {
      message = `${msg} ${months} months ago`;
    }
  } else {
    if (days === 0) {
      message = `${msg} today`;
    } else if (days === 1) {
      message = `${msg} ${days} day ago`;
    } else {
      message = `${msg} ${days} days ago`;
    }
  }

  return message;
};

const returnSalary = (min_salary, max_salary) => {
  let message = "Salary not indicated";

  // console.log(isNaN(max_salary));

  if (isNaN(min_salary)) {
    // console.log("!!");
    min_salary = 0;
  }

  if (!isNaN(min_salary)) {
    parseInt(min_salary);
  }

  if (isNaN(max_salary)) {
    // console.log("!!");
    max_salary = 0;
  } else {
    parseInt(max_salary);
  }

  if (
    min_salary === null &&
    min_salary === undefined &&
    typeof min_salary === Boolean
  ) {
    message = `${max_salary.toLocaleString()}`;
  }
  if (
    max_salary === null &&
    max_salary === undefined &&
    typeof max_salary === Boolean
  ) {
    message = `${min_salary}`;
  }
  if (min_salary === null && max_salary === null) {
    message = "Salary not indicated";
  }
  if (
    min_salary !== null &&
    min_salary !== undefined &&
    max_salary !== null &&
    max_salary !== undefined
  ) {
    message = `${min_salary.toLocaleString()}-${max_salary.toLocaleString()}`;

    if (typeof min_salary !== Boolean) {
      message = `${max_salary.toLocaleString()}`;
    }

    if (typeof max_salary !== Boolean) {
      message = `${min_salary.toLocaleString()}`;
    }

    if (typeof max_salary !== Boolean && typeof min_salary !== Boolean) {
      message = `${min_salary.toLocaleString()}-${max_salary.toLocaleString()}`;
    }

    //   else {
    //     message = `${min_salary}-${max_salary}`;

    //   }
  }

  if (min_salary === max_salary) {
    if (typeof min_salary !== Boolean && typeof max_salary !== Boolean) {
      message = `Salary not indicated`;
    } else {
      message = `${max_salary.toLocaleString()}`;
    }
    // console.log(typeof min_salary);
  }

  if (typeof min_salary === Boolean && typeof max_salary === Boolean) {
    message = `Salary not indicated`;
  }

  if (min_salary === 0 && max_salary === 0) {
    message = "Salary not indicated";
  }

  if (min_salary > max_salary) {
    message = min_salary.toLocaleString();
  }

  if (min_salary === undefined && max_salary === undefined) {
    message = "Salary not indicated";
  }

  return message;
};

const luhnCheck = (num) => {
  const arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  const lastDigit = arr.shift();
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
};

const encryptWithAES = (text) => {
  const passphrase = "123";
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext) => {
  const passphrase = "123";
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

const formatAppliedTalentsFor_Updates = (results) => {
  let dataToReturn = [];

  results.map((res) => {
    let job_id = res.job.id;
    let job_title = res.job.title.name;
    let uid = res.id;
    let status = res.status;
    let talent_id = res.talent !== null ? res.talent.id :null;
    let talent_f_name = res.talent !== null ? res.talent.first_name :null;
    let talent_l_name = res.talent !== null ? res.talent.last_name:null;
    let talent_job_title =res.talent !== null? res.talent.current_job_title:null;
    let talent_photo = res.talent !== null ? res.talent.photo : null;
    let talent_gender = res.talent !== null ? res.talent.gender : null;
    let apply_date = res.created_at;

    let data = {
      job_id,
      job_title,
      uid,
      status,
      talent_f_name,
      talent_id,
      talent_l_name,
      talent_job_title,
      talent_photo,
      talent_gender,
      apply_date,
    };

    dataToReturn = [...dataToReturn, data];
  });

  return dataToReturn;
};

function removeNullValues(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj;
}

const validatePhone = (phoneNumber) => {
  let is_valid = null;
  try {
    let phone_check = phone(phoneNumber);
    is_valid = phone_check.isValid;

    // console.log(phone_check)
  } catch (e) {
    is_valid = false;
  }

  return is_valid;
};

const validateURL = (url = "https://www.example.com/") => {
  let msg = "";
  let url_is_valid = false;
  try {
    const isUrlCorrect = new URL(url);
    // console.log(isUrlCorrect);
    url_is_valid = true;
  } catch (e) {
    // console.log(e.code);
    if (e.code === "ERR_INVALID_URL") {
      msg = "URL is invalid";
      url_is_valid = false;

      // console.log("URL is invalid")
    }
  }

  return url_is_valid;
};


function stripTags(html){
  const parseHTML= html.replaceAll(/<\/?[^>]+(>|$)/gi,"");
  return parseHTML;
}

export {
  stripTags,
  validatePhone,
  validateURL,
  removeNullValues,
  encryptWithAES,
  decryptWithAES,
  JsonToformData,
  convertDate,
  convertTime,
  useLocalStorage,
  generateUniqueID,
  AddSkillToResult,
  getSolutionAnswered,
  ExtractFieldsFromFormData,
  MONTHS,
  DAYS_OF_WEEK,
  FormatDate,
  SpreadCompanyUserDetails,
  checkPropertiesIsEmpty,
  convertSolutionsToFormData,
  CheckEndDateLessThanStart,
  checkObjectHasDateError,
  ExtractFieldsWithHasErrorStatus,
  PutTalentsInArray_FromJob,
  combineTwoFormData,
  convertSkillsToFormData,
  FormatToDateFormat,
  generateGraphData,
  blobToBase64,
  checkStringIsBinary,
  blobToFile,
  AddIdToCountries,
  SearchFilterFunc,
  removeDuplicatesFromTwoObjArrays,
  removeNumberBeginingOfText,
  CheckEndDateLessThanStart2,
  CheckMinMaxSalaryError,
  checkMinMaxSalaryError,
  checkObjectHasURLerror,
  checkObjectHasPhoneerror,
  checkHasExpect_StartDateError,
  dateDiff,
  returnTimeDifference,
  returnSalary,
  luhnCheck,
  formatAppliedTalentsFor_Updates,
  PutTalentsInArray_FromJob_Recommended
};
