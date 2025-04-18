import {useState} from "React";
const BoosterCount = () => {
    const [name,Setname] = useState("SkillHub");
    return(
        <div>
            <center>
                <h1>{name}</h1>
                <button onClick={()=>Setname("naveen") }>change</button>
            </center>
        </div>
    )
}
export default BoosterCount;
