import React from "react";

const Task = (props) => {
  const style = {
    color: "red",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  //wyświetlanie pojedynczego taska w liście
  if (active) {
    return (
      <div>
        <p>
          {/* jeżeli important ustawiony, to dodajemy styl dodatkowy */}
          <strong style={important ? style : null}>{text}</strong> - do{" "}
          <span>{date} </span>
          <button onClick={() => props.change(id)}>Zostało wykonane</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
    //wyświetlanie wykonanych tasków
  } else {
    //przetworzenie czasu wykonania
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        {" "}
        <p>
          <strong>{text}</strong> <em> (zrobić do {date}) </em>
          <br />- potwierdzenie wykonania <span>{finish}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
