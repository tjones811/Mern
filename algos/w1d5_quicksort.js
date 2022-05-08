function partition(nums=[], left = 0, right=nums.length-1 ) {
    let startval = nums[left];
    let count = left;
    for (let i = left+1; i <= right ; i++){
        // console.log(nums[i]);
        //if the current element is less than the first element
        if (nums[i]< startval){
          count++;
          [nums[i], nums[count]]=[nums[count], nums[i]];
        }
  
  
    }
    //move the start val into the right place by putting it at index of count
    [nums[left], nums[count]]= [nums[count], nums[left]];
    console.log(nums);
    return count;
  }
  
  
  function quicksort(nums=[], start=0, end = nums.length-1){
    //figure out how you would recursively use partition and quicksort
  }
  
  console.log(quicksort([]))
  
  // partition([4, -3, -9, 5, 12, -13, 21, 17, 27]);
  
  /*
  original = [4, -3, -9, 5, 12, -13, 21, 17, 27]
  
  [-13, -3, -9, 4, 12, 5, 21, 17, 27]
                X
  [-13, -3, -9, 4, 12, 5, 21, 17, 27]
    X           x
  
  [-13, -9, -3, 4, 12, 5, 21, 17, 27]
    X           x
  
  [-13, -9, -3, 4, 5, 12, 21, 17, 27]
                      x
  
  partition(4,nums.length-1)
  
  */