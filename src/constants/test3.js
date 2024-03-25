function checkProperties(obj) {
  for (var key in obj) {
    if (obj[key] !== null && obj[key] != "") return false;
  }
  return true;
}

var obj23 = {
  x: null,
  y: "j",
  z: 1,
};

// const isEmpty  = checkProperties(obj) //returns false

let obj = { x: null, y: "hello", z: 1 };
let obj1 = { x: null, y: "", z: 0 };
let obj2 = { degree: "8hh", school: "kkk", start_date: "" };

!Object.values(obj).some((v) => v);
// false

// console.log(!Object.values(obj1).some(v => v))
// true

// console.log({isEmpty})

// const isEmpty = !Object.values(obj).some(x => (x !== null && x !== ''));
let testItem = {
  name: "Daniel",
  skill: [1, 2, 4, 5, 6],
  age: "23",
};

const JsonToformData = (item = testItem) => {
  var form_data = new FormData();
  // console.log(item)
  for (var key in item) {
    //check if item is an array

    if (Array.isArray(item[key])) {
      item[key].map((i) => {
        form_data.append(key, parseInt(i));
      });
    } else {
      form_data.append(key, item[key]);
    }
  }

  return form_data;
};

const daysDifferenceBetweenDates = (data) => {
  // console.log(data)
  let start_date = new Date(data.start_date);
  let end_date = new Date(data.end_date);
  // console.log(start_date)
  // console.log(end_date)

  // console.log(diffDays)

  if (end_date > start_date) {
    return true;
  } else {
    return false;
  }
};

const hoursDiff = (d1, d2) => {
  let dt1 = new Date(d1);
  let dt2 = new Date(d2);

  // console.log(dt2)

  // calculate the time difference of two dates JavaScript

  var diffMin = (dt2.getTime() - dt1.getTime()) / 1000;
  //  diff /= 60;
  return Math.abs(Math.round(diffMin));
};

function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (
    num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s)."
  );
}

let hours = hoursDiff(new Date(), "2023-01-27T23:30:11.965336Z");
// console.log(hours)
// hours=timeConvert(hours)
// console.log(timeConvert(hours));

let data = [
  {
    created_at: "2023-01-07T01:41:50.147063Z",
  },
  {
    created_at: "2023-01-08T01:41:50.147063Z",
  },
  {
    created_at: "2023-01-07T01:41:50.147063Z",
  },
  {
    created_at: "2023-01-07T01:41:50.147063Z",
  },
  {
    created_at: "2023-01-07T01:41:50.147063Z",
  },
];

let dates = [];

let data_for_map = [];

data.map((d) => {
  date_slice = d.created_at.slice(0, 10);
  if (dates.indexOf(date_slice) === -1) {
    dates.push(date_slice);
  }
});

dates.map((date) => {
  let filtered = data.filter((d) => {
    date_slice = d.created_at.slice(0, 10);
    return date_slice === date;
  }).length;

  data_for_map = [
    ...data_for_map,
    {
      name: date,
      uv: filtered,
    },
  ];
});

console.log(data_for_map);
// console.log(daysDifferenceBetweenDates({start_date:"2022/2",end_date:"2023/2"}))
