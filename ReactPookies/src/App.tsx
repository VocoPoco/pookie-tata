import { useState } from 'react'
import MHF from '../public/first-aid-svgrepo-com.svg'
import lolLogo from '/icons8-league-of-legends.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <navbar/>
                <a href="https://www.britannica.com/science/hospital/Mental-health-facilities" target="_blank" rel="noopener noreferrer">
                    <img src={MHF} className="logo " alt="LoL logo"/>
                </a>
                <a href="https://www.leagueoflegends.com/en-gb/" target="_blank" rel="noopener noreferrer">
                    <img src={lolLogo} className="logo LOL" alt="Mental Health Facilities logo"/>
                </a>
            </div>
            <h1>MHF + LOL</h1>
            Mental Health Facilities
            {/*<div className="card">*/}
            {/*    <button onClick={() => setCount(count + 1)}>*/}
            {/*        count is {count}*/}
            {/*    </button>*/}
            {/*</div>*/}
        </>
    )
}

export default App
