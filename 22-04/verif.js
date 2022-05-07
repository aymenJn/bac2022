function verif1(){
    var test=true
    var buttongo = document.getElementById("goto")
var passport = document.getElementById("passport") ; 
var pays = document.getElementById("selectpays") ; 
var nom = document.getElementById("name") ; 
if(passport.value.length == 10){
    if((passport.value[0] >= 'A' ) && (passport.value[0] <= 'Z')){
            if(passport.value[1] >'0' && passport.value[1] < '9'){
                console.log("succes passport")
            }
            else {
                test = false
                console.log("second char not a number")
            }
        }
    else {
        test = false
        console.log("first letter not uppercase")
    }
    }
else{
test = false

    console.log("passport not valid less then 10")
}
if(nom.value.length == 0 ){
    console.log("empty name")
    test = false
}
if(pays.value == "disapled"){
    console.log("empty Pays")
    test = false
}
if(test) {
    buttongo.disabled = false 
}
}