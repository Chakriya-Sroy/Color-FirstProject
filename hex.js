const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn=document.getElementById('btn');
const color=document.getElementById('con');
const span=document.getElementById('hex');
btn.addEventListener('click',function(){
    let hexcolor='#';
    for(let i=0;i<6;i++){
        var random=radomColor();
        hexcolor+=hex[random];
    }
    span.textContent=hexcolor;
    color.style.background=hexcolor;
})
function radomColor(){
    return Math.floor(Math.random()*hex.length);
}