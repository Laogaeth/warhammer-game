import "./SingleCard.css"

export default function SingleCard ({card}) {
    return ( 

          <div className='card'>
            <div>
              <img className="front" src={card.src} alt="Face"/>
              <img className="cover" src='./images/cover.webp' alt='Cover'/>
            </div>
          </div>
       
    )
}
 
