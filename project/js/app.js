
  $(".slick").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
 
  
  $(".slick-events").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
 
  $(".slick-countries").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
 
  $(".slick-testimonial").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".navbar-toggler").click(function(){
      $(".site-nav").toggleClass('active');
      let menuIco = $(this).find('i');
      if(menuIco.hasClass("feather-menu")){
        menuIco.removeClass("feather-menu").addClass("feather-x");
      }
      else{
        menuIco.removeClass("feather-x").addClass("feather-menu");

      }
  });

  $(".nav-link").click(function(){
   

      $(".navbar-toggler i").removeClass("feather-x").addClass("feather-menu");
      $(".navbar-collapse").removeClass('show');
    
  });

  var screenheight = $(window).height();
  console.log(screenheight);
  $(document).ready(function(){
      $(window).scroll(function(){
        let currentHeight = $(this).scrollTop();
        console.log(screenheight,currentHeight);
        if(screenheight == currentHeight){
          setActive("home");
          console.log(screenheight,"me");
        }
        else if(currentHeight > screenheight -200){
          $(".site-nav").addClass('scroll-active');
        }
        else{
          $(".site-nav").removeClass('scroll-active');
          setActive("home");
        }
        
      })
  });

  function setActive(current) {
    let activeLine = `<span class="active rounded-pill"></span>`;
    $(".nav-link span.active").remove();
    $(`.nav-link[href='#${current}']`).append(activeLine);
  }

  function navScroll() {
    let currentSection = $("section.scroll-check[id]");
    currentSection.waypoint(function (direction) {
        if(direction == "down"){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{ offset:'15px' });

    currentSection.waypoint(function (direction) {

        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{ offset:'15px' });

}

navScroll();

var wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();