'use client';

import { useState } from 'react';
import { DocumentTextIcon, CheckCircleIcon, CalculatorIcon, DocumentDuplicateIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  fileSize: string;
  downloadUrl?: string;
}

const resources: Resource[] = [
  {
    id: 'estate-planning-guide',
    title: 'Complete Estate Planning Guide',
    description: 'A comprehensive guide covering all aspects of estate planning, from wills to trusts.',
    category: 'estate-planning',
    type: 'guide',
    icon: DocumentTextIcon,
    fileSize: '2.4 MB',
  },
  {
    id: 'succession-checklist',
    title: 'Business Succession Checklist',
    description: 'Essential steps for planning a smooth business transition to the next generation.',
    category: 'succession-planning',
    type: 'checklist',
    icon: CheckCircleIcon,
    fileSize: '1.1 MB',
  },
  {
    id: 'insurance-calculator',
    title: 'Life Insurance Needs Calculator',
    description: 'Calculate your life insurance needs based on your financial obligations and goals.',
    category: 'wealth-protection',
    type: 'calculator',
    icon: CalculatorIcon,
    fileSize: 'Online Tool',
  },
  {
    id: 'will-template',
    title: 'Will Planning Template',
    description: 'A template to help you organize your thoughts before meeting with an estate lawyer.',
    category: 'estate-planning',
    type: 'template',
    icon: DocumentDuplicateIcon,
    fileSize: '856 KB',
  },
  {
    id: 'tax-strategies-guide',
    title: 'Tax-Efficient Wealth Transfer Strategies',
    description: 'Learn how to minimize taxes when transferring wealth to the next generation.',
    category: 'estate-planning',
    type: 'guide',
    icon: DocumentTextIcon,
    fileSize: '1.8 MB',
  },
  {
    id: 'retirement-planning-checklist',
    title: 'Retirement Planning Checklist',
    description: 'Ensure you\'re on track for a comfortable retirement with this comprehensive checklist.',
    category: 'general',
    type: 'checklist',
    icon: CheckCircleIcon,
    fileSize: '945 KB',
  },
  {
    id: 'business-valuation-template',
    title: 'Business Valuation Worksheet',
    description: 'A worksheet to help you estimate the value of your business for succession planning.',
    category: 'succession-planning',
    type: 'template',
    icon: DocumentDuplicateIcon,
    fileSize: '1.3 MB',
  },
  {
    id: 'estate-tax-calculator',
    title: 'Estate Tax Calculator',
    description: 'Estimate potential estate taxes and explore strategies to minimize them.',
    category: 'estate-planning',
    type: 'calculator',
    icon: CalculatorIcon,
    fileSize: 'Online Tool',
  },
  {
    id: 'wealth-protection-guide',
    title: 'Asset Protection Strategies',
    description: 'Protect your wealth from creditors, lawsuits, and other risks.',
    category: 'wealth-protection',
    type: 'guide',
    icon: DocumentTextIcon,
    fileSize: '2.1 MB',
  },
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

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
    const typeMatch = selectedType === 'all' || resource.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const handleDownload = (resource: Resource) => {
    // For now, just log the download
    console.log(`Download requested: ${resource.title}`);
    alert('Please contact us at info@legacywealthadvisory.ca to receive this resource.');
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.fileSize}</span>
                      <button
                        onClick={() => handleDownload(resource)}
                        className="flex items-center px-4 py-2 bg-[#102a43] text-white rounded-md hover:bg-[#0d2138] transition-colors duration-200"
                      >
                        <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Personalized Advice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our resources are a great starting point, but nothing beats personalized advice
            tailored to your unique situation.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#d4af37] text-[#102a43] font-semibold rounded-md hover:bg-[#b8962c] transition-colors duration-200"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}