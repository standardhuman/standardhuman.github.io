function rotate(n, d, arr){
    for(e in arr){
        while(d>0){
            let temp = arr.shift();
            arr.push(temp)
            d--;
        }
        return arr;
    }
}

rotate(5, 4, [1, 2, 3, 4, 5])
