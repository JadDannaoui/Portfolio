/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el)  =>{
    el.addEventListener('click', toggleSkills)

})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== EXPERIENCES MODAL ====================*/
const modalBtns = document.querySelectorAll('.experiences__button');

// Define modal content for each button
const modalsContent = [
    `
        <div class="experiences__modal active-modal">
            <div class="experiences__modal-content">
                <h4 class="experiences__modal-title">
                    Research Project – Energy Efficiency
                    <span style="display: flex; justify-content: space-between;">
                        <p class="experience_sub">Lebanese University</p>
                        <div class="experience_sub">
                            <i class="uil uil-calendar-alt"></i>
                            Present
                        </div>
                    </span>
                </h4>
                <i class="uil uil-times experiences__modal-close"></i>
                <ul class="experiences__modal-experiences grid">
                    <li class="experiences__modal-project">
                        <i class="uil uil-check-circle experiences__modal-icon"></i>
                        <p>Lead a project on integrating Phase Change Materials (PCM) into construction materials for enhanced energy efficiency. Developed and Optimized simulation models to create energy-saving building designs.</p>
                    </li>
                </ul>
            </div>
        </div>`,
    `
        <div class="experiences__modal active-modal">
            <div class="experiences__modal-content">
                <h4 class="experiences__modal-title">
                    Trainee Machinery Technician
                    <span style="display: flex; justify-content: space-between;">
                        <p class="experience_sub">MPCF</p>
                        <div class="experience_sub">
                            <i class="uil uil-calendar-alt"></i>
                            Nov 2022 - June 2023
                        </div>
                    </span>
                </h4>
                <i class="uil uil-times experiences__modal-close"></i>
                <ul class="experiences__modal-experiences grid">
                    <li class="experiences__modal-project">
                        <i class="uil uil-check-circle experiences__modal-icon"></i>
                        <p>Spearheaded initiatives to optimize tissue paper production, resulting in a 15% reduction in waste and a 10% increase in output.</p>
                    </li>
                    <li class="experiences__modal-project">
                        <i class="uil uil-check-circle experiences__modal-icon"></i>
                        <p>Conducted troubleshooting of machinery, reducing production line downtime by 20%</p>
                    </li>
                    <li class="experiences__modal-project">
                        <i class="uil uil-check-circle experiences__modal-icon"></i>
                        <p>Utilized Lean manufacturing principles to streamline processes and improve workflow efficiency.</p>
                    </li>
                </ul>
            </div>
        </div>`,
    `
        <div class="experiences__modal active-modal">
            <div class="experiences__modal-content">
                <h4 class="experiences__modal-title">
                    Vertical axis wind turbine
                    <span style="display: flex; justify-content: space-between;">
                        <p class="experience_sub">Independent Project</p>
                        <div class="experience_sub">
                            <i class="uil uil-calendar-alt"></i>
                            2022
                        </div>
                    </span>
                </h4>
                <i class="uil uil-times experiences__modal-close"></i>
                <ul class="experiences__modal-experiences grid">
                    <li class="experiences__modal-project">
                        <i class="uil uil-check-circle experiences__modal-icon"></i>
                        <p>Designed and built a vertical axis wind turbine. Focused on optimizing blade shapes and configuration to increase energy output by 30%. Managed data collection and performance analysis for renewable energy research.</p>
                    </li>
                </ul>
            </div>
        </div>`
];

// Add click event to each "View More" button
modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener('click', () => {
        // Insert the appropriate modal content based on the button index
        document.body.insertAdjacentHTML('beforeend', modalsContent[index]);

        // Add close functionality for the modal
        document.querySelector('.experiences__modal-close').addEventListener('click', () => {
            document.querySelector('.experiences__modal').remove();
        });
    });
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[data-id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('data-id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*==================== CONTACT FORM VALIDATIONS ====================*/ 
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
function validateName(){
    var name = document.getElementById('fullName').value;
    if(name.length == 0){
        nameError.innerHTML = 'Full name is required!';
        return false;
    }
    if( !name.match(/[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?/) ){
        nameError.innerHTML = 'Enter full name (First + Last Name)';
        return false;
    }
    nameError.innerHTML = '<i class="uil uil-check-circle experiences__modal-icon"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('email_id').value;
    if(email.length == 0){
        emailError.innerHTML = 'A valid email address is required!';
        return false;
    }
    // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
        emailError.innerHTML = 'Invalid email!';
        return false;
    }
    emailError.innerHTML = '<i class="uil uil-check-circle experiences__modal-icon"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;
    if (left>0){
        messageError.innerHTML = left + ' more characters are required!';
        return false;
    }
    messageError.innerHTML = '<i class="uil uil-check-circle experiences__modal-icon"></i>';
    return true;
}

function sendMail() {
    var name = document.getElementById('fullName').value;
    var email = document.getElementById('email_id').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    if (!validateName() || !validateEmail() || !validateMessage()) {
        return;
    }

    var params = {
        from_name: name,
        email_id: email,
        subject: subject,
        message: message
    };
    
    emailjs.send("service_xk2071p", "template_orq4gge", params)
    .then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message: " + error);
    });
}
