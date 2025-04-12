const subscription = document.getElementById('subscription').checked;
const subscribed = document.getElementById('subscribed');

let hash ='#';

for (i=0; i<=7; i++){

  console.log(hash);
  hash += '#'


}

for (i=1; i<=100; i++){

  if(i % 3 == 0){
    console.log('FIZZ')
  } else if(i % 5 == 0){
    console.log('BUZZ')
  } else {
    console.log(i)
  }

}


