import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Main/Header';
import Nav from './components/Main/Nav';
import Article from './components/Main/Article';
import Aside from './components/Main/Aside';
import Footer from './components/Main/Footer';


function App() {
  const [showPosts, setShowPosts]= useState(true);
  const [balance, setBalance] = useState(0);
  const [avaxBalance, setAvaxBalance] = useState(0);
  const [wavaxBalance, setWavaxBalance] = useState(0);
  const [ethBalance, setEthBalance] = useState(0);
  const [userAccount, setUserAccount] = useState();
  const [nftBalance, setNftBalance] = useState([]);
  const [EthNft, setEthNft] = useState([]);
  const [avaxNftDisp, setAvaxNftDisp] =  useState(false);
  const [ethNftDisp, setEthNftDisp] = useState(false);
  




  let dispPosts = () => setShowPosts(true);
  let hidePosts = () => setShowPosts(false);
  // let dispNft = () => setNftDisp(true);
  // let hideNft = () => setNftDisp(false);
  // let dispEthNft = () => setEthNftDisp(true);
  // let hideEthNft = () => setEthNftDisp(false);
  // let dispEth = () => setShowEth(true);
  // let hideEth = () => setShowEth(false);
  // let dispAvax = () => setShowAvax(true);
  // let hideAvax = () => setShowAvax(false);
  


  return (
    <body>
      <Header/>
      <div id="main">
        <Article 
          showPosts={showPosts}
        />
        <Nav/>
        <Aside
          dispPosts={dispPosts}
          hidePosts={hidePosts}
        />
      </div>
      <Footer/>
    </body>
  );
}

export default App;
