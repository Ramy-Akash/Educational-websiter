import './hero.css';

const Hero = ({firstimg , header ,spn, par , inp , btn ,secimg}) => {
  return (
    <div className='hero'>
      <img src={firstimg} alt="" />
      <div className="hero-components">
        <h1>{header}<span>{spn}</span></h1>
        <p>{par}</p>
        <div className='inp-div'>  <input type="button" value={btn} className='inp-btn' />  <input type="text" placeholder={inp} className='inp'/></div></div>
        <img src={secimg} alt="" />
      
    </div>
  )
}

export default Hero
