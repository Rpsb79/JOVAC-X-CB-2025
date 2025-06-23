// Simulate fetching product data
function fetchProductData(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = { id: productId, name: 'Product A', price: 100 };
      resolve(product);
    }, 1000);
  });
}

// Simulate processing an order
function processOrder(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderConfirmation = { orderId: '12345', product };
      resolve(orderConfirmation);
    }, 1000);
  });
}

// Using the functions with promise chaining
fetchProductData('001')
  .then(product => processOrder(product))
  .then(confirmation => {
    console.log('Order confirmed:', confirmation);
  })
  .catch(error => {
    console.error('Error:', error);
  });
