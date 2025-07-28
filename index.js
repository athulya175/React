// const alertbtn=document.getElementById("hdicon").addEventListener("click",function(){
//     const alrt=document.createElement("div")
//     alrt.id="alrt-id"
//     alrt.innerHTML=`
//     <div class="alrt-cntnd">
//         <h3>Install app</h3>
//         <div class="app-dlts">
//         <img src="icons/MyLogo.svg"class="alrt-img"/>
//         <div class="alrt-txt">
//             <p class="alrtnme">Myntra</p>
//             <p class="alrt-url">myntra.com</p>
//         </div>
//         <div class="alertbuttons">
//             <button class="btn-cancl">Cancel</button>
//             <button class="btn-instl">Install</button>
//         </div>
//     </div>`
//     document.body.appendChild(alrt)
//     alrt.querySelector("#btn-cancl").onclick=()=>alrt.remove()
//     alrt.querySelector("#btn-instl").onclick=()=>{
//         alertbtn("installing.....")
//         alrt.remove()
//     }
// })
const showpg=document.getElementById("hdicon").addEventListener("click",function(){
    const  shwpge=document.createElement("div")
    shwpge.id="show-id"
    shwpge.innerHTML=`
    <div class="show-pge">
    <div class="show-cnt">
    <div class="show-txt">
    <p class="showhd">Use Myntra from Homescreen</p>
    <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/9aa9e922-68c5-4da7-aa34-4985dbf8a7c21550128447828-zap-2x.png">It's Super Fast</p>
    <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/e753c3fb-f38e-4a8e-a8cd-e2f5c6232d891550134928036-group-18-2x.png">It's Super Fast</p>
    <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/7e394a90-3fa3-4ad8-b35a-4c202673ddce1550135018275-hard-drive-2x.png">Saves Space</p>
    <p class="instrnhd">How to access Myntra from homescreen ?</p>
    <p class="instrns">1. Find the Myntra Web app on your homescreen.</p>
    <p class="instrns">2. Tap on Myntra icon.</p>
    <div class="gotit">
    <button class="okeybtn">OKAY, GOT IT</button>
    </div>
    </div>
    </div>
    </div>`
    document.body.appendChild(shwpge)
    shwpge.querySelector(".okeybtn").onclick=()=>{
        shwpge.remove()
    }
})