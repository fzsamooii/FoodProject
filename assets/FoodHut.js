const nav=document.querySelector('.nav');
const sectionOne=document.querySelector('#nav-item1')
const sectionTwo=document.querySelector('#nav-item2')
const sectionThree=document.querySelector('#nav-item3')
const sectionFour=document.querySelector('#nav-item4')
const sectionFive=document.querySelector('#nav-item5')
const sectionSix=document.querySelector('#nav-item6')
const sectionSeven=document.querySelector('#nav-item7')
nav.addEventListener('click',function(event){

    sectionOne.scrollIntoView(

        {behavior:'smooth'}
    
    )

})





