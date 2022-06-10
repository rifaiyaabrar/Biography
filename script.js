const location2 = (window.location.href);
const date = (document.lastModified);
const hello = document.querySelector(".script");
const modification = () => {
    hello.textContent = `Last Modified date: ${date}      Location: ${location2}`
} 


var typed=new Typed(".auto-type",{
    strings: ["Programmer.","Programmer.","Programmer."],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true
})





// transition effect



// var sections = document.querySelectorAll('section');
// var options = {
// rootMargin: '0px',
// threshold: 0.25
// }
// var callback = (entries) => {
// entries.forEach((entry) => {
// var target = entry.target;
// if (entry.intersectionRatio >= 0.25) {
// target.classList.add("visible");
// } else {
// target.classList.remove("visible");
// }
// })
// }
// var observer = new IntersectionObserver(callback, options)
// sections.forEach((section, index) => {
// observer.observe(section)
// })