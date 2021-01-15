import React, {useState} from 'react'
import {PizzaPreview} from './PizzaPreview'
import {FormOrder} from './Formorder'

function App() {

  const [pizza, setPizza] = useState()

    if(pizza) {
      return (
         <>
          <h1>Ваша пицца</h1>
          <PizzaPreview pizza={pizza}/>
        </>
      )
    }

    return (
      <>
        <h1>Артем Пицца</h1>
        <FormOrder onPizzaCreated={setPizza}/>
      </>
    )
}

export default App;
