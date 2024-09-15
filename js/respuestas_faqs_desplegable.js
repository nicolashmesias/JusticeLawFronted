document.querySelectorAll('.faq-item').forEach(function(faqItem) {
    faqItem.addEventListener('click', function() {
        const answer = this.nextElementSibling; 
        const icon = this.querySelector('.plus-icon'); 
        
        if (answer.style.display === 'block' || answer.style.display === '') {
            answer.style.display = 'none';  
            icon.src = "../../img/mas.png";  
        } else {
            
            document.querySelectorAll('.faq-answer').forEach(function(ans) {
                ans.style.display = 'none';  
            });
            document.querySelectorAll('.plus-icon').forEach(function(icon) {
                icon.src = "../../img/mas.png";  
            });
            
            answer.style.display = 'block'; 
            icon.src = "../../img/cerrarsecion.png"; 
        }
    });
});

