/**
 * Resume PDF Generator
 * Extracts data from portfolio and generates a professional PDF resume
 * Requires: https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js
 */

function generateResumePDF() {
  // Extract data from the portfolio HTML
  const resumeData = {
    name: 'Rabiyath Muneefa',
    title: 'Full Stack .NET Developer',
    email: 'rabiyathmuneefa90@gmail.com',
    location: 'Mangaluru, India',
    linkedin: 'https://www.linkedin.com/in/rabiyath-muneefa-036731214/',
    github: 'https://github.com/Muneefa',
    summary: 'Senior full-stack .NET developer with 3+ years shipping backend services, APIs and Blazor UIs for enterprise energy platforms — including grid connection and metering-point workflows.',
    experience: [
      {
        role: 'Software Developer',
        company: 'EGDK',
        location: 'Mangaluru, India',
        period: 'Apr 2023 — Present',
        points: [
          'Designed scalable backend services in ASP.NET Core and C# for an enterprise energy management platform.',
          'Built and maintained REST APIs for contract, billing and third-party integration workflows.',
          'Optimised SQL queries and stored procedures to improve system performance and stability.',
          'Led Blazor frontend migrations, including multi-tab grid views and reusable components.'
        ]
      },
      {
        role: 'Full Stack Developer',
        company: 'EGDK (Swedish Client Engagement)',
        location: 'Cross-timezone Remote',
        period: '2023 — Present',
        points: [
          'Delivered REST APIs for grid connection, metering point and property/grid workflows for a Swedish utility client.',
          'Built Blazor and JavaScript frontend components for grid connection and metering point data views.',
          'Coordinated with Sweden-based stakeholders across timezones on requirements and delivery via Microsoft Teams.'
        ]
      },
      {
        role: 'Technical Trainer',
        company: 'Cognitive Solution',
        location: 'Mangaluru, India',
        period: 'Aug 2022 — Mar 2023',
        points: [
          'Delivered structured programming and full-stack development training.',
          'Built practical backend and frontend demos to illustrate real-world API-driven systems.',
          'Mentored learners in application lifecycle understanding and clean code practices.'
        ]
      }
    ],
    skills: {
      backend: ['C#', 'ASP.NET Core', '.NET 8', 'Entity Framework Core', 'REST APIs', 'Design Patterns', 'LINQ'],
      database: ['SQL Server', 'T-SQL', 'Query Optimisation', 'Entity Framework Core'],
      frontend: ['Blazor', 'JavaScript', 'Knockout.js'],
      devops: ['Git', 'Azure DevOps CI/CD']
    },
    education: {
      degree: 'BE, Computer Science Engineering',
      school: 'PA College of Engineering',
      period: '2018 — 2022'
    },
    languages: ['English (Fluent — cross-cultural, international team communication)'],
    badges: ['Full-stack ownership', 'Cross-timezone delivery', 'DB performance tuning', 'Agile / Scrum']
  };

  // Create HTML for resume
  const resumeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Resume - Rabiyath Muneefa</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.5;
          color: #333;
          background: white;
        }
        .container {
          max-width: 8.5in;
          height: 11in;
          margin: 0 auto;
          padding: 0.5in;
          background: white;
        }
        .header {
          border-bottom: 2px solid #12B981;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }
        .name {
          font-size: 24px;
          font-weight: 600;
          color: #0A0F0D;
          margin-bottom: 4px;
        }
        .title {
          font-size: 13px;
          color: #12B981;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .contact {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 11px;
          color: #666;
        }
        .contact a {
          color: #12B981;
          text-decoration: none;
        }
        .contact a:hover {
          text-decoration: underline;
        }
        .section {
          margin-bottom: 14px;
        }
        .section-title {
          font-size: 12px;
          font-weight: 600;
          color: #0A0F0D;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          padding-bottom: 6px;
          border-bottom: 1px solid #E5E7EB;
        }
        .summary {
          font-size: 11px;
          color: #555;
          line-height: 1.5;
          margin-bottom: 8px;
        }
        .job {
          margin-bottom: 10px;
          font-size: 11px;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
        }
        .job-title {
          font-weight: 600;
          color: #0A0F0D;
        }
        .job-period {
          font-size: 10px;
          color: #12B981;
          font-weight: 500;
        }
        .job-company {
          color: #666;
          font-size: 10px;
          margin-bottom: 4px;
        }
        .job-points {
          list-style: none;
          margin-left: 0;
        }
        .job-points li {
          margin-bottom: 3px;
          padding-left: 14px;
          position: relative;
          color: #555;
          line-height: 1.4;
        }
        .job-points li:before {
          content: '•';
          position: absolute;
          left: 2px;
          color: #12B981;
          font-weight: bold;
        }
        .skills-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          font-size: 11px;
        }
        .skill-category {
          margin-bottom: 6px;
        }
        .skill-category-title {
          font-weight: 600;
          color: #0A0F0D;
          margin-bottom: 3px;
          font-size: 10px;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .skill-tag {
          background: #F0FDF4;
          border: 1px solid #DCFCE7;
          color: #166534;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 9px;
        }
        .education {
          font-size: 11px;
          margin-bottom: 8px;
        }
        .education-title {
          font-weight: 600;
          color: #0A0F0D;
        }
        .education-detail {
          color: #666;
          font-size: 10px;
        }
        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 10px;
        }
        .badge {
          background: #F3F4F6;
          border: 1px solid #D1D5DB;
          color: #374151;
          padding: 3px 8px;
          border-radius: 4px;
        }
        @media print {
          body { margin: 0; padding: 0; }
          .container { max-width: 100%; height: 100%; margin: 0; padding: 0.5in; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="name">${resumeData.name}</div>
          <div class="title">${resumeData.title}</div>
          <div class="contact">
            <span>${resumeData.email}</span>
            <span>•</span>
            <span>${resumeData.location}</span>
            <span>•</span>
            <a href="${resumeData.github}" target="_blank">GitHub</a>
            <span>•</span>
            <a href="${resumeData.linkedin}" target="_blank">LinkedIn</a>
          </div>
        </div>

        <div class="section">
          <div class="summary">${resumeData.summary}</div>
        </div>

        <div class="section">
          <div class="section-title">Professional Experience</div>
          ${resumeData.experience.map(job => `
            <div class="job">
              <div class="job-header">
                <span class="job-title">${job.role}</span>
                <span class="job-period">${job.period}</span>
              </div>
              <div class="job-company">${job.company} • ${job.location}</div>
              <ul class="job-points">
                ${job.points.map(point => `<li>${point}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <div class="section-title">Skills & Expertise</div>
          <div class="skills-section">
            <div class="skill-category">
              <div class="skill-category-title">Backend</div>
              <div class="skill-tags">
                ${resumeData.skills.backend.map(s => `<span class="skill-tag">${s}</span>`).join('')}
              </div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Database</div>
              <div class="skill-tags">
                ${resumeData.skills.database.map(s => `<span class="skill-tag">${s}</span>`).join('')}
              </div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Frontend</div>
              <div class="skill-tags">
                ${resumeData.skills.frontend.map(s => `<span class="skill-tag">${s}</span>`).join('')}
              </div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">DevOps</div>
              <div class="skill-tags">
                ${resumeData.skills.devops.map(s => `<span class="skill-tag">${s}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          <div class="education">
            <div class="education-title">${resumeData.education.degree}</div>
            <div class="education-detail">${resumeData.education.school} (${resumeData.education.period})</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Core Competencies</div>
          <div class="badges">
            ${resumeData.badges.map(b => `<span class="badge">${b}</span>`).join('')}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Use html2pdf to generate and download PDF
  const element = document.createElement('div');
  element.innerHTML = resumeHTML;

  const opt = {
    margin: 0,
    filename: 'Rabiyath-Muneefa-Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(resumeHTML).save();
}

// Export for use
window.generateResumePDF = generateResumePDF;
