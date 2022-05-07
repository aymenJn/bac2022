<?php 
mysql_connect("localhost","root","") or die ("cant connect to data base ") ; 
mysql_select_db("aymenjani") or die("cant connect to data base aymen") ; 
$nom = $_POST["nom"] ; 
$prenom = $_POST["prenom"] ; 
$tel = $_POST["tel"] ; 
$email = $_POST["email"] ; 
$dmd = mysql_query("INSERT INTO client  VALUES ('$nom','$prenom','$tel','$email');") or die("cant save client") ; 

?>