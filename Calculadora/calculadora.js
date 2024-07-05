const pantalla= document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn,.btn1,.btn2,.btnC,.igual,.icon");
const historialOperaciones = [];


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
    
        if (boton.id === "C"){
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent ="0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }

        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent ="Error!";
            }
            return;
        }

        
        if (boton.id === 'cubica') {
            try {
                let resultado = Math.cbrt(parseFloat(pantalla.textContent));
                resultado = parseFloat(resultado.toFixed(7)).toString();
                historialOperaciones.push(`∛(${pantalla.textContent}) = ${pantalla.textContent}`);
                pantalla.textContent = resultado;
            } catch {
                pantalla.textContent = 'Error!';
            }
            return;
        }

        if (boton.id === "logaritmo") {
            try {
                pantalla.textContent = Math.log10(parseFloat(pantalla.textContent)).toString();
                historialOperaciones.push(`log(${pantalla.textContent}) = ${pantalla.textContent}`);
            } catch {
                pantalla.textContent = 'Error!';
            }
            return;
        }

        if (boton.id === 'historial') {
            if (historialOperaciones.length === 0) {
                alert('No hay operaciones en el historial.');
            } else {
                alert('Historial:\n' + historialOperaciones.join('\n'));
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent =botonApretado;
        }else{
            pantalla.textContent += botonApretado
        }

        }
        
    )
});