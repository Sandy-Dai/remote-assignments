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
    
    // let SumPrice = discountedPrice.price;
    
    // console.log(SumPrice);
    // for (let price in discountedPrice){
    //     console.log(`${discountedPrice[price]}`)
    // }
    let discount = data.discount;
    let price1 = data.products[0].price;
    let price2 = data.products[1].price;
    let price3 = data.products[2].price;
    let totalPrice = price1 + price2 + price3;
    let SumPrice = totalPrice * discount;
    return SumPrice;

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
        for(y=1; y < nums.length; y++){
            let sum = nums[i] + nums[y];
            if( sum === target ){
                return [i,y];
            }
        }
    }   
}

// 0,1     0,2    0.3     1.2     1.3     2.3  

/* For example:
        twoSum([2,7,11,15],9);
    Should returns:
            [0,1]
    Because:
            nums[0] + num[1] is 9
*/

