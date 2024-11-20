import './Questions.css'

function Questions({leftType , smbtn , collH , collP }) {
    
  return (
    <div className='questions-div'>
      <div className='questions-left'> <p>{leftType[0]}</p>  <h2>{leftType[1]}</h2> <button>{smbtn}</button>    </div>
      <div className='questions-right'>
      <div className="colls"><h3> {collH[0]} </h3>    <button type='button' className='collapsible'> + </button>  <div className='coll-content'> <p> {collP} </p> </div></div>  
      <div className="colls"><h3> {collH[1]} </h3>    <button type='button' className='collapsible'> + </button>  <div className='coll-content'> <p> {collP} </p> </div></div>  
      <div className="colls"><h3> {collH[2]} </h3>    <button type='button' className='collapsible'> + </button>  <div className='coll-content'> <p> {collP} </p> </div></div>  
      <div className="colls"><h3> {collH[3]} </h3>    <button type='button' className='collapsible'> + </button>  <div className='coll-content'> <p> {collP} </p> </div></div>  
      </div>
    </div>
    
  )
  
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

export default Questions
