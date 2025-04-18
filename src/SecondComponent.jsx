
//import Header from "./Header";
  //import footer from "./Footer";
import react from 'react'
function SecondComponent(props){
    
    return (
        <>
        <h1>Hello {props.fn} {props.ln}</h1>
        </>
    );
}
export default SecondComponent;
// if it is venila then i could write as =>Second Component(first,last)