const faqs=document.querySelectorAll(".faq")
faqs.forEach(faq=>{
    const answer=faq.querySelector(".answer")
    const icon=faq.querySelector(".question")
    faq.addEventListener("click",()=>{
        answer.classList.toggle("active")
        const ico=icon.querySelector(".change")
        ico.classList.toggle("ball")
    })
})

function gotolink(link){
    location.href=link.value;
}