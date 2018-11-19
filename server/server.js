const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();
app.use(express.static(path.join(__dirname, '../public')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up on ${PORT}`);
})