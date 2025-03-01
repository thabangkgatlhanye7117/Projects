//Get buttons and p by id and assign them in respective variables


let increaseBtn =document.getElementById('add');
let decreaseBtn = document.getElementById('subtract');
let resetBtN = document.getElementById('reset');
let countLabel = document.getElementById('count');
let count = 0;


// increase using onclick method
increaseBtn.onclick = () => {
   count++ ;
   countLabel.textContent = count;

}



// Decrease using onclick method

decreaseBtn.onclick = () => {
  count-- ;
  countLabel.textContent = count;

}



//Reset using Event Listener

resetBtN.addEventListener('click', () => {
  let count = 0;
  countLabel.textContent= count;
 
 }) 