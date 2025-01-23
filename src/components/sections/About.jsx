import { ChevronRight } from 'lucide-react';

const About = () => {
  const achievements = [
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Expert Team Members' },
    { value: '15+', label: 'Industry Awards' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="section-dark py-20">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              5 Years of Digital Excellence
            </h2>
            <p className="text-gray-400 mb-6">
              Founded in 2019, Limeshot Digital Solutions has been at the forefront 
              of digital transformation. We combine technical expertise with 
              creative innovation to deliver solutions that drive real business growth.
            </p>
            <p className="text-gray-400 mb-6">
              Our team of expert developers, designers, and strategists work 
              together to create seamless digital experiences that engage users 
              and deliver measurable results.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Industry-leading development practices',
                'Agile methodology for faster delivery',
                'Dedicated support and maintenance',
                'Continuous innovation and improvement'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <ChevronRight className="text-primary-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;