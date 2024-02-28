const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs")
app.set("views","viewsconcept")
app.get('/', (req, res) => {
    res.render('pages/home',{
        title:"home page"
    })
})
app.get('/about', (req, res) => {
    var title = "about us"
    res.render('pages/about',{
        title
    })
})

app.listen(PORT, () => console.log(`listen port number ${PORT}`))