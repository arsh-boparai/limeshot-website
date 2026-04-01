import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, Share2, UserX, Bell } from 'lucide-react';

const ACCENT = '#D94045';

const sections = [
  {
    title: 'Information We Collect',
    icon: Database,
    content: [
      {
        subtitle: 'Information You Provide',
        details: [
          'Account Information: When you create an account, we collect your email address, full name, and username. If you sign in with Apple, we receive your Apple ID credentials and, optionally, your name and email.',
          'Profile Information: You may optionally provide a profile photo (avatar) and bio.',
          'User Content: Comments, reviews, place ratings, trip plans, and shared content you create within the App.',
          'Favourites: Places and music you save to your favourites.',
          'Location Owner Data: If you register as a location owner, we collect your business name, description, photos, promotions, and offers.',
        ],
      },
      {
        subtitle: 'Information Collected Automatically',
        details: [
          'Location Data: With your permission, we collect your approximate location (city-level) to show nearby places and relevant content. We use "When In Use" location access only — we do not track your location in the background.',
          'Usage Data: We collect information about how you interact with the App, including pages visited, features used, and search queries.',
          'Device Information: Device type, operating system version, and unique device identifiers for analytics and crash reporting.',
        ],
      },
      {
        subtitle: 'Information from Third Parties',
        details: [
          'Apple Sign In: If you choose to sign in with Apple, Apple provides us with a unique identifier and, at your discretion, your name and email address. You may choose to use Apple\'s private email relay service.',
          'MapKit & Google Places: We use Apple MapKit and Google Places APIs to provide place information, ratings, and photos. These services may collect anonymous usage data per their respective privacy policies.',
        ],
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    icon: Eye,
    content: [
      {
        subtitle: 'Core App Functionality',
        details: [
          'Provide, maintain, and improve the App',
          'Create and manage your account',
          'Display nearby tourism destinations and points of interest',
          'Enable social features (friends, comments, sharing)',
          'Save your favourites and trip plans',
          'Send in-app notifications about friend requests, comments, and activity',
          'Process subscription purchases through Apple\'s In-App Purchase system',
          'Analyze usage trends to improve the App experience',
          'Respond to support requests',
        ],
      },
      {
        subtitle: 'Advertising (Free Tier)',
        details: [
          'Free-tier users may see advertisements served by Google AdMob.',
          'We request App Tracking Transparency (ATT) permission before enabling personalized ads. If you decline tracking, you will still see ads, but they will not be personalized based on your activity across other apps.',
          'AdMob may collect your device advertising identifier (IDFA) if you consent, general device and network information, and ad interaction data.',
          'You can change your tracking preferences at any time in Settings > Privacy & Security > Tracking.',
        ],
      },
    ],
  },
  {
    title: 'Data Storage & Security',
    icon: Lock,
    content: [
      {
        subtitle: 'Where Your Data Is Stored',
        details: [
          'Supabase: Your account data, profile, favourites, trips, comments, and social data are stored securely on Supabase (hosted on AWS). Data is encrypted in transit (TLS) and at rest.',
          'Supabase Storage: Profile photos and place photos are stored in Supabase Storage with access controls.',
          'Apple: Subscription and payment information is handled entirely by Apple through the App Store. We do not collect or store your payment details.',
        ],
      },
      {
        subtitle: 'Security Measures',
        details: [
          'We implement Row Level Security (RLS) on all database tables to ensure users can only access their own data.',
          'All data is transmitted over encrypted HTTPS/TLS connections.',
          'Access to user data is restricted to authorised personnel only.',
        ],
      },
    ],
  },
  {
    title: 'Data Sharing',
    icon: Share2,
    content: [
      {
        subtitle: 'We Do Not Sell Your Data',
        details: [
          'We do not sell your personal information.',
        ],
      },
      {
        subtitle: 'When We Share Information',
        details: [
          'With Other Users: Your public profile (username, avatar, bio) and public content (comments, shared places) are visible to other Traveo users.',
          'Service Providers: We use third-party services (Supabase, Google AdMob, YouTube API, Google Places API) to operate the App. These providers process data on our behalf under their respective privacy policies.',
          'Legal Requirements: We may disclose information if required by law or in response to valid legal processes.',
        ],
      },
      {
        subtitle: 'Third-Party Services',
        details: [
          'Supabase — Authentication, database, storage (supabase.com/privacy)',
          'Google AdMob — Advertising for free-tier users (policies.google.com/privacy)',
          'YouTube API — Local music content (policies.google.com/privacy)',
          'Google Places API — Place information and photos (policies.google.com/privacy)',
          'Apple MapKit — Maps and place search (apple.com/privacy)',
          'Apple Sign In — Authentication (apple.com/privacy)',
        ],
      },
    ],
  },
  {
    title: 'Your Rights & Choices',
    icon: UserX,
    content: [
      {
        subtitle: 'Access & Control',
        details: [
          'Access & Update: You can view and edit your profile information at any time within the App.',
          'Delete Account: You can permanently delete your account and all associated data from the Profile section of the App. This action is irreversible and removes your profile, favourites, trips, comments, shares, notifications, friendships, and uploaded photos.',
          'Location: You can disable location access at any time in your device\'s Settings. The App will still function but will not show nearby places.',
          'Notifications: You can manage notification preferences in your device Settings.',
          'Ad Tracking: You can opt out of personalized advertising through Settings > Privacy & Security > Tracking.',
        ],
      },
    ],
  },
  {
    title: "Children's Privacy",
    icon: Bell,
    content: [
      {
        subtitle: 'Age Requirement',
        details: [
          'Traveo is not intended for children under the age of 13.',
          'We do not knowingly collect personal information from children under 13.',
          'If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.',
        ],
      },
    ],
  },
  {
    title: 'Data Retention & Policy Changes',
    icon: Shield,
    content: [
      {
        subtitle: 'Data Retention',
        details: [
          'We retain your personal data for as long as your account is active.',
          'When you delete your account, all associated data is permanently removed from our systems.',
          'Anonymized, aggregated data may be retained for analytics purposes.',
        ],
      },
      {
        subtitle: 'Changes to This Policy',
        details: [
          'We may update this Privacy Policy from time to time.',
          'We will notify you of any changes by updating the "Last Updated" date at the top of this page.',
          'Continued use of the App after changes constitutes acceptance of the updated policy.',
        ],
      },
    ],
  },
];

const TraveoPrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy — Traveo | Limeshot Digital</title>
      <meta name="description" content="Traveo privacy policy. Learn how Limeshot Digital collects, uses, and protects your information in the Traveo app." />
      <link rel="canonical" href="https://limeshotdigital.com/products/traveo/privacy" />
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
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-500 mt-2">Traveo — Travel & Tourism Discovery App · Last updated: March 31, 2026</p>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-400 text-lg leading-relaxed">
              Limeshot Digital ("we", "our", "us") operates the Traveo mobile application ("App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App. By using Traveo, you agree to the collection and use of information in accordance with this policy.
            </p>

            <div className="space-y-12 mt-12">
              {sections.map((section, index) => (
                <div key={index} className="border-t border-white/[0.06] pt-8">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg mr-4" style={{ background: `${ACCENT}15` }}>
                      <section.icon className="w-6 h-6" style={{ color: ACCENT }} />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  </div>

                  <div className="space-y-6 pl-12">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-lg font-medium text-white mb-3">{subsection.subtitle}</h3>
                        <ul className="space-y-3">
                          {subsection.details.map((detail, di) => (
                            <li key={di} className="flex items-start text-gray-400">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ background: ACCENT }} />
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
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400">
                If you have questions about this Privacy Policy, please contact us at:{' '}
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
              <Link to="/products/traveo/terms" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TraveoPrivacyPolicy;
