const proxima = {
    //definimos la función que obtiene todas las peliculas
    obtenerTodos: () => {
      //creamos una constante que tiene la URL de nuestra API
      const urlAPI = 'https://juegos-a917.restdb.io/rest/proximamente?apikey=64c74bff86d8c5171bed92c2';
      //Creamos una constante que tendrá una referencia directa con el DIV "contenedorPeliculas" y nos permitirá cargarle contenido
      const divContenedorProximamente = document.querySelector('#contenedorProximamente');
      //cremos una variable vacía que contendrá todo el código HTML que vamos a insertar
      let contenidoHTML = '';
      //obtenemos las películas en formato Json
      fetch(urlAPI)
        .then(res => res.json())
        .then(datos => {
          console.log(datos);
          //recorremos la colección de películas obtenidas, obteniendo una referencia para cada una con la constante "peli", por cada iteración
          for (const prox of datos) {
            contenidoHTML += `
              <div class="col-md-4">
                  <a target="_blank">
                    <img src="${prox.portada_url}" alt="${prox.nombre}" class="img-thumbnail">
                    <h3 class=name>${prox.nombre}</h3>
                  </a>
              </div>`;
          }
          divContenedorProximamente.innerHTML = contenidoHTML;
        })
    },
    
  };
  proxima.obtenerTodos();