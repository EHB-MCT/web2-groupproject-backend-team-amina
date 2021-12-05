const express = require('express')
const {
  MongoClient
} = require('mongodb');
const app = express()
const port = 3000
const username = "team_amina"
const password = "thisisourpassword"

app.use(express.static('public')) //folder where he gets his data is going to be called public

//Create the mongo client use
const uri = `mongodb+srv://${username}:${password}@cluster0.ruiua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


//CREATE - SAVE(READ) - UPDATE - DELETE functionality
//Root route
app.get('/', (req, res) => {
  res.status(300).redirect('info.html');
});

//Return all challenges from db
app.get('/challenges', async (req, res) => {
  try {
    //connect to the database
    await client.connect();
    const db = client.db("session7");
    // Use the collection "Session7"
    const collection = db.collection("challenges");
    // Find document
    const myDoc = await collection.find({}).toArray();

    // Print to the console
    console.log(myDoc);
    //Send back the data with the response
    res.status(200).send(myDoc);
} catch (err) { //catch an error
    console.log(err.stack);
} finally {
    await client.close();
}
});

// challenges/:id
app.get('/challenges/:id', async (req, res) => {});

//save a challenge
app.post('/challenges', async (req, res) => {});

//update a challenge
app.put('/challenges/:id', async (req, res) => {
  response.send('UPDATE OK');
});

//delete a challenge
app.delete('/challenges/:id', async (req, res) => {
  response.send('DELETE OK');
});




app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`)
})