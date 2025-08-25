import { useState } from 'react';
import Nav from './Nav/Nav';
import './Header.css';
import ButtonA from '../Share/ButtonA/ButtonA';
import Logo from '../Share/logo/logo';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='header-container'>
            <div className="header">
                <h1>
                    <Logo />
                </h1>
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
                <nav className={`nav-container ${isOpen ? 'open' : ''}`}>
                    <Nav />
                </nav>
                <ButtonA text="شروع" />
            </div>
        </header>
    )
}

export default Header;
