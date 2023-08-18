// network call code
 
async function doNetworkCall(){
    try
    {
        const url = 'https://gist.githubusercontent.com/Dhruvgarg91/ff8347e5fded74a0d4578eeabf1a2f2b/raw/05694902f615a8d63a4506e968e992c6acd55bba/Pizza.json';
        const response =await fetch (url);//block
    const object =await response.json();// block
    return object;// wrap promise
}
catch(err){
    console.log('Some problem in api call',err);
    throw err;
}
}

export default doNetworkCall;
      
   
  

  
    /*const promise = fetch(URL);
    console.log('promise is',promise);
    promise.then(function(response){                            // wait till promise return 
        console.log(response);                                  // then ---if promise work

    }).catch(function(err){                                      // catch if we promisme didn't work
        console.log('error',err)

    });
    console.log('bye');*/







//async function network(){
    
//const promise = await fetch('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');
/*console.log(promise);
const data=await promise.json();
console.log('hello')
//console.log(data);*/

