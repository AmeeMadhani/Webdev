const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name:{
    type: String,

  } ,
  rating: {
    type: Number,
    min: 1,
    max: 10
    //validation 

  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit ({
//   name: "Apple",
//   rating: 34,
//   review: "Pretty solid as a fruit."
// });

const fruit = new Fruit ({

  rating: 10,
  review: "Peach are so yummyy"

});
fruit.save();
//everytime you run this..it will save apple...if you dont want so many apples you may remove this

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "pineapple",
  score: 9,
  review: "ok"
});

pineapple.save();

const person = new Person({
  name:"Amy", 
  age: 19,
  favoriteFruit : pineapple
});

person.save();
// const kiwi = new Fruit({
//   name: "Kiwi",
//   score : 10,
//   review: "The best fruit!"
// });

// const orange = new Fruit({
//   name: "Orange",
//   score : 4,
//   review: "Too sour for me"
// });

// const banana = new Fruit ({
//   name: "Banana",
//   score: 3,
//   review:"Weird texture"

// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);

//   }else{
//     console.log("successs!!!");
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);

  }else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
    // console.log(fruits);
  }
});

// Fruit.updateOne({_id: "63dd2833eee22b3a9e816f95"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("sucesss!!");
//   }
// });

// Fruit.deleteOne({name:"Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("suucesss delete!");
//   }
// });

Person.deleteMany({name: "John"}, function(err){
  if (err){
    console.log(err);
  }else{
    console.log("");
  }
})




