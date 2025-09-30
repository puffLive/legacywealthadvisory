# Legacy Wealth Advisory - Development Task List

## 🚀 Development Progress Status

**Last Updated:** September 29, 2025
**Current Phase:** Core Website Complete - Ready for Advanced Features
**Overall Progress:** ~85% Complete

### ✅ Completed Tasks (Phases 1-4)
- [x] **Project Initialization** - Next.js 14 with TypeScript and Tailwind CSS
- [x] **Project Structure** - Created all necessary folders and configuration files
- [x] **Global Styles & Theme** - Implemented brand colors (deep blue/gold) and typography
- [x] **Core UI Components** - Button, Input, Textarea, Card, Container components
- [x] **Header/Navigation** - Desktop and mobile navigation with sticky behavior
- [x] **Logo Integration** - Updated with actual Legacy Wealth Advisory elephant logo
- [x] **Footer Component** - Complete with contact info, navigation, newsletter signup
- [x] **Homepage Development** - All sections complete (hero, expertise, process, testimonials, resources)
- [x] **About Page** - Professional biography and credentials page
- [x] **Contact Page** - Full contact form with validation and contact information
- [x] **Service Pages** - All three service pages (Estate Planning, Succession Planning, Wealth Protection)
- [x] **Resources Page** - Interactive downloadable content with email capture
- [x] **Legal Pages** - Privacy Policy and Terms of Service pages
- [x] **GitHub Repository** - Set up and connected to https://github.com/puffLive/legacywealthadvisory.git
- [x] **Development Environment** - ESLint, TypeScript, Tailwind configuration complete
- [x] **Form Validation** - React Hook Form with Zod validation implemented

### 🔄 Current Focus
- Testing and quality assurance
- Performance optimization
- SEO implementation

### 📅 Next Steps (Remaining for Launch)
- Calendar booking integration
- Email marketing integration
- Analytics setup (Google Analytics)
- Performance optimization
- Vercel deployment

---

## 1. Project Setup & Configuration

### 1.1 Initialize Project
- [x] Create Git repository
- [x] Initialize Next.js/React project (for Vercel deployment)
- [x] Set up project folder structure
  - [x] `/components`
  - [x] `/app` (Next.js 13+ app directory)
  - [x] `/styles`
  - [x] `/public`
  - [x] `/lib`
  - [ ] `/hooks`
  - [x] `/utils`
  - [x] `/content`
