import Rect, { useState } from "react"

const useInput=(initalValue,validator)=>{
    const[value,setValue]=useState(initalValue);

      const onChange=(event)=>{
        const{
          target:{value}
        }=event;

       
        let willUpdate=true;

        if(typeof validator ==="function"){
          willUpdate=validator(value); 
        }
        if(willUpdate){
          setValue(value);
        }
       
      }

      return{value,onChange};
     
  };
    const App=()=>{
  
      const maxLen=(value)=>!value.includes("@")
      const name=useInput("Mr.",maxLen);
  
  return(
    <div className="App">
      <h1>Hello </h1>
     
      <input placeholder="Name" {...name}/>
     
    </div>
  )
}

export default App;


