<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kcs";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if($conn === false){
	die("ERROR: Could not connect. " 
		. mysqli_connect_error());
}
else{
//    echo "connection successfully"; 
}
?>