import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoCopy, GoPencil,GoSquareFill } from "react-icons/go";

function Picker() {
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState(() => {
    const localData = localStorage.getItem("picked-colors");
    if (localData == null) {
      return [];
    }
    return JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem("picked-colors", JSON.stringify(colors));
  }, [colors]);

  // Copying the color code to the clipboard and updating the element text
  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
  };

  const pickColor = (color) => {
    // Returning if there are no picked colors
    if (!colors.includes(color)) console.log(color);
    setColors((currentColors) => {
      return [...currentColors, color];
    });
    // Add a click event listener to each color element to copy the color code
    // document.querySelectorAll(".color").forEach(li => {
    //     li.addEventListener("click", e => copyColor(e.currentTarget.lastElementChild));
    // });
  };
  // showColor();

  const activateEyeDropper = async () => {
    console.log("ete dropper activate");
    document.body.style.display = "none";

    try {
      // Opening the eye dropper and getting the selected color
      const eyeDropper = new EyeDropper();
      const { sRGBHex } = await eyeDropper.open();
      navigator.clipboard.writeText(sRGBHex);
      // Adding the color to the list if it doesn't already exist
      pickColor(sRGBHex);
    } catch (error) {
      alert("Failed to copy the color code!");
    }
    document.body.style.display = "block";
  };

  return (
    <>
      <Link to="/changer">Changer</Link>
      <div className="popup">
        <div className="picker">
          <button id="color-picker" onClick={activateEyeDropper}>
            Pick Color
          </button>
        </div>
        <div>
          <ul>
            {colors.map((color) => {
              return (
                <li key={color}>
                  {color}
                  <i onClick={(e) => copyColor(color)} ><GoSquareFill style={{color:color}} /></i>
                  <Link to={`/changer/${color.substring(1)}`}><GoPencil style={{color:color}} /></Link>
                  <i onClick={(e) => copyColor(color)}><GoCopy style={{color:color}}/></i>
                  
                  
                 
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Picker;
