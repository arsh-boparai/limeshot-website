import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, Info, UserCheck, CreditCard, Users, AlertCircle, Copyright, Shield, Trash2, XCircle, RefreshCw, Scale } from 'lucide-react';

const ACCENT = '#D94045';

const sections = [
  {
    title: '1. Acceptance of Terms',
    icon: FileText,
    content: [
      {
        subtitle: null,
        details: [
          'By downloading, installing, or using the Traveo mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.',
        ],
      },
    ],
  },
  {
    title: '2. Description of Service',
    icon: Info,
    content: [
      {
        subtitle: null,
        details: [
          'Discover tourism destinations and points of interest across Canada',
          'Save favourite places and plan trips',
          'Connect with other travellers through social features',
          'Stream local music content related to destinations',
          'List and promote tourism businesses (Location Owners)',
        ],
      },
    ],
  },
  {
    title: '3. Account Registration',
    icon: UserCheck,
    content: [
      {
        subtitle: null,
        details: [
          'You must create an account to access most features of the App.',
          'You may register using email/password or Sign in with Apple.',
          'You are responsible for maintaining the confidentiality of your account credentials.',
          'You must provide accurate and complete information during registration.',
          'You must be at least 13 years old to create an account.',
          'You are responsible for all activity that occurs under your account.',
        ],
      },
    ],
  },
  {
    title: '4. Subscriptions & Payments',
    icon: CreditCard,
    content: [
      {
        subtitle: 'Free Tier',
        details: [
          'Browse and discover places',
          'Save up to 5 favourites',
          'View comments and ratings',
          'Local music streaming',
          'Interactive map (ads displayed)',
        ],
      },
      {
        subtitle: 'Paid Subscriptions',
        details: [
          'Explorer Premium Monthly — $4.99/month (com.arshboparai.traveo.explorer.monthly)',
          'Explorer Premium Yearly — $39.99/year (com.arshboparai.traveo.explorer.yearly) — includes unlimited favourites, commenting, sharing, ad-free experience',
          'Business Monthly — $14.99/month (com.arshboparai.traveo.owner.business.monthly)',
          'Business Yearly — $119.99/year (com.arshboparai.traveo.owner.business.yearly) — includes unlimited location listings, promotions, visitor analytics, full commenting & sharing',
          'Enterprise Monthly — $29.99/month (com.arshboparai.traveo.owner.enterprise.monthly)',
          'Enterprise Yearly — $249.99/year (com.arshboparai.traveo.owner.enterprise.yearly) — includes everything in Business plus priority support and advanced analytics',
        ],
      },
      {
        subtitle: 'Billing & Renewal',
        details: [
          'Payment will be charged to your Apple ID account at the confirmation of purchase.',
          'Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current billing period.',
          'Your account will be charged for renewal within 24 hours prior to the end of the current period at the rate of the selected plan.',
          'You can manage and cancel your subscriptions by going to your Account Settings in the App Store after purchase.',
          'Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription.',
          'Price changes: We reserve the right to change subscription pricing. Any price changes will take effect at the start of the next subscription period following the date of the price change. Continued use of the service after a price change constitutes your agreement to pay the new price.',
        ],
      },
      {
        subtitle: 'Refunds',
        details: [
          'All purchases are processed by Apple. Refund requests must be submitted through Apple\'s support channels at reportaproblem.apple.com.',
        ],
      },
    ],
  },
  {
    title: '5. User Content',
    icon: Users,
    content: [
      {
        subtitle: 'Your Content',
        details: [
          'You retain ownership of content you create in the App, including comments, reviews, photos, and trip plans ("User Content").',
          'By posting User Content, you grant Limeshot Digital a non-exclusive, worldwide, royalty-free license to use, display, and distribute your User Content within the App.',
        ],
      },
      {
        subtitle: 'Content Guidelines',
        details: [
          'You agree not to post content that is illegal, harmful, threatening, abusive, or harassing',
          'You agree not to post content that is defamatory, vulgar, obscene, or invasive of another\'s privacy',
          'You agree not to post content that infringes on any patent, trademark, trade secret, copyright, or other proprietary rights',
          'You agree not to post content that contains software viruses or any other malicious code',
          'You agree not to post spam, advertisements, or solicitations not related to tourism',
          'You agree not to impersonate any person or entity',
          'You agree not to post false or misleading information about a place or business',
        ],
      },
      {
        subtitle: 'Content Removal',
        details: [
          'We reserve the right to remove any User Content that violates these Terms without notice.',
        ],
      },
    ],
  },
  {
    title: '6. Location Owner Terms',
    icon: AlertCircle,
    content: [
      {
        subtitle: null,
        details: [
          'You represent that you have the authority to list and promote the tourism business or location.',
          'You are responsible for the accuracy of all information you provide about your location, including descriptions, photos, hours, and pricing.',
          'Promotions and offers you create must be honourable and accurate. Misleading promotions are prohibited.',
          'We reserve the right to remove any location listing that violates these Terms.',
        ],
      },
    ],
  },
  {
    title: '7. Acceptable Use',
    icon: Shield,
    content: [
      {
        subtitle: null,
        details: [
          'Use the App for any unlawful purpose',
          'Attempt to gain unauthorized access to other users\' accounts',
          'Interfere with or disrupt the App or its servers',
          'Scrape, data mine, or use automated tools to access the App',
          'Circumvent any access restrictions or usage limits',
          'Use the App to stalk, harass, or harm another person',
          'Create multiple accounts to circumvent subscription limits',
        ],
        prefix: 'You agree not to:',
      },
    ],
  },
  {
    title: '8. Intellectual Property',
    icon: Copyright,
    content: [
      {
        subtitle: null,
        details: [
          'The App, including its design, features, code, and content (excluding User Content), is owned by Limeshot Digital and is protected by copyright, trademark, and other intellectual property laws.',
          'You may not copy, modify, distribute, or reverse engineer any part of the App.',
        ],
      },
    ],
  },
  {
    title: '9. Third-Party Services',
    icon: RefreshCw,
    content: [
      {
        subtitle: null,
        details: [
          'The App integrates with Apple MapKit, Google Places, YouTube, and Google AdMob.',
          'Your use of these services is subject to their respective terms of service and privacy policies.',
          'We are not responsible for the content or practices of these third-party services.',
        ],
      },
    ],
  },
  {
    title: '10. Disclaimer of Warranties',
    icon: Info,
    content: [
      {
        subtitle: null,
        details: [
          'The App is provided "as is" and "as available" without warranties of any kind, either express or implied.',
          'We do not warrant that the App will be uninterrupted or error-free.',
          'Place information, ratings, or reviews are provided for informational purposes only and may not be accurate or up-to-date.',
          'Always verify details directly with the establishment before visiting.',
        ],
      },
    ],
  },
  {
    title: '11. Limitation of Liability',
    icon: Shield,
    content: [
      {
        subtitle: null,
        details: [
          'To the maximum extent permitted by law, Limeshot Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the App.',
          'This includes loss of data or content, errors in place information, unauthorized access to your account, or any third-party conduct or content.',
          'Our total liability shall not exceed the amount you paid for subscriptions in the 12 months preceding the claim.',
        ],
      },
    ],
  },
  {
    title: '12. Account Deletion',
    icon: Trash2,
    content: [
      {
        subtitle: null,
        details: [
          'You may delete your account at any time from the Profile section of the App.',
          'Upon deletion, all your personal data will be permanently removed: profile, favourites, trips, comments, shares, friendships, notifications, and uploaded photos.',
          'Active subscriptions must be cancelled separately through the App Store.',
          'This action is irreversible.',
        ],
      },
    ],
  },
  {
    title: '13. Termination',
    icon: XCircle,
    content: [
      {
        subtitle: null,
        details: [
          'We reserve the right to suspend or terminate your account at any time for violation of these Terms, without prior notice.',
          'Upon termination, your right to use the App will immediately cease.',
        ],
      },
    ],
  },
  {
    title: '14. Changes to Terms',
    icon: RefreshCw,
    content: [
      {
        subtitle: null,
        details: [
          'We may update these Terms from time to time.',
          'We will notify you of significant changes by updating the "Last Updated" date.',
          'Continued use of the App after changes constitutes acceptance of the updated Terms.',
        ],
      },
    ],
  },
  {
    title: '15. Governing Law',
    icon: Scale,
    content: [
      {
        subtitle: null,
        details: [
          'These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law provisions.',
        ],
      },
    ],
  },
];

