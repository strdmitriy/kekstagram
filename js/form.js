const downloadFile = document.querySelector('#upload-file');
const uploadOverplay = document.querySelector('.upload-overlay');
const uploadImage = document.querySelector('.upload-image');
const uploadFormCancel = document.querySelector('.upload-form-cancel');
const filter = document.querySelector('.upload-effect-controls');
const imageFilter = document.querySelector('.effect-image-preview');
const uploadForm = document.querySelector('.upload-form');
const uploadResizeControl = document.querySelector('.upload-resize-controls-value');
const buttonDec = document.querySelector('.upload-resize-controls-button-dec');
const buttonInt = document.querySelector('.upload-resize-controls-button-inc');
const imagePreview = document.querySelector('.effect-image-preview');


const showImageLoader = () => {
  uploadOverplay.classList.add('hidden');
  uploadImage.classList.remove('hidden');
};


const showCroppForm = () => {
  uploadOverplay.classList.remove('hidden');
  uploadImage.classList.add('hidden');
};

const deleteClass = function () {
  const classListing = imageFilter.classList;
  for (let i = 0; i < classListing.length; i++) {
    imageFilter.classList.remove(classListing[i]);
  }
};

const addElementClass = function (node) {
  const elementSelect = imageFilter.classList;
  for (let i = 0; i <= elementSelect.length; i++) {
    if (i === 1) {
      elementSelect.add('effect-'+node);
    } else {
      elementSelect.remove(elementSelect[1]);
      elementSelect.add('effect-'+node);
    }
  }
};

const addFilterImage = function (e) {
  const target = e && e.target || event.srcElement;
  if (target.checked) {
    addElementClass(target.value);
  }
};

const resizeControl = function (e) {
  let valueProcent = uploadResizeControl.value;
  if (parseInt(valueProcent) > 25) {
    let a = parseInt(valueProcent)-25;
    uploadResizeControl.value = a+'%';
    console.log(valueProcent);
    imagePreview.style.transform = `scale(0.${a})`;
  }
}

const resizeControlInt = function (e) {
  let valueProcent = uploadResizeControl.value;
  if (parseInt(valueProcent) < 75) {
    let a = parseInt(valueProcent)+25;
    uploadResizeControl.value = a+'%';
    console.log(valueProcent);
    imagePreview.style.transform = `scale(0.${a})`;
  } else if (parseInt(valueProcent) === 75) {
    let a = parseInt(valueProcent)+25;
    uploadResizeControl.value = a+'%';
    console.log(valueProcent);
    imagePreview.style.transform = 'scale(1)';
  }
}

downloadFile.addEventListener('change', showCroppForm);
uploadFormCancel.addEventListener('click', showImageLoader);
uploadForm.addEventListener('click', function (e) {
  addFilterImage(e.target);
});


buttonInt.addEventListener('click', function (e) {
  resizeControlInt(e.target)
})
buttonDec.addEventListener('click', function (e) {
  resizeControl(e.target)
});
