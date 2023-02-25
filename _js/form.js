var inputs = document.getElementsByClassName('form_input');
for(var i =0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('pin_up')
        } else {
            this.nextElementSibling.classList.remove('pin_up') 
        }
    });
}
function uncheckAll() {
    document.querySelectorAll('check').forEach(function(checkElement) {
        checkElement.checked = false;
    });
}