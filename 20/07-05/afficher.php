<html>

<head>
<meta http-equiv="Content-Language" content="fr">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<title>New Page 1</title>
</head>

<body>
<?php
mysql_connect("localhost","root","") or die ("cant connect to data base ") ; 
mysql_select_db("aymenjani") or die("cant connect to data base aymen") ; 
$dmd = mysql_query("SELECT * FROM client WHERE prenom = 'jani' ") or die ("errore we cant found") ; 

while($i =  mysql_fetch_array($dmd)){
    echo "<br>name : " ; 
    echo $i["nom"] ; 
    echo "<br> prenom : " ; 
    echo $i["prenom"] ; 
    echo "<br> tel : " ; 
    echo $i["tel"] ; 
    echo "<br> email : " ; 
    echo $i["email"] ; 
}


?>

</body>

</html>
