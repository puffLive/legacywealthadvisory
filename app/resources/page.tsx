'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, FileText, Calculator, BookOpen, TrendingUp, Shield } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'checklist' | 'calculator' | 'template';
  category: 'estate-planning' | 'succession-planning' | 'wealth-protection' | 'general';
  icon: React.ComponentType<any>;
  fileSize: string;
  downloadCount: number;
}

const resources: Resource[] = [
  {
    id: 'estate-planning-guide',
    title: 'Complete Estate Planning Guide',
    description: 'A comprehensive guide covering all aspects of estate planning, from basic wills to complex trust structures.',
    type: 'guide',
    category: 'estate-planning',
    icon: BookOpen,
    fileSize: '2.5 MB',
    downloadCount: 1243
  },
  {
    id: 'succession-checklist',
    title: 'Business Succession Planning Checklist',
    description: 'Step-by-step checklist to ensure your business succession plan covers all critical elements.',
    type: 'checklist',
    category: 'succession-planning',
    icon: FileText,
    fileSize: '850 KB',
    downloadCount: 892
  },
  {
    id: 'wealth-calculator',
    title: 'Wealth Protection Calculator',
    description: 'Calculate your insurance needs and wealth protection gaps with our interactive tool.',
    type: 'calculator',
    category: 'wealth-protection',
    icon: Calculator,
    fileSize: '1.2 MB',
    downloadCount: 1567
  },
  {
    id: 'trust-template',
    title: 'Family Trust Template',
    description: 'Customizable family trust template with guidance notes for common scenarios.',
    type: 'template',
    category: 'estate-planning',
    icon: FileText,
    fileSize: '750 KB',
    downloadCount: 623
  },
  {
    id: 'tax-strategies',
    title: 'Tax-Efficient Wealth Transfer Strategies',
    description: 'Advanced strategies for minimizing tax impact during wealth transfers.',
    type: 'guide',
    category: 'general',
    icon: TrendingUp,
    fileSize: '1.8 MB',
    downloadCount: 934
  },
  {
    id: 'insurance-guide',
    title: 'Life Insurance Buyer\'s Guide',
    description: 'Everything you need to know about choosing the right life insurance for your situation.',
    type: 'guide',
    category: 'wealth-protection',
    icon: Shield,
    fileSize: '2.1 MB',
    downloadCount: 1156
  }
];

const categories = [
  { id: 'all', label: 'All Resources' },
  { id: 'estate-planning', label: 'Estate Planning' },
  { id: 'succession-planning', label: 'Succession Planning' },
  { id: 'wealth-protection', label: 'Wealth Protection' },
  { id: 'general', label: 'General' }
];

const types = [
  { id: 'all', label: 'All Types' },
  { id: 'guide', label: 'Guides' },
  { id: 'checklist', label: 'Checklists' },
  { id: 'calculator', label: 'Calculators' },
  { id: 'template', label: 'Templates' }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
    const typeMatch = selectedType === 'all' || resource.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const handleDownload = (resource: Resource) => {
    setSelectedResource(resource);
    setShowEmailModal(true);
  };

  const handleConfirmDownload = async () => {
    if (!selectedResource || !email) return;

    setDownloadingId(selectedResource.id);

    try {
      const response = await fetch('/api/resource-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          resourceId: selectedResource.id,
          resourceTitle: selectedResource.title,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Close modal and reset form
        setShowEmailModal(false);
        setEmail('');
        setFirstName('');
        setSelectedResource(null);

        // Show success message (you could add a toast notification here)
        alert(data.message);

        // Simulate file download (in a real app, you'd serve the actual file)
        console.log(`Download successful: ${selectedResource.title} for ${email}`);
      } else {
        alert(data.error || 'Failed to process download. Please try again.');
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to process download. Please try again.');
    } finally {
      setDownloadingId(null);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail) {
      setNewsletterMessage('Please enter your email address');
      return;
    }

    setIsNewsletterSubmitting(true);
    setNewsletterMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (data.success) {
        setNewsletterMessage(data.message);
        setNewsletterEmail('');
      } else {
        setNewsletterMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setNewsletterMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsNewsletterSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setNewsletterMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#102a43] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources & Downloads
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Access our comprehensive library of guides, checklists, and tools to help you
              make informed decisions about your wealth management and estate planning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#102a43]"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#102a43] text-white p-3 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
                          {resource.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.fileSize}</span>
                      <span>{resource.downloadCount.toLocaleString()} downloads</span>
                    </div>

                    <Button
                      onClick={() => handleDownload(resource)}
                      disabled={downloadingId === resource.id}
                      className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                    >
                      {downloadingId === resource.id ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Preparing Download...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          Download Free
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#102a43] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our Latest Resources
          </h2>
          <p className="text-blue-100 mb-8">
            Get notified when we publish new guides, tools, and insights to help you
            protect and grow your wealth.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isNewsletterSubmitting}
                className="flex-1 bg-white text-gray-900 disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={isNewsletterSubmitting}
                className="bg-[#D4AF37] hover:bg-[#B8941F] disabled:bg-[#B8941F] disabled:opacity-50 text-white whitespace-nowrap"
              >
                {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            {newsletterMessage && (
              <p className="text-sm mt-2 text-center">
                {newsletterMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Email Modal */}
      {showEmailModal && selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold mb-4">
              Download {selectedResource.title}
            </h3>
            <p className="text-gray-600 mb-4">
              Please provide your details to access this free resource.
              We'll also send you updates on new resources and insights.
            </p>
            <div className="space-y-3 mb-4">
              <Input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => setShowEmailModal(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmDownload}
                disabled={!email || !firstName || downloadingId === selectedResource.id}
                className="flex-1 bg-[#D4AF37] hover:bg-[#B8941F] text-white"
              >
                {downloadingId === selectedResource.id ? 'Processing...' : 'Download'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}