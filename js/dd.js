let leff =document.getElementById('home')
let iii ='/[`!#$%^&*()_+\-=\[\]{};:"\\|,<>\/?~]/;'
let email = document.getElementById('em');
let log = document.getElementById('log')
let pass = document.getElementById('pass')
let empty =false;
let l =1
let inco=document.getElementById('inco2')
let w =[]
let passw=[]
let x = document.getElementById('eyeop');
let y = document.getElementById('eyeclo');
let statue=0
let spel =document.getElementById('uio')
if(screen.width<=1250){
    document.getElementById('w1').remove()
    var t = document.body;
    t.querySelector('header').innerHTML='  <img id="w1" class="img1" src="photos/pesce-huang-P_4y3rU_HBA-unsplash.jpg" alt="">'
}
if(screen.width<=1040){
    document.getElementById('w1').remove()
    var t = document.body;
}
x.onclick =function(){
    document.getElementById('pass').type='text'
    x.style.display='none'
    y.style.cssText='display:inline-block;position:relative;left:30px'
}
y.onclick=function () {
    document.getElementById('pass').type='password'
    x.style.display='block'
    y.style.display='none'
}
x.onmouseleave=function(){
    y.focus();
}
leff.onclick=function () {
    location.replace("home.html");
}
function containsSpecialChars(str) {
    const specialChars =/[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    return specialChars.test(str);
}
function containsUppercase(valut) {
    return /[A-Z]/.test(valut);
}
function eror(){
    email.style.borderBottom='2px solid red';
    log.disabled=true;
    log.style.cssText='background-color: grey; border:1px solid grey;cursor: not-allowed;';
    inco.style.cssText='opacity :1;'
}
function norm(){
    email.style.borderBottom='2px solid black';
    log.disabled=true;
    log.style.cssText='background-color: black; border:1px solid black;cursor: pointer;';
    inco.style.cssText='opacity :0;'
}
function ero(){
    pass.style.borderBottom='2px solid red';
    log.disabled=true;
    log.style.cssText='background-color: grey; border:1px solid grey;cursor: not-allowed;';
    inco.style.cssText='opacity :1;'
}
function nor(){
    pass.style.borderBottom='2px solid black';
    log.disabled=false;
    log.style.cssText='background-color: black; border:1px solid black;cursor: pointer;';
    inco.style.cssText='opacity :0;'
}

function loading(){
    log.onclick = function () {
        log.style.cssText='background-color: black; border:1px solid black;cursor: pointer; ';
        log.value='Please wait'
        log.css
    }
}
loading()
function checkPass(){  
    pass.onblur=function () {
        let valu = pass.value;
        if(valu ==''){
            ero()
            inco.innerText='Pease enter password';
        }else{
            nor()
        }
    }
}
function checkEmail(){  
    email.onblur=function () {
        let valut =email.value;
        if(valut===''){
            eror()
            inco.textContent="You can't leave email empty!"
        }else if(containsSpecialChars(valut)||containsUppercase(valut)||!valut.includes('@') ){
            eror()
            inco.textContent="Please entr valid email adress"
        }else{
            norm()
            checkPass()
        }
    }
}
checkEmail();
