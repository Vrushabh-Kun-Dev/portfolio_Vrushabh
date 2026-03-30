import "./Contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

const Contact = () => {
  return (
    <>
      <section id="contactPage">
        <div id="clients">
          <h1 className="contactPageTitle">My Clients</h1>
          <p className="clientDesc">
            I have worked with clients and teams to build scalable,
            user-friendly, and high-performance web applications.
          </p>
          <div className="clientImgs">
            <img src={walmart} alt="Client 1" className="clientImg" />
            <img src={adobe} alt="Client 2" className="clientImg" />
            <img src={Microsoft} alt="Client 3" className="clientImg" />
            <img src={Facebook} alt="Client 4" className="clientImg" />
          </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <p className="contactDesc">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <form className="contactFrom">
            <input type="text" className="name" placeholder="Your Name" />
            <input type="email" className="email" placeholder="Your Email" />
            <textarea name="Message" rows={5} placeholder="Your Message" className="msg"></textarea>
            <button type="submit" value={'Send'} className="submitBtn">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                <img src={TwitterIcon} alt="TwitterIcon" className="link" />
                <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
                <img src={InstagramIcon} alt="InstagramIcon" className="link" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
