//create the constructor function for user
class User{
    constructor(email,pass,fname,lname,age,gender,address,phone,payment,color){
        this.email=email;
        this.password=pass;
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.gender=gender;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}

function validate(user){
    let valid = true;

   //reset HTML styles

    $("#txtEmail").removeClass("error");
    $("#txtPassword").removeClass("error");


  if(user.email == ""){
        //if I get here it means that the email is empty
        valid = false;
        $("txtEmail").addClass("error");
        displayNotification("Please fill out the email field","error");
        
    }

    if(user.password == ""){
        //if I get here it means that the password is empty

        valid = false;
        $("txtPassword").addClass("error");
        displayNotification("Please fill out the password","error");
        
    }
    setTimeout(function (){
        hideNotification();
    },2000);


return valid;

}
function displayNotification(msg,notificationType){
    let DIV = $("#notifications");
    DIV.removeClass("hide error success");
    DIV.addClass(notificationType).text(msg);
    
}
function hideNotification(){
    let DIV=$("#notifications");
    DIV.addClass("hide");
}


function register(){
    //get the values from the inputs in the form
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFirstName=$("#txtFirstName").val();
    let inputLastName=$("#txtLastName").val();
    let inputAge=$("#txtAge").val();
    let inputGender=$("#txtGender").val();
    let inputAddress=$("#txtAddress").val();
    let inputPhone=$("#txtPhone").val();
    let inputPayment=$("#selPayment").val();
    let inputColor=$("#selColor").val();

    //create the newUser object

    let newUser = new User(inputEmail, inputPassword, inputFirstName, inputLastName, inputAge, inputGender, inputAddress, inputPhone, inputPayment, inputColor);

    if(validate(newUser)===true){
        displayNotification("successful registration","success");
        setTimeout(function(){
            hideNotification();
        },2000);
        saveUser(newUser);//this fn is on the storeManager
    }
   
    //clear the form

    $("input").val("");

}

function init(){
    console.log("Init");
}

window.onload=init;
