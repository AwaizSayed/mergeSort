let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let arr1 = [];
let arr2 = [8,9,10,11,12,13,14,15,16,17];
let arr3 = [1,2,3,4,5,6,7,8,9,10,11,12];
let arr4 = [6,7,8,9,10,11,12];
let arr5 = [2];

//Binary Search using iterative method
function binarySearchIterative(arr, key)
{
    if(arr.length == 0)
    {
        return 'Empty Array';
    }
    
    start = 0;
    end = (arr.length)-1;
    mid=parseInt((start+end)/2);
    // console.log(mid);
    
    while(start<=end)
    {
        if(arr[mid] == key)
        {
            return mid;
        }
        if(key>arr[mid])
        {
            start = mid+1;
            mid=parseInt((start+end)/2);
        }
        else
        {
            end = mid-1;
            mid=parseInt((start+end)/2);
        }
    }
    
    return 'Element not found';
}
console.log("Iteraive binary Search:",binarySearchIterative(arr, 12));
console.log("Iteraive binary Search:",binarySearchIterative(arr1, 12));
console.log("Iteraive binary Search:",binarySearchIterative(arr5, 2),'\n');