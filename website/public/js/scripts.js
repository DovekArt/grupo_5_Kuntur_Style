console.log('scripts success');

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

$('form-search-products') && $('form-search-products').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target)
    if($('keywords').value){
        e.target.submit()
    }
})