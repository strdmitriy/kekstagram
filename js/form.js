var downloadFile = document.querySelector('#upload-file');
var uploadOverplay = document.querySelector('.upload-overlay');
var uploadImage = document.querySelector('.upload-image');
var uploadFormCancel = document.querySelector('.upload-form-cancel');
var filter = document.querySelector('.upload-effect-controls');
var imageFilter = document.querySelector('.effect-image-preview');
var uploadForm = document.querySelector('.upload-form');
var uploadResizeControl = document.querySelector('.upload-resize-controls-value');
var buttonDec = document.querySelector('.upload-resize-controls-button-dec');
var buttonInt = document.querySelector('.upload-resize-controls-button-inc');
var imagePreview = document.querySelector('.effect-image-preview');

var showImageLoader = function () {
  uploadOverplay.classList.add('hidden');
  uploadImage.classList.remove('hidden');
};

var showCroppForm = function () {
  uploadOverplay.classList.remove('hidden');
  uploadImage.classList.add('hidden');
};

var deleteClass = function () {
  var classListing = imageFilter.classList;
  for (var i = 0; i < classListing.length; i++) {
    imageFilter.classList.remove(classListing[i]);
  }
};

var addElementClass = function (node) {
  var elementSelect = imageFilter.classList;
  for (var i = 0; i <= elementSelect.length; i++) {
    if(i === 1) {
      elementSelect.add('effect-'+node);
    } else {
      elementSelect.remove(elementSelect[2]);
      elementSelect.add('effect-'+node);
    }
  }
};

var addFilterImage = function (e) {
  // кроссбраузерная запись события
  var target = e && e.target || event.srcElement;
  if(target.checked) {
    addElementClass(target.value);
  }
};

var resizeControl = function (e) {
  let valueProcent = uploadResizeControl.value;
  if (parseInt(valueProcent) > 25) {
    let a = parseInt(valueProcent)-25;
    uploadResizeControl.value = a+'%';
    console.log(valueProcent);
    imagePreview.style.transform = `scale(0.${a})`;
  }
}

var resizeControlInt = function (e) {
  let valueProcent = uploadResizeControl.value;
  if (parseInt(valueProcent) < 100) {
    let a = parseInt(valueProcent)+25;
    uploadResizeControl.value = a+'%';
    console.log(valueProcent);
    imagePreview.style.transform = `scale(1)`;
  }
}

downloadFile.addEventListener('change', showCroppForm);
uploadFormCancel.addEventListener('click', showImageLoader);
uploadForm.addEventListener('click', function (e) {
  addFilterImage(event);
});


buttonInt.addEventListener('click', function (e) {
  resizeControlInt(e.target)
})
buttonDec.addEventListener('click', function (e) {
  resizeControl(e.target)
});
