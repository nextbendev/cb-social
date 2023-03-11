import { useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Main/Header';
import Nav from '../components/Main/Nav';
import Article from '../components/Main/Article';
import Aside from '../components/Main/Aside';
import Footer from '../components/Main/Footer';
import Link from 'react-router-dom'
import '../App.css';

function Home() {
    useEffect(() => {
    const loadProvider = async () => {
      // with metamask we have an access to window.ethereum & to window.web3
      // metamask injexts a global API into website
      // this API allows websites to request users, accounts, read data to blockchain,
      // sign messages and transactions

      console.log(window.web3, "web3")
      console.log(window.ethereum, "eth")
    }

    loadProvider()
  }, [])
    return  <body>
                <div id="main">
                    <Outlet/>
                    <Nav/>
                    <Aside/>
                </div>
                <Footer
                   
                />

            </body>;
}

export default Home;