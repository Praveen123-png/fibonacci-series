function fibonacciGenerator(n){

    let series = [0, 1];

    if (n === 0){
        console.log("[0]");
    }
    else if(n === 1){
        console.log("[0, 1]");
    }
    else {
        for (let i = 0; i < n - 2; i++){
            let lastDigit = (series[series.length -1] + series[series.length -2]);
                series.push(lastDigit);
        }
        console.log(series)
    }
}

fibonacciGenerator(10);
