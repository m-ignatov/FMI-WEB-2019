<?php
$data = json_decode(file_get_contents('php://input'), true);

$result = "Validation failed.";
if (
    preg_match("/^[0-9a-z0A-Z_]{3,10}$/", $data['username']) == 1
    && preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z\d]{6,}$/", $data['password']) == 1
) {
    $result = "Validation successful.";
}

echo json_encode($result);
