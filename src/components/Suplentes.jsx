import React from 'react';
import { connect } from 'react-redux'

const Suplentes= ({suplentes, remover}) => (
    <section>
        <h2>Estos son los jugadores suplentes</h2>
        <div className="cancha">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
                        <div className="">
                            <img src={j.foto} alt={j.nombre} width="150px"/>
                            <button onClick={() => remover(j)}>salir</button>
                        </div>
                    <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)


const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispachtToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch(
            {
                type: "AGREGAR_SUPLENTE",
                jugador
            }
        )
    },
    remover(jugador){
        dispatch({
            type: "REMOVER_JUGADOR",
            posicion: "suplente",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispachtToProps)(Suplentes)