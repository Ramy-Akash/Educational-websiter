import './Sponsers.css';

const Sponsers = ({ larrow, hubspot, loom, gitlab, livechat, monday, rarrow }) => {
  const images = [hubspot, loom, gitlab, livechat, monday];

  
  const scrollLeft = () => {
    const slider = document.querySelector('.sponsor-images');
    slider.insertBefore(slider.lastElementChild, slider.firstChild);
  };

  
  const scrollRight = () => {
    const slider = document.querySelector('.sponsor-images');
    slider.appendChild(slider.firstElementChild);
  };

  return (
    <div className='sponsers-div'>
      <button onClick={scrollLeft}>{larrow}</button>
      <div className='sponsor-images'>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`sponsor-${index}`} className="sponsor-image" />
        ))}
      </div>
      <button onClick={scrollRight}>{rarrow}</button>
    </div>
  );
};

export default Sponsers;
