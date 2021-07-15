import React, { useState } from 'react'
import Header from './Header';
import Section from './Section';

export const DataContext = React.createContext()

export function Context() {
    const [products,setProducts] = useState('Nike')
    
    setProducts(products);
    return (
        <DataContext.Provider value={{products}}>
          <Header />
          <Section />
        </DataContext.Provider>
    )
}


