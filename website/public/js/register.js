// Show/hide password onClick of button
function show() {
  var eye = document.getElementById('eye');
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'text');
  eye.classList.remove('fa-eye-slash');
  eye.classList.add('fa-eye');
}

function hide() {
  var eye = document.getElementById('eye');
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'password');
  eye.classList.remove('fa-eye');
  eye.classList.add('fa-eye-slash');
}

var pwShown = 0;

document.getElementById('eye').addEventListener("click", function () {
  if (pwShown == 0) {
      pwShown = 1;
      show();
  } else {
      pwShown = 0;
      hide();
  }
}, false);

// Show/hide password-confirm onClick of button
function showConfirm() {
  var eyeConfirm = document.getElementById('eye-confirm');
  var pConfirm = document.getElementById('pwd-confirm');
  pConfirm.setAttribute('type', 'text');
  eyeConfirm.classList.remove('fa-eye-slash');
  eyeConfirm.classList.add('fa-eye');
}

function hideConfirm() {
  var eyeConfirm = document.getElementById('eye-confirm');
  var pConfirm = document.getElementById('pwd-confirm');
  pConfirm.setAttribute('type', 'password');
  eyeConfirm.classList.remove('fa-eye');
  eyeConfirm.classList.add('fa-eye-slash');
}

var pwConfirmShown = 0;

document.getElementById('eye-confirm').addEventListener('click', function () {
  if (pwConfirmShown == 0) {
      pwConfirmShown = 1;
      showConfirm();
  } else {
      pwConfirmShown = 0;
      hideConfirm();
  }
}, false);

const pwdInput = document.getElementById('pwd');
const confirmPwdInput = document.getElementById('pwd-confirm');
const termsCheckInput = document.getElementById('termsCheck');
const registerButton = document.getElementById('register-btn');
const dangernotification = document.getElementById('notification-danger')

termsCheckInput.addEventListener('input', enableButton);

function enableButton() {
  const termsChecked = termsCheckInput.checked;
  if (termsChecked) {
      registerButton.removeAttribute('disabled');
  } else {
      registerButton.setAttribute('disabled');
  }
}

function validatePasswords() {
  const pwd = pwdInput.value;
  const confirmPwd = confirmPwdInput.value;
  if (pwd !== confirmPwd) {
      event.preventDefault();
      dangernotification.style.display = 'block';
  }
}
document.getElementById('register-form').addEventListener('submit', validatePasswords);