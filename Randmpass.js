function randmpass(len,low,upp,num,char){
    const isupper=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    const islower=`abcdefghijklmnopqrstuvwxyz`
    const isnum=`1234567890`
    const issymbol=`!@$#%^&*()_+=-`
    let allowedchar=''
    let password=''
    allowedchar+=low?islower:''
    allowedchar+=upp?isupper:''
    allowedchar+=num?isnum:''
    allowedchar+=char?issymbol:''
    console.log(allowedchar)
    if(len===0){
        console.log(`Length must be more than zero`)
    }
    else if(allowedchar.length===0){
        console.log(`At least one set of character needs to be selected`)
    }
    else{
         for(i=0;i<len;i++){
    const index=Math.floor(Math.random()*allowedchar.length)
    password+=allowedchar[index]
    }
    }
    return password
}
const length=1
const lower=false
const upper=false
const numb=false
const spl=false
const yourpass=randmpass(length,lower,upper,numb,spl)
console.log(`Generated password is:${yourpass}`)
