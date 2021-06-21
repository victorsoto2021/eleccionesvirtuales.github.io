

function PP() {
    alert("HAS VOTADO POR PARTIDO POPULAR");
    location.href="final.html";
}

function CS() {
    alert("HAS VOTADO POR PARTIDO CIUDADANOS");
    location.href="final.html";
}

function PSOE() {
    alert("HAS VOTADO POR PARTIDO SOCIALISTA OBRERO ESPAÑOL");
    location.href="final.html";
}

function PODEMOS() {
    alert("HAS VOTADO POR PODEMOS");
    location.href="final.html";
}

if(ServiceWorker in navigator){
navigator.serviceWorker.register('./sw.js')
.then(reg=>console.log('Registroexitoso, reg'))
.catch(err=>console.warn('Error al tratar de registrar el SW',err))

}
  