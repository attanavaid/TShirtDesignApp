import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: "#86FCE8",
        color: getContrastingColor(snap.color)
      }
    }

    else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: "#86FCE8",
        color: "#1B1E23"
      }
    }
  };

  return (
    <button
      className={`px-2 py-1.5 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton;