import react, {useState} from "react"
import {LiComponent} from "./LiComponent.jsx";
import "./Lists.css"
;


const data = [
    { id: 1, name: "praveen chandra", age : 26},
    { id: 2, name: "divya", age : 21},
    { id: 3, name: "vivek", age :18},
    { id: 4, name: "Sandhya", age :24},
    { id : 5, name:"Naveen chandra",age: 23}
];
const Lists = () => {
    const[arr,setArr] = useState(data);
    return(
        <>
        <ul className="lists">
           <LiComponent arr={arr} setArr={setArr} />
        </ul>
            </>
    );
}
export default Lists;