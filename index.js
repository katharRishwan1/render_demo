const express = require('express');
const app = express();
require('dotenv');

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

app.listen(process.env.PORT)