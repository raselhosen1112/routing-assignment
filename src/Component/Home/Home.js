
import './Home.css';
import img from '../../img/product-1.png';
import useCart from  '../../hook/useCart';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
 


const Home = () => {
    const [carts, setCarts]=useCart();
    return (
        <div >
            
            <div  className='main'>
            <div className='main-contain'>
            <h1>Your next phone <br></br> <span className='colour'>
            Your best phone
            </span>
           
            </h1>
            <p>Amin aute id magna aliqua ad ad non deserunt sunt, qui <br></br>
                 irue qui lorem cupidatat commodo, Elit sunt amet fugiat 
                 <br></br> veniam occacat fugat aliqua</p>
                 <button className='btn'>Live Now</button>
            </div>
            <div className='img-contain'>
               <img src={img} alt=''></img>
            </div>
            </div>
            <div className= 'review'>
            <h2>Coustomer Review ({carts.length})</h2>
            <div className='review-container'>
           
            {
                
             carts.map(cart=><Cart cart={cart}> </Cart>)
            }
        
            </div>
           <Link to='/review'> <h3 className='read-more'>Read More</h3></Link>
           
        </div>
            </div>
           
    );
};

export default Home;