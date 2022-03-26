<?php
//php validations
if(isset($_POST["cnaclick"])){

    $fnameerr="";
    $fname;
    
    if(empty($_POST['txtfirstname'])) {
        $fnameerr="Firstname is Required";
    }else {
        $fname=($_POST['txtfirstname']);
    }
    
    $lnameerr="";
    $lname;
    
    if(empty($_POST['txtlastname'])) {
        $lnameerr="LastName is Required";
    }else {
        $lname=($_POST['txtlastname']);
    }
    
    $emailerr="";
    $email;
    
    if(empty($_POST['txtemail'])) {
        $emailerr="Email is Required";
    }else {
        $email=($_POST['txtemail']);
    }
    
    $passworderr="";
    $password;
    
    if(empty($_POST['txtpassword'])) {
        $passworderr="Password is Required";
    }else {
        $password=($_POST['txtpassword']);
    }
    
    $addresserr="";
    $address;
    
    if(empty($_POST['txtgender'])) {
        $addresserr="Gender is Required";
    }else {
        $address =($_POST['txtgender']);
    }
    
    $genderErr="";
    $gender;
    
    if(empty($_POST['txtarea'])) {
        $genderErr="Address is Required";
    }else {
        $gender=($_POST['txtarea']);
    }
    
    $designationerr="";
    $designation;
    
    if(empty($_POST['txtselect'])) {
        $designationerr="Designation is Required";
    }else {
        $designation=($_POST['txtselect']);
    }
?>