import {createStore} from 'redux'

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Jose Mijares",
        foto: "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85"
    },
    {
        id: 2,
        nombre: "AK Kuevas",
        foto: "https://americanindependent.com/wp-content/uploads/2019/01/AP_19014569142266-1068x721.jpg"
    },
    {
        id: 3,
        nombre: "Dui dominguez",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqcUI_GFWtuW8eYY6atonWp3gRaaQq6wziCwkJRM-HWByHcm6s&usqp=CAU"
    }],
    titulares: [
        {
            id: 4,
            nombre: "Daniel mmuñoz",
            foto: "https://tvguide1.cbsistatic.com/i/2018/02/10/3a534e4d-ffa5-402d-b68d-cb0c7368e6af/1d544b6e110f4394a28bf5db8434a840/180209-personofinterest.jpg"
        },
        {
            id: 5,
            nombre: "AK JAMAK",
            foto: "https://es.web.img3.acsta.net/c_162_216/c_162_216/medias/nmedia/18/63/24/54/20315330.jpg"
        },
        {
            id: 6,
            nombre: "Rogelio Osorio",
            foto: "https://news.illinois.edu/files/6367/804895/163505.jpg"
        }
    ],
    suplentes: []
}

const reducerEntrenado = (state = initialState, action) => {
    console.log(action);

    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "REMOVER_JUGADOR" && action.posicion === "titular"){
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }else if(action.type === "REMOVER_JUGADOR" && action.posicion === "suplente"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenado)