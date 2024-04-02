const app = require('./app');

const db = require('./config/db')
const UserModel = require('./model/user.model');
const ToDoModel = require('./model/todo.model');

const port = 3000;


// Define your routes here

app.get('/', (req, res) => {
    res.send('Hello world!!!!');
  });
  

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
