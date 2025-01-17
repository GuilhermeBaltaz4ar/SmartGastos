$(document).ready(function(){
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll',function(){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.height();
        let activeSectionIndex = 0;

        if(scrollPosition <= 0){
            header.css('box-shadow','none');
        }else{
            header.css('box-shadow','5px 1px 5px rgba(0,0,0,0.1)');
        }
        
        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 110;
            const sectionBottom = sectionTop + section.outerHeight();
        
            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false; // Moved inside the if block
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyW3nGszlBS-ZK8VVTWkFLVDKN4e3UUlpmYS1r0t4iKvL80KibCvvbCwwk5mZhUiJEaaQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg')

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Obrigado por se inscrever"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });

    scrollReveal().reveal('#cta',{
    origin: 'left',
    duration: 2000,
    distance: '20%',    
    });
    scrollReveal().reveal('.function',{
        origin: 'left',
        duration: 2000,
        distance: '20%',    
    });
    scrollReveal().reveal('#testimonial_app',{
        origin: 'left',
        duration: 1000,
        distance: '20%',    
    });~
    scrollReveal().reveal('#feedback',{
        origin: 'right',
        duration: 1000,
        distance: '20%',    
    });
    
});