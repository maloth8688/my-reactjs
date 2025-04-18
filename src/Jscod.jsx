
//function Jscod() {
    /*const items = ["apple", "Banana", "grapes"];
    return (
      <>
        <h1>My Fruit List</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
  export default Jscod;*/



  /*function Jscod() {
    const list = [{id:1, name:"geeks", age:30},
        {id:2, name:"praveen",age:24},
        {id:3, name:"naveen",age:21},           
    ]

        return(
            <ul>
                {list.map((list)=>(
              <li key ={list.id}>{list.name}is{list.age}year of old</li>
                
                ))}
            </ul>
    );
  
  }
    export default Jscod;*/

    //List with click event 

    const App = () => {
        const COMPANY = ["GEEKS", "FOR", "GEEKS"];
        const handleClick = (COMPANY) => {
            alert(`You clicked on {COMPANY}`);
        };
    
        return (
            <ul>
                {COMPANY.map((COMPANY, index) => (
                    <button key={index} onClick={() => handleClick(COMPANY)}>
                        {COMPANY}
                    </button>
                ))}
            </ul>
        );
    };
    export default App;
    

       