/*https://juegos-a917.restdb.io/rest/juegos?apikey=64c74bff86d8c5171bed92c2*/
const games = {
    //definimos la función que obtiene todas las peliculas
    obtenerTodos: () => {
      //creamos una constante que tiene la URL de nuestra API
      const urlAPI = 'https://juegos-a917.restdb.io/rest/juegos?apikey=64c74bff86d8c5171bed92c2';
      //Creamos una constante que tendrá una referencia directa con el DIV "contenedorPeliculas" y nos permitirá cargarle contenido
      const divContenedorJuegos = document.querySelector('#contenedorJuegos');
      //cremos una variable vacía que contendrá todo el código HTML que vamos a insertar
      let contenidoHTML = '';
      //obtenemos las películas en formato Json
      fetch(urlAPI)
        .then(res => res.json())
        .then(datos => {
          console.log(datos);
          //recorremos la colección de películas obtenidas, obteniendo una referencia para cada una con la constante "peli", por cada iteración
          for (const juego of datos) {
            contenidoHTML += `
              <div class="col-md-4">
                  <a href="${juego.Trailer_url}" target="_blank">
                    <img src="${juego.Portada_url}" alt="${juego.Nombre}" class="img-thumbnail">
                    <h3 class=name>${juego.Nombre}</h3>
                  </a>
                  <details class="sub_title">
                    <summary>detalles</summary>
                    <h5>plataformas: ${juego.Plataformas}<h5>
                    <h5>sinopsis: ${juego.Sinopsis}</h5>
                  </details>
              </div>`;
          }
          divContenedorJuegos.innerHTML = contenidoHTML;
        })
    },
    
  };
  games.obtenerTodos();