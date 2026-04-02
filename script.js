// ========== LÓGICA DEL LIKE (corazón) ==========
const btns = document.querySelectorAll(".favorite-icon");

btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation();  // Evita que el clic también active la descripción
        const icon = btn.querySelector(".heart-icon");
        
        if (icon.textContent === "🎔") {
            icon.textContent = "❤️";
            btn.classList.add("filled");
        } else {
            icon.textContent = "🎔";
            btn.classList.remove("filled");
        }
    });
});

// ========== LÓGICA DE LA DESCRIPCIÓN (clic en tarjeta) ==========
const bookItems = document.querySelectorAll('.item-list li');

bookItems.forEach(bookItem => {
    const description = bookItem.querySelector('.book-description');
    if (!description) return;
    
    bookItem.addEventListener('click', (event) => {
        // Si el clic fue en el botón de like, ignorar
        if (event.target.closest('.favorite-icon')) return;
        
        description.classList.toggle('hidden');
        description.classList.toggle('visible');
    });
});