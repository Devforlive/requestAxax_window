function requestUser() {
  const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
          const user = {
            name: 'objectOne',
            id: 100
          };
          if (!user) {
            return reject(new Error('Error'))
          }
          console.log('request user', user);
          resolve(user); 

      }, 1000);
  });
  return promise;
}

function requestPayment(user) {
  const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
          const payment = {
            user: user.name,
            name: 'objecTwo',
            quantity: 200
          };
          if (!payment) {
            return reject(new Error('Error payment request'));
          }
          console.log('Request payment', payment);

          resolve(payment);
      }, 2000);
  });

  return promise;
}

function requestCalculation(data) {
  const promise = new Promise(function(resolve, reject) {
    setTimeout( function() {
    const math = Math.round(Math.sqrt(Math.random() * data.quantity)) + 0.99;
    if (!math) {
            return reject(new Error('Error payment request'));
          }
            console.log('Type of payment:', data.name, 'Amount:', math); 
          resolve(data);
    }, 3000)
  });
  return promise;
}

requestUser()
  .then(requestPayment)
  .then(requestCalculation)
  .catch();


