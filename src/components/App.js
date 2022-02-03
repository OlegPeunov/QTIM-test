import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import FullCardPage from './FullCardPage'


function App() {
  const [card, setCard] = React.useState({});

  function exactCardHandler(res){
    console.log(res)
    setCard({...card, link: res.image, title: res.title, description: res.description, preview: res.preview})

  }

  return (
    <>
      <div className="home page page-template page-template-template-portfolio page-template-template-portfolio-php">
        <Header/>
          <Routes>
            <Route path="/" element={<Home getExactCard={exactCardHandler}/>} />
            <Route path="/about" element={<About />} />     
            <Route path="/blog" element={<Blog />} />
            <Route path="/FullCard" element={<FullCardPage card={card}/>} />     
        </Routes>    
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
