//Now, what if we want to run the process synchronously or in a serial manner..
//We have used CallBacks here..
function helloSayer(name, times, doneSaying){
    let count=0;
    let x = setInterval(()=>{
        count++;
        if(count==times){
            clearInterval(x);
            if(doneSaying!=undefined){
                doneSaying();
            }
        }
        console.log("Hello, " + name);
    },100)
}
helloSayer('Munish', 3, ()=>{
    helloSayer('Jatin', 3, ()=>{
        helloSayer('Rahul', 5);
    });
});