import './navbar.css'
import slika1 from '../images/slika1.png';
import slika2 from '../images/slika2.png';
import slika3 from '../images/slika3.png';
import slika4 from '../images/slika4.png';
import slika5 from '../images/slika5.png';

const Navbar = () => {
    return(
        <div className='container-navbar'>
            <div className='profile1'>
            <img src={slika1} alt="" />
            <p>EMIN</p>
            </div>

            <div className='profile2'>
            <img src={slika2} alt="" />
            <p>Uholadja #1</p>
            </div>

            <div className='profile3'>
            <img src={slika3} alt="" />
            <p>Uholadja #2</p>
            </div>

            <div className='profile4'>
            <img src={slika4} alt="" />
            <p>JA</p>
            </div>

            <div className='profile5'>
            <img src={slika5} alt="" />
            <p>Uholadja #3</p>
            </div>
        </div> 
    )
}

export default Navbar;