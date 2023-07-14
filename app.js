let infoDiv;

window.addEventListener('load', () =>{

    // testare la API
    let infoDiv = document.getElementById('info') ;

    // se esiste   
    if(window.DeviceOrientationEvent) {
        document.title = 'Gira il dispositivo';
        // evento peer l'orientazione del device
        window.addEventListener('deviceorientation' , (ev)=>{
            // testarlo sul telefono
            infoDiv.innerHTML = `alfa: ${ev.alpha}<br>`;
            infoDiv.innerHTML += `beta: ${ev.beta}<br>`;
            infoDiv.innerHTML += `gamma: ${ev.gamma}<br>`;
            infoDiv.style.transform = `rotateX(${ev.alpha}deg) rotateY(${ev.gamma}deg) rotateZ(${ev.alpha}deg)`;
        });
    }


});