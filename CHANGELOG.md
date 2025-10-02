# Dr. Bryce Bartruff Author Website - Changelog

All notable changes to this project will be documented in this file.

## [2.2.2] - 2025-10-02

### 📧 Contact Form Update
- **Implemented mailto functionality** - Contact form now uses mailto: links to open user's email client
- **Pre-filled email data** - Subject line includes inquiry type and user's subject
- **Email body includes** - User's name, email address, and message content
- **Benefits:**
  - Free solution requiring no API integration
  - No server-side email processing needed
  - Works with any email client
  - Easy to switch to API solution later if needed

### 🎨 Contact Form UI Improvements
- **Fixed text visibility** - Added explicit text color styling (`text-gray-900 bg-white`) to all form inputs
- **Cross-browser compatibility** - Resolved light gray text issue in Firefox and other browsers
- **Fallback solution** - Added fallback message for users whose email client doesn't open
  - Displays email address directly after 1 second
  - Includes dismiss button for better UX
  - Ensures all users can contact regardless of browser settings

### 📬 Newsletter Subscription Functionality
- **Implemented mailto for newsletter signup** - Footer subscription form now functional
- **Email collection** - Opens email client with subscription request
- **Subject line**: "Newsletter Subscription Request"
- **Temporary solution** - Works immediately while waiting for traffic to justify API integration
- **Future-ready** - Easy to upgrade to Brevo or other service later

---

## [2.2.1] - 2025-09-21

### 🌐 Domain Configuration Fix
- **RESOLVED:** Root domain access issue where `brycebartruff.com` was timing out
- **DNS Configuration Update:**
  - Changed A Record from `76.76.19.61` to `216.198.79.65` (working Vercel IP)
  - Kept existing CNAME Record: `www` → `8f6ed6ed3e870db3.vercel-dns-017.com`
- **Result:** Both domains now fully functional:
  - ✅ `brycebartruff.com` - Working
  - ✅ `www.brycebartruff.com` - Working
- **Vercel Status:** Both domains showing "Valid Configuration"

### 📋 Documentation Consolidation
- **Cleaned up scattered documentation files** - All changes now tracked in CHANGELOG.md only
- **Deployment info integrated** - Domain and deployment details added to main changelog

---

## [2.1.0] - 2025-09-09

### ✨ Content Updates
- **Removed Fictitious Events** - Cleaned up events page to show only authentic House of Refuge workshops (Sept 9 & 16, 2025)
- **Added Two Featured Leadership Articles**:
  - "The ABCs of Leadership" - Comprehensive guide covering Inner Qualities, Attitude, Communication Skills, and Goal Orientation
  - "The ABDs of Building Good Working Relationships" - A-Z strategies for workplace relationships and conflict resolution
- **Updated Author Credentials**:
  - Changed to "Author of 8 Published Books" (from 6)
  - Updated InFaith position to "Former Senior Director and COO" 
  - Removed 1993 ACCESS Course of the Year award
- **Revised Speaking Topics** - Limited to 6 authentic topics:
  - Financial Stability Made Easy
  - Biblical Financial Stewardship Workshop
  - Become the Person You Were Meant to Be
  - Stewardship
  - The Power of Servant Leadership
  - Fundamental Leadership Skills

### 🔧 Technical Improvements
- **Removed Publication Metadata** - Cleaned up insights page by removing publication dates and sources from articles
- **Fixed Featured Articles Display** - Increased limit from 3 to 4 articles to show all featured content
- **Enhanced Content Organization** - Proper categorization and tagging of new articles

### 🐛 Critical Bug Fixes
- **Resolved Deployment Issues** - Fixed Vercel build failures caused by backup files and JSX syntax errors
- **Added Deployment Safeguards**:
  - Created `test-build.bat` script for local testing
  - Added comprehensive `DEPLOYMENT_CHECKLIST.md`
  - Updated `.gitignore` to prevent backup file commits
  - Established best practices documentation

### 🛠 Development Enhancements  
- **Improved Build Process** - Local build testing now mandatory before deployment
- **Better Error Prevention** - Automated safeguards against common deployment issues
- **Enhanced Documentation** - Clear guidelines for future changes and maintenance

---

## [2.0.0] - 2025-09-09

### ✨ Major Features Added
- **6 Interactive Financial Tools Suite** - Professional financial calculators and assessments
  - Personal Finance Assessment (12-category evaluation with sliders)
  - Complete Budget Worksheet (income/expense tracking)
  - Budget Percentage Guide (income-based recommendations)
  - Cash Expense Tracker (daily spending monitor)
  - Budget Review System (5-column analysis method)
  - Money-Finding Strategies (50+ actionable tips)

### 🎨 Visual Updates
- **Updated Author Photo** - Personal reading image replacing previous photo
- **Professional Modal System** - Full-screen overlays for financial tools
- **Interactive UI Elements** - Sliders, input fields, real-time calculations

### 🔧 Technical Improvements
- **Fixed JSX Parsing Errors** - Properly escaped HTML entities in components
- **Responsive Design** - All tools work on mobile and desktop
- **Print Functionality** - Users can print their assessment results
- **Clean Modal Architecture** - Reusable ToolModal component
- **Removed Width Constraints** - Better content display in modals

### 🐛 Bug Fixes
- Fixed build failures caused by backup files with broken JSX
- Resolved tool content not displaying (gray screen issue)
- Fixed deployment issues with Vercel builds
- Cleaned up temporary and backup files

