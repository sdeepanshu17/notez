import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import list from "./Components/notes";

function App() {
  
  return (
    <div className="App">
      <Header notesList={list} />
      {/* <Navbar /> */}
      <Body notesList={list} />
      <Footer />
    </div>
  );
}

export default App;
