/*import { MdDeleteOutline } from "react-icons/md";
export function LiComponent({ arr, setArr }) {
function handleDelete(id) {
    setArr(arr.filter((obj)=>{
        return obj.id ===!id;
    }));
    }
}
    return arr.map((obj)=>{
        return (
            <li className="li" key={obj.id}>{obj.name} - age:
             {obj.age}<MdDeleteOutline onClick={() => handleDelete(obj.id)}
              style={{color:"brown"}} />
               </li>/
             
            
        );
    });
}
      //export default LiComponent;*/
      

import { MdDeleteOutline } from "react-icons/md";

export function LiComponent({ arr, setArr }) {
  function handleDelete(id) {
    setArr(arr.filter((obj) => obj.id !== id));
  }

  return arr.map((obj) => {
    return (
      <li className="li" key={obj.id}>
        {obj.name} - Age: {obj.age}
        <MdDeleteOutline
          onClick={() => handleDelete(obj.id)}
          style={{ color: "brown", cursor: "pointer", marginLeft: "10px" }}
        />
      </li>
    );
  });
}
export default LiComponent;