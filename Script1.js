const form = document.getElementById('form');
const name = document.getElementById('fname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const code = document.getElementById('code');
const revealH = document.getElementById('revealH');
const comment = document.getElementById('comment')


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const emailValue = email.value.trim();
	const addressValue = address.value.trim();
	const cityValue = city.value.trim();
    const codeValue = code.value.trim();
    const revealHValue = revealH.value.trim();
	const commentValue = comment.value.trim();
    
	
	if(fnameValue === '') {
		setErrorFor(fname, 'Name cannot be blank');
	} else {
		setSuccessFor(fname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(addressValue === '') {
		setErrorFor(address, 'Address cannot be blank');
	} else {
		setSuccessFor(address);
	}
	
	if(cityValue === '') {
		setErrorFor(city, 'city cannot be blank');

	} else{
		setSuccessFor(city);
	}

    if(codeValue === '') {
		setErrorFor(code, 'Postal Code cannot be blank');
	} else if (!isCode(codeValue)) {
		setErrorFor(code, 'Not a valid Code');
	} else {
		setSuccessFor(code);
	}

    if (revealHValue === '' && document.getElementById('opt3').checked){
        setErrorFor(revealH, 'Hourly rates cannot be empty');
    }

    else if( (!isRevealH(revealHValue))  && document.getElementById('opt3').checked){
        setErrorFor(revealH, 'Invalid Value');
    }

    else{

        setSuccessFor(revealH);
    }


	if(commentValue === '' && (document.getElementById('opt1').checked || document.getElementById('opt2').checked)) {
		setErrorFor(comment, 'You have to enter something');

	} else{
		setSuccessFor(comment);
	}

	
}

function check(){
    if(document.getElementById('opt1').checked){
        document.getElementById('revealH').style.display = 'none';
		document.getElementById('comment').style.display = 'block';
    }

    else if(document.getElementById('opt2').checked){
        document.getElementById('revealH').style.display = 'none';
		document.getElementById('comment').style.display = 'block';
    }
    
    else {
        document.getElementById('revealH').style.display = 'block';
		document.getElementById('comment').style.display = 'none';
    }
 }

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function isCode(code){
    return /^(([a-zA-z]{1})([0-9]{1})([a-zA-z]{1})( )?([0-9]{1})([a-zA-z]{1})([0-9]{1}))$/.test(code);
}

function isRevealH(revealH){
	return /^([1-9]+)([0-9].)$/.test(revealH)
}




