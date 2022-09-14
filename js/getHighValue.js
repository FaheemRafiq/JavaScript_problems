export function descendingOrder(n){ // Function give us Highest Number from any Number
    n = Math.abs(n);  // To Convert Negative Number into Positive Integer
    /*
    1. Convert integer to String using toString() method
    2. Convert String into Array using split("") method
    3. Sort the final Array using sort() method
    4. Reverse the sorted Array using reverse() method
    5. Join the Final Array using join() method
    6. Now Convert Array into string using toString() method
    */
    return parseInt(n.toString().split('').sort((a,b)=> a-b).reverse().join("").toString());
}