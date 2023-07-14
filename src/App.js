import { useEffect, useState } from 'react'
import Moviedata from './components/Moviedata'
import './App.css'
import { Container,Row,Col ,Nav,Navbar,Form,Button} from 'react-bootstrap';

function App() {

const [movies, setMovies]= useState([]) 
const [query ,setQuery]= useState('') 

const searchMovie = async(e)=>{
  e.preventDefault();
  console.log("Searching");
  try{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
    const res= await fetch(url);
    const data= await res.json();
    console.log(data);
    setMovies(data.results);
  }
  catch(e){
    console.log(e);
  }
}

const changeHandler=(e)=>{
  setQuery(e.target.value);
}


  const fetchdata =()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093')
    .then(async(res)=>{
      const response = await res.json()
      const finalres = response.results
      setMovies(finalres)
    })
  }
  useEffect(()=>{
   fetchdata()
  },[query])


  return (
    <div>
      <section>
      <Navbar expand="lg" className="py-4 fixed-top" bg='light'>
      <Container fluid>
        <Navbar.Brand className='logo ms-3' href="#">MOVIES 4 YOU</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex me-5" onSubmit={searchMovie}>
            <Form.Control
              type="search"
              autoComplete='off'
              placeholder="Search movies by name"
              className="me-4"
              aria-label="Search"
              name='query'
              value={query}
              onChange={changeHandler}
            />
            <Button onClick={searchMovie} variant="outline-primary btn-lg">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </section>
      <div>
        {movies.length > 0 ?(
        <Container fluid>
            <Row className='myrow mt-5 pt-5'>
                
                {movies.map((item)=><Moviedata 
                 key={item.id} 
                 title={item.title}
                 poster_path={item.poster_path}
                 vote_average={item.vote_average}
                 release_date={item.release_date}
                 overview={item.overview}
                 />)}
                
            </Row>
         </Container>
         ):
         (
          <h1>no movies found</h1>
         )}
      </div>
         
     </div>
  );
}

export default App;
