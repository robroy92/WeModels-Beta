<?php
header('Access-Control-Allow-Origin: *');   
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Headers: accept,content-type');
header('Access-Control-Allow-Methods: DELETE,GET,HEAD,PATCH,POST,PUT');

include 'db.inc.php';
$user = json_decode(file_get_contents('php://input')); // get user from json
// code
$email = mysqli_real_escape_string($conn, $user->username);
$pwd = mysqli_real_escape_string($conn, $user->password);

$sql = "SELECT * FROM modalusers WHERE user_email = '$email' AND user_activation = '1' ";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

if ($resultCheck<1){
//echo json_encode("pas d'utilisateur");
$status = "no user";
$uid = 0;
} else {
//echo json_encode("il existe un utilisateur");
if ($row = mysqli_fetch_assoc($result)){
    $hashedPwdCheck = password_verify($pwd, $row['user_pwd']);
//echo json_encode($hashedPwdCheck);
if ($hashedPwdCheck == false){
 //   echo json_encode('erreur password');
    $status = "wrong password";
    $uid = 0;
} else {
    $status = "OK";
    $uid = $row['user_id'];
}
}

}

//$response = ['status'=>$status, 'uid'=$uid];

echo json_encode($uid);
//echo $resultCheck ;

mysqli_close($conn);


?>

