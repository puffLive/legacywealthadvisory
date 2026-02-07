# Product Requirements Document (PRD)
## Legacy Wealth Advisory Website

**Document Version:** 1.0  
**Date:** September 29, 2025  
**Status:** Draft

---

## 1. Executive Summary

### 1.1 Product Overview
The Legacy Wealth Advisory website is a professional digital presence designed to establish trust, demonstrate expertise, and convert high-net-worth individuals and business owners into clients for estate planning, succession planning, and wealth protection services.

### 1.2 Business Objectives
- Establish Legacy Wealth Advisory as the premier boutique advisory firm in the Greater Toronto Area
- Generate qualified leads through strategic content and clear calls-to-action
- Build trust through professional design, testimonials, and credentials
- Provide valuable resources that demonstrate expertise while capturing prospect information

### 1.3 Success Metrics
- Monthly unique visitors: Target 500+ within 6 months
- Lead conversion rate: 3-5% of visitors
- Discovery call bookings: 10-15 per month
- Resource downloads: 25+ per month

---

## 2. Target Audience

### 2.1 Primary Personas

**The Business Owner**
- Age: 45-65
- Net worth: $2M+
- Concerns: Business succession, tax optimization, family governance
- Goals: Seamless business transition, wealth preservation

**The Family Steward**
- Age: 50-70
- Net worth: $1M+
- Concerns: Estate planning, family protection, legacy preservation
- Goals: Secure family's financial future, minimize estate taxes

**The Recent Retiree**
- Age: 55-65
- Concerns: Pension optimization, wealth protection, estate planning
- Goals: Maintain lifestyle, leave inheritance

### 2.2 User Needs
- Clear understanding of services offered
- Evidence of expertise and trustworthiness
- Easy way to initiate consultation
- Educational resources for complex topics
- Reassurance about the advisory process

---

## 3. Functional Requirements

### 3.1 Homepage Components

#### Hero Section
- **Headline:** "Strength for Today. Stability for Tomorrow. Legacy Forever."
- **Sub-headline:** Welcome message targeting innovators, architects of fortune, and legacy curators
- **Primary CTA:** "Book Your Discovery Call" - links to scheduling system
- **Secondary CTA:** "Download the Estate Planning Checklist" - triggers lead capture modal
- **Background:** Professional, subtle imagery suggesting stability and growth

#### Section 2: Our Pillars of Expertise
**Requirements:**
- Three-column layout (responsive to mobile)
- Custom icons for each pillar
- Brief, compelling descriptions
- Hover effects for enhanced interactivity
- Links to detailed service pages

**Content:**
1. Estate Planning
2. Succession Planning  
3. Wealth Protection

#### Section 3: Our Process
**Requirements:**
- Visual timeline or step progression
- Three-step process visualization
- Interactive elements (click/hover for details)
- Mobile-optimized design

**Steps:**
1. Discover
2. Design
3. Protect

#### Section 4: Why Choose Legacy Wealth Advisory
**Requirements:**
- Credibility indicators prominently displayed
- Professional certifications/logos (CLU, Advocis, FP Canada)
- Key differentiators in scannable format
- Pull-quote feature for emphasis

#### Section 5: Client Stories/Testimonials
**Requirements:**
- Carousel functionality with auto-rotation
- Manual navigation controls
- Client name and business type (with permission)
- Minimum 3-5 testimonials at launch

#### Section 6: Resources/Free Value
**Requirements:**
- Gated content system with email capture
- Resource library with categorization
- Preview functionality
- Download tracking capabilities

**Initial Resources:**
- Estate Planning Starter Kit (PDF)
- Business Owner Succession Checklist
- What to Do With a Pension After Job Loss

#### Section 7: Final Call to Action
**Requirements:**
- High-contrast design section
- Compelling headline and copy
- Single, clear CTA button
- Mobile-optimized layout

### 3.2 Global Components

#### Navigation
**Requirements:**
- Fixed header on scroll
- Mobile hamburger menu
- Clear navigation hierarchy
- Contact information in header

**Menu Items:**
- Home
- About
- Services (with dropdown)
- Resources
- Contact

#### Footer
**Requirements:**
- Complete contact information
- Social media links
- Quick navigation links
- Compliance/disclaimer section
- Newsletter signup

### 3.3 Additional Pages

#### About Page
- Damian Alexander's biography and credentials (Financial Planner & Chartered Life Underwriter)
- Team information (if applicable)
- Company history and values
- Professional affiliations

#### Services Pages
Individual pages for:
- Estate Planning
- Succession Planning
- Wealth Protection

#### Resources Page
- Searchable/filterable resource library
- Categories and tags
- Download tracking
- Related resources suggestions

#### Contact Page
- Contact form with validation
- Office location with map
- Phone numbers (cell and office)
- Booking calendar integration

---

## 4. Technical Requirements

