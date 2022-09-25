const scriptURL = 'https://script.google.com/macros/s/AKfycbwRobCRblLfoeopBbPL4ziSit0Y4Ja3MCDkRqVTKkH-ns2Aw7BPTNp8fDnu3bMEriNL/exec';
const form = document.forms['daftar-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit di klik
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
