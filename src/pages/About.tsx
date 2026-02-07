
import { Award, Users, BookOpen, Clock } from 'lucide-react';

const About = () => {
    return (
        <div className="container" style={{ padding: '5rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
                <div>
                    <h4 style={{ color: 'var(--secondary)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.5rem' }}>About Us</h4>
                    <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Meet Dr. Sarah Jenkins</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                        With over 15 years of experience in restorative and cosmetic dentistry, Dr. Jenkins is passionate about helping patients achieve healthy, confident smiles.
                    </p>
                    <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                        "My philosophy is simple: treat every patient like family. I believe in minimally invasive dentistry and using the latest technology to ensure comfort and precision."
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {[
                            { icon: <Award size={24} />, title: "Certified Specialist", desc: "American Board of Orthodontics" },
                            { icon: <Users size={24} />, title: "Family Focused", desc: "Treating patients of all ages" },
                            { icon: <BookOpen size={24} />, title: "Continuous Learning", desc: "Staying updated with latest tech" },
                            { icon: <Clock size={24} />, title: "15+ Years Exp", desc: "Serving the community since 2010" }
                        ].map((item, index) => (
                            <div key={index} style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                                <div>
                                    <h5 style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{item.title}</h5>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?auto=format&fit=crop&q=80&w=800"
                        alt="Dr. Sarah Jenkins"
                        style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}
                    />
                </div>
            </div>

            {/* Certifications could go here */}
        </div>
    );
};

export default About;
