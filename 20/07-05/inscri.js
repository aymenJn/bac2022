function veriftelephone(numerophone) {
    var test = true 
    var i = 0 
    if(numerophone.length != 8) {
        return false
    }
    while (test && i < numerophone.length) {
        if(numerophone[i] <"0" || numerophone[i] > "9"){
            
           return false
        }
        else {
            i++ 
        }
    }

    if(numerophone[0] == "0" || numerophone[0] =="1" ){
      return false
    }
    return test  
}

function verifemail(email){
   if(email.length == 0) {
       return false
   }
if(email.indexOf(".") < 0|| email.indexOf("@") < 0 ){
    return false
}
return true

}
function verif() {
  var name = f.nom.value
  var prenom = f.prenom.value
  var tel = f.tel.value
  var email = f.email.value
if(name ==""){
console.log("no name found ")   
return false
}
if(prenom ==""){
    console.log("no last name  found ")   
    return false
    }
    if (!veriftelephone(tel)){
        console.log("worng phone")
        return false 

    }
    if (!verifemail(email)){
        console.log("worng email")
        return false 
    }

    
}