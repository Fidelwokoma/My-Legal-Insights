
const textss = document.getElementById('price');
const btn_change = document.getElementById('btn_change');
const text_tax = document.getElementById('text_tax');

const total_price = document.getElementById('total_price');
function changeprice(e) {
    if (btn_change.textContent == 'NGN'){
      btn_change.textContent = 'USD'
      textss.textContent = '₦ 62,000'
      text_tax.textContent = '₦ 0'
      
      total_price.textContent = '₦ 62,000'
    }
    else{
      btn_change.textContent = 'NGN'
      textss.textContent = '$ 50'
      text_tax.textContent = '$ 0'
      
      total_price.textContent = '$ 50'
    }
}



const paymentForm = document.getElementById('checkoutForm');

paymentForm.addEventListener("submit", payWithPaystack, false);


function payWithPaystack(e) {

    e.preventDefault();
  
    let handler = PaystackPop.setup({
  
      key: 'pk_test_ed7bb70683ea41df964b779492b958f55f984352', // Replace with your public key
  
      email: document.getElementById("email").value,
  
      plan: 'PLN_f9kanbfpkd6eodd',
      //quantity: 1,
      //interval: 'monthly',//
  
      amount: document.getElementById("amount").value * 100,
  
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
  
      // label: "Optional string that replaces customer email"
  
      onClose: function(){
  
        alert('Window closed.');
  
      },
  
      callback: function(response){
  
        let message = 'Payment complete! Reference: ' + response.reference;
  
        alert(message);
  
      }
  
    });
  
  
    handler.openIframe();
  
  }
  