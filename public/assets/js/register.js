 $(document).ready(function () {
            $('#first_name_error_message').hide();
			$('#last_name_error_message').hide();
			$('#email_error_message').hide();
			
			var error_firstname=false;
			var error_lastname=false;
			var error_email=false;
			
			$('#firstName').focusout(function () { check_firstname(); });
			$('#lastName').focusout(function () { check_lastname(); });
			$('#myEmail').focusout(function () { check_email(); });
			
			function check_firstname()
				{
				var firstname_length = $('#firstName').val().length;
				if(firstname_length==0)
				{
					$('#first_name_error_message').html('Please provide your first name');
					$('#first_name_error_message').show();
					error_firstname=true;
				}
				else{
					$('#first_name_error_message').hide();
				}
				}
				
				function check_lastname()
				{
					
				var lastname_length = $('#lastName').val().length;
				if(lastname_length==0)
				{
					$('#last_name_error_message').html('Please provide your last name');
					$('#last_name_error_message').show();
					error_lastname=true;
				}
				else{
					$('#last_name_error_message').hide();
				}
				}
				
				function check_email()
				{
				
				  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                 if(pattern.test($('#myEmail').val()))
					 {
					  $('#email_error_message').hide();
					 }
	             else
					{
						$('#email_error_message').html('Please enter a valid email address');
						$('#email_error_message').show();
						error_email=true;
					}
				}
				
            $('#btnJoinNow').click(function () {
		
				error_firstname=false;
				error_lastname=false;
			    error_email=false;
			
				check_firstname();
				check_lastname();
				check_email();
			
				if(error_firstname == true || error_lastname == true || error_email==true)
					{
						return;
					}
					
					var resultElement = $('#resultDiv');
	
				var requestData = {};
					requestData.firstname = $('#firstName').val();
					requestData.lastname = $('#lastName').val();
					requestData.email = $('#myEmail').val();
					requestData.status = $('#status').val();
						
                $.ajax({
                   url: 'http://54.175.10.132:3000/register/user',
					//url: 'http://localhost:3000/register/user',
                    method: 'post',
                    data: JSON.stringify(requestData),
					contentType: 'application/json',
                    success: function (response) {
                        if (response.message != null) {
                            resultElement.html(response.message);
                        }
                        else {
                            resultElement.html('Hello ' + response.firstname +' '+response.lastname + ', '+ 'Thank You for registering with us!');
                        }
                    },
                    error: function (err) {
						alert('err');
                    }
                });
            });
    });