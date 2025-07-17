/*
    function ClockTime(){
        const time=new Date()
        const Hours=time.getHours().toString().padStart(2,0)    // here pad start refers first 2 character pad them with zero
        const Minute=time.getMinutes().toString().padStart(2,0)
        const seconds=time.getSeconds().toString().padStart(2,0)
        const CurrentTime=`${Hours}:${Minute}:${seconds}`
        document.getElementById('time').textContent=CurrentTime
    }
    ClockTime()
    setInterval(ClockTime,1000)       // each 1 sec the clockTime fn will call
*/
// to make it AM and PM (Meridiem)

function clockTime(){
    const time=new Date()
    let hour=time.getHours()        //change const to let because we are changng its value
    const Meridiem=hour>=12?"PM":"AM"
    hour=hour%12||12    //This converts the 24-hour number to 12-hour format.                      // consider the time as 21 hr so 21/12->9 so its nine
    hour=hour.toString().padStart(2,0)
    const minute=time.getMinutes().toString().padStart(2,0)
    const seconds=time.getSeconds().toString().padStart(2,0)
    const CurrentTime=`${hour}:${minute}:${seconds}:${Meridiem}`
    document.getElementById('time').textContent=CurrentTime
}
clockTime()
setInterval(clockTime,1000)


