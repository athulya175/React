
function showPage(){
    const  shwpge=document.createElement("div")
    shwpge.id="show-id"
    shwpge.innerHTML=`
    <div class="show-pge">
        <div class="show-cnt">
            <div class="show-txt">
                <p class="showhd">Use Myntra from Homescreen</p>
                <div id=newcrt>
                    <div id=showtxt>
                        <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/9aa9e922-68c5-4da7-aa34-4985dbf8a7c21550128447828-zap-2x.png"class="showimg"><span id="titl1">It's Super Fast</span></p>
                        <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/e753c3fb-f38e-4a8e-a8cd-e2f5c6232d891550134928036-group-18-2x.png"class="showimg"><span id="titl2">Easy To Access</span></p>
                        <p class="showsub"><img src="https://constant.myntassets.com/pwa/assets/img/7e394a90-3fa3-4ad8-b35a-4c202673ddce1550135018275-hard-drive-2x.png"class="showimg"><span id="titl3">Saves Space</span></p>
                    </div>
                    <p class="instrnhd">How to access Myntra from homescreen ?</p>
                    <p class="instrns" id="one">1. Find the Myntra Web app on your homescreen.</p>
                    <p class="instrns" id="two">2. Tap on Myntra icon.</p>
                    <div class="gotit">
                        <button class="okeybtn" id="wky-btn">OKAY, GOT IT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    document.body.appendChild(shwpge)
    shwpge.querySelector(".okeybtn").onclick=()=>{
        shwpge.remove()
    }
}
const showpg=document.querySelector(".hdicon").addEventListener("click",showPage)


const fltr=document.getElementById("fltothr")
function filterFn(){
    const filtrpge=document.createElement("div")
    filtrpge.id="flrt-id"
    filtrpge.innerHTML=`
    <div class="filpage">
        <div class="filhd">
            <div class="filthdpd">
                <div class="fltallpd">
                   <div class="filhed"> <span class="filtit">FILTERS</span></div>
                </div>
            </div>
        </div>
        <div id="filcontents">
            <div id="clm1">
                <ul  class="clm1ul">
                    <div class="clm1tit">
                        <li class="clm1flx clm1flxclr"><label id="genfil">Gender</label></li>
                    </div>
                    <div class="clm1tit">
                        <li class="clm1flx" id="cat"><label>Categories</label></li>
                    </div>
                    <div class="clm1tit">
                        <li class="clm1flx"><label>Size</label></li>
                    </div>
                    <div class="clm1tit">
                        <li class="clm1flx"><label>Price</label></li>
                    </div>
                    <div class="clm1tit">
                        <li class="clm1flx"><label>Brand</label></li>
                    </div>
                    <div class="clm1tit">
                        <li class="clm1flx"><label>Color</label></li>
                    </div>
                    <div class="clm1tit">
                        <li class="clm1flx"><label>Discount Range</label></li>
                    </div>
                </ul>
                <ul class="clm1ul">
                    <div class="clm1tit">
                        <li class="clm1flx"><label>Bundles</label></li>
                    </div>
                    <div class="clm1tit">
                        <li class="clm1flx"><label>Country of Origin</label></li>
                    </div>
                    <div class="clm1tit">
                        <li class="clm1flx" id="fil">
                        <span class="redot"></span>
                        <label>More Filters</label></li>
                    </div>
                </ul>
            </div>
            <div class="gender">
                <div class="clm2">
                    <ul class="clm2ul">
                        <div>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="boys"class="chkbox">
                                    <div class="chkboxIndicator"></div>Boys
                                    <span class="pdtcount">1053</span>
                                </label>
                            </li>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Girls
                                    <span class="pdtcount">63995</span>
                                </label>
                            </li>
                            <li class="clm2li" id="ckid">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="women"class="chkbox">
                                    <div class="chkboxIndicator"></div>Women
                                    <span class="pdtcount">206686</span>
                                </label>
                            </li>    
                        </div>
                    </ul>
                </div>
            </div>
            <div class="categories">
                <div class="clm2">
                    <ul class="clm2ul">
                        <div>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="boys"class="chkbox">
                                    <div class="chkboxIndicator"></div>Dresses
                                    <span class="pdtcount">256572</span>
                                </label>
                            </li>
                            <li class="clm2li" id="ckid">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox" >
                                    <div class="chkboxIndicator"></div>Ethnic dresses
                                    <span class="pdtcount">14699</span>
                                </label>
                            </li>    
                        </div>
                    </ul>
                </div>
            </div>
            <div class="discount">
                <div class="clm2">
                    <ul class="clm2ul">
                        <div>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="boys"class="chkbox">
                                    <div class="chkboxIndicator"></div>10% and higher
                                    <span class="pdtcount">22961</span>
                                </label>
                            </li>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>20% and higher
                                    <span class="pdtcount">221994</span>
                                </label>
                            </li>  
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>30% and higher
                                    <span class="pdtcount">214055</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>40% and higher
                                    <span class="pdtcount">202418</span>
                                </label>
                            </li>   
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>50% and higher
                                    <span class="pdtcount">178184</span>
                                </label>
                            </li> 
                        </div>
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>60% and higher
                                <span class="pdtcount">122827</span>
                            </label>
                        </li> 
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>70% and higher
                                <span class="pdtcount">71402</span>
                            </label>
                        </li> 
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>80% and higher
                                <span class="pdtcount">16139</span>
                            </label>
                        </li> 
                        <li class="clm2li" id="ckid">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>90% and higher
                                <span class="pdtcount">517</span>
                            </label>
                        </li>    
                    </ul>
                </div>
            </div>
            <div class="bundles">
                <div class="clm2">
                    <ul class="clm2ul">
                        <div>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="boys"class="chkbox">
                                    <div class="chkboxIndicator"></div>Bundles
                                    <span class="pdtcount">25</span>
                                </label>
                            </li>
                            <li class="clm2li" id="ckid">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Single styles
                                    <span class="pdtcount">271321</span>
                                </label>
                            </li>    
                        </div>
                    </ul>
                </div>
            </div>
            <div class="brand">
                <div class="clm2">
                    <div class="searsize">
                        <div class="seamrg">
                            <img src="icons/search.svg" id="sizesrchimg">
                            <input class="srchre" placeholder="Search by Brand" type="text">
                        </div>
                    </div>
                    <ul class="clm2ul">
                        <div>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="boys"class="chkbox">
                                    <div class="chkboxIndicator"></div>109f
                                    <span class="pdtcount">1</span>
                                </label>
                            </li>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>13-star
                                    <span class="pdtcount">61</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>15 buttons
                                    <span class="pdtcount">21</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>1st step
                                    <span class="pdtcount">8</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>20dresses
                                    <span class="pdtcount">563</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>250 designs
                                    <span class="pdtcount">182</span>
                                </label>
                            </li>       
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>27 drapes
                                    <span class="pdtcount">14</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>28 moons
                                    <span class="pdtcount">23</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>3pin
                                    <span class="pdtcount">18</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>4wrd by dressberry
                                    <span class="pdtcount">56</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls" class="chkbox">
                                    <div class="chkboxIndicator"></div>4you dresses
                                    <span class="pdtcount">13</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>5.10.15
                                    <span class="pdtcount">1</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>612 ivy league
                                    <span class="pdtcount">1</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>69 fashon street
                                    <span class="pdtcount">1</span>
                                </label>
                            </li>     
                        </div>
                    </ul>
                </div>
            </div>
            <div class="size">
                <div class="clm2">
                    <div class="searsize">
                        <div class="seamrg">
                            <img src="icons/search.svg" id="sizesrchimg">
                            <input class="srchre" placeholder="Search by Size" type="text">
                        </div>
                    </div>
                    <ul class="clm2ul">
                        <div>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="boys"class="chkbox">
                                    <div class="chkboxIndicator"></div>3xs
                                    <span class="pdtcount">2</span>
                                </label>
                            </li>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Xxs
                                    <span class="pdtcount">99</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Xs
                                    <span class="pdtcount">3591</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Xs/s
                                    <span class="pdtcount">99</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>S
                                    <span class="pdtcount">8781</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>S/m
                                    <span class="pdtcount">45</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>M
                                    <span class="pdtcount">9461</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>M/l
                                    <span class="pdtcount">115</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>L
                                    <span class="pdtcount">9094</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>L/xl
                                    <span class="pdtcount">99</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Xl
                                    <span class="pdtcount">8755</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Xl/xxl
                                    <span class="pdtcount">4</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Xxl
                                    <span class="pdtcount">8049</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>3xl
                                    <span class="pdtcount">2250</span>
                                </label>
                            </li> 
                            
                            
                        </div>
                    </ul>
                </div>
            </div>
            <div class="filters">
                <div class="clm2">
                    <p class="titles">Refine your search</p>
                    <p class="description">Select any one category to view more filter(s).</p>
                    <div class="sltctry"><span class="sltcat">SELECT CATEGORY</span></div>
                </div>
            </div>
            <div class="color">
                <div class="clm2">
                    <div class="searsize">
                        <div class="seamrg">
                            <img src="icons/search.svg" id="sizesrchimg">
                            <input class="srchre" placeholder="Search by Color" type="text">
                        </div>
                    </div>
                    <ul class="clm2ul">
                        <div>
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(94, 177, 96);"></span></div></div><div class="nme">Assorted</div>
                                    <span class="pdtcount">40</span>
                                </label>
                            </li>
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(232, 230, 207);"></span></div></div><div class="nme">Beige</div>
                                    <span class="pdtcount">6373</span>
                                </label>
                            </li>  
                            <li class="clm2li" id="clrclm2"> 
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(54, 69, 79);"></span></div></div><div class="nme">Black</div>
                                    <span class="pdtcount">40833</span>
                                </label>
                            </li>      
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(0, 116, 217);"></span></div></div><div class="nme">Blue</div>
                                    <span class="pdtcount">32373</span>
                                </label>
                            </li>  
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox" >
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(204, 130, 64);"></span></div></div><div class="nme">Bronze</div>
                                    <span class="pdtcount">37</span>
                                </label>
                            </li>  
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(139, 69, 19);"></span></div></div><div class="nme">Brown</div>
                                    <span class="pdtcount">6874</span>
                                </label>
                            </li>  
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(160, 50, 69);"></span></div></div><div class="nme">Burgundy</div>
                                    <span class="pdtcount">134</span>
                                </label>
                            </li>  
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(193, 154, 107);"></span></div></div><div class="nme">Camel brown</div>
                                    <span class="pdtcount">340</span>
                                </label>
                            </li>  
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(247, 231, 206);"></span></div></div><div class="nme">Champagne</div>
                                    <span class="pdtcount">22</span>
                                </label>
                            </li>  
                            <li class="clm2li"id="clrclm2" >
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(54,69,79);"></span></div></div><div class="nme">Charcoal</div>
                                    <span class="pdtcount">126</span>
                                </label>
                            </li> 
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(75, 48, 47);"style="background-color: rgb(54, 69, 79);"></span></div></div><div class="nme">Coffee brown</div>
                                    <span class="pdtcount">874</span>
                                </label>
                            </li>   
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(170, 108, 57);"></span></div></div><div class="nme">Copper</div>
                                    <span class="pdtcount">934</span>
                                </label>
                            </li> 
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(255, 127, 80);"></span></div></div><div class="nme">Coral</div>
                                    <span class="pdtcount">739</span>
                                </label>
                            </li>
                             <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(237, 230, 185);"></span></div></div><div class="nme">Cream</div>
                                    <span class="pdtcount">539</span>
                                </label>
                            </li>  
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(242, 242, 242);"></span></div></div><div class="nme">Off white</div>
                                    <span class="pdtcount">264</span>
                                </label>
                            </li>     
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(141, 192, 74);"></span></div></div><div class="nme">Fluroscent green</div>
                                    <span class="pdtcount">693</span>
                                </label>
                            </li>  
                            <li class="clm2li" id="clrclm2">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(94, 177, 96);"></span></div></div><div class="nme">Green</div>
                                    <span class="pdtcount">55</span>
                                </label>
                            </li>  
                        </div>
                    </ul>
                </div>
            </div>
            <div class="price">
                <div class="clm2">
                    <div class="setrange">
                        <div class="price-filter">
                            <div class="price-info">
                                <div class="pricehd">Selected price range</div>
                                <div class="price-range"><span id="min-price">₹0</span> - <span id="max-price">₹21,000 +</span></div>
                                <div class="product-count"><span id="nopdts">269005</span>products found</div>
                            </div>
                            <div class="cont">
                                <div class="histo">
                                    <div class="hist1"></div>
                                    <div class="hist2"></div>
                                    <div class="hist3"></div>
                                </div>
                            </div>
                            <div class="slider-container">
                                <input type="range" id="maxRange" min="0" max="48000" step="100" value="48000">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="country">
            <div class="clm2">
                <div class="searsize">
                    <div class="seamrg">
                        <img src="icons/search.svg" id="sizesrchimg">
                            <input class="srchre" placeholder="Search by Country of Orgin" type="text">
                    </div>
                </div>
                    <ul class="clm2ul">
                        
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="boys"class="chkbox">
                                    <div class="chkboxIndicator"></div>All countries
                                    <span class="pdtcount">12576</span>
                                </label>
                            </li>
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Bangladhesh
                                    <span class="pdtcount">61</span>
                                </label>
                            </li> 
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Belgium
                                    <span class="pdtcount">21</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Bulgaria
                                    <span class="pdtcount">8</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Cambodia
                                    <span class="pdtcount">563</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>China
                                    <span class="pdtcount">182</span>
                                </label>
                            </li>       
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Hong kong
                                    <span class="pdtcount">14</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>India
                                    <span class="pdtcount">23</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Indonesia
                                    <span class="pdtcount">18</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Italy
                                    <span class="pdtcount">56</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls" class="chkbox">
                                    <div class="chkboxIndicator"></div>Mauritius
                                    <span class="pdtcount">13</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Moroco
                                    <span class="pdtcount">1</span>
                                </label>
                            </li>    
                            <li class="clm2li">
                                <label class="cstmcheckbox">
                                    <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                    <div class="chkboxIndicator"></div>Myanmar
                                    <span class="pdtcount">1</span>
                                </label>
                            </li>    
                        
                    </ul>
            </div>
        </div>
            <div class="lastnav">
                <div class="navclm">
                    <div class="navclmcnt">
                        <button class="close_btn">CLOSE</button>
                    </div>
                </div>
                <div class="btn_sep"></div>
                <div class="navclm">
                    <div class="navclmcnt">
                            <button class="applay_btn">APPLY</button>
                    </div>
                </div>
            </div>
    </div>`
        document.body.appendChild(filtrpge)
        filtrpge.querySelector(".close_btn").onclick=()=>{
            filtrpge.remove()
        } 
        
        filtrpge.querySelectorAll(".clm1flx").forEach(clm1flx=>{
            clm1flx.addEventListener('click',function(){
                document.querySelectorAll(".clm1flx").forEach(x=>x.classList.remove('select'))
                this.classList.add('select')
                const labeltxt=this.querySelector("label").textContent.trim()
                console.log(labeltxt)



                const maxRange = document.getElementById('maxRange');
                const maxPrice = document.getElementById('max-price');
                const productCount=document.getElementById("nopdts")

                function getProductCount(price){
                    const maxPrice=48000
                    const maxProducts=269897
                    return Math.floor((price/maxPrice)*maxProducts)
                }
                maxRange.addEventListener("input",function(){
                    const currentPrice=parseInt(this.value)        //this is when a user slides the slider the input value will be stored
                    maxPrice.textContent=`₹${currentPrice.toLocaleString()}`
                    const count=getProductCount(currentPrice)
                    productCount.textContent=count.toLocaleString()
                })
     
                function updateSlider() {
                    const val = parseInt(maxRange.value);
                    maxPrice.textContent = `₹${val.toLocaleString()}`;
                    maxRange.style.setProperty('--value', `${(val / maxRange.max) * 100}%`);
                }

                maxRange.addEventListener('input', updateSlider);
                updateSlider();

                filtrpge.querySelectorAll(".gender, .categories,.size,.price,.brand,.discount,.bundles,.country,.filters,.color").forEach(section => {
                    section.style.display = "none";
                });

            if(labeltxt==="Categories"){
                filtrpge.querySelector(".categories").style.display="block"
            }
            else if(labeltxt==="Gender"){
                filtrpge.querySelector(".gender").style.display="block"
            }
            else if(labeltxt==="Size"){
                filtrpge.querySelector(".size").style.display="block"
            } 
            else if(labeltxt==="Price"){
                filtrpge.querySelector(".price").style.display="block"
            } 
            else if(labeltxt==="Brand"){
                filtrpge.querySelector(".brand").style.display="block"
            }  
            else if(labeltxt==="Discount Range"){
                filtrpge.querySelector(".discount").style.display="block"
            }
            else if(labeltxt==="Bundles"){
                filtrpge.querySelector(".bundles").style.display="block"
                
            }
            else if(labeltxt==="Country of Origin"){
                
                filtrpge.querySelector(".country").style.display="block"
                console.log(document.querySelector(".clm2li"));

            }
            else if(labeltxt==="Color"){
                filtrpge.querySelector(".color").style.display="block"
            }
            else if(labeltxt==="More Filters"){
                filtrpge.querySelector(".filters").style.display="block"
            }
        })
    })
    const fil =document.getElementById("fil")
    const cata=document.getElementById("cat")
    const selectcategory=document.querySelector(".sltctry")
    selectcategory.addEventListener("click",function(){
    console.log("clicked")
    filtrpge.querySelector(".categories").style.display="block"
    cata.classList.add("clm1flxclr")
    fil.style.background="#f5f5f6"
    })


    filtrpge.querySelectorAll("#clm1 .clm1flx").forEach(clm1tit => {
        clm1tit.addEventListener("click", function () {
         console.log("clk");
    filtrpge.querySelectorAll("#clm1 .clm1flx").forEach(el => el.classList.remove("clm1flxclr"));
    this.classList.add("clm1flxclr");
  });
});
}

const filterbutton=document.querySelector(".filtbtn")
fltr.addEventListener("click",filterFn)
filterbutton.addEventListener("click",filterFn)


const sortbtn=document.querySelector(".sortbtn")
sortbtn.addEventListener("click",()=>{
    // console.log("sort")
    const sortpge=document.createElement("div")
    sortpge.id="srtid"
    sortpge.innerHTML=
    `<div class="sorting">
    <div class="sortpop">
        <div class="posvis">
            <div class="popcont">
                <ul class="sortlst">
                    <li class="srtby">SORT BY </li>
                    <span>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/flame.svg"class="sortsvg"> 
                            <span class="srtpoptxt" id="cn1">Popularity</span> 
                            </button>
                            </div>
                        </li>
                         <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/srtstar.svg"class="sortsvg" id="svg2"> 
                            <span class="srtpoptxt" id="cn2">Latest</span> 
                            </button>
                            </div>
                        </li>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="https://constant.myntassets.com/pwa/assets/img/ed2090c9-27f0-4eb0-ad1b-7bb58b955d4e1571633941585-offers-2x.png"class="sortsvg"id="svg3"> 
                            <span class="srtpoptxt" id="cn3">Discount</span> 
                            </button>
                            </div>
                        </li>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/pricedwn .svg"class="sortsvg"id="svg4"> 
                            <span class="srtpoptxt" id="cn4">Price: High to Low</span> 
                            </button>
                            </div>
                        </li>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/priceup .svg"class="sortsvg"id="svg5"> 
                            <span class="srtpoptxt" id="cn5">Price: Low to High</span> 
                            </button>
                            </div>
                        </li>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/doubstr.svg"class="sortsvg"id="svg6"> 
                            <span class="srtpoptxt" id="cn6">Customer Rating</span> 
                            </button>
                            </div>
                        </li>
                    </span>
                </ul>
        </div>
    </div>
</div>`
document.body.appendChild(sortpge)
sortpge.querySelector(".sorting").onclick=()=>{
        sortpge.remove()
    }
})


function addToCart(){
   const addtocart= document.createElement("div")
   addtocart.id="cartid"
   addtocart.innerHTML=`
   <div class="layout">
        <div class="cartnav">
            <div class="bkicon">
                <a href=""><img src="icons/arrow_icon.svg" id="arrowimg1" /></a>
            </div>
                <div class="carthd">SHOPPING BAG</div>
                <div class="step">STEP 1/3</div>
            </div>
            <div class="root">
                <div id="cartmob">
                    <div id="cartcntmrg">
                        <div class="cartimg"><img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"id="bagimg"></div>
                    </div>
                    <div class="carttitle">Hey, it feels so light!</div>
                    <div class="cartsubtile">There is nothing in your bag. Let's add some items.</div>
                    <div class="addingcart">
                        <div class="cartbutton">ADD ITEMS FROM WISHLIST</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    document.body.appendChild(addtocart)
   const  takefromcart= document.querySelector(".cartbutton")
   takefromcart.addEventListener("click",addToCart1)
}
const addCart=document.getElementById("cart")
addCart.parentElement.addEventListener("click",addToCart)


