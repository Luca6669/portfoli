window.addEventListener('load', function(){
const navToogle = document.querySelector('.nav-toogle');

navToogle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
})

const link = document.querySelectorAll('.nav-link');

link.forEach(link=>{
    link.addEventListener('click',()=>{
         document.body.classList.remove('nav-open');
    })
});

});
