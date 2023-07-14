import React,{useState} from 'react'
import { Button , Card , Modal} from 'react-bootstrap'

const Moviedata = ({title,poster_path,vote_average,release_date,overview}) => {

    const[showmodal, setShowmodal]= useState(false);
    const handleshow = ()=> setShowmodal(true);
    const handleclose = ()=> setShowmodal(false)
    const imgurl ="https://image.tmdb.org/t/p/w500/"


  return (

    <div>
  <Card className='mycard'>
      <Card.Img className='cardimg' variant="top" src={imgurl+poster_path} />
      <Card.Body>
        <button className='Btn' onClick={handleshow}>View More</button>
        <Modal show={showmodal} onHide={handleclose}>
            <Modal.Header closeButton>
                  <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                   <img className='modalimg' src={imgurl+poster_path}/>
                   <h2>IMDB Rating :{vote_average}</h2>
                   <h3>Release Date:{release_date}</h3>
                   <h4>Overview</h4>
                   <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleclose}>Close</Button>
            </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Moviedata