import './App.css';
import TimeZoneClock from './components/TimeZoneClock';
import React, { useState } from 'react';


function App() {

  const fusosHorarios = [
    "GMT",
    "UTC",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusoHorariosSelecionados, setFusohorariosSelecionados] = useState(
    [
      fusoHorarioLocal,
    ]
  )

  const adicionarFuso = (e) => {
    const novoFuso = e.target.value;
    if(!fusoHorariosSelecionados.includes(novoFuso)) {
      setFusohorariosSelecionados([...fusoHorariosSelecionados, novoFuso])
    }
  }

  return (
    <div >
      <h1>Relógio Mundial</h1>
      <select onChange={adicionarFuso} >
        <option value="" disabled select>
          Selecione um fuso horário
        </option>
        {fusosHorarios.map((fuso) => {
          return <option value={fuso} key={fuso}>{fuso}</option>
        })}
      </select>
      <div>
        {
          fusoHorariosSelecionados.map((fuso) => {
            return <TimeZoneClock timeZone={fuso} key={fuso} />
          })
        }
      </div>
    </div>
  );
}

export default App;
