<?php 
header('Access-Control-Allow-Origin: *'); 

$conn = new mysqli("localhost", "root", "", "submitform");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'];
    $number = $_POST['number']; 
    $mail = $_POST['mail'];

    $sql = "INSERT INTO formdetails (name, mobile, mail) VALUES ('$name', '$number', '$mail')";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success hhh";
    } else {
        echo "Error: " . mysqli_error($conn); 
    }
    $conn->close();
}
?>