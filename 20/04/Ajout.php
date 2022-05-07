<?php 
$machine="localhost"; 
$utilisateur="root"; 
$mot_de_passe=""; 
mysql_connect($machine,$utilisateur,$mot_de_passe) or die("Impossible de se 
connecter au serveur web<br>"); 
$base_de_donnee ="07210465"; 
mysql_select_db($base_de_donnee) or die("Impossible de se connecter à la base de 
données 0721465<br>"); 
$requete = "SELECT * FROM `patient` WHERE 1"  ;
$resultat=mysql_query($requete); 
$mat = $_POST["mat"] ; 
$prenom = $_POST["prenom"] ; 
$nom = $_POST["nom"] ;
?>
<?
$test = TRUE ;
while($i=mysql_fetch_array($resultat)) {
 if($mat == $i["Mat"]){
     $test = FALSE ;
 }
}
if($test){
    $requete="INSERT INTO patient 
    (Mat,nom,prenom) 
    VALUES ('$mat','$nom','$prenom');"; 
    $resultat=mysql_query($requete) or die("<br>Erreur : Insertion de données 
    échouée !!!"); 
    echo("<br>enregistrement effectue avec succes<br>"); 
    

    echo "succes log in";
} 
else{
    echo "deja exicte" ;
}
?> 

 
