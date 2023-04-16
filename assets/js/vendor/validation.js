var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var subjectError=document.getElementById('Subject-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');


function validateName()
{
    var name=document.getElementById('contact-name').value;
    
    if(name.length ==0){
        nameError.innerHTML='Name is required';
        return false;
    }
    

   
 if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

    nameError.innerHTML='Write Full name';
    return false;
}
    nameError.innerHTML="";

    return true;

}
function validateEmail(){
    var email=document.getElementById('contact-email').value;


    if(email.length==0)
    {
        emailError.innerHTML='Email is required';
        return false;
    }

    if(!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){
        emailError.innerHTML='Email Invalid';
        return false;
    }
    
    emailError.innerHTML="";
    
    
    return true;
  }
  function validateSubject(){
    var Subject=document.getElementById('contact-subject').value;

    if(Subject.length<=5)
    {
        subjectError.innerHTML='please enter a valid Subject'
        return false;
    }
    subjectError.innerHTML=""
    
    return true;

  }

  function validateMessage(){
    var message=document.getElementById('contact-message').value;

    if(message.length==0)
    {
        messageError.innerHTML='invalid message'
        return false;
    }
    
    messageError.innerHTML="";
    
    return true;

  }

function submitForm() {
    if((!validateName()) || !validateEmail() || !validateMessage() || !validateSubject()){
    submitError.innerHTML='please fill all fields'
    return false;
}
}
  


