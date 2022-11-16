import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
}

refs.form.addEventListener('submit', onSubmit);

function onSubmit (event) {
  event.preventDefault();

  let { delay, step, amount } = getValue();

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  } 
}

function getValue() {
  return { 
   delay: Number(refs.delay.value),
    step: Number(refs.step.value),
    amount: Number(refs.amount.value),
 }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  
  const shouldResolve = Math.random() > 0.3;
  
    setTimeout(() => {
    if (shouldResolve) {
      
      resolve({position, delay});
      // Fulfill
    } else {
      
      reject({position, delay});
        // Reject
  }
  }, delay) 
  })
}

