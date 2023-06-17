import {useState} from "react";
import Card from "./card";
const Main = () => {
    const [showCard, setShowCard] = useState(false);
    const handleClick = () => {
        setShowCard(true); // Set showCard to true when the button is clicked
      };
    
      const handleCancel = (event) => {
        event.preventDefault();
        setShowCard(false);
      };
    
  return (
    <>
    <div className="Main-container">
        <input type="text"/>
        <button onClick={handleClick}>+</button>
    </div>
  <div >
  {showCard && <Card handleCancel={handleCancel} />}
  </div>
    </>
  )
}

export default Main