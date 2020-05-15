import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import "./styles/styles.scss";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>EDMANAGER</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
  
)


export default App;
