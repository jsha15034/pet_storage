const mongoose = require('mongoose');

mongoose. connect('mongodb://localhost/pets', { useNewUrlParser: true}); 

require ('../models/pet');