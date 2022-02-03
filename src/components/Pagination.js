import React from 'react';


function Pagination(props) {

    const pageNumbers = []

    for (let i=1; i< Math.ceil(props.totalCountries / props.countriesPerPage); i++){
        pageNumbers.push(i)
    }

  return (

    <nav className="pagination">
      {pageNumbers.map((num)=>{
        return(
          <a className="page-numbers" href="#" key={num} onClick={()=>props.paginate(num)}>{num}</a>
        ) 
      })}
    </nav> 

  );
  }
    
  export default Pagination;