### 4.1 Platform & Hosting
- **CMS:** AWS (Amazon Web Services) infrastructure
- **Hosting:** Vercel
- **SSL Certificate:** Required for security and trust (included with Vercel)
- **Domain:** legacywealthadvisory.ca

### 4.2 Performance
- Page load time: < 3 seconds
- Mobile-first responsive design
- Cross-browser compatibility (Chrome, Safari, Firefox, Edge)
- ADA/WCAG 2.1 AA compliance

### 4.3 Integrations
- **Calendar Booking:** Calendly or similar
- **Email Marketing:** Mailchimp, ActiveCampaign, or HubSpot
- **Analytics:** Google Analytics 4, Google Tag Manager
- **CRM:** Integration with existing system (if applicable)
- **Forms:** Contact form with spam protection

### 4.4 SEO Requirements
- Meta descriptions for all pages
- Schema markup for local business
- XML sitemap
- Optimized URL structure
- Alt tags for all images
- Mobile-friendly design

---

## 5. Design Requirements

### 5.1 Brand Guidelines
- **Primary Colors:** Deep blue (trust), gold accents (wealth)
- **Typography:** Professional serif for headlines, clean sans-serif for body
- **Imagery:** Professional photography, abstract wealth/growth imagery
- **Tone:** Professional, trustworthy, approachable

### 5.2 UI/UX Principles
- Clear visual hierarchy
- Consistent spacing and alignment
- Intuitive navigation
- Accessible design
- Mobile-first approach
- Progressive disclosure of information

### 5.3 Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## 6. Content Requirements

### 6.1 Content Strategy
- Professional, authoritative tone
- Jargon-free language where possible
- Clear value propositions
- Action-oriented CTAs
- SEO-optimized content

### 6.2 Content Management
- Regular blog posts (optional, for SEO)
- Quarterly resource updates
- Annual content audit
- Client testimonial collection process

---

## 7. Security & Compliance

### 7.1 Security Requirements
- SSL encryption
- Regular security updates
- Secure form submissions
- Regular backups
- CAPTCHA for forms

### 7.2 Compliance
- Privacy Policy page
- Terms of Service page
- Cookie consent banner
- PIPEDA compliance (Canadian privacy law)
- Financial services disclaimers

---

## 8. Launch Requirements

### 8.1 Pre-Launch Checklist
- [ ] Content review and approval
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Form testing
- [ ] Analytics setup
- [ ] SEO implementation
- [ ] Security scan
- [ ] Performance optimization
- [ ] Legal review of disclaimers

### 8.2 Launch Support
- DNS configuration
- 301 redirects from old site (if applicable)
- Launch announcement email
- Social media announcements
- Staff training on CMS

---

## 9. Post-Launch

### 9.1 Maintenance Plan
- Monthly security updates
- Quarterly content reviews
- Annual design refresh consideration
- Ongoing SEO optimization
- Performance monitoring

### 9.2 Success Tracking
- Monthly analytics reports
- Lead generation tracking
- Conversion rate optimization
- A/B testing for CTAs
- User feedback collection

---

## 10. Project Timeline

### Phase 1: Planning & Design (Weeks 1-3)
- Stakeholder alignment
- Design mockups
- Content creation
- Technical architecture

### Phase 2: Development (Weeks 4-7)
- Frontend development
- Backend setup
- Integration configuration
- Content migration

### Phase 3: Testing & Launch (Weeks 8-9)
- Quality assurance
- User acceptance testing
- Launch preparation
- Go-live

### Phase 4: Post-Launch (Ongoing)
- Performance monitoring
- Optimization
- Content updates
- Feature enhancements

---

## 11. Budget Considerations

### One-Time Costs
- Design and development
- Content creation
- Photography/imagery
- Initial SEO setup
- Third-party integrations

### Ongoing Costs
- Hosting
- Domain renewal
- SSL certificate
- Email marketing platform
- Booking system
- Maintenance and updates

---

## 12. Risk Management

### Potential Risks
1. **Compliance Issues:** Ensure all financial disclaimers are reviewed by legal
2. **Technical Failures:** Implement robust backup and recovery procedures
3. **Low Conversion:** Plan for A/B testing and optimization
4. **Security Breaches:** Regular security audits and updates

### Mitigation Strategies
- Legal review before launch
- Comprehensive testing procedures
- Analytics-driven optimization
- Regular security monitoring

---

## Appendices

### A. Contact Information
- **Primary Contact:** Damian Alexander - Financial Planner & Chartered Life Underwriter
- **Phone:** 905-840-2222
- **Email:** damian@legacywealthadvisory.ca
- **Address:** 14-30 Eglinton Ave W, Mississauga, ON L5R 0C1

### B. Competitor Analysis
- Review of similar advisory firm websites
- Best practices identification
- Differentiation opportunities

### C. Technical Specifications
- Detailed API documentation
- Database schema
- Security protocols

---

**Document Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Owner | | | |
| Technical Lead | | | |
| Design Lead | | | |
| Marketing Lead | | | |

---

*This PRD is a living document and will be updated as requirements evolve.*