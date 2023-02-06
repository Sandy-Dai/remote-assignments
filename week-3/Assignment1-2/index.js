const express = require('express');
const app = express();  //express application 物件

const port = 3000;

app.use(express.static('public'));
app.use(express.static('files'));

app.set('view engine', 'pug'); // 套入pug

// app.all("*", function(req,res){
//         res.header('Access-Control-Allow-Origin','*');
//         res.header('Access-Control-Allow-Methods','GET,POST,PUT');
        // res.header('Access-Control-Allow-Headers', 'Content-Type');
// })

app.get('/',function(req, res){ //API設定
        res.render('index');
        
});

// app.get('/getData', function(req, res){ 
//       res.send('<h1>Lack of Parameter</h1>');
//         }
        


app.get('/getData', function(req, res){ 
        res.setHeader('Access-Control-Allow-Origin','*')        //設定回應頭，設置允許跨域（要設定在最上方，程式由上往下跑）
        let value = req.query.number; //型態為字串    
        let stringNum = Number(value) //轉化成數字型態 
        let sum = 0;
        
        if(value == stringNum ) {  //判斷型態是否為數字
                for(i = 1 ; i <= stringNum ; i++)
                sum = sum + i; 
                res.send(sum.toString()); 
        } else if(typeof value === 'string'){ //判斷型態是否為字串
                res.send('<h1>Wrong Parameters</h1>');  
        } else if(typeof value === 'undefined'){
                res.send('<h1>Lack of Parameter</h1>');
        };
});






app.listen(port, function(){ //終端機輸入node Node.js 會出現以下字串
         console.log(`Now listening on localhost:${port}!`); 
})


