const botones = document.querySelectorAll(".boton");
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("titulo-modal");
const verDocumento = document.getElementById("verDocumento");
const descargarDocumento = document.getElementById("descargarDocumento");
const cerrarModal = document.getElementById("cerrarModal");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const semana = boton.dataset.semana;
    const ruta = `../documentos/semana${semana}.pdf`;

    tituloModal.textContent = `Semana ${semana}`;
    verDocumento.href = ruta;
    descargarDocumento.href = ruta;

    modal.style.display = "flex";
  });
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
