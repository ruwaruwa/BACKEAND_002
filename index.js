const expres=require('express');
const DB_CON=require('./Ddconfig/DBconection')

DB_CON()
const subscribe=require('./Routers/Subscriberotes')
const fav=require('./Routers/Fouvfireroute')
const app=expres();
app.use(expres.json());

app.use('/subscribe',subscribe)
app.use('fov',fav)

app.get('/',(req,res)=>{
    res.send('started')
});

app.listen(3000,async()=>{
    console.log('server staed at port 300');
})
//module.exports= app