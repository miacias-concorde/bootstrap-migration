import { SampleV4, SampleV5 } from './components/OtherStuff'
// import './App.css'

function App() {

  return (
    <>
      <h1 style={{ margin: '0.5em', textAlign: 'center' }}>Bootstrap Migration Example</h1>
      <div style={{ margin: '3em', display: 'flex', gap: '5em' }}>
        <SampleV4 />
        <SampleV5 />
      </div>
    </>
  )
}

export default App
