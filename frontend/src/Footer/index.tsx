import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
function Footer(){

    return(
      <footer className="main-footer">
            T-Shirt

            <div className="footer-icons">
                <a href="https://www.youtube.com" target="_new">
                    <YoutubeIcon/>

                </a>

               
                <a href="https://www.instagram.com" target="_new">
                   <InstagramIcon/>
                    
                </a>

                

            </div>
      </footer>


    )


}

export default Footer;