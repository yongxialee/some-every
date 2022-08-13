//has odd number
//Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.
function hasOddNumber(arr){
return arr.some(function(val){
    return val%2 !==0;
})
}

//has no duplicates
function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val)===arr.lastIndexOf(val);
    })

}

//has certain key
//Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
function hasCertainKey(arr,key){
    return arr.every(function(val){
        return key in val;
    })

}
//has certain vaue
//Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

function hasCertainValue(arr,key,searchValue){
    return arr.every(function(val){
        return val[key]===searchValue;
    })

}