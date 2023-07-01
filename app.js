let express = require('express');
let app = express();
let path = require('path');

let publicPath = path.join(dirname,'./public')
app.use(express.static(publicPath))

app.get('/index' ,(req,res) => {
res.sendFile(path.join(dirname, './views/index.html'))
})
app.get('/login' ,(req,res) => {
    res.sendFile(path.join(dirname, './views/login.html'))
})
app.get('/productCart' ,(req,res) => {
    res.sendFile(path.join(dirname, './views/productCart.html'))
})
app.get('/productDetail' ,(req,res) => {
    res.sendFile(path.join(dirname, './views/productDetail.html'))
})
app.get('/register' ,(req,res) => {
    res.sendFile(path.join(dirname, './views/register.html'))
})

app.listen(3000,()=> {
console.log('Servidor exitoso')
})