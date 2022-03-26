			 var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
			 var $PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;
			 var $EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
			var $ConNoRegEx = /^([0-9]{10})$/;
			var $AgeRegEx = /^([0-9]{1,2})$/;

			$(document).ready(function(){
				var fnameflag=false,lnameflag=false,emailflag=false,passwordflag=false;
				$("#txtfirstname").blur(function(){
					$("#txtfirstnameval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtfirstnameval").html("(*) Firstname required..!!");
						fnameflag=false;
					}
					else{
						if(!$(this).val().match($FNameLNameRegEx))
						{
							$("#txtfirstnameval").html("(*) Invalid firstname..!!");
							fnameflag=false;
						}
						else{
							fnameflag=true;
						}
					}
				});
				$("#txtlastname").blur(function(){
					$("#txtlastnameval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtlastnameval").html("(*) Lastname required..!!");
						lnameflag=false;
					}
					else{
						if(!$(this).val().match($FNameLNameRegEx))
						{
							$("#txtlastnameval").html("(*) Invalid Lastname..!!");
							lnameflag=false;
						}
						else{
							lnameflag=true;
						}
					}
				});
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
				$("#txtconfpassword").blur(function(){
					$("#txtconfpasswordval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtconfpasswordval").html("(*) Confirm Password required..!!");
						emailflag=false;
					}
					else{
						if($(this).val()!=$("#txtpassword").val())
						{
							$("#txtconfpasswordval").html("(*) Password Does Not Match..!!");
							emailflag=false;
						}
						else{
							emailflag=true;
						}
					}
				});
				$("#txtarea").blur(function(){
					$("#txtareaval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtareaval").html("(*) Address required..!!");
						emailflag=false;
					}
					else{
						emailflag=true;
					}
				});
				$("#txtselect").blur(function(){
					$("#txtselectval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtselectval").html("(*) Select Designation..!!");
						emailflag=false;
					}
					else{
						emailflag=true;
					}
				});
				$('#cnaclick').click(function(){
					$("#txtfirstnameval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtfirstnameval").html("(*) Firstname required..!!");
						fnameflag=false;
					}
					else{
						if(!$(this).val().match($FNameLNameRegEx))
						{
							$("#txtfirstnameval").html("(*) Invalid firstname..!!");
							fnameflag=false;
						}
						else{
							fnameflag=true;
						}
					}
					$("#txtlastnameval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtlastnameval").html("(*) Lastname required..!!");
						lnameflag=false;
					}
					else{
						if(!$(this).val().match($FNameLNameRegEx))
						{
							$("#txtlastnameval").html("(*) Invalid Lastname..!!");
							lnameflag=false;
						}
						else{
							lnameflag=true;
						}
					}
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
					$("#txtareaval").empty();
					if($(this).val()=="" || $(this).val()==null)
					{
						$("#txtareaval").html("(*) Address required..!!");
						emailflag=false;
					}
					else{
						emailflag=true;
					}
				});
				$('#txtfirstname').keypress(function(e){
					$('#txtfnameval').empty();
					var flag= false;
					(e.which>=65 && e.which<=90) || (e.which>=92 && e.which<=122)
					?flag=true
					:(flag=false,$('#txtfirstnameval').html('(*) Please Enter Valid Name..'));
					return flag;
				});
				$('#txtlastname').keypress(function(e){
					$('#txtlastnameval').empty();
					var flag= false;
					(e.which>=65 && e.which<=90) || (e.which>=92 && e.which<=122)
					?flag=true
					:(flag=false,$('#txtlastnameval').html('(*) Please Enter Valid Name..'));
					return flag;
				});
			});