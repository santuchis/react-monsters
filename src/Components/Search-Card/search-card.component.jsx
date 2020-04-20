import React  from 'react';

import './search-card.styles.css';

export const SearchCard = ({ placeholder, handlechange }) => (

  <input className='search' type='search' placeholder={placeholder} onChange={handlechange} />
    
)
