
///--------SERVER-------------///

// app.engine('.html', require('ejs').__express);
const path=require('path');
const express=require('express');
const app=express();
app.engine('.html',require('ejs').__express);

// This avoids having to provide the extension to res.render()
app.set('view engine', 'html');



//files to serve
const staticPath=path.join(__dirname,'../public');
app.use(express.static(staticPath));

app.listen(8000,()=>{
  console.log("server is live on port 8000");
});
// ---------------------------------->>