//Function & Array
function max(numbers) {
    let maxNumber = numbers[0] ;
    for(let i=1 ; i < numbers.length ; i++) {
        if (maxNumber < numbers[i]){
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}

console.log(max([1,2,4,5])); //output:5
console.log(max([5,2,7,1,6])); //output:7


//Function & Object
function calculate(args){

    let result
    if(args.op==='+'){
        result = args.n1 + args.n2
    } else if(args.op=== '-'){
        result = args.n1 - args.n2
    } else{
        result = "No supported"
    }

    return result;

}

console.log(calculate({n1:2, n2:3, op:'+'})); //output:5
console.log(calculate({n1:5, n2:2, op:'-'})); //optput:3
console.log(calculate({n1:1, n2:6, op:'x'})); //output'No supported'


//Function,Array & Object
function calculate(data){
    
    let discount = 1-data.discount; //取出object的方法
    let products = data.products;   //取出object的方法
    let sum = 0; //加總後的變數


    for ( i=0 ; i < products.length ; i++) {
         sum += products[i].price;  //取出array用[i] ; 取出object用.name || .price
    }
     return sum * discount;


}
const discountedPrice = calculate({
    discount:0.1,
    products:[
        {
            name:"Product1",
            price: 100
        },
        {
            name:"Product2",
            price:700
        },
        {
            name:"Product3",
            price:250
        }
    ]
});
console.log(discountedPrice)


//Algorithm (Advanced Optional)

function twoSum(nums,target) {
    
    for(i=0; i < nums.length-1; i++){

        for(y=i+1; y < nums.length; y++){
            let sum = nums[i] + nums[y];
            if( sum === target ){
                return [i,y];
            }
        }
     }
}   


// 0,1     0,2    0.3  0.4  0.5  0.6    0.7  0.8    
    // 1.2     1.3    1.4      1.5     1.6      1.7        1.8 
    // (2,1)   2.3     2.4     2.5     2.6     2.7     2.8
    // (3,1)   (3,2)   3.4     3.5     3.6     3.7     3.8
    // (4.1)   (4.2)   (4.3)   4.5
    // (5.1)   (5.2)   (5.3)   (5.4)   5.6
/* For example:
        twoSum([2,7,11,15],9);
    Should returns:
            [0,1]
    Because:
            nums[0] + num[1] is 9
*/

