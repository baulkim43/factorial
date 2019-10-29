var userNumber = parseInt(prompt("Give me a number."));

function factorial(userNumber) {
  if (userNumber < 0){
		return;
	}else if (userNumber === 0) {
		return 1;
  }else{return userNumber * factorial(userNumber - 1);
	}
}
alert(factorial(userNumber));
