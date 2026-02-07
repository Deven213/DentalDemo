import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" style={{
            boxShadow: 'var(--shadow)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--white)',
            zIndex: 1000,
            padding: '1rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                    <span style={{ fontSize: '2rem' }}>🦷</span> DentalCare
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <style>{`
            @media (max-width: 768px) {
              .nav-links { display: none !important; }
              .mobile-toggle { display: block !important; }
            }
            @media (min-width: 769px) {
              .mobile-toggle { display: none !important; }
            }
          `}</style>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={18} /> Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--primary)' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--white)',
                    padding: '2rem',
                    boxShadow: 'var(--shadow)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'center'
                }}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
