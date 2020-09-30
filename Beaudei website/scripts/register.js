const validateform = formId => {
    const checkPassword = password => {
        var lowercase = false;
        var uppercase = false;
        var numeric = false;

        if (password.length < 8)
            return 1;
        for(pwdChar of password){
            if(!isNaN(parseInt(pwdChar)))
                numeric = true;
            else {
                if (pwdChar.charCodeAt() >= 97 && pwdChar.charCodeAt() <= 122)
                    lowercase = true;
                else if (pwdChar.charCodeAt() >= 65 && pwdChar.charCodeAt() <= 90)
                    uppercase = true;
            }
            if (lowercase && uppercase && numeric) 
                return 0;
        }
        return 2;
    };
    const name = formId.querySelector('#fName');
    const email = formId.querySelector('#fEmail');
    const password = formId.querySelector('#fPassword');
    const confirmPassword = formId.querySelector('#fConfirmPassword');
    var gender = '';
    if(document.getElementById("genm").checked === true){
        gender = "Male";
    }else if(document.getElementById("genf").checked === true){
        gender = "Female";
    }else{
        gender = false;
    }
    const skintype = formId.querySelector('#selectskin');
    const tos = formId.querySelector('#agree');
    console.log(gender);
    if(!name.value) {
        alert('Name cannot be empty!');
    }
    
    if (!email.value) {
        alert('Email cannot be empty');
    }
    
    const pwdTest = checkPassword(password.value);
    if (pwdTest) {
        if (pwdTest === 1) 
        alert('Password must at least have 8 characters');
        else
        alert('Password must at least have a lowercase, an uppercase letter, and a number');
    }
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match!');

    }
    
    if (gender.value === false ) {
        alert('You must select a gender');

    }
    
    if (!skintype.value) {
        alert('You must select a skin type');

    }
    if (!tos.checked) {
        alert('You must check the ToS before submitting');

    }

    if(name.value !== '' && email.value !== '' && pwdTest === 0 && password.value === confirmPassword.value && gender.value !== false && skintype.value != ''& tos.checked)
    {
        alert('Registration Succesful');
        formId.reset();
    }
};