<html>
    <head>
        <title>Registration Form</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="css/bootstrap/bootstrap.css" type="text/css" rel="stylesheet" />
		<link href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" rel="Stylesheet" type="text/css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>		
		<script type="text/javascript">
			
			 
			 var $PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;
			 var $EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;

			$(document).ready(function(){
				var emailflag=false,passwordflag=false;
				$("#txtemail").blur(function(){
					$("#txtemailval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtemailval").html("(*) Email required..!!");
						emailflag=false;
					}
					else{
						if(!$(this).val().match($EmailIdRegEx))
						{
							$("#txtemailval").html("(*) Invalid Email..!!");
							emailflag=false;
						}
						else{
							emailflag=true;
						}
					}
				});
				$("#txtpassword").blur(function(){
					$("#txtpasswordval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtpasswordval").html("(*) Password required..!!");
						emailflag=false;
					}
					else{
						if(!$(this).val().match($PasswordRegEx))
						{
							$("#txtpasswordval").html("(*) Invalid Password..!!");
							emailflag=false;
						}
						else{
							emailflag=true;
						}
					}
				});
				$('#cnaclick').click(function(){
					$("#txtemailval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtemailval").html("(*) Email required..!!");
						emailflag=false;
					}
					else{
						if(!$(this).val().match($EmailIdRegEx))
						{
							$("#txtemailval").html("(*) Invalid Email..!!");
							emailflag=false;
						}
						else{
							emailflag=true;
						}
					}
					$("#txtpasswordval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtpasswordval").html("(*) Password required..!!");
						emailflag=false;
					}
					else{
						if(!$(this).val().match($PasswordRegEx))
						{
							$("#txtpasswordval").html("(*) Invalid Password..!!");
							emailflag=false;
						}
						else{
							emailflag=true;
						}
					}
					
				});
			});
        </script>
        <style type="text/css">
            #cnform{box-shadow:0px 0px 3px gray;margin-top:30px;margin-bottom:30px;}
			i.fa,b{color:teal;}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-12" id="cnform">
                    <h3 class="text-center"><i class="fa fa-user-plus"></i>Login/Register</h3><hr> 
                    
                    <div class="form-group">
                        <a class="btn btn-primary" href="login.php"><i class="fa fa-user-plus" style="color:white;"></i> Login</a>
                        <a class="btn btn-primary" href="registration.php"><i class="fa fa-user-plus" style="color:white;"></i> Register</a>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>