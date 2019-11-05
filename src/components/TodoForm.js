import React,{useState} from 'react';
import styled from "styled-components";

const StylDiv = styled.div`
  margin:5px auto;
`;



function TodoForm({dispatch})  {
  const [formData,setFormData] = useState("");

  function inputChange(event) {
    setFormData(event.target.value);
  }

  function addNew(event) {
    event.preventDefault();
    if(formData) {
      dispatch({type:"ADD",payload:formData});  
    }
    setFormData("");
  };
      
  return (
    <StylDiv>

      <form onSubmit={addNew}> 
        <label htmlFor="item">Add new item:</label>
        <input
          className="FormItem"
          type="text"
          name="item"
          id="item"
          value={formData}
          onChange={inputChange}
        />
        <button onClick={addNew}>Add Todo</button>
        <button onClick={()=>dispatch({type:"CLEAR"})}>Clear Completed</button>
      </form>


    </StylDiv>
  );
    
}
  
export default TodoForm;