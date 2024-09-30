
    document.addEventListener("DOMContentLoaded", function() {
        const faqItems = document.querySelectorAll(".faq-category ul li");

        faqItems.forEach(item => {
            const plusIcon = item.querySelector('.plus-icon');

            plusIcon.addEventListener('click', function() {
                const answer = item.querySelector('.faq-answer');

                if (answer) {
                    answer.classList.toggle('active');  

                    if (answer.classList.contains('active')) {
                        plusIcon.src = "../../img/menos.png";  
                        answer.style.display = "block";  
                    } else {
                        plusIcon.src = "../../img/mas.png";  
                        answer.style.display = "none";  
                }
            }
            });
        });
    });


