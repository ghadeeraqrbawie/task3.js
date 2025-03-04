const express=require("express")
const app = express();
const fortunes = [
    "You will have a great day! 😊",
    "A surprise gift is on its way! 🎁",
    "Adventure is waiting for you! 🏕",
    "Success is closer than you think! 🚀",
    "Happiness comes from within! 💛"
];
const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts! 😂",
    "Why did the math book look sad? Because it had too many problems. 📖",
    "Parallel lines have so much in common. It’s a shame they’ll never meet. 😆"
];

const facts = [
    "Did you know? Honey never spoils! 🍯",
    "Bananas are berries, but strawberries aren't! 🍌🍓",
    "Octopuses have three hearts! 🐙"
];
app.get("/fortune",(req,res) =>{
    const fountuneNumber = Math . floor( Math.random()*5)
    res.send(fortunes[fortuneNumber])

})
app.get("/joke",(req,res) =>{
    const jokeNumber=Math . floor( Math.random()*3)

    res.send(jokes[jokeNumber])
})
app.get("/fact",(req,res) =>{
    constfactNumber  =Math . floor( Math.random()*3)
    res.send(facts[factNumber])
})

app.listen(4000,()=>{
    console.log("istening on port  number4000");

})