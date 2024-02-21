var typed1 = new Typed('#header-typed', {
    strings: ["I'm not programmer!", "I'm not hacker!", "I excel at 'Ctrl+C' and 'Ctrl+V'!"],
    typeSpeed: 50,
    backSpeed: 30,
    smartBackspace: true, // this is a default
    loop: true
  });
    
var typed2 = new Typed('#nav-typed', {
    strings: ["./Bilhaq"],
    typeSpeed: 50,
    backSpeed: 30,
    smartBackspace: true, // this is a default
});

var typed3 = new Typed('#sidebar-typed', {
    strings: ["./Bilhaq"],
    typeSpeed: 50,
    backSpeed: 30,
    smartBackspace: true, // this is a default
});


// $(window).scroll(function(){
//     var scrollTop = $(this).scrollTop();

//     // Mengambil offset dari setiap elemen
//     var homeOffset = $("#section-home").offset().top;
//     var aboutMeOffset = $("#about-me").offset().top;
//     var portofolioOffset = $("#portofolio").offset().top;

//     // Memeriksa posisi pengguliran dan menyesuaikan kelas navbar
//     if (scrollTop < aboutMeOffset) {
//         $("nav").removeClass("rm-scrolled").addClass("scrolled");
//         $(".navbar-brand").addClass("text-black");

//         //remove add nav-text to text-white text-black
//         $(".nav-text").removeClass("text-black");
//         $(".nav-text").addClass("text-white");

        
//     } else if (scrollTop >= aboutMeOffset && scrollTop < portofolioOffset) {
//         $("nav").removeClass("scrolled");
//         $("nav").addClass("rm-scrolled");
//         // $(".link-navbar").addClass("text-white");
//         $(".navbar-brand").addClass("text-white");

//         //remove add nav-text to text-white text-black
//         $(".nav-text").removeClass("text-white");
//         $(".nav-text").addClass("text-black");


//     } else if (scrollTop >= portofolioOffset) {
//         $("nav").addClass("scrolled").removeClass("rm-scrolled");
//         $(".navbar-brand").addClass("text-white");

//         //remove add nav-text to text-white text-black
//         $(".nav-text").removeClass("text-black");
//         $(".nav-text").addClass("text-white");

//     }

//     // Menyembunyikan navbar saat di bagian home
//     if (scrollTop == homeOffset) {
//         $("nav").removeClass("scrolled");

//         //remove add nav-text to text-white text-black
//         $(".nav-text").removeClass("text-white");
//         $(".nav-text").addClass("text-black");

//     }
// });

$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();

  // Mengambil offset dari setiap elemen
  var homeOffset = $("#section-home").offset().top;
  var aboutMeOffset = $("#about-me").offset().top;
  var portofolioOffset = $("#portofolio").offset().top;
  var contactOffset = $("#contact").offset().top;

  // Memeriksa posisi pengguliran dan menyesuaikan kelas navbar
  if (scrollTop < aboutMeOffset) {
      $("nav").removeClass("rm-scrolled").addClass("scrolled");
      $(".navbar-brand").addClass("text-black");

      //remove add nav-text to text-white text-black
      $(".nav-text").removeClass("text-black");
      $(".nav-text").addClass("text-white");
  } else if (scrollTop >= aboutMeOffset && scrollTop < portofolioOffset) {
      $("nav").removeClass("scrolled");
      $("nav").addClass("rm-scrolled");
      $(".navbar-brand").addClass("text-white");

      //remove add nav-text to text-white text-black
      $(".nav-text").removeClass("text-white");
      $(".nav-text").addClass("text-black");
  } else if (scrollTop >= portofolioOffset && scrollTop < contactOffset) {
      $("nav").addClass("scrolled").removeClass("rm-scrolled");
      $(".navbar-brand").addClass("text-white");

      //remove add nav-text to text-white text-black
      $(".nav-text").removeClass("text-black");
      $(".nav-text").addClass("text-white");
  } else if (scrollTop >= contactOffset) {
      $("nav").removeClass("scrolled").addClass("rm-scrolled");
      $(".navbar-brand").addClass("text-black");

      //remove add nav-text to text-white text-black
      $(".nav-text").removeClass("text-black");
      $(".nav-text").addClass("text-white"); 
  }

  // Menyembunyikan navbar saat di bagian home
  if (scrollTop == homeOffset) {
      $("nav").removeClass("scrolled");

      //remove add nav-text to text-white text-black
      $(".nav-text").removeClass("text-white");
      $(".nav-text").addClass("text-black");
  }
});



$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      lazyLoad:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      // autoHeight:true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 20
        },
        600: {
          items: 2,
          stagePadding: 50
        }
      }
    })
  })

  var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });
  
  //tahun footer
  const tahunElement = document.getElementById('tahun');
  const tahunSekarang = new Date().getFullYear();
  tahunElement.textContent = tahunSekarang;

  // aos lib
  AOS.init({
once:true
  });


// submit contact
function submitContact(){
  const name = $("#nameInput").val();
  const needs = $("#needsTextarea").val();
  if(name && needs){
    window.location.href = "https://wa.me/6285837173009?text=Hallo bilhaq! saya " + name + ", saya mempunyai keperluan '" + needs +"', mohon segera balas!";
  }else{
    alert("Name and requirements form must be present");
  }
}