document.addEventListener('DOMContentLoaded', () => {
  // Alternar tema
  const temaBtn = document.getElementById('temaBtn');
  temaBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Adicionar hobby dinamicamente
  const addBtn = document.getElementById('addHobby');
  addBtn.addEventListener('click', () => {
    const novo = prompt('Digite um hobby novo:');
    if (novo && novo.trim() !== '') {
      const ul = document.getElementById('hobbies');
      const li = document.createElement('li');
      li.textContent = novo.trim();
      ul.appendChild(li);
    }
  });
});
