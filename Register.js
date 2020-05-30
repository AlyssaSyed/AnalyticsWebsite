function formValidation(){
    
    var name = document.registration.name;
    var email = document.registration.email;
    var password = document.registration.password;
    var confirmpassword = document.registration.confirmpassword;

     if(valid_name(name)) {      
       if(validateEmail(email)) {
	          
           if(valid_password(password)){ 	          
	            if(valid_confirm_pass(confirmpassword,password)) {
			      return true;
			    }
			   else {
			       return false;
			     }
			  
              }			  
			  	      
		  }
	    }
       		      
}


function valid_name(name){
    if (name.value.length == 0){
        alert('Name cannot be empty.');
        document.registration.name.focus();
        return false;
    }
    return true;
}

function valid_email(email){
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(format)){
        return true;
    }
    else{
        alert('email invalid.');
        document.registration.email.focus();
        return false;
    }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value) == false) {
     alert('Invalid Email.');
     document.registration.email.focus();
     return false;     
  } else
  {
	return true;
  }
  
}

function valid_password(password){
    
    if (password.value.length < 8){
        alert('password too short.');
        document.registration.password.focus();
        return false;   
    }
    else{
        var val = /^[A-Za-z]/;
        if (password.value.match(val)) {
            return true
        }
        else{
            alert('password invalid.');
            document.registration.password.focus();
            return false;
        }
    }
}

function valid_confirm_pass(p1, p2){
   
    if(p1.value == p2.value){
     return true;
    }
    else{
        alert('password must match.');
        document.registration.confirmpassword.focus();
        return false;
    }
}

