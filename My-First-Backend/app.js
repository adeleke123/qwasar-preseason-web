const express = require("express");
const app = express();
const basicAuth = require('express-basic-auth')


app.get("/", (req, res) => {
    let songsList = ["That's Life", "Fly Me to the Moon", "My Way", "New York", "New York", "Strangers in The Night",
    "The Way You Look Tonight", "I've Got You Under My Skin", "Come Fly with Me", "You Make Me Feel so Young",
    "Somethin' Stupid", "Have Yourself a Merry Little Christmas", "Fly Me to the Moon", "The Best Is Yet to Come",
    "I'm a Fool to Want You", "Luck Be a Lady", "Love and Marriage", "Summer Wind", "Let Me Try Again",
    "It Had to Be You", "It Was a Very Good Year", "The Girl from Ipanema", "Blue Moon", "The Christmas Waltz", "I'll Be Home for Christmas", "The Coffee Song", "One for My Baby",
    "All or Nothing at All", "My Kind of Town", "The Lady Is A Tramp", "I Get a Kick Out of You"];
    var index = Math.floor(Math.random() * songsList.length);
    var song = songsList[index];
    res.send(song)
})

app.get("/birth_date", (req, res) => {
    res.send("December 12, 1915");
})

app.get("/birth_city", (req, res) => {
    res.send("Hoboken, New Jersey");
})

app.get("/wives", (req, res) => {
    res.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx");
})

app.get("/picture", (req, res) =>{
    res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg')
})

app.get("/public", (req, res) => {
    res.send("Everybody can see this page");
})

// app.get("/protected", (req, res) => {
//     res.send("Everybody can see this page");
// })
app.use("/protected", (req, res, next) => {
    const auth = {
      login: 'admin',
      password: 'admin'
    }
    const [, b64auth = ''] = (req.headers.authorization || '').split(' ')
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
    if (login && password && login === auth.login && password === auth.password) {
        res.send("Welcome, authenticated client");
        return next()
    }
    res.set('WWW-Authenticate', 'Basic realm="401"')
    res.status(401).send('401 Not authorized')
  })

app.listen(8080, () =>{
    console.log("server started on 8080")
},'0.0.0.0')
