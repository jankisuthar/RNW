const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connection = require('./connection');
connection("mongodb://localhost:27017/school");
const userRoutes = require('./routes/userRoutes');
const productRoute = require('./routes/productRoutes')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/user', userRoutes);
app.use('/api/product', productRoute);
app.listen(PORT, () => console.log(`listen port number = ${PORT}`));