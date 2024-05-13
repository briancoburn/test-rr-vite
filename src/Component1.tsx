import { useState } from 'react'
import rr from 'reactive-robot';
import store from './utils/store.ts';
import {COUNT_UPDATE} from './utils/events.ts';

function Component1() {
  const [update, setUpdate] = useState(Date.now())
  const [incDecAmount, setIncDecAmount] = useState('1')
  const onEvent = (name:string)=>{
    switch(name){
      case COUNT_UPDATE:
        setUpdate(Date.now())//fake state update!
        break
    }
  }
  rr.addObserver('Component1', onEvent)
  const handleIncrementClick = () => {
    store.count = store.count += parseInt(incDecAmount)
    rr.next(COUNT_UPDATE, {updatedBy:'Component1'})
  }
  console.log('Component1::render()')
  return (
    <section data-rr-timestamp={update} className='component'>
      <span>Component1:</span>
      <span>count:{store.count}</span>
      <span>Increment/Decrement Amount</span>
      <input type='number' value={incDecAmount} onChange={(evt) => {
        setIncDecAmount(evt.target.value)
      }}></input>
      <button className='updateButton' onClick={handleIncrementClick}>update</button>
    </section>
  )
}

export default Component1
