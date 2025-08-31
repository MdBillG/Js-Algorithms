function mySetTimeout(callback,delay){
    const start= Date.now()
    while(Date.now()-start < delay){}
callback()
}


mySetTimeout(()=>{console.log('you built your own callback')},2000)