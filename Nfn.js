console.log("Start")
        setTimeout(function(){
            console.log("callback")
        }, 5000);
        console.log("end")

        //to make 10sec running code
        let startDate=new Date().getTime()
        let endDate=startDate
        while(endDate<startDate+10000){
            endDate=new Date().getTime()
        }
        console.log("while expires")