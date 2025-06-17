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