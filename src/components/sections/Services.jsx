import { Monitor, Smartphone, Cpu, Calendar, MessageSquare } from 'lucide-react';

const SERVICES = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices."
  },
  {
    icon: Cpu,
    title: "AI-Driven Solutions",
    description: "Intelligent automation and data-driven insights to transform your business operations."
  },
  {
    icon: Calendar,
    title: "Appointments Management",
    description: "Smart scheduling systems that streamline your booking process and reduce no-shows."
  },
  {
    icon: MessageSquare,
    title: "Customer Communications",
    description: "Automated yet personal communication systems to keep your customers engaged and informed."
  }
];

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="service-card">
    <Icon className="service-icon" />
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section-light py-20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From web and mobile development to AI-driven marketing solutions, 
            we provide end-to-end digital services to help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;