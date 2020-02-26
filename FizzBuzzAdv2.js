function fizzBuzz(){
    //prompt a window so that user can enter a number.
    let num = prompt("Please enter a number between 1 and 100");

    let reply = "";

    function checkNum(){
        for(let i = 0; i<num.length; i++){
            if(num[i] == 3){
                reply += " Fizz";
            }else if(num[i] == 5){
                reply += " Buzz";
            }else if(num[i] == 7){
                reply += " Woof";
            }
        }
    }
    checkNum();
    //check if it is a number
    if(isNaN(num)){
        alert("This is not a number.");
    }else if(num > 100){    //check if the number is between 1 and 100
        alert("Please enter a smaller number.")
    }else if (num < 1){    //check if the number is between 1 and 100
        alert("Please enter a larger number.")
    }else {
        if(num % 3 == 0){
            reply += " Fizz";
        }
        if(num % 5 == 0){
            reply += " Buzz";
        }
        if(num % 7 == 0){
            reply += " Woof";
        }
    }
    if(reply === ""){
        alert(num);
    }else{
        alert(reply);
    }
}
