// Select color input
// Select size input
var color, width, height;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  width = $('#inputWidth').val();
  height = $('#inputHeight').val();
  makeGrid(width,height);
  // console.log(height+width);
})

function makeGrid(w, h) {
  $('tr').remove();

  // Your code goes here!
  for (var i = 1; i <= w; i++) {
    $('#pixelCanvas').append('<tr id=table'+i +'></tr>');
    for (var j = 1; j <= h; j++) {
      $('#table' + i).append('<td></td>');
    }
  }

  // find color and add it to each pixel cell
  $('td').click(function colorCell() {
    color=$('#colorPicker').val();
  // looks at the cell and changes the color accordingly
    if ($(this).attr('style')){
      $(this).removeAttr('style')
    } else {
        $(this).attr('style', 'background-color:' + color);
      }
  })

}
