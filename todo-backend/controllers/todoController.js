const mongoose = require('mongoose');
const list = require('../dbTodos.js');

// Get Todos List

const getList= async (req, res) => {
      try {
            const alllist = await list.find({}).sort({createdAt: -1})
            res.status(200).send(alllist);
      } catch (error) {
            res.status(400).send(error.message);
      }
};



// Create a new Todos List

const createList= async (req, res) => {
      const dblist = req.body;
      try {
            const newlist = await list.create(dblist);
            res.status(201).send(newlist);
            
      } catch (error) {
            res.status(500).send(error.message);
      }
};

// Update Todos List

const updateList= async (req, res) => {
      const {id} = req.params
      try {
            //check Id is valid
            if(!mongoose.Types.ObjectId.isValid(id)) {
                   return res.status(404).send(`There is Todo with the id ${id} `)
            }
            const todoID = {_id: id}
            const update = { completed: true};
            const updatelist = await list.findOneAndUpdate(todoID, update);

            if(!updatelist) {
                  return res.status(404).send(`There is Todo with the id ${id} `)
            }

            res.status(200).send(updatelist);
            
      } 
      catch (error) {
            res.status(500).send(error.message);
      }
};

// Delete a Todo Task
const deleteList= async (req, res) => {
      const {id} = req.params
      try {
            //check Id is valid
            if(!mongoose.Types.ObjectId.isValid(id)) {
                   return res.status(404).send(`There is Todo with the id ${id} `)
            }
            
            const deletelist = await list.findOneAndDelete({_id: id});

           

            res.status(200).send(deletelist);
            
      } 
      catch (error) {
            res.status(500).send(error.message);
      }
};

module.exports =  {
getList, 
createList, 
updateList, 
deleteList,
};