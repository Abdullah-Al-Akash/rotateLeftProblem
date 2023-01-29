// Question:
// The statement that we’ll be getting an array as an input [1,2,3,4,5] along with an integer. Then, we need to shift each of the array’s elements unit to the left. For example, if 2 left rotations are performed on an array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

// Function Description: 

// Function name => rotateLeft
// Parameters => 
// Array of any length 
// Number (integer)
// Sample input => rotateLeft([1, 2, 3, 4, 5], 4 )
// Sample output =>  [5, 1, 2, 3, 4]

function rotateLeft(arr, num) {
        let result = [];
        const index = arr.indexOf(num);

        //Rotate second part number:
        for (let i = index + 1; i < arr.length; i++) {
                result.push(arr[i]);
        }
        // Rotate first part number:
        for (let j = 0; j <= index - 1; j++) {
                result.push(arr[j]);
        }
        result.push(num);
        return result;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
