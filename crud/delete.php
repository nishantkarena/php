<?php
include "connection.php";

$did=$_GET['id'];
//  error_reporting(0);
  $query = "SELECT * FROM student where id = '$did'";
  $data = mysqli_query($conn, $query);
  $total = mysqli_num_rows($data);
if($total == 0)
{
    echo "No Data available";
}
else
{
    $sql = "DELETE FROM student WHERE id='$did'";

    if ($conn->query($sql) === TRUE) {
     echo '1';
    } else {
    echo "Error deleting record: " . $conn->error;
    }
}