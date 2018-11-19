/*
 * Code Written by
 * Sumukh Shirodker
 * Licence by Apache
 * You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
 */
const express = require('express');
const app = express();
var port=3000;
var host='localhost';
//main code
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/style/css',(req,res)=>{
	res.sendFile(__dirname+'/src/css/style.css');
});
app.get('/js/script',(req,res)=>{
	res.sendFile(__dirname+'/src/js/app.js')
})
//listening stuff
app.listen(port,host,()=>{
    console.log(`Server Running At http://${host}:${port}/\nCtrl+C To Cancel The Server.`);
});
