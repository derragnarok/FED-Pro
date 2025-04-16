document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('container-1');

  container.addEventListener('click', function(event) {
    if (event.target.matches('.btn')) {
      const buttonName = event.target.dataset.name;
      alert(`Ви натиснули на ${buttonName}`);
    }
  });
});
