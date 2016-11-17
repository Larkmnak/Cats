var express = require('express');
var app = express();

//********** MONGOOSE **********
require("./config/mongoose_setup.js")
//  mongoose.Promise = global.Promise;                 This line may be required


//********** BODYPARSER **********
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//********** PATH **********
var path = require('path');


//********** STATIC **********
// app.use(express.static(path.join(__dirname, './static')));


//********** VIEWS **********
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//********** ROUTES **********
require("./config/routs")(app)


//********** LISTEN **********
app.listen(7000, function() {
    console.log("listening on port 7000");
})