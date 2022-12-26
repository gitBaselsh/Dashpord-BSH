let bu_up=document.querySelector(" .arrow")

window.onscroll = ()=> {
if (window.scrollY>= 600){
    bu_up.style.display="block"

}else{
    bu_up.style.display="none"
}
}


bu_up.onclick=()=>{
window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
})
}



let dark_icon=document.getElementsByClassName("dark-icon")[0];
let page=document.getElementsByClassName("page")[0]
let sidebar=document.getElementsByClassName("sidebar")[0]
let head =document.getElementsByClassName("head")[0]
let wrapper=document.querySelectorAll(".wrapper > div")
let input=document.querySelector(".head  input")
let textarea =document.querySelector(".quick-draft  textarea")
let title =document.querySelector(".quick-draft  input")
let intro =document.querySelector(".welcome  .intro")
let responseve_table=document.querySelector(".responseve-table")
let project =document.querySelector(".project ")
let thead =document.querySelectorAll(".project thead tr td")

dark_icon.onclick=()=>{
    project.style.backgroundColor="#00000085"
    thead.forEach((ele)=>{
         ele.style.backgroundColor="#00000085"
         ele.style.color="white"
    })
   
    input.style.backgroundColor="#0000007a"
    responseve_table.style.backgroundColor="#0000007a"
    intro.style.backgroundColor="#0000007a"
    page.style.backgroundColor="#0000006b";
    title.style.backgroundColor="#00000085"
    textarea.style.backgroundColor="#00000085"
    sidebar.style.backgroundColor="#0000007a"
    head.style.backgroundColor="#0000007a"
    wrapper.forEach(element => {
        element.style.backgroundColor="#00000096"
        element.style.color="rgb(132 132 132)"
    });
}
let moon=document.querySelector(".white-icon");
moon.onclick=()=>{
    location.reload(window)

}