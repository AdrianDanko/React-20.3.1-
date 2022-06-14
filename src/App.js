import React, { useState } from "react";
import Formular from "./Formular";
import './App.css';

function App(){

  const [data, zmenData] = useState(["data na začiatku"]);

  console.log("Rodic", data)

  localStorage.setItem("data", JSON.stringify(data))

  return (
  <>
     <h1>
        Zoznam filmov
      </h1>
  {data.map(element => <p>{element}</p>)}
    <Formular funkciaPreZmenuDatRodica={zmenData}/>
 
  </>
 
  );

}

export default App;
