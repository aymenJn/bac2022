<?php 
$machine="localhost"; 
$utilisateur="root"; 
$mot_de_passe=""; 
mysql_connect($machine,$utilisateur,$mot_de_passe) or die("Impossible de se 
connecter au serveur web<br>"); 
$base_de_donnee ="aymenjani"; 
mysql_select_db($base_de_donnee) or die("Impossible de se connecter à la base de 
données 0721465<br>"); 
$nom = $_POST["name"] ; 
$num_pass = $_POST["passport"] ;
$pays = $_POST["select"] ;
$requete="INSERT INTO spectateur 
(num_pass ,pays,nom) 
VALUES ('$num_pass','$pays','$nom');"; 
$resultat=mysql_query($requete) or die("<br>Erreur : Insertion de données 
échouée !!!"); 
echo("<br>enregistrement effectue avec succes<br>"); 
?>