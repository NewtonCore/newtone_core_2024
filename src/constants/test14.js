function getFirstThreeLines(str) {
    // Split the string into an array of lines
    const lines = str.split('\n');
  
    // Get the first three lines
    const firstThreeLines = lines.slice(0, 3);
  
    // Join the lines back into a string
    const result = firstThreeLines.join('\n');
  
    return result;
  }


const text = `This is the first line. This is the second line. This is the third line. This is the fourth line. This is the fifth line.`;

const firstThreeLines = getFirstThreeLines(text);
// console.log(firstThreeLines);