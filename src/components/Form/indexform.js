import React from 'react';
import { FormContainer, Input, Button } from './stylesform.js';

function Form({ input, setInput, addlist}) {
      return (
            <FormContainer>
                  <Input
                        value={input} 
                        onChange = {(e) => setInput(e.target.value)}
                        type= "text"
                        role= "input" />
                  <Button type="submit" onClick={(e) => addlist(e)}>Add</Button>
            </FormContainer>
      )
}

export default Form;