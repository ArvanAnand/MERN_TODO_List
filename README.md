# **MERN Todo List**

This project is a simple ToDo list application built using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. It allows users to create, update, and delete tasks, keeping track of their progress. And hence, also show completed and not completed tasks.

##Deployment Link
```
https://arvananand.github.io/MERN_TODO_List/
```

## Prerequisites

Before running this application, ensure that you have the following software installed on your system:

+ Node.js (v12.18.3 or above)
+ MongoDB (v4.4 or above)

## Installation

Follow the steps below to install and run the MERN ToDo List application:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-username/mern-todo-list.git
   ```
2. Navigate to the project directory:
   ```
   cd mern-todo-list
   ```
3. Install the dependencies for both the server and client:
   ```
   cd server && npm install
   cd ../client && npm install
   ```
4. Create a .env file in the server directory and provide the required environment variables:
   ```
   PORT=4000
   MONGODB_URI=mongodb://localhost:27089/list
   ```
   Make sure to replace mongodb://localhost:27089/list with the connection string to your MongoDB instance.
5. Start the server:
   ```
   npm server.js
   ```
   This will launch the Express server on `http://localhost:4000`.
6. Open a new terminal and navigate to the todo-frontend directory:
   ```
   cd ../todofrontend
   ```
7. Start the client:
   ```
   npm start
   ```
   This will launch the React application on `http://localhost:3000`.

## Usage
Once the installation is complete, you can access the ToDo list application by visiting http://localhost:3000 in your web browser. The application provides the following functionalities:

+ Create a task: Click on the input field at the top and enter a task description, then press Enter or click the "+" button.
+ Update a task: Click on the task text to edit it, and press Enter to save the changes.
+ Mark a task as complete: Click on the checkbox next to a task to mark it as complete.
+ Delete a task: Click on the "X" button next to a task to delete it.

# Contributing
  Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b my-new-feature.
3. Make your changes and commit them: git commit -am 'Add some feature'.
4. Push to the branch: git push origin my-new-feature.
5. Open a pull request.
Please ensure that your code adheres to the project's coding conventions and includes appropriate documentation and tests.

# License
This project is licensed under the MIT License.

# Acknowledgments
+ The MERN stack and related technologies for providing an excellent framework for building web applications.
+ Various open source libraries and tools used in this project.
+ The developer community for their valuable contributions.
 
