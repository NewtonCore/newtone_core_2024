let ele = document.getElementsByClassName('w-tc-editor');
ele.addEventListener('contextmenu', (ev)=>{
  console.log("Right click disabled");
  ev.preventDefault(); // this will prevent browser default behavior 
})