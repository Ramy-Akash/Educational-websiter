import './Footer.css'

function Footer({paragraph , foot , firstulh , firstulfirstli , firstulsecli , firstulthirdli , firstulfourthli , firstulfifthli , seculh , seculfirstli , seculsecli , seculthirdli , seculfourthli , fourmh }) {
  const firstul = [firstulfirstli , firstulsecli , firstulthirdli , firstulfourthli , firstulfifthli]
  const secul = [seculfirstli , seculsecli , seculthirdli , seculfourthli]
  
    return (
    <div className='Footer'>
      <div className='left-type'><h2>Edu<span className='jar-span'>jar</span></h2>   <p>{paragraph}</p>     <h4>{foot}</h4></div>
      <div className='first-ul'>
        <h2>{firstulh}</h2>
        <ul>
        {firstul.map((content , index) =>(
            <li key={index}>{content}</li>
        ))}
        </ul>
      </div>
      <div className='sec-ul'>
        <h2>{seculh}</h2>
        <ul>
        {secul.map((content , index) =>(
            <li key={index}>{content}</li>
        ))}
        </ul>
      </div>
      <div className='fourm-div'>
        <h2>{fourmh}</h2>
        <input type="email" placeholder='Enter Email' />
        <input type="button"  value="Subscribe" />
      </div>
    </div>
  )
}

export default Footer
