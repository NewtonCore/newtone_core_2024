let string = "97. How can you make the video responsive to the screen size?"

let splitted_string  = string.split(" ")

console.log(splitted_string)


if(splitted_string.length !== 0){
    if(!isNaN(splitted_string[0])){
        splitted_string.shift()
    }

    if(splitted_string[0] ==="."){
        splitted_string.shift()
    }
}

splitted_string = splitted_string.join(" ");

console.log(splitted_string)