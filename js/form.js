var downloadFile = document.querySelector('#upload-file');
var uploadOverplay = document.querySelector('.upload-overlay');
var uploadImage = document.querySelector('.upload-image');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

var showImageLoader = function () {
  uploadOverplay.classList.add('hidden');
  uploadImage.classList.remove('hidden');
};

var showCroppForm = function () {
  uploadOverplay.classList.remove('hidden');
  uploadImage.classList.add('hidden');
};


downloadFile.addEventListener('change', showCroppForm);
uploadFormCancel.addEventListener('click', showImageLoader);
