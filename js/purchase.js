let form = document.forms['personalInformation']
let errorLabel = document.getElementById('errorLabel');
document.getElementById('submitButton').addEventListener('click', onSubmit);

function getParameter(parameterName){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

document.getElementById('product').src = "assets/foto" + getParameter("productId") + ".jpg";

function onSubmit(event) {
    if(!checkName()){
        event.preventDefault();
        return;
    }
    else if(!checkPhone()){
        event.preventDefault();
        return;
    }
    else if(!checkEmail()){
        event.preventDefault();
        return;
    }
    else if(!checkGender()){
        event.preventDefault();
        return;
    }
    else if(!checkAge()){
        event.preventDefault();
        return;
    }
    else if(!checkDistrict()){
        event.preventDefault();
        return;
    }
    else if(!checkAddress()){
        event.preventDefault();
        return;
    }
    errorLabel.innerHTML = "";
    alert(`Order has been placed for ${form['name'].value}`);
}

function checkAddress(){
    if(form['address'].value == "") {
        errorLabel.innerHTML = "Address cannot be empty!";
        return false;
    }
    return true;
}

function checkDistrict() {
    if(form['district'].value == "") {
        errorLabel.innerHTML = "District cannot be empty!";
        return false;
    }
    return true;
}

function checkAge(){
    if(form['age'].value < 1){
        errorLabel.innerHTML = "Please enter a valid age!";
        return false;
    }
    return true;
}

function checkGender(){
    if(!document.getElementById('maleBtn').checked && !document.getElementById('femaleBtn').checked){
        errorLabel.innerHTML = "Gender must be checked!";
        return false;
    }
    return true;
}

function checkEmail(){
    if(form['email'].value == ""){
        errorLabel.innerHTML = "Email cannot be empty!";
        return false;
    }
    if(form['email'].value.indexOf('@') > 0){
        if(form['email'].value.indexOf('@')+1 < form['email'].value.indexOf('.')){
            return true;
        }else{
            errorLabel.innerHTML = "Please enter a valid email!";
            return false;
        }
    }
    else{
        errorLabel.innerHTML = "Please enter a valid email!";
        return false;
    }
}

function checkPhone() {
    if(form['phonenumber'].value == "") {
        errorLabel.innerHTML = "Phone number cannot be empty!";
        return false;
    }
    if(isNaN(form['phonenumber'].value)){
        errorLabel.innerHTML = "Phone number can only contain number!";
        return false;
    }
    if(form['phonenumber'].value.length < 7){
        errorLabel.innerHTML = "Please enter a valid phone number!";
        return false;
    }
    return true;
}

function checkName() {
    if(form['name'].value == "") {
        errorLabel.innerHTML = "Name cannot be empty!";
        return false;
    }
    return true;
}