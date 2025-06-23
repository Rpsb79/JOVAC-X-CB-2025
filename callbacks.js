// Simulate fetching product data
function fetchProductData(productId, callback) {
  setTimeout(() => {
    const product = { id: productId, name: 'Product A', price: 100 };
    callback(null, product);
  }, 1000);
}

// Simulate processing an order
function processOrder(product, callback) {
  setTimeout(() => {
    const orderConfirmation = { orderId: '12345', product };
    callback(null, orderConfirmation);
  }, 1000);
}

// Using the functions
fetchProductData('001', (err, product) => {
  if (err) {
    console.error('Error fetching product:', err);
  } else {
    processOrder(product, (err, confirmation) => {
      if (err) {
        console.error('Error processing order:', err);
      } else {
        console.log('Order confirmed:', confirmation);
      }
    });
  }
});
