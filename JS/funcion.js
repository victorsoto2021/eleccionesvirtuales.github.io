
function PP() {
    alert("HAS VOTADO POR PARTIDO POPULAR");
}

function CS() {
    alert("HAS VOTADO POR PARTIDO CIUDADANOS");
}

function PSOE() {
    alert("HAS VOTADO POR PARTIDO SOCIALISTA OBRERO ESPAÑOL");
}

function PODEMOS() {
    alert("HAS VOTADO POR PODEMOS");
}

if(ServiceWorker in navigator){
navigator.serviceWorker.register('./sw.js')
.then(reg=>console.log('Registroexitoso, reg'))
.catch(err=>console.warn('Error al tratar de registrar el SW',err))

}