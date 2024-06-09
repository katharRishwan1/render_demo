const express = require('express');
const app = express();
require('dotenv').config();

app.get('/mezan', (req, res) => {
    try{
        console.log('its running----------');
        return res.json({
            msg:'Mezan is running successfully'
        })

    } catch(error){
        console.log('error--', error);
    }
});
app.use('/',(req, res) => {
    return res.json({
        msg:'meezan is running successfully'
    })
})

app.listen(process.env.PORT||6000,() => {
    console.log('server was running successfully on port',process.env.PORT);
})