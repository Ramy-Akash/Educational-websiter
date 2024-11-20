import './Clientsay.css';

function Clientsay({ wocs, ctimg, para, Mname, arrleft, arrright, faceone, facetwo, facefive, facefour, facethree }) {
  
  const faces = [faceone, facetwo, facefive, facefour, facethree];

  const scrollLeft = () => {
    const slider = document.querySelector('.slider-images');
    slider.insertBefore(slider.lastElementChild, slider.firstChild);
  };


  const scrollRight = () => {
    const slider = document.querySelector('.slider-images');
    slider.appendChild(slider.firstElementChild);
  };

  return (
    <div className='wocs-div'>
      <h1>{wocs}</h1>
      <img src={ctimg} alt="" />
      <p>{para}</p>
      <h3>{Mname}</h3>
      <div className='face-slider'>
        <button onClick={scrollLeft}>{arrleft}</button>
        <div className="slider-images">
          {faces.map((face, index) => (
            <img key={index} src={face} alt={`client-${index}`} className="slider-image" />
          ))}
        </div>
        <button onClick={scrollRight}>{arrright}</button>
      </div>
    </div>
  );
}

export default Clientsay;
