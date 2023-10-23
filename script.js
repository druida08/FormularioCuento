
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

        const cuento = `Había una vez una persona llamada ${nombresApellidos}, pero todos la conocían como ${apodo}. Tenía el cabello de color ${colorCabello} y unos hermosos ojos de color ${colorOjos}. A sus ${edad} años, su pasatiempo favorito era ${hobby}. Un día, mientras practicaba su hobby, algo extraordinario sucedió. ${nombresApellidos} se encontró en un lugar mágico y desconocido, donde todo era posible. Allí, vivió aventuras inimaginables, conoció a personajes fantásticos y descubrió secretos que cambiarían su vida para siempre. Después de una emocionante travesía, ${nombresApellidos} regresó a su mundo, pero con el corazón lleno de experiencias asombrosas y recuerdos inolvidables. Y así, ${nombresApellidos} siguió adelante con su vida, sabiendo que la magia y la aventura siempre la esperarían en cada esquina.`;


        cuentoResult.textContent = cuento;
    });
});
