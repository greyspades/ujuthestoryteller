import React,{useEffect,useState} from "react";
//import Axios from 'axios'
//import Navbar from "../components/Navbars/AuthNavbar.js";
//import Footer from "../components/Footers/Footer.js";
import pattern from '../public/images/pattern_react.png'
import {motion} from 'framer-motion'
import camp from '../public/images/camp.jpg'
import book from '../public/images/book.jpg'
import grace from '../public/images/profile-image.jpg'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import grace2 from '../public/images/bio.jpg'
import Star from '@material-ui/icons/Star'
import StarHalf from'@material-ui/icons/StarHalf'
import StarOut from '@material-ui/icons/StarOutline'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  CardFooter,
} from 'reactstrap'
import {Parallax} from 'react-parallax'
import butterfly from '../public/images/book 10.jpg'
import exile from '../public/images/exile.jpg'


export default function Profile() {

  const [main,setMaini]=useState()

  const [message,setMessage]=useState('')
  const [book,setBook]=useState()

  useEffect(()=>{
    console.log('mounted')
   
  })

const showBooks=()=>{
  if(books=='the price'){
    return (
      <div>
        Bought the price
      </div>
    )
  }
}
const user=()=>{
  console.log('user profile saved and is pending')
}
  return (
    <>
      
      <main  className="main">
        
         <div style={{position:'relative'}}>
        <Parallax  blur={10} bgImage={camp} strength={200}>
        <Container style={{width:'100%',height:'100%'}} fluid  >
         
         <Card className='main-card' style={{zIndex:9}}>
            <CardHeader>
            <Row>
                     
                 
                     <div className='header-image'>
                         <img className='pattern' style={{}}  src={pattern}/>
                         <img className='other-pattern' src={pattern} />
                         <img style={{}} className='image-top' src={grace} />
                       </div>
                     
             </Row>
             <Row>
             <motion.div className='title'  >
             <motion.h3  className='name' >
                 Grace Uju
               </motion.h3>
               <motion.h5 style={{fontSize:20,textAlign:'center'}}>
                 Author/Story Teller
               </motion.h5>
             </motion.div>
             </Row>
               
            </CardHeader>

             <CardBody style={{padding:'0',marginTop:30}}>
               <Container className='bio-container' style={{padding:'0'}} fluid>
                 <Row   style={{width:'100%',padding:'0',marginTop:50,margin:'0'}}>
                 <Col style={{}} md={6} xs={12}>
                   <img src={grace2} className='bio-image'></img>
                   </Col>
                   <Col style={{backgroundColor:'#27306b',padding:'0'}} md={6} xs={12}>
                   <div className='bio'>
                     <h3>
                       Meet Grace
                     </h3>
                           Grace is a foremost Sociologist and An Anthropologist.
                           She is interested in gender-related issues. She is a practising Attorney,
                           a solicitor and an Advocate. A keen observer of human rights and social justice. Grace a natural storyteller,
                           believes she has more  than a thousand stories running amok in her head. She devotes her spare time between Breast
                           and Cervical Cancer advocacy, and her Garden
                        </div>
                   </Col>

                 </Row>
                 
                 <Row style={{width:'100%'}} className='first-row' >
                  <Col md={6} style={{backgroundColor:'#27306b'}}>
                    <div className='bio2'>
                      She has a pletora of fictional stories to her name
                      including Gone with the Butterfly, House of Exile, Circle of doom,
                      and The Price
                    </div>
                  </Col>
                  
                   <Col md={6}>
                   <Row style={{padding:10}}>
                     <Col md={6} xs={12} >
                     <div className='book'>
                      <img style={{}} className='butterfly' src={butterfly}/>
                    </div>
                     </Col>
                     <Col md={6} xs={12} >
                      <div>
                      <img style={{}} className='butterfly' src={exile}/>
                      </div>
                     </Col>
                   </Row>
                   </Col>
                  
                 </Row>
               </Container>
               <Container>
                <Row style={{marginTop:50}}>
                <h2 style={{textAlign:'center',marginLeft:30}}>
                   Get a copy of her latest book
                 </h2>
                </Row>
                <Row style={{marginTop:50}}>
                  <Col md={6} >
                  <img style={{}} className='books-image' src={butterfly}/>
                  <p style={{fontSize:40,marginBottom:-20}}>
                    Gone with the Butterfly
                  </p>
                  <div style={{marginTop:30}}>
                  
                      <Star style={{width:60,height:60,color:'goldenrod'}} />
                      <Star style={{width:60,height:60,color:'goldenrod'}} />
                      <Star style={{width:60,height:60,color:'goldenrod'}} />
                      <StarHalf style={{width:60,height:60,color:'goldenrod'}} />
                      <StarOut style={{width:60,height:60,color:'goldenrod'}}/>

                    
                  <Button style={{width:150,height:110}}>
                 <a href='https://www.amazon.co.uk/dp/B093G3CNV3'>
                 <AddShoppingCartIcon style={{width:70,height:60,color:'white'}} />
                 </a>
                 <p>
                   Buy now
                 </p>
                  </Button>
                  
                  </div>
                  </Col>
                  <Col md={6} style={{backgroundColor:'#27306b'}}>
                    <h2 style={{marginTop:30}}>
                      Never say Never
                    </h2>
                  <div style={{color:'white',padding:15}}>
                  Tales of two women from different backgrounds. Betina has seen it all. Crushing poverty, beaten and marred by a jealous boyfriend who caught her with a man she met through one of the Escort Service providers, secretly springing up in the catholic church owned university.
Several abortions later, a backstreet abortion doctor gave a revelation of her laying still in a hospital theatre, blood pumping out of her body.
Her search for scholarship brought her into contact with a perverted billionaire Bishop with a peculiar sex practice who preys on teenage girls.
Winning the miss UNEC crown turned her into a gold-fish. She didn't reckon with the tenacity of Randy lecturers, particularly the "Dwarf" who came panting after her.
A chance meeting with an older friend Kim, almost pulled her from the dark abyss. Kim battles infertility, infidelity, and keeping up with her dashing philandering husband, and a proud charismatic, and sexy father-in-law.
Could Andy, Bettina's boyfriend, from an upper crust family trigger fulfillment of the last price?
                  </div>
                 
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <div>
                  <img style={{}} className='exile' src={exile}/>
                  </div>
                  </Col>
                  <Col style={{width:'100%',height:'100%',padding:15}}>
                    <h1 style={{}}>
                      Coming Soon!
                    </h1>
                    <p>
                      Enjoy the intriguing tale of suspense and .......
                      in thus amazing story
                    </p>
                   
                    <div className='coming-soon' >
                    <Button style={{width:150,height:130}}>
                 <a href='https://www.amazon.co.uk/dp/B093G3CNV3'>
                 <AddShoppingCartIcon style={{width:80,height:80,color:'white'}} />
                 </a>
                 <p>
                   Pre Order
                 </p>
                  </Button>

                    </div>
                    <p style={{fontSize:30}}>
                      Stay tuned for more of her work 
                    </p>
                  </Col>
                </Row>
               </Container>
              
 
             </CardBody>
             <CardFooter>
               Grace
             </CardFooter>
           </Card>
         </Container>
        </Parallax>
    
         </div>
      </main>
      
    </>
  );
}
