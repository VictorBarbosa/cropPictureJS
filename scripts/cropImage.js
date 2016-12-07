window.onload = function () {
    var options =
        {
            imageBox: '.imageBox',
            thumbBox: '.thumbBox',
            spinner: '.spinner',
            imgSrc: 'avatar.png'
        }
    var cropper;
    document.querySelector('#file').addEventListener('change', function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            options.imgSrc = e.target.result;
            cropper = new cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = null;
    })
    document.querySelector('#btnCrop').addEventListener('click', function () {
        var img = cropper.getDataURL()
        $("#foto").attr("src", img)
        sessionStorage.setItem('imageBase64', img);
        $("#ImageStream").attr("value", img);
        $('#FotoJson').attr("value", img);
        $('#modalFoto').modal('toggle');
    })
    document.querySelector('#btnZoomIn').addEventListener('click', function () {
        cropper.zoomIn();
    })
    document.querySelector('#btnZoomOut').addEventListener('click', function () {
        cropper.zoomOut();
    })
}; 