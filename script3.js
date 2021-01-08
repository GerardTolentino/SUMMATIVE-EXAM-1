function min(arr){
    var minnum = arr[0];
    for(i =0; i< arr.length;i++){
        if(minnum<arr[i]){
            newmin=minnum;
        }else if (minnum > arr[i]){
            minnum = array[i + 1];
        }else if (minnum == arr[i]){
            newmin = minnum;
        }
    }
    return console.log(`${newmin}`);
    }
    
var arr=[1,2,3,4,5];
var nums=min(arr);
