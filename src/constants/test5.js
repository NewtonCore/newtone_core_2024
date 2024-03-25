let data = {
    "created_at": "2023-01-05T08:47:47.810515Z",
    "id": 2,
    "level": "intermediate",
    "updated_at": "2023-01-05T08:47:47.810590Z",
    "yearExperience": 0,
    "skill": 3,
    
    "skillDetails": {
        "id": "1",
        "name": "Python"
    }
}

// data="data"

// if(typeof(data) === "string"){
//     console.log(typeof(data))

// }else{
// console.log("")

// }


data = [
    {
        "id": 2,
        "created_at": "2023-01-07T09:48:22.727519Z",
        "updated_at": "2023-01-07T09:48:22.727556Z",
        "yearExperience": 3,
        "level": "senior",
        "skill": {
            "id": 2,
            "created_at": "2023-01-03T08:12:09.359420Z",
            "updated_at": "2023-01-03T08:12:09.359473Z",
            "name": "JavaScript",
            "percent_topass": 0.7,
            "picture": null
        }
    }
]

const convertSkillsToFormData=(data)=>{

    var form_data = new FormData();
  
    for (var key in data) {
      // console.log(data[key])
  
      let mykey = `experienceskills`;
      let myvalue = `${data[key].skill.id}`;
  
      form_data.append(mykey, myvalue);
    }
  
    return form_data;
  }


  const combineTwoFormData=(form1,form2)=>{
    var form_data = form1;

    

    for (var pair of form2.entries()) {
        form_data.append(pair[0], pair[1]);
    }
  
    return form_data;
  }

  
f1=convertSkillsToFormData(data)
f2=convertSkillsToFormData(data)

console.log(combineTwoFormData(f1,f2))