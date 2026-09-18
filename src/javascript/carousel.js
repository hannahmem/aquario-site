const buttons = document.querySelectorAll("[data-carousel-button]");
const dotsNav = document.querySelectorAll(".carousel-button");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = document.querySelector("[data-slides]");
        // console.log(slides);

        const activeSlide = slides.querySelector("[data-active]");
        // console.log(activeSlide)
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

// Banners carousel decoration desktop

const container = document.querySelector('.banner-carousel')
const slides = document.querySelector('.slides')
const btnLeft = document.querySelector('.left-arrow')
const btnRight = document.querySelector('.right-arrow')
const images = document.querySelectorAll('.banner-carousel .slides img')

const imagesLen = images.length

let index = 0
let timer = null

btnLeft.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = imagesLen - 1
    }
    changeImage()
})

btnRight.addEventListener('click', () => {
    increaseIndex()
    changeImage()

})

const changeImage = () => {
    slides.style.transform = `translateX(${index * -100}%)`
    slidesMob.style.transform = `translateX(${index * -100}%)`
}

const increaseIndex = () => {
    index++
    if (index > 2) {
        index = 0
    }
}

const startAutoplay = () => {
    if (timer) return
    timer = setInterval(() => {
        increaseIndex()
        changeImage()
    }, 4000);
}

const stopAutoplay = () => {
    clearInterval(timer)
    timer = null
}

container.addEventListener('mouseenter', stopAutoplay)
container.addEventListener('mouseleave', startAutoplay)

// banner decoration mobile 
const slidesMob = document.querySelector('.slides-mobile')
const containerMob = document.querySelector('.banner-carousel-mobile')
const imagesMobile = document.querySelectorAll('.slides-mobile img')
const btnLeftMob = document.querySelector('.left-arrow-mobile')
const btnRightMob = document.querySelector('.right-arrow-mobile')

const imagesMobLen = imagesMobile.length

btnLeftMob.addEventListener('click', () => {
    index--;
    if (index < 0) index = imagesMobLen - 1 
    changeImage()
})

btnRightMob.addEventListener('click', () => {
    increaseIndex()
    changeImage()

})

containerMob.addEventListener('mouseenter', stopAutoplay)
containerMob.addEventListener('mouseleave', startAutoplay)

startAutoplay()

// Banner Kailash carousel
const containerKai = document.querySelector('.banner-carousel-kailash')
const slidesKai = document.querySelector('.slides-kailash')
const btnLeftKai = document.querySelector('.left-arrow-kailash')
const btnRightKai = document.querySelector('.right-arrow-kailash')

let indexKai = 0
let timerKai = null

btnLeftKai.addEventListener('click', () => {
    indexKai--;
    if (indexKai < 0) indexKai = 1 
    changeBannerKai()
})

btnRightKai.addEventListener('click', () => {
    increaseIndexKai()
    changeBannerKai()

})

const changeBannerKai = () => {
    slidesKai.style.transform = `translateX(${indexKai * -100}%)`
}

const increaseIndexKai = () => {
    indexKai++
    if (indexKai > 1) indexKai = 0
}

// autoplay kailash
const startAutoplayKai = () => {
    if (timerKai) return
    timerKai = setInterval(() => {
        increaseIndexKai()
        changeBannerKai()
    }, 4000);
}

const stopAutoplayKai = () => {
    clearInterval(timerKai)
    timerKai = null
}

containerKai.addEventListener('mouseenter', startAutoplayKai)
containerKai.addEventListener('mouseleave', stopAutoplayKai)

startAutoplayKai()



// dotsNav.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         console.log(`Dot ${index} clicado!`);
//         const currentDot = document.querySelector(".carousel-button.active");
//         if (currentDot) {
//             currentDot.classList.remove("active");
//         }
//         dot.classList.add("active");
       
//         const sliderWrapper = document.querySelector(".slider-wrapper");
//         console.log(sliderWrapper);

//         if (!sliderWrapper) {
//             console.log("error")
//         }
//         // const slider = sliderWrapper.querySelector(".slider");
//         // const slides = slider.querySelectorAll(".slide-mobile");
//         // const activeSlide = slider.querySelector(".slide-mobile.active");
        
//         // if (activeSlide) {
//         //     activeSlide.classList.remove("active");
//         // }
//         // slides[index].classList.add("active");
//     })

// })

// document.addEventListener('DOMContentLoaded', () => {
//   const dotsNav = document.querySelectorAll('.carousel-button');
  
//   // 1. Verificação inicial obrigatória
//   if (!dotsNav.length) {
//     console.error('Nenhum botão encontrado! Verifique o seletor.');
//     return;
//   }

//   // 2. Teste de eventos alternativo (elimina falsos positivos)
//   dotsNav.forEach(dot => {
//     // Evento mouseenter para teste básico
//     dot.addEventListener('mouseenter', () => {
//       dot.style.border = '2px solid red'; // Feedback visual imediato
//     });

//     // Evento click principal
//     dot.addEventListener('click', function(e) {
//       e.stopPropagation(); // Impede propagação
//       console.log('Clique registrado!', this);

//       // Remova classes ativas existentes
//       document.querySelectorAll('.carousel-button.active').forEach(el => {
//         el.classList.remove('active');
//       });

//       // Adicione classe ao botão atual
//       this.classList.add('active');

//       // Sua lógica de slides aqui...
//     }, { once: false, passive: true }); // Opções otimizadas
//   });
// });

// dotsNav.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         // Remove a classe 'active' do dot atual
//         const currentDot = document.querySelector(".carousel-button.active");
//         if (currentDot) {
//             currentDot.classList.remove("active");
//         }
//         dot.classList.add("active");
       
//         // Encontra o slider e os slides
//         const sliderWrapper = dot.closest(".slider-wrapper");
//         const slider = sliderWrapper.querySelector(".slider");
//         const slides = slider.querySelectorAll(".slide-mobile"); // NodeList dos slides
        
//         // Remove a classe 'active' do slide ativo atual
//         const activeSlide = slider.querySelector(".slide-mobile.active");
//         if (activeSlide) {
//             activeSlide.classList.remove("active");
//         }
        
//         // Adiciona a classe 'active' ao slide correspondente ao dot clicado
//         slides[index].classList.add("active"); // Usa o índice diretamente
//     });
// });