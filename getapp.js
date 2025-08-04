// const getMyntra=document.querySelector(".getmyntra")
function getMyntraApp(){
    const Mynrapp=document.createElement("div")
    Mynrapp.id="mynraid"
    Mynrapp.innerHTML=`
    <div id="overlay">
        <div id="model">
            <p class="alrttit">Open Xdg-open?</p>
            <p class="alrtdesc">https://myntra.onelink.me wants to open this application.</p>
            <label class="alrtchkbx"><input type="checkbox" id="allow"> Always allow myntra.onelink.me to open links of this type in the associated app</label>
            <div class="alrtbtn">
                <button onclick="hide()" class="cancel-btn">Cancel</button>
                <button onclick="seek()" class="open-btn">Open Xdg-open</button>
            </div>
        </div>
    </div>`
    document.body.appendChild(Mynrapp)
    document.getElementById("overlay").style.display="flex"
}

function hide() {
  const modal = document.getElementById("mynraid");
  if (modal) modal.remove();
}

function seek() {
  const checked = document.getElementById("allow").checked;
  alert("Opening xdg-open\nRemember choice: " + (checked ? "Yes" : "No"));
  hide();
}
    

// getMyntra.addEventListener("click",getMyntraApp)


window.onload=getMyntraApp
   