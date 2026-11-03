gsap.registerPlugin(ScrollTrigger)

let mm = gsap.matchMedia()

const animateDesktop = (target, trig, perc) => {
	gsap.fromTo(target, {
		y: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: trig,
			start: `top ${perc}`,
			toggleActions: "restart"
		},
		opacity: 1,
		stagger: .2,
		duration: 1,
		y: 0,
	})
}

const animateMobile = (img) => {
	return gsap.fromTo(img, {
		y: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: img,
			start: "top 140%",
			toggleActions: "play none none none"
		},
		opacity: 1,
		stagger: .2,
		duration: 1,
		y: 0,
	})
}

mm.add("(min-width: 28em) and (prefers-reduced-motion: no-preference)", () => {
	animateDesktop(".animation1", "#decoration", "80%")
	animateDesktop(".animation2", "#aromatherapy", "90%")
	animateDesktop(".animation3", "#clothes-and-accessories", "90%")
})


mm.add("(max-width: 27em) and (prefers-reduced-motion: no-preference)", () => {
	const decoration = gsap.utils.toArray(".animation1");
	const aromatherapy = gsap.utils.toArray(".animation2");
	const clothes = gsap.utils.toArray(".animation3");


	decoration.forEach(img => {
		img.style.opacity = 0;
		animateMobile(img)
	})

	aromatherapy.forEach(img => {
		img.style.opacity = 0;
		animateMobile(img)
	})

	clothes.forEach(img => {
		img.style.opacity = 0;
		animateMobile(img)
	})
})