function addToCart1(){
    // console.log("functioncalled")
   const addtocart= document.createElement("div")
   addtocart.id="cartid"
   addtocart.innerHTML=`
   <div class="layout">
        <div class="cartnav1">
            <div class="bkicon1">
                <a href="index.html"><img src="icons/arrow_icon.svg" id="arrowimg1" /></a>
            </div>
                <div class="carthd1" id="wishhdtxt">Wishlist</div>
                 <div id="headicons1">
                 
                    <img src="icons/headpls.svg" class="hdicons1" id="plus1"/>
                    <a href="#"><img src="icons/cart.svg" class="hdicons2" id="cart1"/></a></div>
            </div>
            <div class="secondprt">
                <div class="wishlistempty">
                    <div class="container">
                        <div class="emhd">WISHLIST EMPTY</div>
                        <div class="emdesc">Save your favorite pieces of clothing in one place. Add now, buy later.</div>
                        <div class="emimg1"></div>
                        <div><a href="/"class="cntshop">CONTINUE SHOPPING</a></div>
                    <div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="about">
                <p class="aboutxt">More about Online Shopping at Myntra</p><img src="icons/down.svg" class="disarrow">
            </div>
            <div class="displays">
                <div class="allabout">
                    <div class="allabtpd">
                        <div class="shopfor"> 
                            <a href="#" class="shphd">SHOP FOR</a>
                            <a>Explore</a>
                            <a>Men</a>
                            <a>Women</a>
                            <a>Kids</a>
                            <a>Home & Living</a>
                        </div>
                        <div class="social"><a><h4>KEEP IN TOUCH</h4></a>
                            <a href="https://www.facebook.com/myntra"><img src="icons/facebook.svg" class="socialsvg" ></a>
                            <a href="/home/athulya/Downloads/yt.svg"><img src="icons/tweet.svg" class="socialsvg"></a>
                            <a href="https://www.instagram.com/myntra/#"><img src="icons/insta.svg" class="socialsvg"></a>
                            <a href="https://www.youtube.com/user/myntradotcom"><img src="icons/yt.svg" class="socialsvg"></a></div>
                        
                        <div class="shopfor custom">
                            <h4>CUSTOMER POLICIES</h4>
                            <a href="#">Contact Us</a>
                            <a href="#">FAQ</a>
                            <a href="#">Terms Of Use</a>
                            <a href="#">Track Orders</a>
                            <a href="#">Shipping</a>
                            <a href="#">Cancellation</a>
                            <a href="#">Returns</a> 
                            <a href="#">Privacy policy</a>
                            <a href="#">Grievance Redressal</a>
                        </div>
                        <div class="shopfor">
                            <h4>useful links</h4>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a
                            <a href="#">Site Map</a>
                            <a href="#">Corporate Information</a>
                            <a href="#">Whitehat</a>
                        </div>
                        <p class="copyright"><span>© 2025 www.myntra.com</span>
                        <span class="cpy">All rights reserved</span></p>
                    </div>
                        <div class="shopfor">
                            <div class="poppd">
                                <div class="shopfor popsr ">
                                    <div class="social"><h4>POPULAR SEARCHES</h4></div>
                                    <a href="#">Girls</a>
                                    <a href="#">Street Fashion</a>
                                    <a href="#">Fashion Hacks</a>
                                    <a href="#">Girls Tops</a>
                                    <a href="#">Biba Girls Dresses</a>
                                    <a href="#">Jeans For Girls</a>
                                    <a href="#">Baby</a>
                                    <a href="#">Dress</a>
                                    <a href="#">Dresses For Kind</a>
                                    <a href="#">Boys Shorts</a>
                                    <a href="#">T Shirt For Girl</a>
                                    <a href="#">Tshirts For Girls</a>
                                    <a href="#">Girls Tshirts</a>
                                    <a href="#">Kids Wear</a>
                                    <a href="#">Blazer For</a>
                                    <a href="#">Boys</a>
                                    <a href="#">Girl Dress</a>
                                    <a href="#">Jeans Top</a>
                                    <a href="#">Girls Shrug</a>
                                    <a href="#">Kids Suits</a>
                                    <a href="#">Shorts For Girls</a>
                                    <a href="#">Girl Bra</a>
                                    <a href="#">Girls Bra</a>
                                    <a href="#">Sweaters For Girls</a>
                                    <a href="#">Girls Kurtis</a>
                                    <a href="#">Girls Swimming Costume</a>
                                    <a href="#">Girls Scarves</a>
                                    <a href="#">Tights For Kids</a>
                                    <a href="#">Adidas White Shoes</a>
                                    <a href="#">Kids Ethnic Wear</a>
                                    <a href="#">Boys Jacket</a>
                                    <a href="#">Baby Frocks Design</a>
                                    <a href="#">Girls Blazer</a>
                                    <a href="#">Blazer For Kids</a>
                                    <a href="#">Kids Shrug</a>
                                    <a href="#">Frock Design</a>
                                    <a href="#">Long Coats For Girls</a>
                                    <a href="#">Party Wear Dress For Boys</a>
                                    <a href="#">Girls Jacket</a>
                                    <a href="#">Kids Sweater</a>
                                    <a href="#">Baby Sweater</a>
                                    <a href="#">Boys Suits</a>
                                    <a href="#">Baby Rompers</a>
                                    <a href="#">Denim Jacket For Girls</a>
                                    <a href="#">Newborn Baby Dresses</a>
                                    <a href="#">Girls Kids Wear</a>
                                    <div class="buyall">
                        <h2 class="buytit">BUY DRESS</h2>
                        <div class="buydesc">
                            <h2>Eternally Stylish Dresses</h2>
                            <p>whether you are 13 or 30,one thing all women can agree on is that dresses are an essenstial part of our wardrobe.Dresses have a unique appeal that can rarely be recreated by any other outfit.From Vintage Flower dresses to modern bodycon dresses,the styles have varied over the years.</p>
                            <p>The history of dresses dates back to centuries ago when they were design with puffy sleeves with crinolines under skirt.Now you can find a variety of dresses from pretty prom dresses to trendy club dresses.Mynthra has Choices galore when it comes to dress for girls and women.Explore the expansive range of women and <a href="#">girls dresses</a>on Myntra from premium brands</p>
                            <h3>Types of dresses</h3>
                            <p>There is a dress for every occasion and season.Listed below are some of the popular types of dresses categoriesed based on different occasions.</p>
                            <li><strong>CASUAL DRESSES</strong>Want to feel chic and pretty without putting in too much effort?Then swap out your jeans and t-shirt for a casual dress.Dresses in cotton are perfect for everyday wear.For casual wear,choose from t-shirt style,shirt style,fit and flare,and blouson dressses.</li>
                            <li><strong>WORK DRESSES</strong>More and women are opting to dresses to work nowadays.Well-structured formal dresses make you look sharp and classy.Aline,peplum,and winters,opt for sweater with a pair of solid stockings or tights.</li>
                            <li><strong>PARTY DRESSES</strong>Nothing looks aas glamorous aa shimmery bodycon dress for a night on the town with your friends.Part dresses come in a wide range of styles to suit different occasions.For formal parties and events,opt for coctail dresses in full length made of satin,velvet,organza,or soft silk,Embellished maxi or<a href="#">Anarkali</a>dresses are perfect for ethnic parties.</li>
                            <h3>Tips on Styling Dresses</h3>
                            <p>picking the right dress and knowing how to style it for different occassions will change your fashion game.Listed below are some tips and tricks on styling dresses:</p>
                            <li>For summer,optfor light cotton dresses with floral and fun prints.Off-shoulder,halter-neck,and strappy dresses in pastel colours make for the perfect summer dresses.Opt for a strapless <a href="#">bra</a>When wearing off-shoulder and halter-neck dresses</li>
                            <li>Style your shirt dress with a wide belt at the waist for a chic look</li>
                            <li>When it comes to wedding dresses,opt for fabrics like organza,satin,crepe,taffeta,chiffon,and charmeuse.You can opt for a <a hreff="#">designer dress</a>or take your pick from one of the premium brands</li>
                            <li><a href="#">Red dresses</a>are perfect for date nights.Opt for a boatneack chiffon red dress and nude pumps for a perfect date night look</li>
                            <li>For a form-fitting look,opt for bodycon dresses.Shapewear can help you achieve a smooth silhouette with these dresses.</li>
                            <li>Choose dresses that flatter your body type.if you are on the slimmer side,opt for wrap dresses to give the illusion of curves.if you are on the healthier side,opt for plus size dresses with a square or round neckline.</li>
                            <h3>Buy Your Favourite Dress Online</h3>
                            <p>No matter your style preference,we guarntee that you will find the perfect dress on Mynthra.Check out the vast collection of casual,ethnic,formal, annd party wear dresses on mynthra and avail exciting discounts when you shop from us.</p>
                            <p><strong>SHOP BY BRAND:&nbsp;</strong></p>
                            <p>
                                <a href="#">Biba</a>|
                                <a href="#">Global Desi</a>|
                                <a href="#">Urbanic</a>|
                                <a href="#">Dressberry</a>|
                                <a href="#">Sassafras</a>|
                                <a href="#">Soch</a>|
                                <a href="#">Libas</a>|
                                <a href="#">W</a>|
                                <a href="#">Koskki</a>|
                                <a href="#">Nalli</a>|
                                <a href="#">Karagiri</a>|
                                <a href="#">Pothys</a>|
                                <a href="#">H&M</a>|
                                <a href="#">Vero Monda</a>|
                                <a href="#">Calvin Klein</a>|
                                <a href="#">Max</a>|
                                <a href="#">Clovia</a>|
                                <a href="#">Zivame</a>|
                                <a href="#">Sonari</a>|
                                <a href="#">Enamor</a>|
                                <a href="#">Jockey</a>|
                                <a href="#">Forever21</a>|
                                <a href="#">Forver 21</a>|
                                <a href="#">Nike</a>|
                                <a href="#">Puma</a>|
                                <a href="#">Adidas</a>|
                                <a href="#">Campus</a>|
                                <a href="#">Red</a>|
                                <a href="#">Tape</a>|
                            </p>
                            <div class="comfort">
                                <div class="comfort1">
                                    <h3><strong>ARE DRESSES MORE COMFORTABLE DURING PREGNANCY?</strong></h3>
                                    <div class="comfortdesc">Maternity Wear has become chic in recent years,and dresses are a welcome addition to te maternity wear range.These dresses are designed,Keeping the Expecting Mother;'s need in mind and are very comfortable.Also the designs are trendy,which makes them an excellent choice for different occasions</div>
                                </div>
                            </div>
                            <div class="Formal">
                                <h3>CAN FORMAL DRESSES BE WORN FOR AN OFFICE PRESENTATION/INTERVIEW</h3>
                                <div class="formaldesc">Formal dresses are styled for corporate wear and very much in vogue.They display and Understand elegance and are perfect for any formal event such as an interview,meeting with clients or an official presentation.<div>
                            </div>
                            <div class="reception">
                                <h3>CAN FORMAL DRESSES BE WORN FOR AN OFFICE PRESENTATION/INTERVIEW</h3>
                                <div class="recdesc">Mynthra has a curated range of dresses for the party as well as wedding receptions.The focus is to create the perfect balance between modern and traditional.maxi dress,A-line,empire and kurthi dress with embellishments,ethnic motofs or embroidery are popular choices in the reception wear range</div>
                            </div>
                            <div classs="style">
                                <h3>HOW CAN WE STYLE DRESES?</h3>
                                <div class="styledesc">
                                    <div class="stdesc">Dress in itself makes a strong style statement which can be enhanced by pairing it with accessories,some amount of min n match works really well</div>
                                    <li>A shirt dress can be styled with a bord belt at the waist</li>
                                    <li>A sleeveless plain maxi dress can be styled with an emmbellished jacket and some chunky jewllery</li>
                                    <li>A solid formal dress,peep toes and a delicate nechlace create the perfect corporate look</li>
                                    <li>A denim dress with snekers is ideal for a casual outing.</li>
                                    <li>A scarf wrapped around a short printed dress with sandls is chic and comfortable attire</li>
                                </div>
                            </div>
                            <div class="brand">
                                <h3>WHAT ARE THE DIFFERENT DRESSES OF BRANDS AVAILABLE ON MYNTHRA?
                                <div class="brand desc">Myntra has an exquisite range of dresses by different brands,contemporary as well as ethnic.Some of the well-known brands that you can buy from are Dressbery,Aks,Vero Mod,Anouk,Dorothy perkins,Chemistry,Here&Now,Indya,Meringue and Sztori</div>
                            </div>
                            <h2><strong>OTHER CATEGORIES</strong></h2>
                            <p>
                                <a href="#">Top</a>
                                <a href="#">Blouse</a>
                                <a href="#">Designs</a>
                                <a href="#">Saree</a>
                                <a href="#">Ethnic Wear</a>
                                <a href="#">Lehenga</a>
                                <a href="#">Kurtas</a>
                                <a href="#">Women Jeans</a>
                            </p>
                            <p><strong>TYPES OF DRESSES:</strong></p>
                            <p>
                                <a href="#">Long Dress</a>|
                                <a href="#">Prom Dresses</a>|
                                <a href="#">Net Dresses</a>|
                                <a href="#">Oversize Dress</a>
                            </p>
                            <h2>Different Types of Dresses on Myntra</h2>
                            <table>
                                <tr>
                                    <td><a href="#">Maxi Dresses</a></td>
                                    <td><a href="#">Short Dresses</a></td>
                                    <td><a href="#">Midi Dresses</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lace Dresses</a></td>
                                    <td><a href="#">Wrap Dresses</a></td>
                                    <td><a href="#">Tube Dresses</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Off Shoulder Dresses</a></td>
                                    <td><a href="#">Designer Dresses</a></td>
                                    <td><a href="#">Kaftan Dresses</a></td>
                                </tr>
                            </table>
                                
                        </div>    
                    </div>

                </div>
            </div>
        </div>
    </div>   
</div>
        
    `
    document.body.appendChild(addtocart)
        const allabout=document.querySelector(".allabout")
        const disarrow=document.querySelector(".disarrow")
        disarrow.onclick=()=>{
            disarrow.classList.toggle("rotate")
            if(allabout.style.display==="block"){
                allabout.style.display="none"
            }else{
                allabout.style.display="block"
            }
        }
        const plushow=document.querySelector(".hdicons1").onclick=()=>{
            showPage()
        }
        const cartshow=document.querySelector(".hdicons2").onclick=()=>{
            addToCart()
            addtocart.remove()
            const toback=document.querySelector(".bkicon").onclick=()=>{
                console.log("clicks")
                addToCart()
            }
                

    }
}

