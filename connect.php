<?php
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];
    $Phone = $_POST['Phone'];
    $Company = $_POST['Company'];

    $conn = new mysqli('local', 'root', '','100th');
    if ($conn->connect_error)
    {
        die('Connection Failed : '.$conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("insert into registration(Name, Email, Password, Phone, Company) values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssis", $Name, $Email, $Password, $Phone, $Company);
        $stmt->execute();
        echo "registration Successfully...";
        $stmt->close();
        $conn->close();
    }
?>