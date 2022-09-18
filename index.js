const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


app.get("/myget", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.get("/getmyform", (req, res) => {
    res.render('getForm')
})


app.listen(4000, () => {
    console.log("Server is running at port 4000 ");
})