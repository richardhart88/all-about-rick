window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

let submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function() {
    alert('Thank you for submitting.  I will be in touch shortly!')
})

