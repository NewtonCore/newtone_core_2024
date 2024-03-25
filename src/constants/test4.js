let data = [
  {
    id: 1,
    question:
      "1 function find_max(nums) {\r\n2 let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers\r\n3 for (let num of nums) {\r\n4 if (num > max_num) {\r\n5 // (Fill in the missing line here)\r\n6 }\r\n7 }\r\n8 return max_num;\r\n9 }",
    skill: {
      id: 2,
      created_at: "2022-11-16T13:49:04.408174Z",
      updated_at: "2022-11-23T09:10:57.251866Z",
      name: "JavaScript",
      percent_topass: 0.7,
      picture:
        "http://localhost:8000/media/skill/Screen_Shot_2022-11-23_at_10.40.01.png",
    },
    proposal_solutions: [
      { id: 1, text: "Solution one", isSelected: false },
      { id: 2, text: "Solution two", isSelected: false },
      { id: 3, text: "Solution three", isSelected: false },
      { id: 4, text: "Solution four", isSelected: false },
      { id: 10, text: "I am not fine", isSelected: false },
    ],
    selectedAnswer: 1,
    skill_id: 2,
    skill_name: "JavaScript",
    skill_picture:
      "http://localhost:8000/media/skill/Screen_Shot_2022-11-23_at_10.40.01.png",
    skill_percentage_topass: 0.7,
  },
  {
    id: 3,
    question:
      "@api_view(['PUT', 'DELETE'])\r\ndef data_detail(request, id):\r\n try:\r\n data = KilimoData.objects.get(id=id)\r\n except KilimoData.DoesNotExist:\r\n return Response(status=status.HTTP_404_NOT_FOUND)\r\n\r\n if request.method == 'PUT':\r\n serializer = DataSerializer(kilimodata, kilimodata=request.kilimodata,context={'request': request})\r\n if serializer.is_valid():\r\n serializer.save()\r\n return Response(status=status.HTTP_204_NO_CONTENT)\r\n return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)\r\n\r\n elif request.method == 'DELETE':\r\n data.delete()\r\n return Response(status=status.HTTP_204_NO_CONTENT)",
    skill: {
      id: 1,
      created_at: "2022-11-16T13:44:17.322753Z",
      updated_at: "2022-12-22T01:58:09.604274Z",
      name: "Python",
      percent_topass: 0.7,
      picture:
        "http://localhost:8000/media/skill/Screen_Shot_2022-11-23_at_10.39.13.png",
    },
    proposal_solutions: [
      { id: 8, text: "Solution xyzc", isSelected: false },
      {
        id: 9,
        text: "Solution xyzd Solution xyzd Solution xyzdSolution xyzdSolution xyzdSolution xyzdSolution xyzdSolution xyzdSolution xyzdSolution xyzd Solution xyzd Solution xyzd Solution xyzdSolution xyzdSolution xyzdSolution xyzdSolution xyzdSolution xyzdSolution xyzdSolution xyzd",
        isSelected: false,
      },
    ],
    selectedAnswer: 9,
    skill_id: 1,
    skill_name: "Python",
    skill_picture:
      "http://localhost:8000/media/skill/Screen_Shot_2022-11-23_at_10.39.13.png",
    skill_percentage_topass: 0.7,
  },
  {
    id: 4,
    question:
      'package main\r\n\r\nimport "fmt"\r\n\r\nfunc main() {\r\n\tvar (\r\n // (Fill in the missing line here)\r\n // (Fill in the missing line here)\r\n\t)\r\n\r\n\tif number1 == number2 {\r\n\t\tfmt.Println("number1 and number2 are equal")\r\n\t}\r\n}',
    skill: {
      id: 3,
      created_at: "2022-11-23T20:00:21.776144Z",
      updated_at: "2022-11-24T07:46:02.238474Z",
      name: "Golang",
      percent_topass: 0.7,
      picture: "http://localhost:8000/media/skill/Go-Logo_Blue.png",
    },
    proposal_solutions: [],
    selectedAnswer: "",
    skill_id: 3,
    skill_name: "Golang",
    skill_picture: "http://localhost:8000/media/skill/Go-Logo_Blue.png",
    skill_percentage_topass: 0.7,
  },
  {
    id: 5,
    question:
      "class CreateArticles < ActiveRecord::Migration[7.0]\r\n def change\r\n create_table :articles do |t|\r\n t.string :title\r\n t.text :body\r\n\r\n t.timestamps\r\n end\r\n end\r\nend",
    skill: {
      id: 4,
      created_at: "2022-11-23T20:00:33.581313Z",
      updated_at: "2022-11-24T07:46:38.772021Z",
      name: "Ruby on Rails",
      percent_topass: 0.7,
      picture:
        "http://localhost:8000/media/skill/Screen_Shot_2022-11-24_at_10.45.23.png",
    },
    proposal_solutions: [],
    selectedAnswer: "",
    skill_id: 4,
    skill_name: "Ruby on Rails",
    skill_picture:
      "http://localhost:8000/media/skill/Screen_Shot_2022-11-24_at_10.45.23.png",
    skill_percentage_topass: 0.7,
  },
  {
    id: 6,
    question:
      "def data_detail(request, id):\r\n try:\r\n data = KilimoData.objects.get(id=id)\r\n except KilimoData.DoesNotExist:\r\n return Response(status=status.HTTP_404_NOT_FOUND)\r\n\r\n if request.method == 'PUT':\r\n serializer = DataSerializer(kilimodata, kilimodata=request.kilimodata,context={'request': request})\r\n if serializer.is_valid():\r\n serializer.save()\r\n return Response(status=status.HTTP_204_NO_CONTENT)\r\n return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)",
    skill: {
      id: 1,
      created_at: "2022-11-16T13:44:17.322753Z",
      updated_at: "2022-12-22T01:58:09.604274Z",
      name: "Python",
      percent_topass: 0.7,
      picture:
        "http://localhost:8000/media/skill/Screen_Shot_2022-11-23_at_10.39.13.png",
    },
    proposal_solutions: [
      { id: 5, text: "Solution xyz", isSelected: false },
      { id: 6, text: "Solution xyza", isSelected: false },
      { id: 7, text: "Solution xyzb", isSelected: false },
    ],
    selectedAnswer: 5,
    skill_id: 1,
    skill_name: "Python",
    skill_picture:
      "http://localhost:8000/media/skill/Screen_Shot_2022-11-23_at_10.39.13.png",
    skill_percentage_topass: 0.7,
  },
  {
    id: 7,
    question: "test",
    skill: {
      id: 1,
      created_at: "2022-11-16T13:44:17.322753Z",
      updated_at: "2022-12-22T01:58:09.604274Z",
      name: "Python",
      percent_topass: 0.7,
      picture:
        "http://localhost:8000/media/skill/Screen_Shot_2022-11-23_at_10.39.13.png",
    },
    proposal_solutions: [],
    selectedAnswer: "",
    skill_id: 1,
    skill_name: "Python",
    skill_picture:
      "http://localhost:8000/media/skill/Screen_Shot_2022-11-23_at_10.39.13.png",
    skill_percentage_topass: 0.7,
  },
];


let filtered = data.filter((d)=>{
    return parseInt(d.id) === 1
})

const convertSolutionsToFormData = (solutions)=>{
    let data = []
    solutions.map((sol)=>{
      sol.selectedAnswer !== "" ?
      data = [...data, {"selectedAnswer":sol.selectedAnswer,"question_id":sol.id}] : null
    })

    var form_data = new FormData();

    for (var key in data) {

        console.log(data[key])

        let mykey = `q_${data[key]['question_id']}`
        let myvalue = `${data[key]['selectedAnswer']}`


        form_data.append(mykey, myvalue);
    
        
      }

    return form_data
  }

  console.log(convertSolutionsToFormData(data))
// console.log(filtered[0].selectedAnswer)


