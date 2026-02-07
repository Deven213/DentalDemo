import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Thank you, ${formData.name}! We will contact you at ${formData.phone} shortly.`);
        setFormData({ name: '', phone: '', email: '', date: '', message: '' });
    };

    return (
        <div className="container" style={{ padding: '5rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                {/* Contact Info */}
                <div>
                    <h1 className="section-title" style={{ textAlign: 'left' }}>Get in Touch</h1>
                    <p style={{ color: 'var(--text-light)', marginBottom: '3rem' }}>
                        Book an appointment or visit us for a consultation. Emergencies seen same-day.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ color: 'var(--primary)' }}><MapPin size={28} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Visit Us</h4>
                                <p style={{ color: 'var(--text-light)' }}>123 Dental Street, Medical District<br />New York, NY 10001</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ color: 'var(--primary)' }}><Phone size={28} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Call Us</h4>
                                <p style={{ color: 'var(--text-light)' }}>
                                    <a href="tel:+15551234567" style={{ textDecoration: 'underline' }}>+1 (555) 123-4567</a>
                                </p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--success)' }}>WhatsApp Available</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ color: 'var(--primary)' }}><Mail size={28} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Email Us</h4>
                                <p style={{ color: 'var(--text-light)' }}>
                                    <a href="mailto:info@dentalcare.com" style={{ textDecoration: 'underline' }}>info@dentalcare.com</a>
                                </p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>Response within 24h</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ color: 'var(--primary)' }}><Clock size={28} /></div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Opening Hours</h4>
                                <p style={{ color: 'var(--text-light)' }}>Mon - Fri: 9:00 AM - 7:00 PM</p>
                                <p style={{ color: 'var(--text-light)' }}>Saturday: 10:00 AM - 4:00 PM</p>
                                <p style={{ color: 'var(--danger)' }}>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Appointment Form */}
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: 'var(--radius)' }}>
                    <h3 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Book an Appointment</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                required
                                style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius)', border: '1px solid #ccc' }}
                                placeholder="John Doe"
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius)', border: '1px solid #ccc' }}
                                    placeholder="(555) 000-0000"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Preferred Date</label>
                                <input
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    type="date"
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius)', border: '1px solid #ccc' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email (Optional)</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius)', border: '1px solid #ccc' }}
                                placeholder="john@example.com"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Confirm Booking
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
