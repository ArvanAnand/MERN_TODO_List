import React from 'react'
import { ListContainer, Row, Text, DeleteIcon } from "./stylestodo.js";
import axios from '../../axios';
function TodoList({list, fetchData}) {
      console.log(list, 'hello')

      const updatelist = async (id) => {
            try {
                  const response = await axios.put(`/list/${id}` , {
                  id 
            })
            fetchData();
            return response.data.json
            
      }catch (err) {
                  console.error(err.message)
                  
            }

      };

      const deletelist = async (id) => {
            try {
                  const response = await axios.delete(`/list/${id}` , {
                  id 
            })
            fetchData();
            return response.data.json
            
      }catch (err) {
                  console.error(err.message)
                  
            }

      };
  return (
    <div>
      <ListContainer>
            {/*render all the todos in the list */}
            {list?.map((list) => (
                  <Row key ={list._id}>
                  <Text onClick={() => updatelist(list._id)} isCompleted={list.completed}>{list.text}</Text>
                  <DeleteIcon onClick={() => deletelist(list._id)}>X</DeleteIcon>

                  </Row>
            ))}
      </ListContainer>
    </div>
  )
}

export default TodoList