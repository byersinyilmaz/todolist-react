import React, { useState } from "react";
import "./styles.css";


const INITIAL_STATE = [
  { id: 1, baslik: "Kitap okumak", tamamlandi: false },
  { id: 2, baslik: "Ders çalışmak", tamamlandi: true }
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="ekleme_formu">
        <input className="input-group-text"
        value = {yeniBaslik}
        onChange={e => setYeniBaslik(e.target.value)}
        placeholer="listeye ekle"
        />
        <button type="button" className="btn btn-primary"
        onClick={() => {
          setListe([
            ...liste,
            { id: Date.now(), baslik: yeniBaslik, completed: true }
        ]);
        setYeniBaslik("");
        }}
        >Add
        </button>
    </div><div className="liste">
        {liste.map(item => (
          <div
            onClick={() => {
              setListe(
                liste.map(el => el.id === item.id ? { ...el, tamamlandi: !el.tamamlandi } : el
                )
              );
            } }

            className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
      </div>
      <button className="btn btn-danger"
      onClick={() => setListe(liste.filter(item => !item.tamamlandi))}
      >
        Clear Completed
      </button>
    </div>
  );
}
