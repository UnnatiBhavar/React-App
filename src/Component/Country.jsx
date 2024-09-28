import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function Country(){
  const [selected, setSelected] = useState("");

  return (
    <div style={{width:'35%', color:"black" , backgroundColor:"Skyblue"}}>
      <ReactFlagsSelect 
    selected={selected}
    onSelect={(code) => setSelected(code)}
     placeholder="Select Country"
     searchable
     searchPlaceholder="Search countries"
     className="menu-flags"
     
  />


  
      </div>
  )
}
export default Country;
