var mongoose = require('mongoose')
var Cat = mongoose.model('Cat')
var ObjectId = require('mongodb').ObjectID


module.exports = {

  index: function(req, res) {
    cats = Cat.find({}, function(err, cats) {
      if(err) {
        console.log('something went wrong');
        res.render('index', {cats : cats});
      } else {
        console.log('successfully got cats!');
        res.render('index', {cats : cats});
      }
    });
  },

  new: function(req, res) {
    console.log("get /cats/new", req.body);
    res.render('new');
  },

  create: function(req, res) {
    console.log("post /cats", req.body);
    console.log("Name: "+req.body.name);
    var cat = new Cat({name: req.body.name, age: req.body.age});
    cat.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else { 
        console.log('successfully added a cat!');
      }
    })
    res.redirect('/');
  },

  show: function(req, res) {
    console.log("get /cats/:id", req.body);
    id = req.params.id;
    cat = Cat.findOne({"_id" : ObjectId(id)}, function(err, cat) {
      if(err) {
        console.log('something went wrong');
        console.log(cat.name);
        res.render('cat', {cat : cat});
      } else {
        console.log('successfully got cat!');
        console.log(cat.name);
        res.render('cat', {cat : cat});
      }
    });
  },

edit: function(req, res) {
    console.log("get /cats/:id/edit", req.body);
    id = req.params.id;
    cat = Cat.findOne({"_id" : ObjectId(id)}, function(err, cat) {
      if(err) {
        console.log('something went wrong');
        console.log(cat.name);
        res.render('edit', {cat : cat});
      } else {
        console.log('successfully got cat!');
        console.log(cat.name);
        res.render('edit', {cat : cat});
      }
    });
  },

  update: function(req, res) {
    console.log("post /cats/:id", req.body);
    id = req.params.id;
    Cat.update({"_id" : ObjectId(id)}, {$set:{name: req.body.name, age: req.body.age}}, function(err, cat) {
      if(err) {
        console.log('something went wrong');
        console.log(cat.name);
      } else {
        console.log('successfully got cat!');
        console.log(cat.name);
      }
    });
    res.redirect('/');
  },

  destroy: function(req, res) {
    console.log("post /cats/:id/destroy", req.body);
    id = req.params.id;
    Cat.remove({_id: ObjectId(id)}, function(err, cat){
        if(err) {
          console.log('something went wrong');
          console.log(cat.name);
        } else {
          console.log('successfully got cat!');
          console.log(cat.name);
        }
    });
    res.redirect('/');
  }

}