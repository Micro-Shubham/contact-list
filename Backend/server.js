const express = require("express");
const app = express()
app.use(express.json());

// contact details
let contactDetails = [];

// get routes
app.get('/', (req, res) =>{
    res.json(contactDetails);
})


// post routes
app.post('/add', (req, res) => {
    console.log("hello there")
    let add = {
        // title: req.body.title,
        // id: req.body.id,
        personName : req.body.personName,
        mobileNumber: req.body.mobileNumber
    };
    contactDetails.push(add);
    res.json({
        msg:"contact added successfully"
    });
});




//routes listening
app.listen(3000, () => {
    console.log(`server is listening at ${3000}`);
});