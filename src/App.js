import Header from './components/Header'
import Bonuses from './components/Bonuses'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section>
        <Bonuses />
      </section>
      <section>
        <Content />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
