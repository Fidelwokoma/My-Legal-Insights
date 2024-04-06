const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {

  e.preventDefault();


  let handler = PaystackPop.setup({

    key: 'pk_live_dab4c823d0fac38dcbb6d5600faec75d92f12ee1', // Replace with your public key

    email: document.getElementById("email-address").value,

    plan: 'PLN_x2i95ejfl9zyddk',
    //quantity: 1,
    //interval: 'monthly',//


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
const textss = document.getElementById('price');
const btn_change = document.getElementById('btn_change');
const text_tax = document.getElementById('text_tax');

const total_price = document.getElementById('total_price');
function changeprice(e) {
    if (btn_change.textContent == 'NGN'){
      btn_change.textContent = 'USD'
      textss.textContent = '₦ 125,000.00'
      text_tax.textContent = '₦ 0.00'
      
      total_price.textContent = '₦ 125,000.00'
    }
    else{
      btn_change.textContent = 'NGN'
      textss.textContent = '$ 100.00'
      text_tax.textContent = '$ 0.00'
      
      total_price.textContent = '$ 100.00'
    }
}