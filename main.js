// desktop version

var tl = gsap.timeline({
  defaults: {
    duration: 0.5
  }
});

function display_fun1() {
  tl.from(".left1-0", {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(".cwr-1", {
      y: 50,
      stagger: .2,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "10 1000",
      ease: "power3.out"
    }, '-=0.7')
  gsap.from('.c6-rp img', {
    opacity: 0,
    duration: 1,
    y: 700
  });
  gsap.from('.bottom-img', {
    opacity: 0,
    duration: 1,
    y: 100
  });
  $(".container-6").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");

}

function display_fun2() {
  tl.from(".left1-1", {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(".cwr-2", {
      y: 50,
      stagger: .2,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "35% 1000",
      ease: "power3.out"
    }, '-=0.7')
  gsap.from('.c7-rp-img1', {
    opacity: 0,
    duration: 1,
    y: -200
  });
  gsap.from('.c7-rp-img2', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  $(".container-7").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-7");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".container-6").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun3() {
  tl.from(".left1-2", {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(".cwr-3", {
      y: 50,
      stagger: .2,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "70% 1000",
      ease: "power3.out"
    }, '-=0.7')
  gsap.from('.nasa-fitness-app-img2', {
    opacity: 0,
    duration: 1,
    y: -200
  });
  gsap.from('.nasa-fitness-app-img1', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  $(".container-1").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun4() {
  tl.from(".left1-3", {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(".cwr-4", {
      y: 50,
      stagger: .2,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "100% 1000",
      ease: "power3.out"
    }, '-=0.7')
  gsap.from('.img-1', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  gsap.from('.img-2', {
    opacity: 0,
    duration: 1,
    y: -500
  });
  gsap.from('.img-3', {
    opacity: 0,
    duration: 1,
    y: -100
  });
  gsap.from('.img-4', {
    opacity: 0,
    duration: 1,
    y: 100
  });
  gsap.from('.img-5', {
    opacity: 0,
    duration: 1,
    y: -100
  });
  $(".container-2").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun5() {
  tl.from(".left1-4", {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(".cwr-5", {
      y: 50,
      stagger: .2,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "130% 1000",
      ease: "power3.out"
    }, '-=0.7')
  gsap.from('.c3-rp-img-1', {
    opacity: 0,
    duration: 1,
    x: 200
  });
  gsap.from('.c3-rp-img-2', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  gsap.from('.c3-rp-img-3', {
    opacity: 0,
    duration: 1,
    y: -300
  });
  gsap.from('.c3-rp-img-4', {
    opacity: 0,
    duration: 1,
    y: 300
  });
  gsap.from('.c3-rp-img-5', {
    opacity: 0,
    duration: 1,
    y: -300
  });
  $(".container-3").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun6() {
  tl.from(".left1-5", {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(".cwr-6", {
      y: 50,
      stagger: .2,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "165% 1000",
      ease: "power3.out"
    }, '-=0.7')
  gsap.from('.c4-rp-img', {
    opacity: 0,
    duration: 1,
    y: 700
  });
  $(".container-4").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun7() {
  tl.from(".left1-6", {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(".cwr-7", {
      y: 50,
      stagger: .2,
      opacity: 0,
    }, "-=1.8")
    .to("#Opaque_Ring", {
      strokeDasharray: "200% 1000",
      ease: "power4.out"
    }, '-=0.7')
  gsap.from('.bottom-img', {
    opacity: 0,
    duration: 1,
    y: 100
  });
  gsap.from('.c5-rp-img1', {
    opacity: 0,
    duration: 1,
    y: -200
  });
  gsap.from('.c5-rp-img2', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  $(".container-5").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-6").addClass("display-none");
}

/*Scroll amount checking and applying*/
window.addEventListener('scroll', () => {
  var scrolled = window.pageYOffset;
  console.log(scrolled);
  if (scrolled === 0) {
    display_fun1();
  } else if (scrolled === 100) {
    display_fun2();
  } else if (scrolled === 200) {
    display_fun3();
  } else if (scrolled === 300) {
    display_fun4();
  } else if (scrolled === 400) {
    display_fun5();
  } else if (scrolled === 500) {
    display_fun6();
  } else if (scrolled === 600) {
    display_fun7();
  }
});

var tl0 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    start: "center 105%",
    end: "center 80%",
    onLeave: () => display_fun2(),
    onEnterBack: () => display_fun1()
  }
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    start: "center 85%",
    end: "center 70%",
    toggleActions: "restart reset restart reset",
    onEnterBack: () => display_fun2(),
    onLeave: () => display_fun3()
  }
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    start: "center 70%",
    end: "center 56%",
    onEnterBack: () => display_fun3(),
    onLeave: () => display_fun4()
  }
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    start: "center 56%",
    end: "center 43%",
    onEnterBack: () => display_fun4(),
    onLeave: () => display_fun5()
  }
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    start: "center 43%",
    end: "center 30%",
    onEnterBack: () => display_fun5(),
    onLeave: () => display_fun6()
  }
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    start: "center 30%",
    end: "center 15%",
    onEnterBack: () => display_fun6(),
    onLeave: () => display_fun7()
  }
});

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    start: "center 15%",
    end: "center -2%",
    onEnterBack: () => display_fun7(),
    onLeave: () => display_fun1()
  }
});

// For that carousel of horizontal movement
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    768: {
      items: 1,
      nav: false
    },
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
})