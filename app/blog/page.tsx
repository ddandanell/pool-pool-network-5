import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Pool Care Blog Bali | Tips, Guides & Expert Advice | Bali Pool Pros',
  description: 'Expert pool care tips and guides for Bali villa owners. Learn about pool maintenance, cleaning techniques, tropical pool challenges, and how to keep your pool crystal clear in Bali\'s climate.',
  keywords: 'pool care blog Bali, pool maintenance tips, swimming pool guides, Bali pool advice, tropical pool care, villa pool tips',
};

const blogPosts = [
  {
    id: 0,
    title: 'White-Area SEO Blueprint: Ethical, High-Impact Optimization',
    excerpt: 'A compliance-minded, 2000-word article structure that blends semantic depth, contextual link placement, engagement templates, and adaptive meta updates to accelerate rankings without violating guidelines.',
    date: '2025-01-05',
    author: 'Editorial Team',
    readTime: '9 min read',
    category: 'Strategy',
    slug: 'white-area-seo-strategy',
  },
  {
    id: 1,
    title: 'The Complete Guide to Pool Maintenance in Bali\'s Tropical Climate',
    excerpt: 'Bali\'s unique tropical climate presents special challenges for pool owners. High humidity, monsoon rains, and warm temperatures year-round create the perfect environment for algae growth and water chemistry imbalances. In this comprehensive guide, we explore the essential steps to keep your pool pristine in paradise.',
    date: '2024-12-15',
    author: 'I Made Putra',
    readTime: '8 min read',
    category: 'Pool Maintenance',
    slug: 'complete-guide-pool-maintenance-bali',
  },
  {
    id: 2,
    title: 'How to Prepare Your Villa Pool for Bali\'s Rainy Season',
    excerpt: 'The rainy season in Bali (November to March) can wreak havoc on unprepared pools. Heavy downpours dilute chemicals, introduce organic debris, and create ideal conditions for algae blooms. Learn the essential preparation steps to protect your investment during monsoon season.',
    date: '2024-12-01',
    author: 'Wayan Surya',
    readTime: '6 min read',
    category: 'Seasonal Care',
    slug: 'prepare-pool-bali-rainy-season',
  },
  {
    id: 3,
    title: 'Saltwater vs. Freshwater Pools in Bali: Which is Right for Your Villa?',
    excerpt: 'Choosing between a saltwater and freshwater pool system for your Bali villa is a significant decision. Each system has distinct advantages and maintenance requirements suited to the tropical environment. We break down the pros and cons to help you make an informed choice.',
    date: '2024-11-20',
    author: 'Ketut Adi Wijaya',
    readTime: '7 min read',
    category: 'Pool Installation',
    slug: 'saltwater-vs-freshwater-pools-bali',
  },
  {
    id: 4,
    title: 'Emergency Green Pool Rescue: What to Do When Your Pool Turns Green',
    excerpt: 'Discovering your beautiful blue pool has turned an alarming shade of green can be distressing. Algae blooms happen quickly in Bali\'s warm climate, but with the right approach, recovery is possible within 24-48 hours. Here\'s our expert guide to green pool rescue.',
    date: '2024-11-10',
    author: 'I Made Putra',
    readTime: '5 min read',
    category: 'Emergency Care',
    slug: 'green-pool-rescue-guide',
  },
  {
    id: 5,
    title: 'Understanding Pool Water Chemistry: A Beginner\'s Guide for Bali Villa Owners',
    excerpt: 'Proper water chemistry is the foundation of a healthy pool. For Bali villa owners, understanding pH levels, chlorine balance, and alkalinity is essential for maintaining crystal-clear water. This beginner\'s guide demystifies pool chemistry.',
    date: '2024-10-25',
    author: 'Ni Luh Putu Dewi',
    readTime: '10 min read',
    category: 'Water Chemistry',
    slug: 'pool-water-chemistry-guide',
  },
  {
    id: 6,
    title: 'Eco-Friendly Pool Maintenance: Sustainable Practices for Bali Pools',
    excerpt: 'As environmental consciousness grows, many Bali villa owners seek sustainable pool maintenance solutions. From natural filtration to chemical-free cleaning methods, discover how to maintain your pool while minimizing environmental impact.',
    date: '2024-10-10',
    author: 'Made Agus Santoso',
    readTime: '6 min read',
    category: 'Eco-Friendly',
    slug: 'eco-friendly-pool-maintenance-bali',
  },
];

