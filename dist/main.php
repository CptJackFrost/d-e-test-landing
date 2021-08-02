<?php 
$response = ['name' => $_POST['name'], 'email' => $_POST['email'], 'message' => $_POST['message']];
echo json_encode($response);