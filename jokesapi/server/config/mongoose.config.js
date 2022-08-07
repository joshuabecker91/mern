const mongoose = require('mongoose'); // In any file that will use the Mongoose library, you will need to be sure to require it at the top of the file.

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

