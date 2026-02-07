

const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800', title: 'State-of-the-art Clinic' },
    { url: 'https://images.unsplash.com/photo-1629909615184-74f495363b63?auto=format&fit=crop&q=80&w=800', title: 'Modern Treatment Rooms' },
    { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800', title: 'Comfortable Waiting Area' },
    { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800', title: 'Advanced Technology' },
    { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800', title: 'Patient Care' },
    { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800', title: 'Radiant Smiles' }
];

const Gallery = () => {
    return (
        <div className="container" style={{ padding: '5rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="section-title">Our Smiles & Facilties</h1>
                <p className="section-subtitle">Take a tour of our modern clinic and see the results we deliver.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {galleryImages.map((img, index) => (
                    <div key={index} style={{ overflow: 'hidden', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
                        <img
                            src={img.url}
                            alt={img.title}
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                                transition: 'transform 0.5s',
                                display: 'block'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div style={{ padding: '1rem', backgroundColor: 'var(--white)', textAlign: 'center' }}>
                            <h4 style={{ color: 'var(--primary)', margin: 0 }}>{img.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
