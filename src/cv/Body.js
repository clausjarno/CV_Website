import '../css/Body.css'
import '../css/Page.css'
import Opleidingen from './Opleidingen.js'
import Vaardigheden from './Vaardigheden.js'
import Talenkennis from './Talenkennis.js'
import Werkervaring from './Werkervaring.js'
import Computerkennis from './Computerkennis.js'
import { Link } from 'react-router-dom'

export default function Body() {
  return (
    <>
      <div className='page body'>
        <div className='left-section'>
          <Opleidingen />
          <Vaardigheden />
          <Talenkennis />
        </div>
        <div className='right-section'>
          <div className='profiel'>
            <h2>Profiel</h2>
            <p>
              Ik ben 25 jaar en volg momenteel een opleiding in .NET
              development. Ik heb een grote interesse in
              softwareontwikkeling en ben gemotiveerd om mijn kennis
              verder uit te breiden. Hoewel ik nog aan het begin van mijn
              carrière sta, kijk ik enorm uit naar een praktische uitdaging om
              mijn vaardigheden verder te ontwikkelen.
            </p>
          </div>
          <Werkervaring />
          <Computerkennis />
          <Link to="/" className='btn'>Portfolio</Link>
        </div>
      </div>
    </>
  )
}