const faqs = [
  {
    question: 'How often should I clean my pool in Bali\'s tropical climate?',
    answer: 'In Bali\'s warm and humid climate, we recommend weekly pool cleaning at minimum. During the rainy season (November to March), twice-weekly maintenance is ideal to prevent algae growth and maintain proper chemical balance. The tropical conditions accelerate organic matter decomposition and algae growth, making regular maintenance essential.',
  },
  {
    question: 'What causes pools to turn green quickly in Bali?',
    answer: 'Bali\'s combination of high temperatures, humidity, and abundant sunlight creates ideal conditions for algae growth. Power outages (common in some areas), heavy rainfall diluting chemicals, pump failures, and irregular maintenance can all lead to rapid algae blooms within 24-48 hours.',
  },
  {
    question: 'Are saltwater pools better for Bali\'s climate?',
    answer: 'Saltwater pools can be excellent for Bali, as they produce chlorine continuously and often require less day-to-day chemical management. However, they require specialized maintenance for the salt cell and careful attention to corrosion prevention. Both saltwater and freshwater systems work well when properly maintained.',
  },
  {
    question: 'How does Bali\'s monsoon season affect pool maintenance?',
    answer: 'The monsoon season (November to March) brings heavy rains that can dilute pool chemicals, introduce organic debris, and increase water levels. This requires more frequent chemical testing and adjustments, enhanced debris removal, and potentially upgrading to twice-weekly maintenance visits.',
  },
  {
    question: 'What is the most common pool problem in Bali villas?',
    answer: 'Algae growth is the most common issue we encounter in Bali pools. The warm temperatures, high humidity, and abundant sunlight create perfect conditions for algae to thrive. Regular maintenance with proper chemical balance and circulation is the best prevention.',
  },
  {
    question: 'Can I maintain my own pool in Bali?',
    answer: 'While basic pool maintenance is possible for homeowners, Bali\'s tropical climate makes it more challenging than temperate regions. The rapid water chemistry changes, increased debris, and algae risk often make professional weekly maintenance more cost-effective than DIY approaches.',
  },
  {
    question: 'How long does it take to fix a green pool in Bali?',
    answer: 'With professional treatment, most green pools in Bali can be restored to crystal-clear water within 24-48 hours. Severe cases may require a second treatment. The recovery time depends on the algae type, pool size, and severity of the bloom.',
  },
  {
    question: 'What pool chemicals work best in tropical conditions?',
    answer: 'We use professional-grade pool chemicals specifically suited for tropical environments. This includes stabilized chlorine (to prevent UV degradation), algaecides formulated for warm water, and pH balancers designed for Bali\'s mineral-rich water. All chemicals are safe for families when properly balanced.',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pool to-pool-dark text-white py-20 md:py-32">
        {/* Hero Image Placeholder - Using gradient as fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=80)' }}
          role="img"
          aria-label="Beautiful pool with tropical palm trees in Bali"
        />
        <div className="section-container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pool Care Blog &amp; Expert Tips
          </h1>
          <p className="text-xl md:text-2xl text-pool-light max-w-3xl">
            Expert advice, maintenance tips, and guides for keeping your Bali pool crystal clear. Learn from our experienced team of pool service professionals.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to the Bali Pool Pros blog, your trusted resource for pool maintenance tips, care guides, and expert advice specifically tailored for Bali&rsquo;s unique tropical climate. Whether you own a villa in Canggu, manage a resort pool in Seminyak, or have a residential property in Ubud, our experienced team shares insights gained from over 14 years of professional pool service in Bali.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Pool maintenance in Bali presents unique challenges not found in temperate climates. The combination of high humidity, monsoon rains, year-round warm temperatures, and mineral-rich water requires specialized knowledge and techniques. Our blog covers everything from basic pool chemistry to advanced troubleshooting, helping you understand what it takes to keep a pool pristine in paradise.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our articles are written by our in-house pool experts, including certified technicians with decades of experience serving Bali&rsquo;s villas and resorts. We believe that educated pool owners make better decisions about their pool care, whether they choose DIY maintenance or professional services. Browse our latest articles below, and feel free to reach out with any questions via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card bg-white flex flex-col h-full">
                {/* Placeholder Image - In production, use actual images */}
                <div 
                  className="h-48 bg-gradient-to-br from-pool-light to-pool rounded-t-xl -mx-6 -mt-6 mb-6 flex items-center justify-center"
                  role="img"
                  aria-label={`Featured image for ${post.title}`}
                >
                  <span className="text-pool-dark text-sm font-medium bg-white px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-pool-darker hover:text-pool transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <User className="h-4 w-4" aria-hidden="true" />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              'Pool Maintenance',
              'Seasonal Care',
              'Pool Installation',
              'Emergency Care',
              'Water Chemistry',
              'Eco-Friendly',
            ].map((category) => (
              <div
                key={category}
                className="card text-center py-4 hover:border-pool hover:border-2 cursor-pointer transition-all"
              >
                <span className="font-medium text-pool-darker">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-pool-light">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-pool-darker">
              Stay Updated with Pool Care Tips
            </h2>
            <p className="text-gray-700 mb-8">
              Get expert advice delivered to your inbox. Monthly tips, seasonal guides, and exclusive offers for Bali villa owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6282237565997?text=I%20want%20to%20receive%20pool%20care%20tips"
                className="btn-primary inline-flex items-center justify-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Subscribe via WhatsApp</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Pool Care FAQs" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pool to-pool-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Pool Service in Bali?
          </h2>
          <p className="text-xl mb-8 text-pool-light max-w-2xl mx-auto">
            Our expert team is ready to help. From weekly maintenance to emergency rescue, we&rsquo;ve got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-pool hover:bg-gray-100">
              Contact Us Today
            </Link>
            <Link href="/services" className="btn-secondary border-white text-white hover:bg-white/10">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
