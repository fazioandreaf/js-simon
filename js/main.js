// Un alert() espone 5 numeri generati casualmente.
function ArrRndNumUnici (maxLenghtArr,arr,max,min) {
    for (i=0;i<maxLenghtArr;i++) {
        let value= Math.floor(Math.random()*(max - min) + min);
        if (!arr.includes(value)){
              arr.push(value);
          }
    }
}
function inner(whereID,what){
    document.getElementById(whereID).innerHTML= what;

}
function timer(x) {
    var tempo=x;
    
}
function rnd(){
    maxNum=5;
    max= 100;
    min=1;
    nRandom=[];
    ArrRndNumUnici(maxNum,nRandom,max,min);
    console.log(nRandom);
    inner('numerinoti',nRandom)
}
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
