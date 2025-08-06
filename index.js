
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
                                <input type="range" id="maxRange" min="0" max="21000" step="100" value="21000">
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
                        <div>
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
                        </div>
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
                    const maxPrice=21000
                    const maxProducts=269005
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
                <ul>
            </div>
        </div>
    </div>
</div>`
document.body.appendChild(sortpge)
sortpge.querySelector(".sorting").onclick=()=>{
        sortpge.remove()
    }
})


const wished=document.getElementById("wish")
function wishlisted(){
    wished.style.display="block"
    const box=document.createElement("div")
    box.id="wishboxid"
    box.innerHTML=`
    <div id="wishlistbox" class="wsbox">
        <div class="wishpop">
            <p>Product added to wishlist</p>
        </div>
    </div>
    `
document.body.appendChild(box)
setTimeout(() => {
    box.remove()
}, 2000);
}
const redwish=document.getElementById("wished")
redwish.addEventListener("click",wishlisted)



function addToCart(){
   const addtocart= document.createElement("div")
   addtocart.id="cartid"
   addtocart.innerHTML=`
   <div class="layout">
        <div class="cartnav">
            <div class="bkicon">
                <a href="#" onclick="if(document.referrer) { window.location = document.referrer; } else { window.location = '/fallback-page.html'; } return false;">
                 <img src="icons/arrow_icon.svg" id="arrowimg1" />
                </a>

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
}
const addCart=document.getElementById("cart")
addCart.parentElement.addEventListener("click",addToCart)


function addToCart1(){
    console.log("functioncalled")
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
    </div>
    `
    document.body.appendChild(addtocart)
    const plushow=document.querySelector(".hdicons1").onclick=()=>{
        showPage()
        // addtocart.remove()
    }
        const cartshow=document.querySelector(".hdicons2").onclick=()=>{
        
            addToCart()
            addtocart.remove()
            // const toback=document.querySelector(".bkicon").onclick=()=>{
            //             console.log("clicks")

            //     addToCart()
            //     to
            // }
            

        }
    }

const wishclkk=document.getElementById("wishes")
wishclkk.addEventListener("click",addToCart1)



