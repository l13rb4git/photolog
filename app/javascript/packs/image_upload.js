function showCurrentImage () {
  var current_image = document.getElementById( 'current-image' );

  if (current_image != null) {
    var current_image_src = current_image.getAttribute('src');

    $('#imageResult')
        .attr('src', current_image_src);
  }
};

$(function () {
  showCurrentImage();

  document.addEventListener("turbolinks:load", showCurrentImage)

  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#imageResult')
                  .attr('src', e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
      }
  }

  function showPreviewImage () {
    $('#upload').on('change', function () {
        var input = document.getElementById( 'upload' );
        readURL(input);
    });
  }

  showPreviewImage();

  document.addEventListener("turbolinks:load", showPreviewImage)

});

window.onload = function () {
  var input = document.getElementById( 'upload' );
  var infoArea = document.getElementById( 'upload-label' );

  input.addEventListener( 'change', showFileName );
  function showFileName( event ) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoArea.textContent = 'File name: ' + fileName;
  }

};

