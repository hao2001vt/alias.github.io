window.addEventListener('scroll',function(){
    var scrollY=window.scrollY;
    var navBar=this.document.querySelector('.navbar__scroll-wrap');
    if(scrollY>500){
        navBar.style.display='block';
    }
    if(scrollY<500){
        navBar.style.display='none';
    }
})