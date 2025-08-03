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


const fltr=document.getElementById("fltothr").addEventListener("click",function(){
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
                    <li class="clm1flx"><label>Categories</label></li>
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
                        <li class="clm1flx">
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
                        <li class="clm2li">
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
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
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
                                <div class="chkboxIndicator"></div>10%and higher
                                <span class="pdtcount">22961</span>
                            </label>
                        </li>
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>20%and higher
                                <span class="pdtcount">221994</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>30%and higher
                                <span class="pdtcount">214055</span>
                            </label>
                        </li> 
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>40%and higher
                                <span class="pdtcount">202418</span>
                            </label>
                        </li>   
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>50%and higher
                                <span class="pdtcount">178184</span>
                            </label>
                        </li> 

                    </div>
                    <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>60%and higher
                                <span class="pdtcount">122827</span>
                            </label>
                        </li> 
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>70%and higher
                                <span class="pdtcount">71402</span>
                            </label>
                        </li> 
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>80%and higher
                                <span class="pdtcount">16139</span>
                            </label>
                        </li> 
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>90%and higher
                                <span class="pdtcount">517/span>
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
                        <li class="clm2li">
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
                        <input class="srchre" placeholder="Search by Size" type="text">
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
                                <input type="checkbox" name="clm2fil" value="girls">
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
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"></div>4xl
                                <span class="pdtcount">1011</span>
                            </label>
                        </li> 
                        
                    </div>
                </ul>
            </div>
        </div>

        <div class="price">
            <div class="clm2">
                <div class="price">
                    <div class="pricerng">
                        <div class="pricemrg"> 
                            <div class="priceinfo">
                                <div class="pricetxt">Selected price range</div>
                                    <div class="pricebold">₹0-₹42,000</div>
                                    <div class="pdtnumber">270506 product found</div>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="filters">
            <div class="clm2">
                <p class="titles">Refine your search</p>
                <p class="description">Select any one category to view more filter(s)</p>
                <div class="sltctry">SELECT CATEGORY</div>
            </div>
        </div>

        <div class="color">
            <div class="clm2">
            <div class="searsize">
                    <div class="seamrg">
                        <img src="icons/search.svg" id="sizesrchimg">
                        <input class="srchre" placeholder="Search by colour" type="text">
                    </div>
                </div>
                <ul class="clm2ul">
                    <div>
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(94, 177, 96);"></span></div></div><div class="nme">Assorted</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(232, 230, 207);"></span></div></div><div class="nme">Beige</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(54, 69, 79);"></span></div></div><div class="nme">Black</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>      
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(0, 116, 217);"></span></div></div><div class="nme">Blue</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(204, 130, 64);"></span></div></div><div class="nme">Bronze</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(139, 69, 19);"></span></div></div><div class="nme">Brown</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(160, 50, 69);"></span></div></div><div class="nme">Burgundy</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(193, 154, 107);"></span></div></div><div class="nme">Camel brown</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(247, 231, 206);"></span></div></div><div class="nme">Champange</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(75, 48, 47);"style="background-color: rgb(54, 69, 79);"></span></div></div><div class="nme">Coffe brown</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(219, 175, 151);"></span></div></div><div class="nme">Nude</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(170, 108, 57);"></span></div></div><div class="nme">Copper</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(242, 242, 242);"></span></div></div><div class="nme">Off white</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(255, 127, 80);"></span></div></div><div class="nme">Coral</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(237, 230, 185);"></span></div></div><div class="nme">Cream</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(141, 192, 74);"></span></div></div><div class="nme">Fluroscent green</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                        <li class="clm2li">
                            <label class="cstmcheckbox">
                                <input type="checkbox" name="clm2fil" value="girls"class="chkbox">
                                <div class="chkboxIndicator"><div class="txtclr"><span class="forcolor"style="background-color: rgb(94, 177, 96);"></span></div></div><div class="nme">Green</div>
                                <span class="pdtcount">14699</span>
                            </label>
                        </li>  
                    </div>
                </ul>
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
                                <span class="pdtcount">1</span>
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
        
        
    // document.getElementById("#filtbtn").onclick = () => {
    //     document.querySelector("#flrt-id").style.display = "block";
    // };

        filtrpge.querySelectorAll(".clm1flx").forEach(clm1flx=>{
        clm1flx.addEventListener('click',function(){
            document.querySelectorAll(".clm1flx").forEach(x=>x.classList.remove('select'))
        this.classList.add('select')
        const labeltxt=this.querySelector("label").textContent.trim()
        console.log(labeltxt)


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
 filtrpge.querySelectorAll("#clm1 .clm1flx").forEach(clm1tit => {
  clm1tit.addEventListener("click", function () {
    console.log("clk");
    filtrpge.querySelectorAll("#clm1 .clm1flx").forEach(el => el.classList.remove("clm1flxclr"));
    this.classList.add("clm1flxclr");
  });
});


})

const sortbtn=document.getElementById("sortbtn")
sortbtn.addEventListener("click",()=>{
    const sortpge=document.createElement("div")
    sortpge.id="srtid"
    sortpge.innerHTML=
    `<div class="sorting">
    <div class="sortpop">
        <div class="posvis">
            <div class="popcont">
                <ul class="sortlst">
                    <li class="srtby">SORT BY </li>
                    <span >
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/flame.svg"class="sortsvg"> 
                            <span class="srtpoptxt">Popularity</span> 
                            </button>
                            </div>
                        </li>
                         <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/srtstar.svg"class="sortsvg"> 
                            <span class="srtpoptxt">Latest</span> 
                            </button>
                            </div>
                        </li>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/discount.png"class="sortsvg"> 
                            <span class="srtpoptxt">Discount</span> 
                            </button>
                            </div>
                        </li>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/pricedwn.svg"class="sortsvg"> 
                            <span class="srtpoptxt">Price:High to Low</span> 
                            </button>
                            </div>
                        </li>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/priceup.svg"class="sortsvg"> 
                            <span class="srtpoptxt">Price:Low to High</span> 
                            </button>
                            </div>
                        </li>
                        <li class="poplst">
                            <div class="srtlst">
                            <button class="srtbtn">
                            <img src="icons/doubstr.svg"class="sortsvg"> 
                            <span class="srtpoptxt">Customer Rating</span> 
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




   