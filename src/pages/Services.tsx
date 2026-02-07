
const servicesList = [
    {
        title: "Dental Checkup & Cleaning",
        desc: "Regular comprehensive exams and professional hygiene cleaning to prevent cavities and gum disease.",
        price: "From $50"
    },
    {
        title: "Root Canal Treatment",
        desc: "Pain-free therapy to save infected teeth. We use rotary endodontics for precision and comfort.",
        price: "From $300"
    },
    {
        title: "Tooth Extraction",
        desc: "Gentle removal of damaged or wisdom teeth with local anesthesia and sedation options.",
        price: "From $100"
    },
    {
        title: "Dental Implants",
        desc: "Gold-standard replacement for missing teeth. Titanium posts that look and feel like natural teeth.",
        price: "Consultation Required"
    },
    {
        title: "Braces & Orthodontics",
        desc: "Traditional metal braces and clear aligners (Invisalign) to straighten teeth for all ages.",
        price: "Plans Available"
    },
    {
        title: "Smile Design",
        desc: "Cosmetic makeovers using veneers, bonding, and gum contouring for your dream smile.",
        price: "Custom Quote"
    },
    {
        title: "Teeth Whitening",
        desc: "Professional in-office laser whitening or take-home kits for immediate brightness.",
        price: "From $200"
    },
    {
        title: "Pediatric Dentistry",
        desc: "Specialized gentle care for children, including sealants, fluoride treatments, and habit counseling.",
        price: "From $60"
    },
    {
        title: "Gum Treatment",
        desc: "Therapy for gingivitis and periodontitis to restore gum health and prevent tooth loss.",
        price: "From $150"
    },
    {
        title: "Emergency Dental Care",
        desc: "Same-day appointments for toothaches, accidents, and broken prosthetics.",
        price: "Immediate Care"
    }
];

const Services = () => {
    return (
        <div className="container section-padding">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="section-title">Our Treatments & Services</h1>
                <p className="section-subtitle">We offer a full range of dental procedures using state-of-the-art technology.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                {servicesList.map((service, index) => (
                    <div key={index} style={{
                        backgroundColor: 'var(--white)',
                        border: '1px solid #eee',
                        borderRadius: 'var(--radius)',
                        padding: '2rem',
                        transition: 'all 0.3s',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', minHeight: '60px' }}>{service.desc}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                            <span style={{ fontWeight: '600', color: 'var(--success)' }}>{service.price}</span>
                            <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
