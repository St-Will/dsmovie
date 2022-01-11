import { ReactComponent as GithubIcon } from '../../assets/img/GitHub.svg'
import './styles.css';

function Navbar() {

    return (

        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/St-Will">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link"> /StWill</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )


}

export default Navbar;