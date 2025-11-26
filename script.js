function loginfunction(){
	var naprej=1;
	if(document.forms["login"]["email"].value=="" || document.forms["login"]["email"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your email",
		theme: 'auto'
		});
		naprej=0;
	
	}else if(!valid(document.forms["login"]["email"].value)){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "your email is wrong",
		theme: 'auto'
		});
		naprej=0;
	}else if(document.forms["login"]["pw"].value=="" || document.forms["login"]["pw"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your password",
		theme: 'auto'
		});
		naprej=0;
	
	}else if(!validatePassword(document.forms["login"]["pw"].value)){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Your password is wrong",
		theme: 'auto'
		});
		naprej=0;
	}if(naprej==1){
		Swal.fire({
		icon: "success",
		title: "Good boy",
		text: "good job",
		theme: 'auto'
		});
	}
}
function registerfunction(){
	var naprej=1;
	if(document.forms["register"]["email"].value=="" || document.forms["register"]["email"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your email",
		theme: 'auto'
		});
		naprej=0;
	}else if(!valid(document.forms["register"]["email"].value)){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "your email is wrong",
		theme: 'auto'
		});
		naprej=0;
	}else if(document.forms["register"]["pw1"].value=="" || document.forms["register"]["pw1"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your password",
		theme: 'auto'
		});
		naprej=0;
	}else if(!validatePassword(document.forms["register"]["pw1"].value)){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Your password does not follow the password rules",
		theme: 'auto'
		});
		naprej=0;
	}else if(document.forms["register"]["pw2"].value=="" || document.forms["register"]["pw2"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your password",
		theme: 'auto'
		});
		naprej=0;
	}else if(document.forms["register"]["pw1"].value!=document.forms["register"]["pw2"].value){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Your passwords dont match ",
		theme: 'auto'
		});
		naprej=0;
	}if(naprej==1){
		Swal.fire({
		icon: "success",
		title: "Good boy",
		text: "good job",
		theme: 'auto'
		});
	}
}
function valid(email){
	const patern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return patern.test(email);

}
function validatePassword(pw) {

    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 7;

}

