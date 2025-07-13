function x(){
            for(var i=1;i<6;i++){
                function varfn(obj){        //  it happens by  creating a new fn  
                setTimeout(function(){
                        console.log(obj)
                    },obj*1000)   
                }varfn(i)
            }
        }x()