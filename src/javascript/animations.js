gsap.registerPlugin(ScrollTrigger)

let mm = gsap.matchMedia()

console.log(document.querySelector(".grid"))

mm.add("(win-width: 30em) and (prefers-reduced-motion: no-preference)", () => {
	gsap.fromTo(".animation1", {
		y: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: "#decoration", // lembre-se de usar o pai
			start: "top 80%",
			toggleActions: "restart"
		},
		opacity: 1,
		stagger: .2,
		duration: 1,
		y: 0,
	})

	gsap.fromTo(".animation2", {
		y: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: "#aromatherapy", // lembre-se de usar o pai
			start: "top 90%",
			toggleActions: "restart"
		},
		opacity: 1,
		stagger: .2,
		duration: 1,
		y: 0,
	})

	gsap.fromTo(".animation3", {
		y: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: "#clothes-and-accessories", // lembre-se de usar o pai
			start: "top 90%",
			toggleActions: "restart"
		},
		opacity: 1,
		stagger: .2,
		duration: 1,
		y: 0,
	})
})


mm.add("(max-width: 430px) and (prefers-reduced-motion: no-preference)", () => {
	const decoration = gsap.utils.toArray(".animation1");
	const aromatherapy = gsap.utils.toArray(".animation2");
	const clothes = gsap.utils.toArray(".animation3");


	decoration.forEach(img => {
		img.style.opacity = 0;
		gsap.fromTo(img, {
			y: 500,
			opacity: 0,

		}, {
			scrollTrigger: {
				trigger: img, // lembre-se de usar o pai
				start: "top 100%",
				end: "bottom bottom",
				toggleActions: "play none none none"
			},
			opacity: 1,
			stagger: .2,
			duration: 1,
			y: 0,
		})
	})

	aromatherapy.forEach(img => {
		img.style.opacity = 0;
		gsap.fromTo(img, {
			y: 500,
			opacity: 0,

		}, {
			scrollTrigger: {
				trigger: img, // lembre-se de usar o pai
				start: "top 100%",
				end: "bottom bottom",
				toggleActions: "play none none none"
			},
			opacity: 1,
			stagger: .2,
			duration: 1,
			y: 0,
		})
	})

	clothes.forEach(img => {
		img.style.opacity = 0;
		gsap.fromTo(img, {
			y: 500,
			opacity: 0,

		}, {
			scrollTrigger: {
				trigger: img, // lembre-se de usar o pai
				start: "top 100%",
				end: "bottom bottom",
				toggleActions: "play none none none"
			},
			opacity: 1,
			stagger: .2,
			duration: 1,
			y: 0,
		})
	})

})
