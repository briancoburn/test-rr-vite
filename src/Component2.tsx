import { useState } from 'react'
import rr from 'reactive-robot';
import store from './utils/store.ts';
import {COUNT_UPDATE, type EventData} from './utils/events.ts';

function Component2() {
  const [update, setUpdate] = useState(Date.now())
  const [updatedBy, setUpdatedBy] = useState('')
  const [incDecAmount, setIncDecAmount] = useState('1')
  const onEvent = (name:string, data:EventData)=>{
    switch(name){
      case COUNT_UPDATE:
        setUpdatedBy(data.updatedBy || '')
        setUpdate(Date.now())//fake state update!
        break
    }
  }
  rr.addObserver('Component2', onEvent)
  const handleIncrementClick = () => {
    store.count = store.count += parseInt(incDecAmount)
    rr.next(COUNT_UPDATE, {updatedBy:'Component2'})
  }
  return (
    <section data-rr-timestamp={update} className='component'>
      <span>Component2:</span>
      <span>count:{store.count}</span>
      <span>Increment/Decrement Amount</span>
      <input type='number' value={incDecAmount} onChange={(evt) => {
        setIncDecAmount(evt.target.value)
      }}></input>
      <button className='updateButton' onClick={handleIncrementClick}>update</button>
      <span className='updatedByLabel'>{`updated by: ${updatedBy}`}</span>
    </section>
  )
}

export default Component2
