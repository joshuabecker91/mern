const mongoose = require('mongoose'); // In any file that will use the Mongoose library, you will need to be sure to require it at the top of the file.

const JokeSchema = new mongoose.Schema( // The structure of this object is how each new document put into the collection will be formatted.
    // first_name: {
    //     type: String,
    //     // required: [true, "First name is required"],
    //     // minlength: [2, "First name must be at least 3 characters long"],
    // },
    {
        setup: String,
        punchline: String,
    }
    ,{timestamps: true}
);

const Joke = mongoose.model('Joke', JokeSchema); // Create a constructor function for our model and store in variable 'Jokes'
// Takes the object and creates the necessary database collection out of the model. 
// We get this blueprint by making a new schema instance from the mongoose.Schema() object constructor.

module.exports = Joke; // We then create a Jokes variable to export and set it to the returned value of the mongoose.model() function: 
// a model object is created using the singular version of the collection name ('Jokes') and the mongoose schema (JokesSchema). 
// This model will be used to enable all our needed CRUD functionality.
// Exporting the Jokes variable will allow us to import and use the Jokes model in any file we choose.
// After we create our first document using this model, we will find a lowercase, plural version of the collection name in our database.  In this case, "jokes"