
// scroll //

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
  })
// scroll //
//start

 // end header

  // hero swipper //


  var swiper = new Swiper(".my-services-Swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    autoplay:{
      delay:2500,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    breakpoints: {
      315: {
        slidesPerView: 1,
      },
      570: {
        slidesPerView: 2,
        dots:false,
        
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      }, 
    
  }
  });


// swiper pagination

  var swiper = new Swiper(".my-blog-Swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
     
    },
    // autoplay:{
    //   delay:2500,
    // },
  });


  // js pop up



  


 