import '../styles.css'

function Services() {
  const services = [
    {
      name: 'High-Speed Internet',
      image:
        'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    },
    {
      name: 'Transportation',
      image:
        'https://images.unsplash.com/photo-1579386993387-df6c96a03f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    },
    {
      name: 'Rental Service',
      image:
        'https://images.unsplash.com/photo-1600585154355-6af1f04f7d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    },
    {
      name: 'Food Delivery',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    },
    {
      name: 'Homely Stay',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    },
  ]

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
