import logo from './logo.svg';
import './App.css';
import Header from './components/Main/Header';
import Nav from './components/Main/Nav';
import Article from './components/Main/Article';
import Aside from './components/Main/Aside';
import Footer from './components/Main/Footer';

function App() {
  return (
    <body>
      <Header/>
      <div id="main">
        <Article/>
        <Nav/>
        <Aside/>
      </div>
      <Footer/>
    </body>
  );
}

export default App;
