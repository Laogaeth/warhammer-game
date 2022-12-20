
import { useState } from 'react';
import './App.css';
const cardImages = [
  { src: "./images/Book.svg" },
  { src: "./images/Demon.svg" },
  { src: "./images/Hand.svg" },
  { src: "./images/Horus.svg" },
  { src: "./images/Knight.svg" },
  { src: "./images/Heretics.svg" },
];


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //Duplicates each card once (& randomizes array order with sort method (shuffles))
  const shuffleCards = ()=>{
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      //for each item in sorted array = card -> spreads & gives an id
      .map((card) => ({ ...card, id: Math.random()}));

      //updates the state
      setCards(shuffledCards)
      setTurns(0)
  }
  console.log(cards,turns)
  return (
    <div className="App">
      <h1>Skull Throne Match</h1>
      <button onClick={shuffleCards}>New Skull</button>
      <div className="card-grid">
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
