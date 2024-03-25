const returnSalary = (min_salary, max_salary) => {
  let message = "Salary not indicated";

// console.log(isNaN(max_salary));

  if (isNaN(min_salary)) {
    console.log("!!");
    min_salary = 0;

  }

  if (!isNaN(min_salary)) {
    parseInt(min_salary);

  }

  if (isNaN(max_salary)) {
    console.log("!!");
    max_salary = 0;
    
  }else{
    parseInt(max_salary);
  }

  if (
    min_salary === null &&
    min_salary === undefined &&
    typeof min_salary === Boolean
  ) {
    message = `${max_salary}`;
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
    message = `${min_salary}-${max_salary}`;

    if (typeof min_salary !== Boolean) {
      message = `${max_salary}`;
    }

    if (typeof max_salary !== Boolean) {
      message = `${min_salary}`;
    }

    if (typeof max_salary !== Boolean && typeof min_salary !== Boolean) {
      message = `${min_salary}-${max_salary}`;
    }

    //   else {
    //     message = `${min_salary}-${max_salary}`;

    //   }
  }

  if (min_salary === max_salary) {
    if (typeof min_salary !== Boolean && typeof max_salary !== Boolean) {
      message = `Salary not indicated`;
    } else {
      message = `${max_salary}`;
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
    message = min_salary;
  }

  if (min_salary === undefined && max_salary === undefined) {
    message = "Salary not indicated";
  }

  return message;
};

console.log(returnSalary(null, null));
