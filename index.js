const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
 
app.get('/api/login/', (req,res)=>{

user = req.query.username
pass = req.query.password 

res.json({
      username: user,
      password: pass
    })
});

app.listen(5011,'localhost');