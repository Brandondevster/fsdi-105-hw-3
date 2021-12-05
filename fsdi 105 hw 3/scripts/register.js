console.log("User register");
//create constructor
class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        //this.attr=parameter;
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}

function isValid(user){
    // return false when the user is not valid
    // return true when the user is valid
    let valid = true;
    // we reset the original apperance all inputs
    // by removing the error class (see style.css)
    $('input').removeClass('error');
    if(user.fname.length == 0){
        // if we get here then the first name has not a valid value
        valid = false;
        // we add this error class (check css file) if the first name is not valid
        $("#txtFirst").addClass("error");
    }
    if(user.lname.length == 0){
        // is not a valid value
        $("#txtLast").addClass("error");
        valid = false;
    }
    if(user.password.length == 0){
        // is not a valid value
        $("#txtPassword").addClass("error");
        valid = false;
    }
    if(user.email.length == 0){
        // is not a valid value
        $("#txtEmail").addClass("error");
        valid = false;
    }
    return valid;
}

function registerUser(){
    let email = $("#txtEmail").val();//**check your id on the HTML
    let password =$("#txtPassword").val();
    let first =$("#txtFirst").val();
    let last =$("#txtLast").val();
    let age =$("#txtAge").val();
    let address =$("#txtAddress").val();
    let phone =$("#txtPhone").val();
    let payment =$("#txtPayment").val();
    let color =$("#txtColor").val();
    let user=new User(email,password,first,last,age,address,phone,payment,color);
    if(isValid(user)){
        $('#usersTable').append(createRow(user));
        console.log(user);
        saveUser(user);// this fn is on the storageManger.js
    }
    clearInputs();
}
function clearInputs(){
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#txtPayment").val("");
    $("#txtColor").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
}
function init(){
    console.log("Init function");
    $("#btnSave").click(registerUser);
}
window.onload=init;