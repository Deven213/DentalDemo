
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="section-padding" style={{
                background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--white) 100%)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 className="hero-title">
                        Your Smile, Our Priority
                    </h1>
                    <p className="hero-text">
                        Advanced dental care with experienced doctors and modern technology. We ensure a pain-free and comfortable experience for your family.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
                        <a href="tel:+1234567890" className="btn btn-outline">Call Now</a>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                        {['Experienced Dentist', 'Pain-free Treatment', 'Modern Equipment', 'Hygienic Clinic'].map((item, index) => (
                            <div key={index} style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                backgroundColor: 'var(--bg-light)', padding: '1rem 2rem', borderRadius: '50px',
                                fontWeight: '600', color: 'var(--primary)'
                            }}>
                                <CheckCircle size={20} /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">Comprehensive dental solutions for a healthy smile.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'General Dentistry', desc: 'Routine checkups, cleanings, and fillings.' },
                            { title: 'Root Canal Treatment', desc: 'Save your natural tooth with painless RCT.' },
                            { title: 'Dental Implants', desc: 'Permanent solution for missing teeth.' },
                            { title: 'Teeth Whitening', desc: 'Brighten your smile with safe procedures.' },
                            { title: 'Orthodontics', desc: 'Braces and aligners for perfect alignment.' },
                            { title: 'Pediatric Dentistry', desc: 'Specialized care for children\'s dental health.' }
                        ].map((service, index) => (
                            <div key={index} style={{
                                backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius)',
                                boxShadow: 'var(--shadow)', transition: 'transform 0.3s'
                            }}>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>{service.desc}</p>
                                <Link to="/services" style={{ color: 'var(--secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    Learn more <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/services" className="btn btn-outline">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container grid-2">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                            alt="Dental Clinic"
                            style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}
                        />
                    </div>
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose DentalCare?</h2>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                            We are dedicated to providing the highest quality dental care in a friendly and comfortable environment.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                'Personalized treatment plans',
                                'Affordable and transparent pricing',
                                'Friendly and professional staff',
                                '24/7 Emergency dental support'
                            ].map((item, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                                    <div style={{
                                        backgroundColor: 'var(--primary-light)', color: 'var(--primary)',
                                        padding: '0.25rem', borderRadius: '50%'
                                    }}>
                                        <CheckCircle size={20} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">Patient Stories</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        {[
                            { name: "Emily Parker", text: "The best dental experience I've ever had. Dr. Jenkins was so gentle and explained everything clearly.", review: "⭐⭐⭐⭐⭐" },
                            { name: "Michael Chang", text: "Got my wisdom teeth removed here. Recovery was fast and painless. Highly recommended!", review: "⭐⭐⭐⭐⭐" },
                            { name: "Sarah Johnson", text: "My kids actually love coming here! The pediatric team is amazing with children.", review: "⭐⭐⭐⭐⭐" }
                        ].map((t, i) => (
                            <div key={i} style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
                                <div style={{ color: 'var(--warning)', marginBottom: '1rem' }}>{t.review}</div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-light)' }}>"{t.text}"</p>
                                <h4 style={{ fontWeight: '700', color: 'var(--primary)' }}>- {t.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section style={{ height: '400px', width: '100%' }}>
                <iframe
                    title="Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830888065!2d-74.0059728!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f9881fa91%3A0x2a3e61c3b1234567!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1619827364521!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
};

export default Home;
