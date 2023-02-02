function delayedResult(n1,n2,delayTime,callback){
    const sum = n1+n2 + `(${n1} + ${n2})`;
    
    setTimeout(() => {
        if (delayTime >= 3000){
            console.log(sum);
        }else {
            window.alert(sum);
        };
    },delayTime);

};

delayedResult(4,5,3000,function(result){
    console.log(result); 
}); //9(4+5) will be shown in the console after 3 seconds

delayedResult(-5,10,2000,function(result){
    window.alert(result);
}); //5(-5+10) will be shown in an alert dialog after 2 seconds 

//console.log 9(4+5) 3000 ,5
//window alert 9(4+5) 2000 ,9
//undefined ,15

//console.log 5(-5+10) 3000 ,5
//window alert 5(-5+10) 2000 ,9
//undefined ,19


