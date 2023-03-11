import Header from '../components/Main/Header';
import Nav from '../components/Main/Nav';
import Article from '../components/Main/Article';
import Aside from '../components/Main/Aside';
import Footer from '../components/Main/Footer';
import Link from 'react-router-dom'

function Home() {
    return  <body>
                <Header/>
                <div id="main">
             
                <Nav/>
                <Aside
                    
                />
                </div>
                <Footer/>
            </body>;
}

export default Home;