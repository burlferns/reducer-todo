import React from 'react';
import styled from "styled-components";

//del HTML tag makes text with strikethrough
const DelPlain = styled.del`
  margin:0 auto;
  height:18px;
  width:fit-content;
`;

const PPlain = styled.p`
  margin:0 auto;
  height:18px;
  width:fit-content;
`;


function Todo({todoItem,dispatch}) {
  
  return (
    <div>
      {
        todoItem.completed
        ? <DelPlain onClick={() => dispatch({type:"TGL_DONE",payload:todoItem.id})}>
            {todoItem.item}
          </DelPlain>
        : <PPlain onClick={() => dispatch({type:"TGL_DONE",payload:todoItem.id})}>
            {todoItem.item}
          </PPlain>
      }
    </div>
  );
   
}
  
export default Todo;
