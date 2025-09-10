const showpg=document.querySelector(".hdicon").addEventListener("click",function(){
    const  shwpge=document.createElement("div")
    shwpge.id="show-id"
    shwpge.innerHTML=`
    <div class="show-pge">
    <div class="show-cnt">
    <div class="show-txt">
    <p class="showhd">Use Myntra from Homescreen</p>
    <div id=newcrt>
    <div id=showtxt>
        <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/9aa9e922-68c5-4da7-aa34-4985dbf8a7c21550128447828-zap-2x.png"class="showimg">It's Super Fast</p>
        <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/e753c3fb-f38e-4a8e-a8cd-e2f5c6232d891550134928036-group-18-2x.png"class="showimg">Easy To Access</p>
        <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/7e394a90-3fa3-4ad8-b35a-4c202673ddce1550135018275-hard-drive-2x.png"class="showimg">Saves Space</p>
    </div>
    <p class="instrnhd">How to access Myntra from homescreen ?</p>
    <p class="instrns">1. Find the Myntra Web app on your homescreen.</p>
    <p class="instrns">2. Tap on Myntra icon.</p>
    <div class="gotit">
    <button class="okeybtn">OKAY, GOT IT</button>
    </div>
    </div>
    </div>
    </div>
    </div>`
    document.body.appendChild(shwpge)
    shwpge.querySelector(".okeybtn").onclick=()=>{
        shwpge.remove()
    }
})

const otherfilter=document.getElementById("flthor").addEventListener("click",function(){
    const otherfil=document.createElement("div")
    otherfil.id="otherfiltid"
    otherfil.innerHTML=`
    
    `

})