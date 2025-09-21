function Semaforo({ color }) {
  return (
    <div className="semaforo">
      <div className={`luz ${color === "rojo" ? "rojo" : ""}`}></div>
      <div className={`luz ${color === "amarillo" ? "amarillo" : ""}`}></div>
      <div className={`luz ${color === "verde" ? "verde" : ""}`}></div>
    </div>
  );
}

export default Semaforo;
