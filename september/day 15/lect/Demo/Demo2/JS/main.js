if('serviceWorker' in navigator){
    // console.log('supported')
    window.addEventListener('load',event=>{
        navigator.serviceWorker.register('../sw.js')//,{scope:'/Pages/'}
        .then(reg=>{
            console.log('service worker registered successfully')
        })
        .catch(err=>{
            console.log(err)
        })
    })
}