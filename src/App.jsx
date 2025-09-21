import { useState } from "react";
import Semaforo from "./Semaforo";

function App() {
  const [color, setColor] = useState("rojo");

  return (
    <div className="container">
      <h1> Semáforo </h1>

      {/* Semáforo */}
      <Semaforo color={color} />

      {/* Botones */}
      <div className="botones">
        <button onClick={() => setColor("rojo")}>Rojo</button>
        <button onClick={() => setColor("amarillo")}>Amarillo</button>
        <button onClick={() => setColor("verde")}>Verde</button>
      </div>
    </div>
  );
}

export default App;

