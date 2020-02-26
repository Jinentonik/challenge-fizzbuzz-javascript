function fizzBuzz(){
    //prompt a window so that user can enter a number.
    let num = prompt("Please enter a number between 1 and 100");
    //check if the number is between 1 and 100
    let numArr = num.split("");
    let reply = "";
    if(num >=1 && num <= 100){
        if(num % 3 == 0 
            || num % 5 == 0 
            || num % 7 == 0 
            || numArr[0] == 3 
            || numArr[1] == 3
            || numArr[0] == 5
            || numArr[1] == 5
            || numArr[0] == 7
            || numArr[1] == 7){

            if(num % 3 == 0){
                reply = reply + " Fizz";
            }
    
            if(numArr[0] == 3){
                reply = reply + " Fizz";
            }
    
            if(numArr[1] == 3){
                reply = reply + " Fizz";
            }
    
            if(num % 5 == 0){
                reply = reply + " Buzz";
                
            }
            
            if(numArr[0] == 5){
                reply = reply + " Buzz";
                
            }
            if(numArr[1] == 5){
                reply = reply + " Buzz";
            }
            if(num % 7 == 0){
                reply = reply + " Woof";
            }
            if(numArr[0] == 7){
                reply = reply + " Woof";
            }
            if(numArr[1] == 7){
                reply = reply + " Woof";
            }
        }else {
            reply = num;
        }
        /*
        if(num % 3 === 0){
            reply = reply + " Fizz";
            console.log(reply);
            for(let i = 0; i < numArr.length; i++){
                if(numArr[i] == 3){
                    reply = reply + " Fizz";
                    console.log(reply);
                }
            }
        }

        if(num % 5 === 0){
            reply = reply + " Buzz";
            for(let j = 0; j < numArr.length; j++){
                if(numArr[j] == 5){
                    reply = reply + " Buzz";
                }
            }
        }

        if(num % 7 === 0){
            reply = reply + " Woof";
            for(let k = 0; k < numArr.length; k++){
                if(numArr[k] == 7){
                    reply = reply + " Woof";
                }
            }
        }
        */
        




        // if(num % 3 === 0 && num % 5 === 0){
            // reply = "Fizz Buzz";
        // }else if(num % 3 === 0){
            // reply = "Fizz";
        // }else if(num % 5 === 0){
            // reply = "Buzz";
        // }else {
            // alert(num);
        // }
        
    }else if(num > 100){//action execute if the number is greater than 100
        alert("Please pick a smaller number");
    }else if(num < 1){//action execute if the number is smaller than 100
        alert("Please pick a larger number");
    }else {//action execute if the entry text is not a number
        alert("gobbledygook");
    }
     alert(reply);   
}