import {Outlet} from 'react-router-dom';
import Header from '../components/Main/Header';
import Nav from '../components/Main/Nav';
import Article from '../components/Main/Article';
import Aside from '../components/Main/Aside';
import Footer from '../components/Main/Footer';
import Link from 'react-router-dom'
import '../App.css';

function Home() {
    return  <>
              <Header/>
                <div id='main'>
                    <Outlet/>
                    <Nav/>
                    <Aside  
                />
                </div>
                <Footer/>
            </>;
}

export default Home;