const TraveoTermsOfService = () => (
  <>
    <Helmet>
      <title>Terms of Service — Traveo | Limeshot Digital</title>
      <meta name="description" content="Traveo terms of service. Understand your rights and responsibilities when using the Traveo app by Limeshot Digital." />
      <link rel="canonical" href="https://limeshotdigital.com/products/traveo/terms" />
    </Helmet>

    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-carbon-800 rounded-xl shadow-lg">
        {/* Header */}
        <div className="p-8 border-b border-white/[0.06]">
          <div className="mb-3">
            <Link to="/products/traveo" className="text-sm font-mono hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>
              ← Traveo
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <p className="text-gray-500 mt-2">Traveo — Travel & Tourism Discovery App · Last updated: March 31, 2026</p>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-400 text-lg leading-relaxed">
              These Terms of Service govern your use of the Traveo app, developed by <strong className="text-gray-300">Limeshot Digital</strong>. Please read them carefully before using the app.
            </p>

            <div className="space-y-10 mt-12">
              {sections.map((section, index) => (
                <div key={index} className="border-t border-white/[0.06] pt-8">
                  <div className="flex items-center mb-5">
                    <div className="p-2 rounded-lg mr-4" style={{ background: `${ACCENT}15` }}>
                      <section.icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                  </div>

                  <div className="space-y-5 pl-12">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        {subsection.subtitle && (
                          <h3 className="text-base font-medium text-white mb-3">{subsection.subtitle}</h3>
                        )}
                        {subsection.prefix && (
                          <p className="text-gray-400 text-sm mb-2">{subsection.prefix}</p>
                        )}
                        <ul className="space-y-2.5">
                          {subsection.details.map((detail, di) => (
                            <li key={di} className="flex items-start text-gray-400 text-sm leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2.5 flex-shrink-0" style={{ background: ACCENT }} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <h2 className="text-xl font-semibold text-white mb-4">16. Contact Us</h2>
              <p className="text-gray-400">
                If you have questions about these Terms, please contact us at:{' '}
                <a href="mailto:contact@limeshotdigital.com" className="font-medium hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>
                  contact@limeshotdigital.com
                </a>
              </p>
              <p className="text-gray-500 mt-2 text-sm">Website: limeshotdigital.com</p>
            </div>

            {/* Footer links */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-4 text-sm">
              <Link to="/products/traveo" className="hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>Traveo</Link>
              <span className="text-gray-700">·</span>
              <Link to="/products/traveo/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TraveoTermsOfService;
