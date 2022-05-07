<?php 
mysql_connect("localhost" , "root" ,"") or die("faild to connect to data base") ;
mysql_select_db("25-04") or die("faile to get data base 25-04");
$select = $_POST["select"] ; 
$prixchoise = $_POST["prix"];
$testcin = TRUE ;
$nom = $_POST["name"] ; 
$cin = $_POST["cin"] ; 
$prenom = $_POST["Last"] ; 
$tel = $_POST["tel"] ; 
$prixbase = 0 ; 
$test = FALSE ;
$requet = "SELECT * from article WHERE 1" ;
$resultat=mysql_query($requet) or die("<br>Erreur :NOT FOUND");
while(($i = mysql_fetch_array($resultat) AND (!$test))){
   if( $i["libelle"]  == $select ){
       $test = TRUE ;
        $prixbase = $i["prixbase"];
   } 

}
$requet3 = "SELECT * from client WHERE 1" ;
$resultat3=mysql_query($requet) or die("<br>Erreur :NOT FOUND");
while($i = mysql_fetch_array($resultat3) ){
   if( $i["cin"]  == $cin ){
       $test = FALSE ;
        $prixbase = $i["prixbase"];
   } 

}
if($test) {
if($prixchoise > $prixbase) {
    echo "offre rejete" ; 
}
else if($testcin){
$resuet2  = "INSERT INTO client (cin,nom,prenom,Tel) VALUES ('$cin','$nom','$prenom','$tel');" ; 
$resultat=mysql_query($resuet2) or die("<br>Erreur :Cant save");

}

}
?>