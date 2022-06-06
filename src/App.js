import './App.css';
import { zodiac } from './data.js';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      <Header name="Chad Stabler"/>
      <Main zodiacs={zodiac}/>
      <Footer year="2022"/>
    </div>
  );
}

export default App;
