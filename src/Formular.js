import React, { useState } from "react";

function Formular({funkciaPreZmenuDatRodica}){
  
    const [textovePole, zmenTextovePole] = useState("");

     console.log(funkciaPreZmenuDatRodica);
      
    return (
        <div id="form">
          {/* <label for="name">Názov filmu:</label> */}
            <input type="text" value={textovePole} onChange={(e)=>{
        
              zmenTextovePole(e.target.value);

            }}/>
            
            <button onClick={()=>{
                funkciaPreZmenuDatRodica((data) => {
                   
                    return data.concat(textovePole);
                })
            }}>vložiť</button>
          
        </div>
        
            
    );
}

export default Formular;