### 📁 File Structure Changes
```
src/
├── components/
│   └── tools/                    # NEW: Financial tools suite
│       ├── ToolModal.tsx        # Modal wrapper component
│       ├── PersonalFinanceAssessment.tsx
│       ├── BudgetWorksheet.tsx
│       ├── BudgetPercentageGuide.tsx
│       ├── CashExpenseTracker.tsx
│       ├── BudgetReviewSystem.tsx
│       └── MoneyFindingStrategies.tsx
└── public/
    └── images/
        └── author-photo.jpg      # UPDATED: New personal photo
```

---

## [1.0.0] - 2025-09-07

### 🎯 Initial Launch
- **Complete Author Website** - Professional Next.js website
- **8 Authentic Articles** - Dr. Bartruff's financial wisdom content
- **6 Books Showcase** - Book pages with Amazon/Thrift Books links
- **About & Contact Pages** - Professional author presentation
- **Speaking Events** - Upcoming engagement listings
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured content

### 📚 Content Added
- Financial planning articles and insights
- Book descriptions and purchase links
- Professional bio and credentials
- Contact information and social media links
- Speaking engagement calendar

### 🚀 Deployment
- **Vercel Integration** - Automatic deployments from GitHub
- **Custom Domain Ready** - Professional URL structure
- **Performance Optimized** - Fast loading times

---

## 📊 Current Project Stats

- **Total Components:** 15+
- **Interactive Tools:** 6
- **Content Pages:** 25+
- **Books Featured:** 6
- **Articles Published:** 10 (8 financial + 2 leadership)
- **Featured Articles:** 4
- **Speaking Topics:** 6 (authentic only)
- **Lines of Code:** ~3,800+

## 🛠 Technology Stack

- **Framework:** Next.js 15.5.2 with Turbopack
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Version Control:** Git/GitHub
- **AI Assistant:** Claude Code

## 📞 Support & Maintenance

For updates, modifications, or technical support, this project is maintained with Claude Code assistance. All changes are tracked through Git commits and this changelog.

## [2.2.0] - 2025-09-15

### 🎨 Major Content & UI Improvements
- **Updated Author Bio** - Changed from "author of 6 books" to "author of 8 books" on main page
- **Enhanced Photo Carousel** - Made navigation arrows invisible while preserving full functionality (dots remain visible)
- **Navigation Rebranding** - Renamed "Insights" to "Resources" throughout entire site (header, footer, blog page)

### 📝 Article Formatting Overhaul
- **ABC Articles Enhancement** - Applied proper formatting to leadership articles:
  - **"The ABCs of Leadership"** - Added bold letters (A-Z) with italicized sub-points
  - **"The ABCs of Building Good Working Relationships"** - Fixed title (ABDs→ABCs) and applied A-Z bold formatting
- **Q&A Articles Standardization** - Updated 7 articles with professional Q./A. format:
  - Smart Food Shopping: 12 Practical Tips to Cut Your Grocery Bill
  - The New Graduate's Guide to Financial Planning
  - Credit Card Consolidation: A Smart Strategy or Dangerous Trap?
  - Finding Hidden Money: Small Daily Savings That Add Up to Big Dreams
  - From Red to Black: A Four-Step Plan to Eliminate Debt and Build Wealth
  - The Case of the Missing Cash
  - 403(b) Investment Strategy: How to Choose the Right Retirement Fund
- **Narrative Article Polish** - Fixed paragraph structure in "What Really Counts!" to match original formatting

### 🔧 Technical Enhancements
- **Markdown Rendering System** - Built custom markdown processor for articles:
  - **Bold text** (`**text**` → `<strong>text</strong>`)
  - *Italic text* (`*text*` → `<em>text</em>`)
  - ## Headers (`## Title` → styled `<h2>` elements)
  - Proper paragraph breaks (`\n\n` → `<p>` tags)
- **Clean Article Display** - Removed placeholder text and improved content presentation
- **Date Removal** - Eliminated publication dates from all article detail views (kept author & reading time)

### 🐛 Bug Fixes
- Fixed markdown not rendering as HTML (was showing raw `**Q.**` instead of bold text)
- Corrected paragraph breaks not displaying properly in narrative articles
- Removed development placeholder content from article template

### 📊 Content Statistics Update
- **Total Articles:** 11 (1 narrative + 2 ABC format + 7 Q&A format + 1 video)
- **Featured Articles:** 4 (properly formatted)
- **Formatted Articles:** 10 of 11 (all except video content)

---

**Last Updated:** October 2, 2025
**Current Version:** 2.2.2
**Status:** ✅ Live and Fully Functional

---

## 📋 Future Improvements (To-Do List)

### High Priority
- **Newsletter Integration** - Replace mailto subscription with Brevo API integration
  - Set up Brevo account (free tier: unlimited contacts, 300 emails/day)
  - Integrate API with footer newsletter form
  - Add email list management
  - Create newsletter templates

- **Contact Form Email Service** - Replace mailto with proper email service
  - Consider Formspree, Brevo, or SendGrid
  - Implement server-side email handling
  - Add form submission notifications
  - Store contact form submissions

### Medium Priority
- Consider adding email automation for newsletter subscribers
- Add analytics tracking for form submissions
- Implement CAPTCHA for spam prevention

### Notes
- Current mailto approach works but requires manual email list management
- Upgrade to API solution when regular newsletter traffic begins