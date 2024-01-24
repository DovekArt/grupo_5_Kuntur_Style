console.log('profile.js success!');

document.getElementById('avatar').addEventListener('change', (e) => {
  let selectedValue = e.target.value;
  document.getElementById('avatarPrev').src = `/img/avatars/avatar-${selectedValue}.jpg`;
});