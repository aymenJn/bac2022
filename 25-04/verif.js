function verif() {
    var test= true
var cin = document.getElementById("cin")
var nom = document.getElementById("name")
var last = document.getElementById("Last")
var tel = document.getElementById("tel")
var Article = document.getElementById("select")
var prix = document.getElementById("prix")
var buttongo = document.getElementById("go")
if(cin.value.length == 8 ){
    if(cin.value[0] > 1 ){
        var test= false
        alert("cin  not valid")
    }
}
else { 
    var test= false
    alert("cin length not much")
    
}
if((nom.value.length < 3) || (nom.value > 30) ){
    alert("name length not much")
    var test= false
}
if((last.value.length < 3) || (nom.value > 30) ){
    alert("last name length not much")
    var test= false
}
if(tel.value.length == 8 ){
    if(tel.value[0] < 1 ){
        alert("tel  not valid")
        var test= false
    }
}
else { 
    alert("tel length not much")
    var test= false
}
if(Article.value == "Selection un article"){
    alert ("select an option plz")
    var test= false
}
if(parseInt(prix.value) < 0) {
    var test= false
    alert ("prix doit etre positive")
}
if(test){
    buttongo.disabled = true
}
}

function Espace(chaine){
    var chaine2  =""
if(chaine[0]  == " "){
    chaine2 = chaine.substr(1)
    
}
if(chaine[chaine.length -1] == " "){
    console.log(chaine.substr(0,chaine.length-1))
    chaine2 = chaine.substr(0,chaine.length-1)
} 
for (i = 1;i < chaine.length -1 ; i++){
if((chaine[i] == " " )&& (chaine[i+1] == " ")){
  
 
}
}
chaine2 = chaine[0].toUpperCase() + chaine.substr(1)
return (chaine2)
}
var mychaine =  Espace("  hello wrold  sdsq  ")
console.log(mychaine[0].toUpperCase())