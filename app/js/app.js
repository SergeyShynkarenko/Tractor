
import $ from 'jquery'
import popper from 'popper.js';
import bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {

  // toggle list
  function hideItems() {
    $('.specifications__list').each(function() {
      const listLength = $(this).find('li').length;
      if (listLength > 6) {
        $('li', this).eq(5).nextAll().hide().addClass('toggleable');
      }
    });
  }

  hideItems()

  $('.specifications__list').each(function() {
    const listLength = $(this).find('li').length;
    if (listLength > 6) {
      $('li', this).eq(5).nextAll().hide().addClass('toggleable');
    }
  });

  $('.specifications__btn').on('click',  function() {
    const visible_lis = $('.specifications__list li:visible').length;

    if ($(this).hasClass('less')) {
      hideItems()
      $(this).text('Больше').removeClass('less');
    } else {
      console.log(this)
      $('li.toggleable').removeClass('toggleable').show();
      $(this).text('Меньше').addClass('less');
    }
  });


  // hide contacts
  $('#contactCheckbox').click(function() {
    console.log(1)
     if( $(this).is(':checked')) {
       $(".contacts__box").hide();
      } else {
       $(".contacts__box").show();
     }
  });

  $('form').submit(function(e) {
      e.preventDefault();
  });

})
