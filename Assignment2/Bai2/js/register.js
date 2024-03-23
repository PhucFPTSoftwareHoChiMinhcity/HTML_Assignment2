function showInfo()
{
    // lay Firstname 
    var Firstname = document.getElementById("Firstname").value;
    // lay Lastname
    var Lastname = document.getElementById("Lastname").value;
    // lay Username
    var Username = document.getElementById("Username").value;
    // lay Email
    var Email = document.getElementById("Email").value;
    // lay password
    var password = document.getElementById("password").value;
    // FirstnameError
    var FirstnameError = document.getElementById('FirstnameError');
    // LastnameError
    var LastnameError = document.getElementById('LastnameError');
    // UsernameError
    var UsernameError = document.getElementById('UsernameError');
    // EmailError
    var EmailError = document.getElementById('EmailError');
    // passwordError
    var passwordError = document.getElementById('passwordError');
    // isValid: true
    var isValid = true;
    // xuat thong bao
    alert(
        "Firstname: " + Firstname + 
        "\nLastname: " + Lastname +
        "\nUsername: " + Username +
        "\nEmail: " + Email + 
        "\nPassword: " + password
    );
    // validate Firstname 
    if(Firstname.trim()==='')
    {
        FirstnameError.innerHTML = 'Firstname is required';
        isValid = false;
    }
    else{
        FirstnameError.innerHTML = '';
    }
    // validate Lastname
    if(Lastname.trim()==='')
    {
        LastnameError.innerHTML = 'Lastname is required';
        isValid = false;
    }
    else{
        LastnameError.innerHTML = '';
    }
    // validate Username
    if(Username.trim()==='')
    {
        UsernameError.innerHTML = 'Username is required';
        isValid = false;
    }
    else{
        UsernameError.innerHTML = '';
    }
    // validate EmailError
    if(Email.trim()==='')
    {
        EmailError.innerHTML = 'Email is required';
        isValid = false;
    }
    else{
        EmailError.innerHTML = '';
    }
    // validate passwordError
    if(password.trim()==='')
    {
        passwordError.innerHTML = 'Password is required';
        isValid = false;
    }
    else{
        passwordError.innerHTML = '';
    }
    // prevent from submission if there are errors
    // kiem tra gia tri ton tai true or false
    if(!isValid)
    {
        return false;
    }
    else{
        alert('successfully');
        return true;
    }
}

