let testimonial_image=document.querySelector('.person_image')
let t1='I had worked with Alif in AzureLabs when he was here as an intern.I can vouch that Alif is a really sincere programmer who will grind till the last day to make your project look perfect.'
let t2="Alif is a realy hardworking guy.I had worked with him in Robi for 6 months and within this short time Alif managed to become the manager's go to guy for any problem!."
let t3='I would highly recommend Alif to any employer just because of the energy he brings to the table.Extremely passionate programmer who sets a very high standard on work life goals.'
let left_arrow=document.querySelector('#left_arrow')
let right_arrow=document.querySelector('#right_arrow')

right_arrow.addEventListener('click',()=>{
    let person_no=testimonial_image.src 
    person_no=person_no[person_no.length-5]
    let testimonial_name=document.querySelector('.testimonial_name')
    let testimonial_text=document.querySelector('.testimonial_text')
    if (person_no==1){
        testimonial_image.src='images/person2.jpg'
        testimonial_name.innerHTML='Ashton Graham'
        testimonial_text.innerHTML=t2
    }else if(person_no==2){
        testimonial_image.src='images/person3.jpg'
        testimonial_name.innerHTML='Roberto Gusto'
        testimonial_text.innerHTML=t3
    }else if(person_no==3){
        testimonial_image.src='images/person1.jpg'
        testimonial_name.innerHTML='Juan Alvarez'
        testimonial_text.innerHTML=t1
    }
})
left_arrow.addEventListener('click',()=>{
    let person_no=testimonial_image.src 
    person_no=person_no[person_no.length-5]
    let testimonial_name=document.querySelector('.testimonial_name')
    let testimonial_text=document.querySelector('.testimonial_text')
    
    if (person_no==1){
        testimonial_image.src='images/person3.jpg'
        testimonial_name.innerHTML='Roberto Gusto'
        testimonial_text.innerHTML=t3

    }else if(person_no==2){
        testimonial_image.src='images/person1.jpg'
        testimonial_name.innerHTML='Juan Alvarez'
        testimonial_text.innerHTML=t1
    }else if(person_no==3){
        testimonial_image.src='images/person2.jpg'
        testimonial_name.innerHTML='Ashton Graham'
        testimonial_text.innerHTML=t2
    }
})
