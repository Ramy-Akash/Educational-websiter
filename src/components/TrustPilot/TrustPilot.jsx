import './TrustPilot.css'

const TrustPilot = ({Gstar , Ystar}) => {
  return (
    <div className='divs-container'>
      <div className='side-divs'><h3>+60K</h3> <p>Live courses</p></div>
      <div className='side-divsG'><h3>+35K</h3><p>Category</p></div>
      <div className='trust'>
            <div className='Gstar'><i>{Gstar}</i> <h3>TrustPilot</h3></div>
            <div className='Ystar'><p>View our 1,602 reviews</p> <div className='Ystar-four'><h3>4.9 </h3><i>{Ystar}</i></div></div>
      </div>
      <div className='side-divsG'><h3>+25K</h3> <p>Professionals</p></div>
      <div className='side-divs'><h3>+125K</h3><p>Students</p></div>
    </div>
  )
}

export default TrustPilot
