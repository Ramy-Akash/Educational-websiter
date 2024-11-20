import './Courses.css'

const Courses = ({headtitle , subheadtitle , larrw , rarrw  ,playicon , numoflesson , btnindex , cardh , cardp , jbtn , footerimgone , footerimgtwo , footerimgthree , footerimgfour }) => {
  return (
    <div className='full-container'>
      
      <div className='course-header'>
          <h1>{headtitle}</h1>
          <p>{subheadtitle}</p>
          <div className='arrows-btns'><img src={larrw} alt="" /> <img src={rarrw} alt="" /></div>
      </div>
      <div className='courses-container'>
          <div className="ccard">
            <div className='card-head'><div className="card-head-less"><i className='plicong'>{playicon}</i> <p> {numoflesson[0]} </p></div> <button>{btnindex[0]}</button> </div>
            <div className='card-type'><h1>{cardh[0]}</h1>  <p>{cardp}</p> </div>
            <div className='card-footer'><button>{jbtn}</button> <img src={footerimgone} alt="" /></div>
          </div>

          <div className="ccard">
          <div className='card-head'><div className="card-head-less"><i className='pliconb'>{playicon}</i> <p> {numoflesson[0]} </p></div> <button>{btnindex[1]}</button> </div>
            <div className='card-type'><h1>{cardh[1]}</h1>  <p>{cardp}</p> </div>
            <div className='card-footer'><button>{jbtn}</button> <img src={footerimgtwo} alt="" /></div>
          </div>

          <div className="ccard">
          <div className='card-head'><div className="card-head-less"><i className='pliconr'>{playicon}</i> <p> {numoflesson[0]} </p></div> <button>{btnindex[2]}</button> </div>
            <div className='card-type'><h1>{cardh[2]}</h1>  <p>{cardp}</p> </div>
            <div className='card-footer'><button>{jbtn}</button> <img src={footerimgthree} alt="" /></div>
          </div>

          <div className="ccard">
          <div className='card-head'><div className="card-head-less"><i className='pliconp'>{playicon}</i> <p> {numoflesson[0]} </p></div> <button>{btnindex[0]}</button> </div>
            <div className='card-type'><h1>{cardh[3]}</h1>  <p>{cardp}</p> </div>
            <div className='card-footer'><button>{jbtn}</button> <img src={footerimgtwo} alt="" /></div>
          </div>

          <div className="ccard">
          <div className='card-head'><div className="card-head-less"><i className='plicono'>{playicon}</i> <p> {numoflesson[0]} </p></div> <button>{btnindex[1]}</button> </div>
            <div className='card-type'><h1>{cardh[1]}</h1>  <p>{cardp}</p> </div>
            <div className='card-footer'><button>{jbtn}</button> <img src={footerimgfour} alt="" /></div>
          </div>

          <div className="ccard">
          <div className='card-head'><div className="card-head-less"><i className='plicony'>{playicon}</i> <p> {numoflesson[0]} </p></div> <button>{btnindex[2]}</button> </div>
            <div className='card-type'><h1>{cardh[2]}</h1>  <p>{cardp}</p> </div>
            <div className='card-footer'><button>{jbtn}</button> <img src={footerimgthree} alt="" /></div>
          </div>
      </div>
      <button className='explore-btn'>Explore Courses</button>
    </div>
  )
}

export default Courses
