import React, { useEffect, useState } from "react";
import { Container } from "./styles.js";
import Form from "../Form/indexform.js";
import axios from "../../axios.js";
import TodoList from "../TodoList/indextodo.js";
import Key from "../../Key/indexkey.js";
import Author from "../Author/indexauthor.js";

function Todo() {
      const [input, setInput] = useState("");
      const [list, setList] = useState([]);
      // console.log(input, "input");

      const fetchData = async () => {
            try {
                  const response = await axios.get("/list");
            setList(response.data);
      } catch (err) {
                  console.log(err.message);
                  
            }
      };

      useEffect(() => {
            fetchData();
      }, []);

      const addlist = async (e) => {
            e.preventDefault();
            if(input.length === 0) return null;
            await axios.post('/list', [{
                  ...list, 
                  text: input,
                  completed: false,
            }])
            fetchData();
            setInput("");
            
      };
 

  return (
    <Container><h2>List Of Todo Tasks</h2>
    {/* Form Component */}
    <Form input={input} setInput={setInput} addlist={addlist} />
    {/* TodooList */}
    <TodoList list = {list} fetchData={fetchData} />
    {/* Key */}
    <Key />
    {/* Author Component */}
    <Author />
    </Container>
    
  )
}

export default Todo