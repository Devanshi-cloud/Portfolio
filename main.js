const sidebar = document.querySelector('#sidebar');
const menuBtn = document.querySelector('#menu-btn');
const closeSidebarBtn = document.querySelector('#close-sidebar-btn');
const sidebarOverlay = document.querySelector('#sidebar-overlay');
const menuTabs = document.querySelectorAll('.tabs-container .tab');

/* Open */
menuBtn.onclick = () => openSidebar();

/* Close */
closeSidebarBtn.onclick = () => closeSidebar();
sidebarOverlay.onclick = () => closeSidebar;
/* Close on tab click */
menuTabs.forEach((tab)=>{
    tab.onclick = () => closeSidebar();
})

/*Function to open sidebar */
const openSidebar = () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
}

/*Function to close sidebar */
const closeSidebar = ()=>{
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

// /* Active tab */
// const sections = document.querySelectorAll('section');
// menuTabs[0].classList.add('active');
// window.onscroll = () =>{
//     sections.forEach((section)=>{
//         let top = window.scrollY;
//         let offset = section.offsetTop - 100;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');
//         if(top >= offset && top < offset + height){
//             menuTabs.forEach((tab)=>{
//                 tab.classList.remove('active');
//                 document.querySelectorAll('.tabs-container a[href+='+id+']').classList.add('active');
//     })
// }
//     })
// }

/* Hero odometer */
const odometers = document.querySelectorAll('.odometer');
setTimeout(function() {
    odometers.forEach((list) => {
        let id = list.getAttribute('id');
        if (id === 'Projects'){
            list.innerHTML = 10;
        }
        if (id === 'hackathons'){
            list.innerHTML = 5;
        }
        if (id === 'DSA'){
            list.innerHTML = 150;
        }
    })
    },3500)

    /* About video */
    const playButton = document.querySelector('.play');
    const videoContainer = document.querySelector('#video-container');
    const closeButton = document.querySelector('#close-btn');
    const video = document.querySelector('#video');

    playButton.onclick = () => openVideo();
    closeButton.onclick = () => closeVideo();

    /* Function to open video */
    const openVideo = () =>{
        videoContainer.classList.add('active');
        video.play();
        video.currentTime = 0;
    } 
    /* Function to close video */
    const closeVideo = () =>{
        videoContainer.classList.remove('active');
        video.pause();
    }

/* Feedbacks start */
$('.feedbacks-container').slick({
    infinite: true,
    slidesToShow:3,
    slidesToScroll:1, 
    autoplay:true,
    pauseOnHover:true,
    responsive:[
        {
            breakpoint:900,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:1,
            }
        }
    ]
})
/* Feedbacks end */

/* Animations start */
//Gsap nav start
//Gsap nav end
/* Animations end */