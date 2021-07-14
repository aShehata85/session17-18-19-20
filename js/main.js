// sticky nav bar
let bodyScroll = document.querySelector('html ,body');
let sticknav = document.querySelector('.sticky-nav');

window.addEventListener('scroll' , function(){
    //  console.log(bodyScroll.scrollTop);
    //   console.log(sticknav);
    if(bodyScroll.scrollTop > 165){
        sticknav.style.display = 'block';
    }else{
        sticknav.style.display='none' ;
    }
}) ;


let setting = document.querySelector('.setting-menu .setting-icon a');

setting.addEventListener('click', function () {
    // console.log('clicked');
    // document.querySelector('.setting-menu').style.right = '0%';
    // when adding (.classList) the property we write without dot(.)
    document.querySelector('.setting-menu').classList.toggle('setting-open');
})

// let setting = document.querySelector('');

let menuIcon = document.querySelector('.menu .menu-icon');
let menu = document.querySelector('.header .sub');
let CloseMenu = document.querySelector('.close-icon');
// open menu
menuIcon.addEventListener('click' , function(){
    // console.log(menu);
    menu.style.display='block';
});
//close menu
CloseMenu.addEventListener('click' , function(){
    menu.style.display='none';
});

// start extra our-work
let extraImage = document.querySelectorAll('.extra');
let showMore = document.querySelector('.our-work .show-more');
let showLess = document.querySelector('.our-work .show-less');
let imageCount ;
// show extra image
showMore.addEventListener('click' , function(){
    //console.log(showMore);
    for(imageCount = 0 ; imageCount < extraImage.length ; imageCount++){
        extraImage[imageCount].style.display= 'block';
    }
    showMore.style.cssText = 'display:none';
    showLess.style.cssText = 'display:block; margin:2% auto;';
});

//hide extra image
showLess.addEventListener('click' , function(){
    //console.log(showMore);
    for(imageCount = 0 ; imageCount < extraImage.length ; imageCount++){
        extraImage[imageCount].style.display= 'none';
    }
    showMore.style.cssText = 'display:block; margin:2% auto;';
    showLess.style.display = 'none';
});

// validation form (subject)
let subject = document.querySelector('.subject');
let email = document.querySelector('.email');
let textArea = document.querySelector('.text-area');

subject.addEventListener('blur' , function(){
    //console.log(subject.value.length)
    if(this.value.length < 2){
        this.classList.add('border' , 'border-danger');
        this.classList.remove('border' , 'border-success');
        document.querySelector('.subject-helper').textContent = 'please insert subject';
        document.querySelector('.subject-helper').classList.add('text-danger');
    }else{
        this.classList.add('border' , 'border-success');
        this.classList.remove('border' , 'border-danger');
        document.querySelector('.subject-helper').textContent = '';
    }
})

// validation form (email)
let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('blur' , function(){
    // console.log(email.value.length)
    if(this.value.match(mailFormat)){
        this.classList.add('border' , 'border-success');
        this.classList.remove('border' , 'border-danger');
        document.querySelector('.email-helper').textContent = 'valid email address!';
        document.querySelector('.email-helper').classList.add('text-success');
        document.querySelector('.email-helper').classList.remove('text-danger');
    }else{
        this.classList.add('border' , 'border-danger');
        document.querySelector('.email-helper').textContent = 'You entered invalid email adress!';
        document.querySelector('.email-helper').classList.add('text-danger');
    }
})

// validation form (text-area)

textArea.addEventListener('blur' , function(){
    if(this.value.length < 5){
        this.classList.add('border' , 'border-danger');
        this.classList.remove('border' , 'border-success');
        document.querySelector('.text-area-helper').textContent = 'please enter your message';
        document.querySelector('.text-area-helper').classList.add('text-danger');
    }else{
        this.classList.add('border' , 'border-success');
        this.classList.remove('border' , 'border-danger');
        document.querySelector('.text-area-helper').textContent = 'message accepted';
        document.querySelector('.text-area-helper').classList.add('text-success');
        document.querySelector('.text-area-helper').classList.remove('text-danger');
    }
})


// Scroll top
let iconScroll = document.querySelector('.scroll-top');
window.addEventListener('scroll' , function(){
    if(bodyScroll.scrollTop >=60){
        iconScroll.style.display = 'block';
    }else{
        iconScroll.style.display = 'none';
    }
})
