window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
	showNavOnScroll();
	showBackToTopButtonOnScroll();

	activateMenuAtCurrentSection(home);
	activateMenuAtCurrentSection(services);
	activateMenuAtCurrentSection(about);
	activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
	const targetLine = scrollY + innerHeight / 2;

	// verificar se a seção passou da linha
	// quais dados vou precisar?
	const sectionTop = section.offsetTop;
	const sectionHeight = section.offsetHeight;
	const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

	// verificar se a base está abaixo da linha alvo

	const sectionEndsAt = sectionTop + sectionHeight;
	const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

	// limites da seção
	const sectionBoundaries =
		sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

	const sectionId = section.getAttribute("id");
	const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

	menuElement.classList.remove("active");
	if (sectionBoundaries) {
		menuElement.classList.add("active");
	}
}

function showNavOnScroll() {
	const navigation = document.getElementById("navigation");
	if (scrollY > 0) {
		navigation.classList.add("scroll");
	} else {
		navigation.classList.remove("scroll");
	}
}

function showBackToTopButtonOnScroll() {
	const backToTopButton = document.getElementById("backToTopButton");
	if (scrollY > 550) {
		backToTopButton.classList.add("show");
	} else {
		backToTopButton.classList.remove("show");
	}

	backToTopButton.addEventListener("click", function () {
		// Substitua "seu-link-aqui" pelo link desejado
		window.open(
			"https://api.whatsapp.com/send?phone=5571996070415&text=Ol%C3%A1?!%20gostaria%20de%20falar%20com%20um%20atendente%20da%20PettyRural,%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site.",
			"_blank"
		);
	});
}

function openMenu() {
	document.body.classList.add("menu-expanded");
}

function closeMenu() {
	document.body.classList.remove("menu-expanded");
}

ScrollReveal({
	origin: "top",
	distance: "30px",
	duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #produtos,
  #produtos header,
  #produtos .card,
  #about, 
  #about header, 
  #about .content`);

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dots: false, // Removendo os dots
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
});


$(document).ready(function () {
	$(".owl-carousel2").owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dots: false, // Removendo os dots
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
});
  
