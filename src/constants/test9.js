let data = [

    {
        label: "Expected Application Closing Date",
        input_type: "mui-date",
        name: "expiration_date",
        type: "mui-date",
        bs_size: 3,
        value: "2023-04-29",
        isRequired: true,
        hasDateError: false,
      },

      {
        label: "Expected Job Start Date",
        input_type: "mui-date",
        name: "start_date",
        type: "mui-date",
        bs_size: 3,
        value: "2023-04-29",
        isRequired: true,
        hasDateError: false,
      },
]

let start_date = data[0].value;
let end_date = data[1].value;

start_date = new Date(start_date);
end_date = new Date(end_date);

if (end_date < start_date) {
    // console.log("End date is greater")

    console.log("end date is less")

  } else {
    // console.log("End date is smaller")
    // console.log(end_date)

    console.log("end date not less")

  }

// console.log(start_date)
// console.log(end_date)