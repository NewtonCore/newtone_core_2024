let data = [
  {
    id: 1,
    created_at: "2023-01-03T08:53:24.816402Z",
    updated_at: "2023-01-03T08:53:24.816466Z",
    view_later: false,
    status: "pending",
    job: {
      id: 1,
      created_at: "2023-01-03T08:15:00.553856Z",
      updated_at: "2023-01-03T08:15:00.553914Z",
      title: "Senior mobile engineer",
      mode: "full-time",
      type: "contract",
      duration: null,
      description: "React, django project",
      salary: "10000-20000",
      experience: 3,
      status: "end",
      expiration_date: "2023-12-26",
      address: null,
      company: 1,
      experienceskills: [1],
    },
    talent: {
      id: 1,
      created_at: "2023-01-03T07:55:54.147847Z",
      updated_at: "2023-01-03T07:56:26.235584Z",
      last_name: "Agoya",
      first_name: "Albert",
      email: "albertagoya@gmail.com",
      address: "Nairobi",
      phone: "+254791836987",
      current_job_title: "Software developer",
      year_of_experience: 0,
      expected_min_salary: 0,
      gender: "female",
      about_me: "ypimi@aimsammi.org",
      desiredJobMode: "part-time",
      type: "permanent",
      github: "",
      website: null,
      linkedlin: "",
      num_view_profile: 4,
      user: 2,
      user_skills: [],
    },
  },
  {
    id: 2,
    created_at: "2023-01-03T08:56:25.500495Z",
    updated_at: "2023-01-03T08:56:25.500549Z",
    view_later: false,
    status: "pending",
    job: {
      id: 1,
      created_at: "2023-01-03T08:15:00.553856Z",
      updated_at: "2023-01-03T08:15:00.553914Z",
      title: "Senior mobile engineer",
      mode: "full-time",
      type: "contract",
      duration: null,
      description: "React, django project",
      salary: "10000-20000",
      experience: 3,
      status: "end",
      expiration_date: "2023-12-26",
      address: null,
      company: 1,
      experienceskills: [1],
    },
    talent: {
      id: 1,
      created_at: "2023-01-03T07:55:54.147847Z",
      updated_at: "2023-01-03T07:56:26.235584Z",
      last_name: "Agoya",
      first_name: "Albert",
      email: "albertagoya@gmail.com",
      address: "Nairobi",
      phone: "+254791836987",
      current_job_title: "Software developer",
      year_of_experience: 0,
      expected_min_salary: 0,
      gender: "female",
      about_me: "ypimi@aimsammi.org",
      desiredJobMode: "part-time",
      type: "permanent",
      github: "",
      website: null,
      linkedlin: "",
      num_view_profile: 4,
      user: 2,
      user_skills: [],
    },
  },
];

const PutTalentsInArray_FromJob = (dataPassed,filter="all") => {
let data=dataPassed
 if(filter === "pending"){
    data = data.filter((d)=>{
        return d.status === "pending"
    })
 }

 else if(filter === "rejected"){
    data = data.filter((d)=>{
        return d.status === "rejected"
    })
 }

 else if(filter === "offered"){
    data = data.filter((d)=>{
        return d.status === "offered"
    })
 }

//  console.log(data)
  let talents = [];

  let jobDetails = {};

  data.map((d) => {
    jobDetails = d.job;
    talents = [...talents, d.talent];
  });



//     jobDetails = d.job;
//     talents = [...talents, d.talent];
//   });

  let dataToReturn = {
    job: jobDetails,
    talents: talents,
  };

  return dataToReturn;
};

// console.log(PutTalentsInArray_FromJob(data,"rejected"));

console.log(data.filter((d)=>{
    return d.status === "all"
}))