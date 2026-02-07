
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '2rem' }}>🦷</span> DentalCare
                        </div>
                        <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Providing top-quality dental care with a gentle touch. Your smile is our passion.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[<Facebook size={20} />, <Twitter size={20} />, <Instagram size={20} />, <Linkedin size={20} />].map((icon, i) => (
                                <a key={i} href="#" style={{ color: '#fff', backgroundColor: '#333', padding: '8px', borderRadius: '50%', display: 'flex' }}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link, i) => (
                                <li key={i}>
                                    <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} style={{ color: '#aaa', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = '#aaa'}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>Our Services</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#aaa' }}>
                            <li>General Dentistry</li>
                            <li>Cosmetic Dentistry</li>
                            <li>Orthodontics</li>
                            <li>Pediatric Dentistry</li>
                            <li>Dental Implants</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>Contact Info</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', color: '#aaa' }}>
                                <MapPin size={20} color="var(--primary)" />
                                123 Dental Street, NY 10001
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', color: '#aaa' }}>
                                <Phone size={20} color="var(--primary)" />
                                +1 (555) 123-4567
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', color: '#aaa' }}>
                                <Mail size={20} color="var(--primary)" />
                                info@dentalcare.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', textAlign: 'center', color: '#666' }}>
                    <p>&copy; 2026 DentalCare Clinic. All rights reserved. | <Link to="/privacy" style={{ color: '#666' }}>Privacy Policy</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
