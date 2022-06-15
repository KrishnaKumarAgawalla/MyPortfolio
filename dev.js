const express = require("express");
const app = new express();
const PORT = 4000;
// express.use(express.static(path.join(__dirname)))
app.get('/', (req,res) => (
    res.sendFile(__dirname+'/index')
));

app.get('/web', (req,res) => (
    res.sendFile(__dirname+'/about')
));

app.get('/web/dev', (req,res) => (
    res.sendFile(__dirname+'/webdev')
));

app.listen(PORT, console.log(`server strated on port ${PORT}`));
