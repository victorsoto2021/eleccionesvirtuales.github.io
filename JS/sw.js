;
const CACHE_NAME = 'v1_cache_elecciones_virtuales',
    urlsToCache = [
        './',
        'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap',
        './estilos.css',
        './funcion.js',
        './img/eleccion.png'
    ]


    self.addEventListener('install',e=>{
e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache =>{
        return cache.addAll(urlsToCache)
        .then(()=>self.skipWaiting())
    })
    .catch(err=>console.warn('Error al tratar de registrar el cache',err))
)
    })

    self.addEventListener('activate',e =>{
const cacheWhitelist = [CACHE_NAME]
e.waitUntil(
    caches.keys()
    .then(cacheNames =>{
        cacheNames.map(cacheName =>{
            if(cacheWhitelist.indexOf(cacheName)==-1){
                return caches.delete(cacheName)
            }
        })
    })
    .then(()=>self.clients.claim())
)
    })

    self.addEventListener('fetch',e =>{
e.respondWith(
    caches.match(e.request)
    .then(res => {
        if(res){
            return res
        }
        return fetch(e.request)
    })
)
    })
