function base_convert(num,fromBase,toBase){
    if(fromBase<2||fromBase>36||toBase<2||toBase>36){
        throw new Error("Bases must be between 2 and 36");
    }
    const strNum = num.toString();
    const decimal = parseInt(strNum, fromBase);
    if(isNan(decimal)) return NaN;
    return decimal.toString(toBase).toUpperCase();


}
console.log("Task 1:");
console.log(base_convert('E164', 16, 8));
console.log(base_convert(1000, 2, 8));    

function bin_to_dec(binStr){
    return parseInt(binStr,2);
}
console.log("\nTask 2:");
console.log(bin_to_dec('110011'));
console.log(bin)