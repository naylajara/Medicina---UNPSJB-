document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    if (materia.classList.contains('locked')) return;

    materia.classList.add('completed');
    materia.classList.remove('locked');

    const next = materia.dataset.next;
    if (next) {
      next.split(',').forEach(id => {
        const nextMateria = document.querySelector(`.materia[data-id="${id}"]`);
        if (nextMateria) {
          nextMateria.classList.remove('locked');
        }
      });
    }
  });
});

