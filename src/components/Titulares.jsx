import React from 'react';
import { connect } from 'react-redux'

const Titulares = ({titulares, remover}) => (
        <section>
            <h2>Estos son los jugadores titulares</h2>
            <div className="cancha">
                {
                    titulares.map(j => (
                        <article className="titular" key={j.id}>
                            <div>
                                <img src={j.foto} alt={j.nombre} width="150px" />
                                <button
                                    onClick={() => remover(j)}
                                >salir</button>
                            </div>
                             <p>{j.nombre}</p>
                        </article>
                    ))
                }
            </div>
        </section>
)
    

const mapStateToProps = state => ({
    titulares: state.titulares
})


const mapDispachtToProps = dispatch => ({
    remover(jugador){
        dispatch({
            type: "REMOVER_JUGADOR",
            posicion: "titular",
            jugador
        })
    }
})
export default connect(mapStateToProps, mapDispachtToProps)(Titulares)