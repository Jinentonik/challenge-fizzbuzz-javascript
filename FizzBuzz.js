function fizzBuzz(){
    let num = prompt("Please enter a number between 1 and 100");
    if(num >=1 && num <= 100){
        if(num % 3 === 0 && num % 5 === 0 && num != 0){
            alert("FizzBuzz");
        }else if(num % 3 === 0 && num != 0){
            alert("Fizz");
        }else if(num % 5 === 0 && num !=0){
            alert("Buzz");
        }else {
            alert(num);
        }
    }else if(num > 100){
        alert("Please pick a smaller number");
    }else if(num < 1){
        alert("Please pick a larger number");
    }else {
        alert("gobbledygook");
    }      
}