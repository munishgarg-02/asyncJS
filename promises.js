/*Now, for the same task done in synchronous.js; We will use Promises instead of Callbacks..
Promises are supported in ES6 version of JS..*/

function helloSayer(name, times){
    return new Promise((resolve, reject)=>{
        let count=0;
        let x = setInterval(() => {
            count++;
            console.log('Hello '+name)
            if(count==times){
                resolve();
                clearInterval(x);
            }
        }, 100);
    })
}
helloSayer('Munish', 3).then(()=>{
    helloSayer('Jatin', 3).then(()=>{
        helloSayer('Rahul', 5);
    });
})