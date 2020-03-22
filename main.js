(function main() {
    requirejs(["../src/loader/loader"],function (loader) { 
        runloader()
    });
    
    setTimeout(()=>{
        requirejs(["../src/styles/scriptforstyles"],function (loader) { 
            runstyle()
        })
    },3000)
})()


    

