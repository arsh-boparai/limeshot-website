import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, Mail, MapPin, Linkedin } from 'lucide-react';
import { COMPANY } from '../utils/constant';
import ScrollReveal from '../components/ui/ScrollReveal';

const PROJECT_TYPES = [
  'React / React Native Development',
  'AI & Agent Integration',
  'Web & Mobile Development',
  'Technical Consulting',
  'Other',
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '19ce9135-36e4-4b85-8380-9a5df979b693',
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          project_type: formData.projectType,
          message: formData.message,
          subject: `New project inquiry from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);

      setStatus({
        type: 'success',
        message: "Message sent! We will get back to you within 1–2 business days.",
      });
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: `Something went wrong. Email us directly at ${COMPANY.email}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-carbon-800 border border-white/[0.08] rounded-lg text-gray-100 text-sm ' +
    'placeholder-gray-600 focus:outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/30 ' +
    'transition-all duration-200';

  const labelClass = 'block text-sm font-medium text-gray-400 mb-2';

  return (
    <>
    <Helmet>
      <title>Contact Limeshot Digital — Start Your Project</title>
      <meta name="description" content="Ready to build something? Get in touch with Limeshot Digital. We work with startups and enterprises across North America." />
      <meta name="keywords" content="hire software developers Canada, software agency contact, react development company Ontario" />
      <meta property="og:url" content="https://limeshotdigital.com/contact" />
      <meta property="og:title" content="Contact Limeshot Digital — Start Your Project" />
      <link rel="canonical" href="https://limeshotdigital.com/contact" />
    </Helmet>
    <main>
      <section className="pt-32 pb-24 bg-carbon-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[400px_1fr] gap-16">

              {/* Left — Info */}
              <div>
                <span className="section-label">Get in Touch</span>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-6 leading-tight">
                  Let's Discuss Your Project
                </h1>
                <p className="text-gray-400 leading-relaxed mb-8">
                  We are selective about what we take on, which means the projects we
                  do take on get our full attention. Tell us what you are building.
                </p>

                {/* Availability */}
                <div className="flex flex-wrap items-center gap-2 mb-8 p-4 rounded-lg bg-carbon-800 border border-white/[0.06]">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
                  </span>
                  <span className="text-sm text-gray-400">{COMPANY.availability}</span>
                </div>

                <div className="space-y-5">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-carbon-800 border border-white/[0.06] flex items-center justify-center group-hover:border-lime-500/30 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{COMPANY.email}</span>
                  </a>

                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 rounded-lg bg-carbon-800 border border-white/[0.06] flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{COMPANY.location}</span>
                  </div>

                  <a
                    href={COMPANY.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-carbon-800 border border-white/[0.06] flex items-center justify-center group-hover:border-lime-500/30 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Right — Form */}
              <div className="card-dark p-8">
                {status.message && (
                  <div
                    className={`mb-6 p-4 rounded-lg text-sm ${
                      status.type === 'success'
                        ? 'bg-lime-500/10 text-lime-400 border border-lime-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Jane Smith"
                        required
                        minLength={2}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="jane@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company <span className="text-gray-600">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className={labelClass}>Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                      required
                    >
                      <option value="" disabled className="bg-carbon-800 text-gray-500">
                        Select a project type...
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-carbon-800 text-gray-100">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Tell Us About Your Project *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={inputClass}
                      placeholder="What are you building? What is the timeline? What problem are you trying to solve?"
                      required
                      minLength={20}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn-lime w-full justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <Send className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
    </>
  );
};

export default ContactPage;
