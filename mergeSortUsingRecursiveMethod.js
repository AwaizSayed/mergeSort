let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let arr1 = [];
let arr2 = [8,9,10,11,12,13,14,15,16,17];
let arr3 = [1,2,3,4,5,6,7,8,9,10,11,12];
let arr4 = [6,7,8,9,10,11,12];
let arr5 = [2];




//Binary Search using recursive method
function binarySearchRecursive(arr, key, start, end)
{
    if(arr.length == 0)
    {
        return("Empty Array");
    }
    if(start>end)
    {
        return("Element not Found");
    }

    mid=parseInt((start+end)/2);
    
    if(arr[mid] == key)
    {
        return mid;
    }
    
    if(key>arr[mid])
    {
        start = mid+1;
        return(binarySearchRecursive(arr,key,start,end));
    }
    else
    {
        end = mid-1;
        return(binarySearchRecursive(arr,key,start,end));
    }
    
    // return 'Element not found';
}
console.log("Recursive binary Search:",binarySearchRecursive(arr, 12,0,((arr.length)-1)));
console.log("Recursive binary Search:",binarySearchRecursive(arr1, 12,0,((arr.length)-1)));
console.log("Recursive binary Search:",binarySearchRecursive(arr5, 2,0,((arr.length)-1)));