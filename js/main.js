// Un alert() espone 5 numeri generati casualmente
function ArrRndNumUnici(maxLenghtArr,arr,max,min) {
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
    inner('nRandomWrong','Numeri errati =' + nRandomWrong + '<br>Tot = ' + nRandomWrong.lentgh);
    console.log(nRandom,nRandomRight,nRandomWrong)
}
function logger(){
    alert('Basta giocare con le bambole! Inserisci i numeri!')    
}
function timeOut(){
setTimeout(logger,10000)
}
    
