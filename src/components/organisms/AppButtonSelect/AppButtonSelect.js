import React from "react";
import AppDivButton from "../../atoms/AppButton/AppDivButton";

function AppButtonSelect({ handleChange, meta, value, name, children ,style}) {
  const handleClick = () => {
    
    // handleCheck({e:{name:name}},meta)
    try{
        let e = {
            target: {
              name: name,
              value: value,
            },
          };
          if (e.target.name !== undefined) {
            handleChange(e, meta);
          }
    }catch(e){
        console.log({e})
    }
  };
  return (
    <div>
      <AppDivButton style={style} onClick={handleChange}>
        {/* {children} */}
        {children}
      </AppDivButton>
    </div>
  );
}

export default AppButtonSelect;
