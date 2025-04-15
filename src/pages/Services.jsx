export default function Services() { // this is services page
    const services = [
      {
        title: "Residential",
        icon: "🏠",
        description: "Complete home electrical services from repairs to full rewiring",
        link: "/contact"
      },
      {
        title: "Commercial",
        icon: "🏢",
        description: "Office wiring, lighting installs, breaker troubleshooting",
        link: "/contact"
      },
      {
        title: "EV Chargers",
        icon: "🔌",
        description: "Install and support for Tesla, Rivian, and other EVs",
        link: "/contact"
      },
    ]
  
    return (
      <section className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }
  