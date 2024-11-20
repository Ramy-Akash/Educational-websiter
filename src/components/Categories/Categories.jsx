import './Categories.css'

const Categories = ({title , subtitle , arrowleft , artimg , artp , communimg , communp , financeimg , financep , marketimg , marketp , photographyimg , photographyp , arrowright}) => {
  return (
    <div className='section-categories'>
      <div className='categories-header'>
            <h1>{title}</h1><p>{subtitle}</p>
       </div>

      <div className='whole-container'>
       <i className='arrows'>{arrowleft}</i>
      <div className='cards-container'>
            <div className='card'><i>{artimg}</i> <p>{artp}</p></div>
            <div className='card'><i>{communimg}</i> <p>{communp}</p></div>
            <div className='card'><i>{financeimg}</i><p>{financep}</p></div>
            <div className='card'><i>{marketimg}</i> <p>{marketp}</p></div>
            <div className='card'><i>{photographyimg}</i> <p>{photographyp}</p></div>
      </div>
       <i className='arrows'>{arrowright}</i>
       </div>
    </div>
  )
}

export default Categories
