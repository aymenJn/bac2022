
var thisyear = new Date().getFullYear()
console.log(thisyear)
var year = f.year
year.value = thisyear
function verifday (month,day) {
var thisyear = new Date().getFullYear()
 var test = true 
if(month == "1"|| month =="3" || month =="5"|| month =="7"|| month =="8"|| month =="10"|| month =="12"){
    if(day > 31  || day <1){
        test = false
    }
}
else if(month =="4" || month =="6" || month =="9"|| month =="11"){
    if(day > 30  || day <1){
        test = false
    }
}
else {
    if(parseInt(thisyear) % 4 == 0){ 
        if(day > 29  || day <1){
            test = false
        }
    }
    else {
        if(day > 28  || day <1){
            test = false
        }
    }
}
return test
}

function verif() {
  
  var piceselect = f.D1.value 
  var  salleelect = f.D2.value 
  var day  = f.day.value 
  var month = f.month.value

  if(piceselect =="choisir une piece"){
      alert("pick a choise") 
      return false
  }
  if(salleelect =="choisir une salle"){
    alert("pick a choise") 
    return false
}
if(month > 1 && month < 12){
  if ( !verifday(month ,day)  ){
      alert("wrong day")
    return false
  }
  else{
      alert("perfect u pick the rigth date")
  }

}
else {
    alert("wrong month")
    return false
}
    return false 
}