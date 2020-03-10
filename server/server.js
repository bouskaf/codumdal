const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;


var admin = require("firebase-admin");

var serviceAccount = require("../google_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://codumdal-9d0fd.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("data");

var recipesRef = ref.child("recipes");
recipesRef.set({
  knedliky: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Knedlik"
  },
  brambory: {
    date_of_birth: "December 9, 1906",
    full_name: "Brambora Hopper"
  }
});

console.log(recipesRef.toJSON())

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get('/recipes', (req, res) => {
    res.send(events);
});

app.get('/recipe/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(event => event.id === id);
    res.send(event);
});

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

app.listen(port);