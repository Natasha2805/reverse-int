module.exports = function reverse (n) {
    if (n<0){
       n*=-1;
    }
    let newarr= n.toString().split('').reverse().join('');
    return +newarr;
    
}

