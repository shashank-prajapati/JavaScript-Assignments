async function getData(uId) {
    let promise = new Promise((resolve,reject)=>{setTimeout(() => {
    console.log("Fetched the data!");
    resolve("skc@gmail.com");
    }, 4000)});
    return promise;
    }

    
    
    console.log("start");
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");

