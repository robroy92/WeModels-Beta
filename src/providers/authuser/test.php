<?php
  
header('Access-Control-Allow-Origin: *');   
header('Access-Control-Allow-Headers: accept,content-type');
header('Access-Control-Allow-Methods: DELETE,GET,HEAD,PATCH,POST,PUT');

session_start();
include 'db.inc.php';
   
$user = json_decode(file_get_contents('php://input')); // get user from json

// code

$email = mysqli_real_escape_string($conn, $user->username);
$pwd = mysqli_real_escape_string($conn, $user->password);


echo $mail;
echo $pwd;
    // Error Handlers
    // Check if input are empty

/*    if(empty($email) || empty($pwd)) {
        echo ('empty');
        exit();
    } else{
        $sql = "SELECT * FROM modalusers WHERE user_email = '$email' AND user_activation = '1' ";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);

        if($resultCheck < 1) {
            echo ('wrong');
            exit();
        } else {
            if($row = mysqli_fetch_assoc($result)){
                // De-Hashing the password
                $hashedPwdCheck = password_verify($pwd, $row['user_pwd']);
                if ($hashedPwdCheck == false ){
                    echo ('wrong password');
                    exit();
                } elseif ($hashedPwdCheck == true) {
			//  echo ('ok');
                 
                    // Log In The User Here
                    $_SESSION['user_id'] = $row['user_id'];
                    $_SESSION['uid']=uniqid('ang_');
                    print  $_SESSION['uid'];
   
                    // Counting Visit
                    $id = $_SESSION['user_id'];
                   $visit = $row['user_visit_count'] + 1;
                   // update Database;
                    $sql = "UPDATE modalusers SET user_visit_count='$visit' WHERE user_id='$id'";
                   mysqli_query($conn, $sql);

                   

                }
            }
        }
    }


  