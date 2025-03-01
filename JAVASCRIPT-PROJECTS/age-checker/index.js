const userYearOfBirth = document.getElementById('text-box');
const userEligible = document.getElementById('userEligible');
const submitButton = document.getElementById('submit-btn');
const resetButton = document.getElementById('reset-btn');

const userAge = document.getElementById('userAge');
const presentYear = 2025;
let age;
const eligibleAge = 18;
const overAge = 35;



submitButton.onclick =  () => {

    age = userYearOfBirth.value;
    age = Number(age);
    age = presentYear - age;
    

    if (age === presentYear){
        userAge.innerHTML = '<p>Your birth year is required</p>'
        userEligible.innerHTML = '<p>Please enter your birth year above<p>'

    } else if (age > 110){

        userAge.textContent = `Enter valid birth year`;
        userEligible.textContent = '';


    } else if (age > overAge){

        userAge.textContent = `You are ${age} years old`;
        userEligible.textContent = 'You are over-age';


    } else if (age >= eligibleAge){

        userAge.textContent = `You are ${age} years old`;
        userEligible.textContent = 'You are eligible';
    } else {
        userAge.textContent = `You are ${age} years old`;
        userEligible.textContent = 'You are not eligible';

    }
}


resetButton.onclick = () => {
        userAge.textContent = '' ; 
        userEligible.textContent = '';
}



