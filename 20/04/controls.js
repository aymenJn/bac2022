function verifchaine(chaine){
    test = true ; 
    i = 0 ; 
    while(test == true && i < chaine.length) {
        if (chaine[i]  < 'a'){
            test = false
        }
        i++
    }
    return test
}
function verif(){
    var test= true ;
    var buttongo = document.getElementById("goto")
var mat = document.getElementById("mat") 
var nom = document.getElementById("nom")
var prenom = document.getElementById("prenom")
if (mat.value.length  != 4 ){
    test  =false
    alert("errore mat ")
}
if (!verifchaine(nom.value) || !verifchaine(prenom.value)){
    test  =false
alert("errore nom ou prenom")
}
if(test) {
  buttongo.disabled = false
}
}
function verif1(){
    var buttongo = document.getElementById("go")
    var mat = document.getElementById("mat") 
    var detail = document.getElementById("detail")
    var prochaine = document.getElementById("prochaine")
    var test= true ;
    if(mat.value.length != 4  )
{
    test  =false
    alert("errore mat ")
}
if(detail.value.length == 0 ){
    test  =false
    alert(" no dteail ")
}
if(parseInt(prochaine.value) <= 0){
    test  =false
    alert(" not valid number")
}
if(test) {
    buttongo.disabled = false
  }
}