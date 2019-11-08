import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const App = () => {
  const [values, setValues] = useState({
    registros: [],
    nome: 'Luis'
  });

  useEffect(() => {
    axios.get(`https://luis-back-node.herokuapp.com/dados_da_estacao`)
    .then(res => {
      console.log(res.data);
      setValues({ ...values, registros: res.data })
    })
    .catch(function (error) {
        console.log(error);
    })
  }, []);

  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="EspacoParaUsar">
        <h1>{values.nome}</h1>
        
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Vento</th>
                <th scope="col">Temperatura</th>
              </tr>
            </thead>
            <tbody>

              {values.registros.map((registro, index) => (

                <tr key={index}>
                  <th>{registro._id}</th>
                  <td>{registro.vento}</td>
                  <td>{registro.temperaturaAr}</td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
   );
}
 
export default App;