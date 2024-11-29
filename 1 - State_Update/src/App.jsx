import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Mauvais usage : cela n'incrémente pas correctement car la modifications du state n'est pas immédiate
    setCount(count + 2); // Compteur supposé : +2
    setCount(count + 2); // Compteur supposé : +4 (mais ça ne marche pas)
  };

  // TODO : Corriger cette logique pour que le compteur augmente bien de 4
  // Indice : Il faut comprendre pourquoi React ne met pas immédiatement à jour l'état.
  // Astuce : Trouver un moyen de s'assurer que chaque appel à setCount utilise la valeur correcte.

  return (
    <>
      <h1>Compteur : {count}</h1>
      <button onClick={handleIncrement}>Incrémenter</button>
    </>
  );
}

export default App;
