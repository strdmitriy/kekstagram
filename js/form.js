var downloadFile = document.querySelector('#upload-file');
var uploadOverplay = document.querySelector('.upload-overlay');
var uploadImage = document.querySelector('.upload-image');
var uploadFormCancel = document.querySelector('.upload-form-cancel');
var filter = document.querySelector('.upload-effect-controls');
var imageFilter = document.querySelector('.effect-image-preview');
var uploadForm = document.querySelector('.upload-form');

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

downloadFile.addEventListener('change', showCroppForm);
uploadFormCancel.addEventListener('click', showImageLoader);
uploadForm.addEventListener('click', function (e) {
  addFilterImage(event);
});
