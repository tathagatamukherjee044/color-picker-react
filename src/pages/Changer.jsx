import { useParams } from "react-router-dom"
import { useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import {hexToRgbaString } from "../utils/convert";
import { Link } from 'react-router-dom'

function Changer (){

    var {hex} = useParams ()
    if(!hex){
        hex = '000000' 
    }
    const [hexColor, setHexColor] = useState(hex);
    const [rgbaColor, setRgbaColor] = useState(hexToRgbaString(hexColor));

    function changeColorHEX(hexColor){
        const rgbaColor = hexToRgbaString(hexColor)
        console.log(rgbaColor);
        setHexColor(hexColor);
        setRgbaColor(rgbaColor)
    }

    const copyColor = (color) => {
      navigator.clipboard.writeText(color);
    };

  return (
    <div className="App">
      <Link to="/">Back</Link>  
      <HexAlphaColorPicker color={hexColor} onChange={changeColorHEX} />

      <div className="value" style={{ borderLeftColor: hexColor }}>
        Hex Value : {hexColor} <i onClick={(e) => copyColor(hexColor)}><GoCopy/></i> <br/>
        RGB Value : {rgbaColor} <i onClick={(e) => copyColor(rgbaColor)}><GoCopy/></i>
      </div>

      {/* <div className="buttons">
        <button onClick={() => setColor("#c6ad23")}>Choose gold</button>
        <button onClick={() => setColor("#556b2f")}>Choose green</button>
        <button onClick={() => setColor("#207bd7")}>Choose blue</button>
      </div> */}
    </div>
  );
}

export default Changer