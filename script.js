
document.addEventListener("DOMContentLoaded", function () {
    const cuentoForm = document.getElementById("cuentoForm");
    const cuentoResult = document.getElementById("cuentoResult");

    cuentoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombresApellidos = document.getElementById("nombresApellidos").value;
        const apodo = document.getElementById("apodo").value;
        const colorCabello = document.getElementById("colorCabello").value;
        const colorOjos = document.getElementById("colorOjos").value;
        const edad = document.getElementById("edad").value;
        const hobby = document.getElementById("hobby").value;

        const cuento = `Había una vez una persona llamada ${nombresApellidos}, pero todos l@ conocían como ${apodo}. Tenía el cabello de color ${colorCabello} y unos hermosos ojos de color ${colorOjos}. A sus ${edad} años, su pasatiempo favorito era ${hobby}. Un día, mientras practicaba su hobby, sucedió algo inesperado...`;

        cuentoResult.textContent = cuento;
    });
});
