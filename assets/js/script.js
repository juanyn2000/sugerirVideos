    // IIFE
    const videoModule = (() => {
    
    const insertarVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
    };

    return {
        playVideo: (url, id) => {
        insertarVideo(url, id);
        },
    };
    })();
    // constructor
    class Multimedia {
    constructor(url) {
        const _url = url;

        this.getUrl = () => _url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
    }

    // herencia
    class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        videoModule.playVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        const newUrl = `${this.getUrl()}?start=${tiempo}`;
        document.getElementById(this.id).setAttribute("src", newUrl);
    }
    }

    //Instancias-clase Reproductor
    const musica = new Reproductor(
    "https://www.youtube.com/embed/V86x1_feLTo  ","musica"
    );
    const pelicula = new Reproductor(
    " https://www.youtube.com/embed/5PSNL1qE6VY","peliculas"
   
    );
    const serie = new Reproductor(
    "https://www.youtube.com/embed/ebI7b7NoH54","series"
    );

    musica.playMultimedia();
    pelicula.playMultimedia();
    serie.playMultimedia();

    //donde comienza el video
    pelicula.setInicio(60); // El video de música comenzará en el segundo 60
