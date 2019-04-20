
  $(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){

      if ($('#carouselButton').children('span').hasClass('fa-pause')) {

          $('#mycarousel').carousel('pause');
          $('#carouselButton').children('span').removeClass('fa-pause');
          $('#carouselButton').children('span').addClass('fa-play');
      }

      else if ($('#carouselButton').children('span').hasClass('fa-play')) {

          $('#mycarousel').carousel('cycle');
          $('#carouselButton').children('span').removeClass('fa-play');
          $('#carouselButton').children('span').addClass('fa-pause');
      }
      
    });

  });

  // }
$('#login').click(function(){

  // $('#loginModal').modal('show');
  // if $('#modalDismiss');
  $('#loginModal').modal('toggle');
  $('#modalDismiss').click(function(){
    $('#loginModal').modal('hide');
  });
    $('#cancelBtn').click(function(){
    $('#loginModal').modal('hide');
  });


});
$('#reservationModal').click(function(){
  $('#reservation').modal('toggle');
  $('#reverveButton').click(function(){
    $('#reservation').modal('hide');
  });
    $('#reModalCancel').click(function(){
    $('#reservation').modal('hide');
  });


});