$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

$.fn.cleanVal = function() {
  return this.data('mask').getCleanVal();
};


$.fn.masked = function(val) {
  return this.data('mask').getMaskedVal(val);
};


$('#js-phone').click(function() {
  $(this).setCursorPosition(3);
}).mask('+7(999) 999 99 99');

$('#js-phone').on('keyup', function(event) {
  reserveVal = $(this).cleanVal();
  phone = $(this).cleanVal().slice(0,10);
  $(this).val($(this).masked(phone));
    if($(this).cleanVal()[1] == '9') {
      if($(this).cleanVal()[0] == '8' || $(this).cleanVal()[0] == '7') {
        phone = reserveVal.slice(1);
        $(this).val($(this).masked(phone));	
      }
    }
}); 
