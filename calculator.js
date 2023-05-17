document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var plywood = document.querySelector('input[name="plywood"]:checked').value;    
    var doorframe = document.querySelector('input[name="doorframe"]:checked').value;
    var doorwelt = document.querySelector('input[name="doorwelt"]:checked').value;
    var doorplank = document.querySelector('input[name="doorplank"]:checked').value;
    var quantity = document.querySelector('#quantity').value
    doorplank != null ? doorplank: 0;
    
    var chase  = (parseInt(plywood) + parseInt(doorframe)*2.5 + parseInt(doorwelt)*2.5 + parseInt(doorplank)*2.5) * quantity; 
    var totalPrice = chase;
    
    var result = document.getElementById('result');
    result.innerHTML = 'Загальна сума: ' + totalPrice + ' ₴';
    alert('Загальна сума: ' + totalPrice + ' ₴')
  });
  