import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import { AiOutlineSearch,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { FiChevronUp,FiChevronDown } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import './index.css'

let cardArray = [
  {
    imageUrl: "/Images/card-section-1.png",
    title: "Order Online",
    description: "Stay home and order to your doorstep",
  },
  {
    imageUrl: "/Images/card-section-2.png",
    title: "Dining",
    description: "View the city’s favourite dining venues",
  },
  {
    imageUrl: "/Images/card-section-3.png",
    title: "Nightlife and Clubs",
    description: "Explore the city’s top nightlife outlets",
  }
]

let collectionsArray=[
  {
    imageUrl: "/Images/collection1.png",
    title: "Newly Opened",
    description: "34 places",
  },
  {
    imageUrl: "/Images/collection2.png",
    title: "Best Of Mumbai",
    description: "139 places",
  },
  {
    imageUrl: "/Images/collection3.png",
    title: "Trending This Week",
    description: "25 places",
  },
  {
    imageUrl: "/Images/collection4.png",
    title: "Work Friendly Places!",
    description: "25 places",
  }

]

let localityArray=[
  {
    place:"Lower Parel",
    number:"70 places"
  },
  {
    place:"Lower Parel",
    number:"70 places"
  },
  {
    place:"Lower Parel",
    number:"70 places"
  },
  {
    place:"Lower Parel",
    number:"70 places"
  }, {
    place:"Lower Parel",
    number:"70 places"
  },
  {
    place:"Lower Parel",
    number:"70 places"
  },
  {
    place:"Lower Parel",
    number:"70 places"
  },
  {
    place:"Lower Parel",
    number:"70 places"
  }
]

let accordianArray=["Popular cuisines near me","Popular restaurant types near me ","Top restaurant chains","Cities we deliver to"]


export default function Home() {

  const [places,setPlaces]=useState([...localityArray]);
  const [slideStatus,setSlideStatus]=useState(false)
 


const toggleLocations=()=>{
  setSlideStatus(!slideStatus)
  if(slideStatus){
    setPlaces(localityArray)
   
  }
  else{
    setPlaces(localityArray.slice(0,4))
    
  }
}

const checkScroll=()=>{
  console.log("scrolled")
}

window.onscroll=checkScroll()
 

  return (
    <>
      <Container fluid>
        <Row>

          <div className='banner-section '>
            <Col xs={12}>
              <div className='d-flex flex-column align-items-center'>
                <div className='d-flex align-items-baseline'>
                  <img src="/Images/HotBowl.png" alt="bowl" />
                  <h2 className='text-white ps-2'>NOM-<span className='text-danger'>NOM</span></h2>
                </div>
                <p className='text-white'>Discover the best food & drinks in Mumbai</p>
                <div className='d-flex align-items-center search-box-container bg-light border rounded-3 p-1'>
                  <img src="/Images/mapIcon.png" alt="" />
                  <Form className='d-flex'>
                    <Form.Select aria-label="Default select example" className='border-0 bg-transparent'>

                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <div className='d-flex align-items-center'>
                      <AiOutlineSearch size={24} />
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                    </div>
                  </Form>

                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>

      <Container >
        <Row>
          <div className='card-section d-flex justify-content-between flex-wrap mb-5'>
          {cardArray.map((val) =>
              <Col xs={12} md={6} lg={4}  xl={4}>
                <Card key={val.id}   className="card-item m-3">
                  <Card.Img variant="top" src={val.imageUrl}  className="card-img"/>
                  <Card.Body>
                    <Card.Title className='card-heading'>{val.title}</Card.Title>
                    <Card.Text  className='card-description'>
                     {val.description}
                    </Card.Text>
                 
                  </Card.Body>
                </Card>
              </Col>
            )}
          </div>
        </Row>


        <Row>
          <section className='collections-section mb-5'>
            <Col>
            <div className='d-flex justify-content-between align-items-baseline'>
              <div>
              <h2>Collections</h2>
              <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
              </div>
              <div>
                <button className='text-danger bg-transparent border-0'>All Collections in Mumbai <BsFillPlayFill/></button>
              </div>
            </div>
            </Col>
            <div className='d-flex flex-wrap'>
            {collectionsArray.map((val) =>
              <Col xs={12} md={6} lg={3}  xl={3}>
                <Card style={{ backgroundImage:`url(${val.imageUrl})` }}   className="collection-card m-2">
                  <Card.Body className='d-flex flex-column justify-content-end' >
                    <Card.Title className='card-heading text-white'>{val.title}</Card.Title>
                    <Card.Text  className='card-description text-white'>
                     {val.description} <BsFillPlayFill/>
                    </Card.Text>
                 
                  </Card.Body>
                </Card>
              </Col>
            )}
            </div>
          </section>
          
        </Row>
        
        <Row>
          <section className='popular-loaclity-section'>
            <Col>
            <h2>Popular localities in and around Mumbai</h2>
            </Col>
            <div className='d-flex flex-wrap'>
            {places.map((val) =>
              <Col xs={12} md={6} lg={4}  xl={4}>
                <Card    className="m-2">
                  <Card.Body className='d-flex flex-column justify-content-end' >
                    <Card.Title className='card-heading'>{val.place}</Card.Title>
                    <Card.Text  className='card-description'>
                     {val.number} <BsFillPlayFill/>
                    </Card.Text>
                 
                  </Card.Body>
                </Card>
              </Col>
            )}
            <Col xs={12} md={6} lg={4}  xl={4}>
                 <Card    className="m-2" onClick={toggleLocations}>
                  <Card.Body className='d-flex align-items-center justify-content-center see-more-card' >
                    <Card.Title className='card-heading'>{slideStatus? (<span>see more<FiChevronUp/></span>):(<span>see less<FiChevronDown/></span>)}</Card.Title>
                  </Card.Body>
                </Card>
            </Col>

            </div>

            <Col>
        <div className="mt-5 mb-5">
        <Accordion className='rounded-bill'>
          {accordianArray.map(((arr,val)=>
            <Accordion.Item eventKey={val} className="mb-2 ">
            <Accordion.Header className='accordion-item rounded-pill'>{arr}</Accordion.Header>
            <Accordion.Body className='accordion-item bg-success'>
               {val}
            </Accordion.Body>
          </Accordion.Item>
            ))}
    
    </Accordion>
    </div>
            </Col>
          </section>
        </Row>
      </Container>

      <footer className='footer-section p-4'>
        <Container>
         <Row>
           <Col lg={12}>
           <div className='d-flex justify-content-between align-items-baseline'>
            <div className='d-flex align-items-baseline'>
            <img src="/Images/footer-bowl.png" alt="bowl"  className=''/>
            <h2 className='footer-heading ps-2'>NOM-NOM</h2>
            </div>
            <div className='d-flex justify-content-between'>
            <Form >
                    <Form.Select aria-label="Default select example" className='border-0 bg-transparent'>

                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
             </Form>
             <Form >
                    <Form.Select aria-label="Default select example" className='border-0 bg-transparent'>

                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
             </Form>
            
            </div>
           </div>
           </Col>
           <div className='d-flex  flex-wrap mt-5'>
           <Col sm={12} md={6} lg={2}>
            <div>
              <h4>ABOUT NOM-NOM</h4>
              <ul className='ps-0'>
                <li><a href="">Who We Are</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Work With Us</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Report Fraud</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
           </Col>
           <Col sm={12} md={6} lg={2}>
            <div>
              <h4>NOMVERSE</h4>
              <ul className='ps-0'>
                <li><a href="">NOM-NOM</a></li>
                <li><a href="">Feeding India</a></li>
                <li><a href="">Hyperpure</a></li>
                <li><a href="">Nomland</a></li>
              </ul>
            </div>
           </Col>
           <Col  sm={12} md={6} lg={2}>
            <div>
              <div className=''>
              <h4>FOR RESTURANTS</h4>
              <ul className='ps-0'>
                <li><a href="">Partner With Us</a></li>
                <li><a href="">Apps For You</a></li>
                </ul>
                </div>
                <div className='mt-2'>
              <h4>FOR ENTERPRISES</h4>
              <ul className='ps-0'>
                <li><a href="">NOM-NOM For Work</a></li>
                </ul>
                </div>
                
            </div>
           </Col>
           <Col sm={12} md={6} lg={2}>
            <div>
              <h4>LEARN MORE</h4>
              <ul className='ps-0'>
                <li><a href="">Privacy</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Work With Us</a></li>
                <li><a href="">Investor Relations</a></li>
              </ul>
            </div>
           </Col>
           <Col xs={12}sm={12} md={6} lg={2}>
            <div className='social-links'>
              <h4>SOCIAL LINKS</h4>
              <div className='d-flex justify-content-between'>
                <div className='rounded-pill d-flex justify-content-center p-1'>
                  <FaLinkedinIn className='text-white' size={24}/>
                </div>
                <div className='rounded-pill d-flex justify-content-center p-1'>
                  <AiOutlineInstagram className='text-white'  size={24}/>
                </div>
                <div className='rounded-pill d-flex justify-content-center p-1'>
                  <AiOutlineTwitter className='text-white'  size={24}/>
                </div>
                <div className='rounded-pill d-flex justify-content-center p-1'>
                  <AiFillYoutube className='text-white'  size={24}/>
                </div>
                <div className='rounded-pill d-flex justify-content-center p-1'>
                  <GrFacebookOption className='text-white'  size={24}/>
                </div>
              </div>
              <div className='mt-3 mb-2'>
              <img src="/Images/GooglePlay.png" alt="googlePlay" className='' />
              <img src="/Images/AppStore.png" alt="googlePlay" />
              </div>
            </div>
           </Col>
           </div>
         </Row>

        </Container>
      </footer>
   
    </>



  )
}