const wishclkk=document.getElementById("wishes")
wishclkk.addEventListener("click",addToCart1)


function searchMain(){
    const mainclass=document.querySelector(".mainclass")
    mainclass.style.display="none"
    const searcchdiv=document.createElement("div")
    searcchdiv.id="searchmid"
    searcchdiv.innerHTML=`
    <div class="layout1">
       <div class="nav">
            <div class="bkicon1">
                <a href=""><img src="icons/arrow_icon.svg" id="arrowimg1" /></a>
            </div>
            <input type="text" class="searchbar" placeholder="Search for brands & products" autofocus>
            <div class="searchicon"><img src="icons/redsearch.svg"></div>
        </div>
        <div class="secpd">
            <div class="secprt">
                <div class="smhd">
                    <h4 class="smtit">RECENTLY VIEWED</h4>
                </div>
            <ul class="smlst">
                <li>
                    <div class="smpdt">
                        <div class="smimg"><img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/2025/FEBRUARY/22/wihJnoil_41c0e86f57f24c9782346e3307b7a7db.jpg"></div>
                        <div class="smpdtit">BAESD</div>
                        <div class="smdesc">Fit & Flare Dress</div>
                    </div>
                </li>
                <li>
                    <div class="smpdt">
                        <div class="smimg"><img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/23051412/2023/5/6/3969296a-f6ec-46f6-9412-61de6ed5165f1683339346023ClotheFunnWhiteFloralPrintPinaforeDress1.jpg"></div>
                        <div class="smpdtit">Clothe Funn</div>
                        <div class="smdesc">Girls Conversational Printed Cotton Pinafore Dress With Top</div>
                    </div>
                </li>
                <li>
                    <div class="smpdt">
                        <div class="smimg"><img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/32109331/2024/12/27/d7278d1b-6e27-4d54-9a5b-502a7ab4f0e81735297347279MarksSpencerFloralPrintFitFlareDress1.jpg"></div>
                        <div class="smpdtit">Marks & Spencer</div>
                        <div class="smdesc">Floral Printed Cotton Fit & Flare Dress</div>
                    </div>
                </li>
                <li>
                    <div class="smpdt">
                        <div class="smimg"><img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/23663558/2023/6/17/fd63bcc5-d06b-4997-83e6-5ec89309cb091686995040121HERENOWNavyBlueFitFlareDress1.jpg"></div>
                        <div class="smpdtit">HERE&NOW</div>
                        <div class="smdesc">Girls Navy Blue Floral Embroidered Cotton A-Line Dress</div>
                    </div>
                </li>
                <li>
                    <div class="smpdt">
                        <div class="smimg"><img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/28688510/2024/12/27/bb058407-d64c-43dd-a8ae-ac6cba92c7641735308885503-OCTICS-Floral-Printed-Fit--Flare-Dress-1081735308884799-1.jpg"></div>
                        <div class="smpdtit">OCTICS</div>
                        <div class="smdesc">Floral Printed fit & Flare Dress</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    `
    document.body.appendChild(searcchdiv)
    const cursorActive=document.querySelector(".searchbar")
    cursorActive.focus();

}
const navsearch=document.getElementById("navsearch")
navsearch.addEventListener("click",searchMain)


// const wished=document.querySelectorAll(".wish")
// function wishlisted(){
//     wished.style.display="block"
//     redwish.style.display="none"
//     console.log("red")
//     const box=document.createElement("div")
//     box.id="wishboxid"
//     box.innerHTML=`
//     <div id="wishlistbox" class="wsbox">
//         <div class="wishpop">
//             <p>Product added to wishlist</p>
//         </div>
//     </div>
//     `
// document.body.appendChild(box)
// setTimeout(() => {
//     box.remove()
// }, 2000);
// }
// const redwish=document.querySelectorAll(".wished")
// redwish.addEventListener("click",wishlisted)

const redwish=document.querySelectorAll(".wished")
const wished=document.querySelectorAll(".wish")
redwish.forEach((redwish,index)=>{
    redwish.addEventListener("click",function(){
        wished[index].style.display="block"
        redwish.style.display="none"
        const box=document.createElement("div")
        box.id="wishbox"
        box.innerHTML=`
        <div id="wishlistbox" class="wsbox">
            <div class="wishpop">
                <p>Product added to wishlist</p>
            </div>
        </div>

        `
        document.body.appendChild(box)
        setTimeout(()=>{
            box.remove()
        },2000)
    })
})


