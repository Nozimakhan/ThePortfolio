import './App.scss';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Banner/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
