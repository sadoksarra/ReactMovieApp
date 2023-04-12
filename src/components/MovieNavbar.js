import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import iconnet from './assets/iconnet.png';
import Form from 'react-bootstrap/Form';
import "./MovieNavbar.css";
import StarRatingComponent from 'react-star-rating-component';

const  BrandExample = ({searchMovie , rateMovie}) => {
  return (
    <>
      
    <section className='NavItem'> 
      <Navbar bg="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img 
              src={iconnet}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              
            />
             
            

           <div className='Searchbar'>
              <StarRatingComponent className='NavbarStar'
              name="star" /* name of the radio input, it is required */
              onStarClick={(value) => rateMovie(value)} /* on icon click handler */
              starColor="#FFFF00" /* color of selected icons, default `#ffb400` */
              emptyStarColor="#fff" /* color of non-selected icons, default `#333` */
              />
            <Form className="d-flex Searchbar ">
             
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>searchMovie(e.target.value)}
            />
            <button type="button" class="btn btn-danger">Search</button>
          </Form>
          </div> 
          </Navbar.Brand>
        </Container>
      </Navbar>
      </section>   
    </>
  );
}

export default BrandExample;