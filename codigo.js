"use strict"; 
//Función para agregar animaciones
function activarAnimacion(claseObjetivo,clase1, clase2){
    //Capturar los elementos 
    let listaElementos=document.getElementsByClassName(claseObjetivo);
    for(let i=0;i<listaElementos.length;i++){
        let elemento=listaElementos[i];             
        function funcionScroll(){  
            //Capturar las dimensiones del elemento
            let tamanoElemento=elemento.getBoundingClientRect();
            //Capturar la distancia del fin del elemento
            //al borde superior de la pantalla
            let top=tamanoElemento.top;
            //Agregar animación si el elemento es parcialmente visible
            if(top<=window.innerHeight){
                elemento.classList.add(clase1);
                elemento.classList.add(clase2);            
                elemento.classList.add("animate__slow");            
            }                
        }
        //Ajustar scroll 
        function controlarScroll(){
            window.requestAnimationFrame(funcionScroll);
        }
        //Añadir el evento scroll
        window.addEventListener("scroll",controlarScroll);
    }

}

