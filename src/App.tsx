import './App.css'
import Component1 from './Component1.tsx';
import Component2 from './Component2.tsx';

function App() {
    //console.log('App::rr.store:', rr.store)
  return (
    <main className={'main'}>
      <h2>Get started with reactive-robot</h2>
      <section className='imageContainer'>
        <img src='/reactive-robot.png' alt='reactive-robot-logo' width={300} height={300}/>
      </section>
      <section className='componentsContainer'>
        <Component1/>
        <Component2/>
      </section>

    </main>
  )
}

export default App
