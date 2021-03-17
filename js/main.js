// Un alert() espone 5 numeri generati casualmente
function ArrRndNumUnici(maxLenghtArr,arr,max,min) {
    while (arr.length<maxLenghtArr) {
        let value= Math.floor(Math.random()*(max - min) + min);
        if (!arr.includes(value)){
              arr.push(value);
          }
    }
}
function inner(whereID,what){
    document.getElementById(whereID).innerHTML= what;
}
nRandom=[];
maxNum=5;
function rnd(){
    nRandom=[];
    max= 100;
    min=1;
    ArrRndNumUnici(maxNum,nRandom,max,min);
    console.log(nRandom);
    inner('numerinoti',nRandom);
    inner('countdownNumber',' Il countdown é partito !');
}
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
nRandomRight=[];
nRandomWrong=[];
function promptnumber(){
    t='Tempo scaduto' ;
    clearTimeout(alertTimeout);
    inner('numerinoti','');
    nRandomRight=[];
    nRandomWrong=[];
    if(nRandom==0){
        return alert("Premi prima il pulsante 'Numeri note'")
    }
    console.log(nRandom,nRandomRight,nRandomWrong)
    for(i=0;i<maxNum;i++){
        let value=parseInt(prompt('metti un numero'));
        if (nRandom.includes(value)){
            nRandomRight.push(value);
        } else{
            nRandomWrong.push(value);
        }
    }
    nRandom=[];
    
    inner('nRandomRight','Numeri azzeccati = ' + nRandomRight + '<br>Tot = ' + nRandomRight.lentgh);
    inner('nRandomWrong','Numeri errati =' + nRandomWrong + '<br>Tot = ' + nRandomWrong.length);
    console.log(nRandom,nRandomRight,nRandomWrong)
}
function logger(){
    alert('Basta giocare con le bambole! Inserisci i numeri!')    
}
var x=30000;
var alertTimeout= function timeOut(){
setTimeout(logger,x)
}
var t=30;
function contatore(){
    let value =document.getElementById('contatore');
    var timer=setInterval(function(){
        value.innerHTML=t;
        t=t-1;
        if(t<0){
        clearInterval(timer);
        }},1000)
}

