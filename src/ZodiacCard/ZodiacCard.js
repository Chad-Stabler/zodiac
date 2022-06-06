import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (<div className='zodiac-card'>
    <p>{name}</p>
    <p>{dates}</p>
    <img src={`/images/${name}.png`}/>
  </div>);
}