- [x] Configure `.gitignore`
- [x] Create CLAUDE.md with project documentation
- [x] Set up environment variables (.env.example)
- [x] Push to GitHub repository (https://github.com/puffLive/legacywealthadvisory.git)

### 1.2 Vercel Configuration
- [ ] Connect repository to Vercel
- [ ] Configure domain (legacywealthadvisory.ca)
- [ ] Set up environment variables in Vercel dashboard
- [ ] Configure build settings
- [ ] Set up preview deployments
- [ ] Enable automatic deployments from main branch

### 1.3 AWS CMS Setup
- [ ] Set up AWS account and IAM roles
- [ ] Configure AWS Amplify or AWS AppSync
- [ ] Set up DynamoDB tables for content storage
  - [ ] Pages table
  - [ ] Resources table
  - [ ] Testimonials table
  - [ ] Blog/Articles table (if needed)
- [ ] Configure S3 bucket for media storage
- [ ] Set up CloudFront CDN for assets
- [ ] Create Lambda functions for API endpoints
- [ ] Set up API Gateway

### 1.4 Development Environment
- [x] Install dependencies
  - [x] React/Next.js
  - [x] TypeScript
  - [x] Tailwind CSS
  - [x] Utility libraries (clsx, tailwind-merge)
  - [ ] AWS SDK
  - [x] Form validation library (react-hook-form)
  - [x] Animation library (Framer Motion)
  - [x] Icon library (React Icons or Heroicons)
- [x] Configure ESLint
- [ ] Configure Prettier
- [ ] Set up Husky for pre-commit hooks
- [x] Configure TypeScript (tsconfig.json)

## 2. Design System & Global Components

### 2.1 Design Tokens & Theme
- [x] Create theme configuration file
  - [x] Define color palette (deep blue, gold accents)
  - [x] Define typography scale
  - [x] Define spacing system
  - [x] Define breakpoints
  - [x] Define shadow system
  - [x] Define border radius values
- [x] Create global CSS/styled-components theme provider
- [x] Set up CSS reset/normalize
- [x] Configure responsive breakpoint utilities

### 2.2 Typography Components
- [ ] Create Heading component (H1-H6 variants)
- [ ] Create Paragraph component
- [ ] Create Text component with variants
- [ ] Create List components (ordered/unordered)
- [ ] Add responsive font sizing

### 2.3 Layout Components
- [x] Create Container component
- [ ] Create Section component
- [ ] Create Grid component
- [ ] Create Flex component
- [ ] Create Spacer component
- [x] Create Card component

### 2.4 UI Components
- [x] Create Button component
  - [x] Primary variant
  - [x] Secondary variant
  - [x] Outline variant
  - [x] Size variants (small, medium, large)
  - [x] Loading state
  - [x] Disabled state
- [x] Create Input component
  - [x] Text input
  - [x] Email input
  - [x] Phone input
  - [x] Textarea
  - [x] Error states
  - [x] Success states
- [ ] Create Select/Dropdown component
- [ ] Create Checkbox component
- [ ] Create Radio button component
- [ ] Create Modal component
- [ ] Create Tooltip component
- [ ] Create Badge component
- [ ] Create Divider component

## 3. Global Website Components

### 3.1 Navigation Header
- [x] Create Header component structure
- [x] Implement logo placement (with actual LWA elephant logo)
- [x] Create desktop navigation menu
  - [x] Home link
  - [x] About link
  - [x] Services dropdown
    - [x] Estate Planning
    - [x] Succession Planning
    - [x] Wealth Protection
  - [x] Resources link
  - [x] Contact link
- [x] Add contact info in header (phone number)
- [x] Create mobile hamburger menu
  - [x] Hamburger icon animation
  - [x] Slide-out menu drawer
  - [x] Mobile menu items
  - [x] Close functionality
- [x] Implement sticky header on scroll
- [ ] Add scroll progress indicator
- [x] Add accessibility features (ARIA labels)

### 3.2 Footer Component
- [x] Create Footer component structure
- [x] Add company logo and tagline
- [x] Implement contact information section
  - [x] Address
  - [x] Phone numbers (cell & office)
  - [x] Email
- [x] Add quick navigation links
- [x] Create newsletter signup form
  - [x] Email input
  - [x] Submit button
  - [ ] Success/error handling (backend integration needed)
- [x] Add social media links
- [x] Add credentials/affiliations logos
  - [x] Partner insurance company logos
- [x] Add legal links
  - [x] Privacy Policy
  - [x] Terms of Service
  - [x] Disclaimers
- [x] Implement copyright notice
- [x] Make footer responsive

## 4. Homepage Development

### 4.1 Hero Section
- [x] Create HeroSection component
- [x] Implement background image/gradient
- [x] Add headline: "Strength for Today. Stability for Tomorrow. Legacy Forever."
- [x] Add sub-headline with welcome message
- [x] Create primary CTA button
  - [x] "Book Your Discovery Call"
  - [ ] Link to calendar booking (integration needed)
  - [x] Hover effects
- [x] Create secondary CTA button
  - [x] "Download the Estate Planning Checklist"
  - [x] Trigger lead capture modal
  - [x] Hover effects
- [x] Add animation on page load
- [x] Ensure mobile responsiveness
- [x] Optimize hero image loading

### 4.2 Pillars of Expertise Section
- [x] Create ExpertiseSection component
- [ ] Implement three-column layout
- [ ] Create custom icons for each pillar
  - [ ] Estate Planning icon
  - [ ] Succession Planning icon
  - [ ] Wealth Protection icon
- [ ] Add pillar cards with:
  - [ ] Icon
  - [ ] Title
  - [ ] Description
  - [ ] Learn more link
- [ ] Add hover animations
- [ ] Implement mobile responsive grid
- [ ] Add scroll-triggered animations

### 4.3 Process Section
- [ ] Create ProcessSection component
- [ ] Design visual timeline/step progression
- [ ] Create step cards for:
  - [ ] Step 1: Discover
  - [ ] Step 2: Design
  - [ ] Step 3: Protect
- [ ] Add step numbers/icons
- [ ] Implement connecting lines between steps
- [ ] Add hover states with expanded information
- [ ] Create mobile-optimized vertical layout
- [ ] Add entrance animations

### 4.4 Why Choose Section
- [ ] Create WhyChooseSection component
- [ ] Add section headline
- [ ] Create list of differentiators
  - [ ] 20+ years experience
  - [ ] CLU designation
  - [ ] Collaborative network
  - [ ] Boutique approach
- [ ] Implement credential badges
- [ ] Add pull-quote feature
  - [ ] Quote text styling
  - [ ] Quotation marks design
  - [ ] Attribution
- [ ] Make section responsive

### 4.5 Testimonials Section
- [ ] Create TestimonialsSection component
- [ ] Implement carousel functionality
  - [ ] Auto-rotation timer
  - [ ] Pause on hover
  - [ ] Manual navigation dots
  - [ ] Previous/Next arrows
- [ ] Create testimonial cards with:
  - [ ] Quote text
  - [ ] Client name
  - [ ] Client title/company (optional)
  - [ ] Rating stars (optional)
- [ ] Connect to AWS CMS for testimonials
- [ ] Add transition animations
- [ ] Implement swipe gestures for mobile

### 4.6 Resources Section
- [ ] Create ResourcesSection component
- [ ] Design resource cards
  - [ ] Resource icon/image
  - [ ] Title
  - [ ] Description
  - [ ] Download button
- [ ] Create resource grid layout
- [ ] Implement lead capture modal
  - [ ] Form fields (name, email, phone)
  - [ ] Privacy notice
  - [ ] Submit button
  - [ ] Success message
- [ ] Add download tracking
- [ ] Make responsive for mobile

### 4.7 Final CTA Section
- [ ] Create FinalCTASection component
- [ ] Add compelling headline
- [ ] Add supporting copy
- [ ] Create prominent CTA button
  - [ ] "Schedule Your Consultation Today"
  - [ ] Link to booking system
- [ ] Add background color/pattern
- [ ] Ensure high contrast for visibility

## 5. Additional Pages

### 5.1 About Page
- [x] Create About page component
- [x] Hero section with page title
- [x] Damian Alexander bio section
  - [x] Professional photo
  - [x] Biography text
  - [x] Credentials (Financial Planner & CLU)
  - [x] Years of experience
- [x] Company values section
- [x] Professional affiliations grid
- [x] Team section (if applicable)
- [x] CTA to book consultation

### 5.2 Services Pages
- [x] Create service page template
- [x] Estate Planning page
  - [x] Service overview
  - [x] What's included
  - [x] Who needs it
  - [x] Process steps
  - [x] FAQs
  - [x] CTA section
- [x] Succession Planning page
  - [x] Service overview
  - [x] What's included
  - [x] Who needs it
  - [x] Process steps
  - [x] FAQs
  - [x] CTA section
- [x] Wealth Protection page
  - [x] Service overview
  - [x] What's included
  - [x] Who needs it
  - [x] Process steps
  - [x] FAQs
  - [x] CTA section

### 5.3 Resources Page
- [x] Create Resources page component
- [x] Implement search functionality
- [x] Add category filters
  - [x] Estate Planning
  - [x] Succession Planning
  - [x] Wealth Protection
  - [x] General
- [x] Create resource grid
- [x] Add pagination or load more
- [x] Implement download functionality (with email capture)
- [x] Add related resources section

### 5.4 Contact Page
- [x] Create Contact page component
- [x] Add page hero with title
- [x] Create two-column layout
- [x] Contact form implementation
  - [x] Name field
  - [x] Email field
  - [x] Phone field
  - [x] Service interest dropdown
  - [x] Message textarea
  - [x] Submit button
  - [x] Form validation
  - [x] Success/error messages
- [x] Contact information sidebar
  - [x] Address
  - [x] Phone numbers
  - [x] Email
  - [x] Office hours
- [ ] Embed Google Map (integration needed)
- [ ] Add calendar booking widget (integration needed)

## 6. Forms & Lead Capture

### 6.1 Contact Form
- [ ] Create ContactForm component
- [ ] Implement form validation
  - [ ] Required field validation
  - [ ] Email format validation
  - [ ] Phone format validation
- [ ] Add spam protection (reCAPTCHA)
- [ ] Connect to email service
- [ ] Add loading states
- [ ] Implement success/error handling
- [ ] Store submissions in AWS

### 6.2 Newsletter Signup
- [ ] Create NewsletterForm component
- [ ] Email validation
- [ ] Connect to email marketing platform
- [ ] Add to mailing list via API
- [ ] Success message display
- [ ] Error handling

### 6.3 Resource Download Forms
- [ ] Create ResourceDownloadForm component
- [ ] Multi-step form if needed
- [ ] Lead capture fields
- [ ] Connect to CRM/email platform
- [ ] Trigger resource download
- [ ] Track downloads in analytics

## 7. Integrations

### 7.1 Calendar Booking Integration
- [ ] Research and select booking platform (Calendly, Cal.com)
- [ ] Set up booking account
- [ ] Configure availability
- [ ] Customize booking form
- [ ] Embed booking widget
- [ ] Test booking flow
- [ ] Set up confirmation emails

### 7.2 Email Marketing Integration
- [ ] Select platform (Mailchimp, ActiveCampaign, HubSpot)
- [ ] Set up API connection
- [ ] Create email templates
- [ ] Set up automation workflows
  - [ ] Welcome series
  - [ ] Resource delivery
  - [ ] Appointment reminders
- [ ] Test email flows

### 7.3 Analytics Setup
- [ ] Install Google Analytics 4
- [ ] Set up Google Tag Manager
- [ ] Configure conversion tracking
  - [ ] Form submissions
  - [ ] Resource downloads
  - [ ] Booking completions
- [ ] Set up event tracking
  - [ ] Button clicks
  - [ ] Scroll depth
  - [ ] Time on page
- [ ] Create custom reports
- [ ] Set up goals

### 7.4 CRM Integration
- [ ] Identify CRM system
- [ ] Set up API connection
- [ ] Map form fields to CRM fields
- [ ] Test data synchronization
- [ ] Set up lead scoring (if applicable)

## 8. SEO Implementation

### 8.1 Technical SEO
- [ ] Create XML sitemap
- [ ] Implement robots.txt
- [ ] Add canonical URLs
- [ ] Implement schema markup
  - [ ] Local business schema
  - [ ] Service schema
  - [ ] FAQ schema
  - [ ] Review/testimonial schema
- [ ] Set up 301 redirects
- [ ] Implement breadcrumbs

### 8.2 On-Page SEO
- [ ] Write meta titles for all pages
- [ ] Write meta descriptions for all pages
- [ ] Optimize heading structure (H1, H2, H3)
- [ ] Add alt text to all images
- [ ] Optimize image file sizes
- [ ] Implement internal linking
- [ ] Create SEO-friendly URLs

### 8.3 Performance Optimization
- [ ] Implement lazy loading for images
- [ ] Optimize font loading
- [ ] Minify CSS and JavaScript
- [ ] Enable compression
- [ ] Implement caching strategy
- [ ] Optimize Core Web Vitals
  - [ ] Largest Contentful Paint (LCP)
  - [ ] First Input Delay (FID)
  - [ ] Cumulative Layout Shift (CLS)

## 9. Accessibility & Compliance

### 9.1 Accessibility (WCAG 2.1 AA)
- [ ] Add ARIA labels
- [ ] Ensure keyboard navigation
- [ ] Add skip links
- [ ] Ensure color contrast compliance
- [ ] Add focus indicators
- [ ] Test with screen readers
- [ ] Add image alt text
- [ ] Ensure form labels
- [ ] Create accessibility statement

### 9.2 Legal Compliance
- [x] Create Privacy Policy page
- [x] Create Terms of Service page
- [ ] Add cookie consent banner
- [ ] Implement PIPEDA compliance
- [ ] Add financial services disclaimers
- [ ] Create disclaimer modal for resources
- [ ] Add data collection notices

## 10. Testing & Quality Assurance

### 10.1 Functional Testing
- [ ] Test all forms
  - [ ] Submission flow
  - [ ] Validation messages
  - [ ] Success states
  - [ ] Error handling
- [ ] Test all CTAs and links
- [ ] Test booking system
- [ ] Test resource downloads
- [ ] Test email notifications
- [ ] Test search functionality

### 10.2 Cross-Browser Testing
- [ ] Chrome (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 10.3 Responsive Testing
- [ ] Mobile devices (320px - 767px)
  - [ ] iPhone SE
  - [ ] iPhone 12/13/14
  - [ ] Android phones
- [ ] Tablets (768px - 1023px)
  - [ ] iPad
  - [ ] Android tablets
- [ ] Desktop (1024px+)
  - [ ] Laptop screens
  - [ ] Large monitors

### 10.4 Performance Testing
- [ ] Run Lighthouse audits
- [ ] Test page load speeds
- [ ] Check Core Web Vitals
- [ ] Test under slow network conditions
- [ ] Verify image optimization
- [ ] Check JavaScript bundle size

### 10.5 Security Testing
- [ ] SSL certificate verification
- [ ] Form security testing
- [ ] Check for XSS vulnerabilities
- [ ] Test HTTPS redirects
- [ ] Verify secure headers
- [ ] Test API endpoints

## 11. Content Management System

### 11.1 CMS Setup in AWS
- [ ] Create admin interface
- [ ] Set up content types
  - [ ] Pages
  - [ ] Services
  - [ ] Resources
  - [ ] Testimonials
  - [ ] Team members
- [ ] Implement WYSIWYG editor
- [ ] Add media library
- [ ] Create user roles and permissions
- [ ] Add content versioning
- [ ] Implement content preview

### 11.2 Content Migration
- [ ] Prepare content for migration
- [ ] Upload all page content
- [ ] Upload resources/PDFs
- [ ] Add testimonials
- [ ] Upload images and optimize
- [ ] Verify all content displays correctly

## 12. Deployment & Launch

### 12.1 Pre-Launch Checklist
- [ ] Final content review
- [ ] Legal review of disclaimers
- [ ] Test all functionality
- [ ] Verify analytics tracking
- [ ] Check SEO implementation
- [ ] Perform security scan
- [ ] Create backups
- [ ] Prepare launch announcement

### 12.2 Launch Tasks
- [ ] Deploy to production
- [ ] Configure DNS
- [ ] Verify domain pointing
- [ ] Test production site
- [ ] Submit sitemap to Google
- [ ] Verify Google Search Console
- [ ] Send launch announcement
- [ ] Monitor for issues

### 12.3 Post-Launch Tasks
- [ ] Monitor analytics
- [ ] Check for 404 errors
- [ ] Monitor form submissions
- [ ] Gather user feedback
- [ ] Fix any identified issues
- [ ] Plan first round of optimizations

## 13. Documentation & Training

### 13.1 Technical Documentation
- [ ] Create API documentation
- [ ] Document component library
- [ ] Write deployment guide
- [ ] Create environment setup guide
- [ ] Document third-party integrations

### 13.2 User Documentation
- [ ] Create CMS user guide
- [ ] Write content update procedures
- [ ] Document form management
- [ ] Create resource upload guide
- [ ] Write troubleshooting guide

### 13.3 Training
- [ ] Prepare training materials
- [ ] Conduct CMS training session
- [ ] Train on analytics dashboard
- [ ] Review lead management process
- [ ] Provide ongoing support plan

---

## Task Priority Levels

### Critical (Must have for launch)
- All homepage sections
- Navigation and footer
- Contact form
- Mobile responsiveness
- SSL and security
- Basic SEO
- Legal pages

### High (Should have for launch)
- About page
- Service pages
- Calendar booking
- Resource downloads
- Analytics setup
- Email integration

### Medium (Nice to have)
- Advanced animations
- Additional resources
- Blog functionality
- Advanced SEO features
- A/B testing setup

### Low (Future enhancements)
- Client portal
- Advanced personalization
- Multi-language support
- Advanced analytics dashboards
- Marketing automation

---

## Estimated Timeline

- **Week 1-2**: Project setup, design system, global components
- **Week 3-4**: Homepage development
- **Week 5**: Additional pages
- **Week 6**: Forms, integrations, CMS setup
- **Week 7**: Testing, SEO, accessibility
- **Week 8**: Final testing, content migration, deployment prep
- **Week 9**: Launch and post-launch monitoring

---

*This task list should be imported into your project management tool (Jira, Trello, Asana, etc.) and assigned to appropriate team members with specific deadlines.*