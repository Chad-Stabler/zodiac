import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (<div>
    <p>Sign: {name}</p>
    <p>Dates: {dates}</p>
    <img src={`url(public/images/${name}.png)`}></img>
  </div>);
}
