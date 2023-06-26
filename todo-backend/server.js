const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()

const {
      getList, createList, updateList, deleteList,
} = require('./controllers/todoController.js')

//App config
const app = express();

const port = process.env.PORT || 4000;

const connectionURL = process.env.MONGO_URI
// Middlewares
//Convert to json

app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(connectionURL)
.then(() => {
      app.listen(port, () => console.log(`Running on port: ${port}`));
})
.catch((err) => {
      console.log(err);
})

// API Endpoints


// Get Todo List
app.get('/list', getList)

// Create a new Todo List
app.post('/list', createList)

// Update a Todo List
app.put('/list/:id', updateList)

// Delete a Todo List
app.delete('/list/:id', deleteList)
