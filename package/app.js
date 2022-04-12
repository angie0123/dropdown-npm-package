const dropdown = document.querySelectorAll('.dropdown');
const dropdownContent = document.querySelectorAll('.dropdown-content');

const toggleDropdownVisible = () => {
  event.currentTarget.children[1].classList.toggle('visible');
};

[...dropdown].forEach((dropdown) => {
  dropdown.addEventListener('click', toggleDropdownVisible);
});
