import React from "react";
import CustomLink from "../pages/components/hoverlink";
import "./Resume.css";

const Resume: React.FC = () => (
  <div className="resume-container">
    <header className="resume-header">
      <h1>Current Resume</h1>
      <div className="contact-info">
        <CustomLink href="mailto:jackpearson@pitt.edu">
          jackpearson@pitt.edu
        </CustomLink>
        <span className="separator">|</span>
        <span>(267) - 218 - 8860</span>
        <span className="separator">|</span>
        <span>LinkedIn: </span>
        <CustomLink
          href="https://www.linkedin.com/in/jackbpearson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          jackbpearson
        </CustomLink>
      </div>
    </header>

    <section className="resume-section education-section">
      <h2>EDUCATION</h2>

      <div className="education-content">
        <div className="education-main">
          <p className="university">
            <strong>University of Pittsburgh</strong>,{" "}
            <em>Fredrick Honors College</em>
          </p>
          <p className="degree">
            <em>Bachelor of Philosophy</em>
          </p>
          <ul style={{ marginTop: 0, marginBottom: "5px", marginLeft: "20px" }}>
            <li style={{ fontSize: "14px", lineHeight: "1.4" }}>
              <CustomLink
                href="https://d-scholarship.pitt.edu/47217/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sustainable Consumer Decisions and Value Creation: How Consumer
                Choices Drive Business Success and Global Progress
              </CustomLink>
              <em></em>
            </li>
          </ul>
        </div>
        <div className="education-details">
          <p className="date">August 2021–December 2024</p>
        </div>
      </div>

      <div className="education-content">
        <div className="education-main">
          <p className="university">
            <strong>University of Pittsburgh</strong>,{" "}
            <em>College of Business Administration</em>
          </p>
          <p className="degree">
            <em>
              Bachelors in Business Administration, Major in Finance, Minor in
              Spanish
            </em>
          </p>
        </div>
        <div className="education-details">
          <p className="date">August 2021–December 2024</p>
          <p className="gpa">GPA 3.6/4</p>
        </div>
      </div>
    </section>

    <section className="resume-section">
      <h2>EXPERIENCE</h2>

      <div className="experience-item">
        <h3>Forevergreen</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">
          Co-Founder & CPO | Oct 2023 – Present
        </p>
        <ul>
          <li>
            Raised $27K+ in non-equity funding and built a team of 5 delivering
            consumer access to carbon credits.
          </li>
          <li>
            Launched an iOS app for footprint tracking and offsetting; achieved
            1,000+ downloads and 5/5 rating.
          </li>
          <li>
            Scaled a community of 400K+ followers focused on sustainability and
            climate media.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>BNP Paribas</h3>
        <p className="experience-location">New York, NY</p>
        <p className="experience-position">
          Sales and Trading Intern | Jun 2024 – Aug 2024
        </p>
        <ul>
          <li>
            Accepted return offer after pitching trade to High Yield Credit desk
            and shadowing multiple trading desks.
          </li>
          <li>
            Built DCF and comps models from scratch to support coverage of 6
            mid-cap software firms in Equity Research.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Federated Hermes</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">
          Responsible Investment Intern | Jan 2024 – Jan 2025
        </p>
        <ul>
          <li>
            Reviewed and extracted ESG data from 100+ public company filings
            (10-Ks) for large-cap equities.
          </li>
          <li>
            Supported client engagement by researching responsible investing
            policies across major asset managers.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Diamond Tropical Hardwoods</h3>
        <p className="experience-location">Telford, PA</p>
        <p className="experience-position">
          General Manager | Mar 2019 – Dec 2024
        </p>
        <ul>
          <li>
            Built and optimized the company website; generated $500K+ in revenue
            and 1,000+ online orders.
          </li>
          <li>
            Ran internship program, managed ads, grew list to 4,000+ emails;
            interns earned $8K in scholarships.
          </li>
          <li>
            Oversaw operations using Sage 50: invoicing, inventory, payments,
            domestic/international logistics.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Pitt Center for Sustainable Business (CSB)</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">Associate | Oct 2022 – Dec 2023</p>
        <ul>
          <li>
            Proposed and co-developed Pitt's first undergrad sustainable
            business credential and core course design.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Madrid Easy Consultores</h3>
        <p className="experience-location">Madrid, Spain</p>
        <p className="experience-position">Intern | May 2023 – Aug 2023</p>
        <ul>
          <li>
            Managed tenant relations for 400+ short-term rentals and led new
            inventory system implementation in Spanish.
          </li>
        </ul>
      </div>
    </section>

    <section className="resume-section">
      <h2>LEADERSHIP AND ACTIVITIES</h2>

      <div className="experience-item">
        <h3>Pitt Men’s Water Polo Club</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">
          Vice President | Aug 2021 – Dec 2023
        </p>
        <ul>
          <li>
            Led budgeting, tournament logistics, and coordinated team travel and
            fundraising.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Center for Organ Recovery & Education (CORE)</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">
          Graduate Consultant | Aug 2023 – Dec 2023
        </p>
        <ul>
          <li>
            Built staffing model tied to organ donation forecast; received job
            offer based on performance.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Residence Life – University of Pittsburgh</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">
          Resident Assistant | Nov 2022 – May 2023
        </p>
        <ul>
          <li>
            Supported first-year students in Business Living Learning Community
            with academic and social onboarding.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Big Idea Center – Changemaker Scholar</h3>
        <p className="experience-location">Pittsburgh, PA</p>
        <p className="experience-position">Scholar | Oct 2023 – Dec 2024</p>
        <ul>
          <li>
            First-ever scholar recognized for leading social impact ventures
            through interdisciplinary innovation.
          </li>
        </ul>
      </div>
    </section>

    <section className="resume-section">
      <h2>INTERESTS AND RELEVANT SKILLS</h2>
      <div className="skills-content">
        <p>
          <strong>Languages:</strong> Fluent in English and Spanish
        </p>
        <p>
          <strong>Technical:</strong> Sage50, Excel, Python, JavaScript,
          TypeScript, HTML, CSS, GitHub, Final Cut Pro, Photoshop, Bloomberg
        </p>
        <p>
          <strong>Interests:</strong> sustainability, guitar, running marathons,
          investing, reading, philosophy, woodworking, writing, chess, kendama,
          coding
        </p>
      </div>
    </section>
  </div>
);

export default Resume;
