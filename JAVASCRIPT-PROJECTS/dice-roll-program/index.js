  const rollBtN = document.getElementById('roll-btn');
  const numLabel1 = document.getElementById('numLabel1');
  const numLabel2 = document.getElementById('numLabel2');
  const specialResult = document.getElementById('special-result')
  let randomNum1 = 0
  let randomNum2 = 0


rollBtN.onclick = () => {
  randomNum1 = Math.floor(Math.random() * 6) + 1 ;
  numLabel1.textContent = randomNum1;
  randomNum2 = Math.floor(Math.random() * 6) + 1;
  numLabel2.textContent = randomNum2;

  if (randomNum1 + randomNum2 == 7){

    specialResult.textContent = "Krap"

  } else {
    specialResult.textContent = "Roll Again"
  }

}