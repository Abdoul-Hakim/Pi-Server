(function main() {
    requirejs(["src/loader/loader"],function (loader) { 
        runloader()
    });
    
    setTimeout(()=>{
        requirejs(["src/styles/styles"],function (styles) { 
            runstyle()
        })
        requirejs(["src/scripts/charts"], function(){
            createCharts()
            loadhardCodedData()
        })
    },3000)
})()




    

