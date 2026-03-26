import './Intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'
const Intro = () => {
    return (
        <>
            <section id="intro">
                <div className="introContent">
                    <span className='hello'>Hello,</span>
                    <span className='introText'>I'm <span className='introName'>Vrushabh </span><br />Website Designer</span>
                    <p className="introPara">Frontend Developer with 4+ years of experience building fast and scalable <br /> web applications using React.js.</p>
                    <Link><button className='btn'><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
                </div>
                <img src={bg} alt="" className='bg' />
            </section>
        </>
    )
}

export default Intro;