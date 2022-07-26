// var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// if(inputEmail.value.match(mailFormat)){
//     alert("this is a valid email")
//     document.getElementById(exampleInputPassword1).style.border = "3px solid green";
//     return true
// }else{
//     alert("this is a valid email")
//     document.getElementById(exampleInputPassword1).style.border = "3px solid red";
//     return false
// }

function validateForm() {
    let useremail = document.forms["form1"]["fEmail"];
    let password = document.forms["form1"]["fPassword"];
    if (useremail.value == "") {
      useremail.style.border = "3px solid red";
      alert("Dont leave the email field empty😊😊");
      useremail.focus();
      return false;
    }else{
      username.style.border = "3px solid green";
    }

    //PASSWORD VALIDATION
    var p = password.value;
    if(
      !(
        p.search(/[0-9]/) < 0 &&
        p.search(/[A-Z]/) < 0 &&
        p.search(/[a-z]/) < 0 &&
      )
    ) {
      password.style.border = "3px solid green";
    }else if (p.length < 8) {
      alert("your password must be atleast 8 characters");
      password.focus();
      password.style.border = "3px solid red";
      return false;
    }else if (p.search (/[a-z]/g) < 0) {
      alert("your paasword must contain atleast one lowercase letter.");
      password.focus();
      password.style.border = "3px solid red";
      return false;
    }else if (p.search (/[A-Z]/g) < 0) {
      alert("your password must atleast contain one uppercase letter.");
      password.focus();
      password.style.border = "3px solid red";
      return false;
    }else if (p.search (/[0-9]/g) < 0) {
      alert("your password must atleast contain one digit.");
      password.focus();
      password.style.border = "3px solid red";
      return false;
    }
//SELECT VALIDATION
var e = document.getElementById("select");
  var optionSelindex = e.options[e.selectedIndex].value;
  var optionSelectedText = e.options[e.selectedIndex].text;
  if (optionSelindex == 0) {
    alert("Please select your respective age group");
    return false;
  }else{
    alert("Success !!  You have selected an age group:" + optionSelectedText);
  }
  
    //CHECKBOX VALIDATION
    var check = document.getElementById("flexRadioDefault1");
    if (
      document.getElementById("flexRadioDefault1").checked == true ||
      document.getElementById("flexRadioDefault2").checked == true
    ){
      alert("Thanks for making a choice");
    }else{
      alert("Plese make a choice");
      check.focus();
      return false;
    }
    
   
  