import React from 'react';
import newApi from '../utils/api';
import Card from './Card';
import Pagination from './Pagination';

function Home(props){
  const [cards, setCards] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [countriesPerPage, setCountriesPerPage] = React.useState(6);

  React.useEffect(() => {

    newApi.getCards()
      .then((cardsApi)=>{
        
        const date = cardsApi.map((el)=>{
          return({_id: el.id, title: el.title, link: el.image, description: el.description })
        })
        
        setCards([...date])

      })
      .catch((err)=>{
        console.log(err)
      })  

  }, []); 
   

  function getExactCard(id){
    newApi.getCardInfo(id)
      .then((res)=>{
        
        props.getExactCard(res)
      })
      .catch((err)=>{
        console.log(err)
      })
  }


  const lastContryIndex = currentPage * countriesPerPage
  const firstContryIndex = lastContryIndex - countriesPerPage
  const currentCountry = cards.slice(firstContryIndex, lastContryIndex)
  
 function paginate (pageNumber) {
    setCurrentPage(pageNumber)
  }

 

	return (
    <div id="page">
      <div className="container">
        
        <div id="content" className="site-content">
          <div id="primary" className="content-area column full">
            <main id="main" className="site-main">
            <div style={{display:"grid", gridTemplateColumns: "repeat(3, 2fr)", gridGap:"50px"}}className="grid portfoliogrid" >

              {currentCountry.map(({_id, title, link, description})=>{
                return(
                  <Card _id={_id} title={title}  link={link} description={description} key={_id} clickHandler={getExactCard}/>
                ) 
              })}

            </div>
            
            <Pagination countriesPerPage={countriesPerPage} totalCountries={cards.length} paginate={paginate}/>
            
            <br/>
            
            </main>

          </div>

        </div>

      </div>

      
      


    </div>
  )
}

export default Home;