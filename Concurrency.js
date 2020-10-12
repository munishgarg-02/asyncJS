function helloSayer(name, times){
    let count=0;
    let x = setInterval(()=>{
        count++;
        if(count==times){
            clearInterval(x);
        }
        console.log("Hello, " + name);
    },100)
}
helloSayer('Munish', 3);
helloSayer('Jatin', 3);

//To check whether the threads are running in a parallel or concurrent manner, just put a while loop in the setInterval block..
//If the threads are running in parallel manner, then the stucking of other thread will not occur..
//As, both threads are running on different cores and hence are independent of each other..