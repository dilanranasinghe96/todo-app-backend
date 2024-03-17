const app = require('./app');
const port = 3000;


// Define your routes here

app.get('/', (req, res) => {
    res.send('Hello world!!!!');
  });
  

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
