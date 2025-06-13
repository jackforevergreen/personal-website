import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../layout";
import FigureGrid from "../components/figuregrid";

import resume3 from "./components/resume/Jan2024.png";
import resume2 from "./components/resume/June2023.png";
import resume4 from "./components/resume/May2025.png";
import resume1 from "./components/resume/Oct2022.png";

const NewSite: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.header}>
        How to create a resume to land your dream job
      </h1>
      <div style={styles.note}>Click here to watch this as a video</div>
      <p>
        The resume is a living document that encompass your entire professional
        working history into one page. The amount of effort and detail your put
        into it is directly correlated to your success in the job market.{" "}
      </p>
      <p>
        My resume allowed me to land a six figure job offer during my junior
        year of college, get scholarships, and interview at top business
        schools. In this blog we will break down how to build a resume that
        improves your chances and will allow you to present your experience in
        the best way possible.{" "}
      </p>
      <h2 style={styles.subHeader}>My Resume Progression</h2>
      <p>
        As mentioned above a resume is a living document, which means it needs
        constant attention and updates to keep up with your professional career.
        In college I made an effort to update mine almost monthly as my
        experience was constantly changing. At the bare minimum you should
        update yours annually. In order to show the progression of my resume I
        have picked out 4 resumes from the past 4 years. In showing you these
        documents I hope you can see the amount of progress 1 year can make and
        you can begin to see the improvements in format, language, experience,
        and overall quality.{" "}
      </p>

      <FigureGrid
        images={[
          {
            src: resume1,
            alt: "Jack Pearson Resume October 2022",
            title: "Oct 2022",
          },
          {
            src: resume2,
            alt: "Jack Pearson Resume June 2023",
            title: "June 2023",
          },
          {
            src: resume3,
            alt: "Jack Pearson Resume January 2024",
            title: "Jan 2024",
          },
          {
            src: resume4,
            alt: "Jack Pearson Resume May 2025",
            title: "May 2025",
          },
        ]}
      />
      <p> </p>
      <div style={styles.note}>
        <strong>Note:</strong>
        The main thing to highlight is how much more info I was able to
        communicate in May of 2025 vs Oct of 2022. I was able to convey so much
        more experience and skills, as every bullet, line, or section had
        purpose.{" "}
      </div>

      <h2 style={styles.subHeader}>Resume Sections</h2>

      <p>
        Depending on your role, industry, and field the sections on your resume
        might shift. In finance for example it is industry standard to have a 1
        page resume. In other fields a longer CV is perfectly acceptable as you
        may have publications or research to highlight. It is best to do quick
        Google search and find a template that fits your industry and go from
        there. If you are in finance, consulting, or any adjacent field you are
        in luck as my amazing resume template is linked{" "}
        <a
          href="https://drive.google.com/drive/folders/1H6M0hGbohuCR0YvcQw0by4wqAHIE24p9?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          here
        </a>{" "}
        free to download. (I am biased but I think it is clean){" "}
      </p>

      <h2 style={styles.subHeader}>Education</h2>

      <p>
        The education section is the most straightforward and is almost always
        at the top of any resume. The most import things to include are your
        institution, major or concentration, and GPA. It may also be useful to
        include “Relevant Coursework” as some programs might want to see that
        you have completed required courses. If you notice in mine I have
        included my honors thesis as it is technically a separate degree on top
        of my standard BSBA.{" "}
      </p>

      <h2 style={styles.subHeader}>Experience </h2>
      <p>
        This is where things get a lot more fun. Experience is typically where
        you want to put all your professional experience, like jobs,
        internships, startups, etc. The most important thing is to keep your
        format consistent and clean.{" "}
      </p>
      <p>You want to include the follow under each experience: </p>

      <div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>Company Name
          </li>
        </ul>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Location
          </li>
        </ul>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Duration of Employment
          </li>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.bulletIcon}>•</span>
              Most resumes should include the dates in [Month Year] format, it
              doesn’t really matter just be consistent.
            </li>
            <li style={styles.listItem}>
              <span style={styles.bulletIcon}>•</span>
              For example: May 2024 - August 2024
            </li>
          </ul>
        </ul>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>Position
          </li>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.bulletIcon}>•</span>
              If you want to show progression or promotions you can include
              multiple positions (see my resume from 2023 and 2022)
            </li>
          </ul>
        </ul>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>3 Bullet Points
          </li>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.bulletIcon}>•</span>
              It is standard to only have 3 bullet points per experience, the
              rule of thumb is if you can’t fit everything in 3 bullets you are
              probably saying too much
            </li>
          </ul>
        </ul>
      </div>

      <h3 style={styles.subHeader}>Bullet Points</h3>
      <p>
        This is the “meat” of your resume, these are where your communicate your
        impact at each role. They should be optimized to communicate clearly
        what you did and what the result was of your work. Quantified metrics
        are appreciated and should be included wherever possible.{" "}
      </p>

      <p>
        Below I have identified two examples of a resume bullet point. See if
        you can see which one is better and why.
      </p>

      <div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>Developed an iOS app that
            calculates, tracks, and offsets individual carbon footprints;
            achieved 1000+ downloads, 5/5 rating.
          </li>
        </ul>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>I coded an app that helps
            people reduce their environmental impact. Achieved over 1000
            downloads and had a perfect 5/5 rating.
          </li>
        </ul>
      </div>

      <p>
        So what is wrong in the second one? First, you never want to use I, we
        know it was you. Second there was no strong “ed” or action verbs. In the
        first one for example you can see clearly “Developed” this tells you
        exactly what I did, for example “Coded” is an “ed” word but much less
        powerful. Experiment with a few different “ed” or action verbs.{" "}
      </p>
      <div style={styles.note}>
        <strong>Pro Tip:</strong> There are lists online for “ed” words that
        resume reviewers look for in your industry. Check out MIT’s list{" "}
        <a
          href="https://capd.mit.edu/resources/resume-action-verbs/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          https://capd.mit.edu/resources/resume-action-verbs/
        </a>{" "}
      </div>

      <h2 style={styles.subHeader}>Leadership & Activities</h2>
      <p>
        The Leadership and Activities section is much like the Experience
        section just used to highlight other things you might have been involved
        in. Typical things might be clubs or organizations you were a part of.
        This should match your Experience section almost exactly the same
        structure and format.
      </p>
      <p>
        One thing to note is 3 bullet points might be too many depending on your
        involvement. My resume is much more experience heavy so I tended to
        allocate space to that section.{" "}
      </p>

      <h2 style={styles.subHeader}>Certifications</h2>
      <p>
        This is an optional section to highlight any certification or exams you
        might have passed. Depending on your industry or job you are applying
        for it might be required. Again refer to a resume template from your
        industry to see the standard.{" "}
      </p>
      <h2 style={styles.subHeader}>Interests and Relevant Skills</h2>
      <p>
        This section is where you can show a little more of your personality. I
        always liked to have lots of stuff here to show I was more well rounded
        with some of my other interests or hobbies. It is also important to
        highlight relevant skills like second languages or other skills that
        make you a more attractive candidate. I have used the table format with
        3 sections but normal bullet points or lines works just as well.{" "}
      </p>
      <h2 style={styles.subHeader}>Resume Review</h2>
      <p>
        A key component of resume improvement and review is to have it regular
        checked by someone that has never seen it before. Different people are
        drawn to different section of the resume, and a new set of eyes is
        always good as we tend to miss errors after editing the same few lines
        over and over. If you are in university or school the career center
        almost 100% has a resume review service for free where you can schedule
        a time to meet and have someone review your resume.{" "}
      </p>
      <p>
        During my sophomore year I again almost did this monthly and got a lot
        of great feedback. I would print out 2 copies, have one in front of me
        and them and go section by section and line by line. As I grew more
        confident I would go less frequently but still would go to have someone
        just scan for errors and unclear wording. If you are not in school just
        send it to a few friends or even just print it out and review yourself.
        Additionally AI is getting advanced enough that plugging it into
        something as basic as ChatGPT can give you lots of great pointers and
        catch errors.{" "}
      </p>

      <h2 style={styles.subHeader}>How do I actually build my resume?</h2>
      <p>
        This question might be the hardest to answer, formatting and font size
        are pretty standard but knowing how to build an impressive resume seem
        be daunting at first. I remember sitting in my intro to business class
        after I transferred into the business school. I didn’t know what an
        internship was and didn’t even have a Linkedin, but I knew what I was
        interested in so I opened up my college website and began to explore. We
        all have things we want to learn more about so start there, send a quick
        email asking to learn more or help out and build your confidence and
        experience. Also in the early stages don’t feel bad about unpaid work,
        in this competitive market it is totally normal and at times expected
        that your will volunteer your time for some experience.
      </p>
      <p>
        I knew I was interested in sustainable business and one day I got an
        email from the Center for Sustainable Business at Pitt so I immediately
        replied and ask how I could help out. This became my first internship
        and quickly built up my confidence to pursue my interests and ask where
        I could be useful. I was able to land multiple jobs that were not posted
        online, just by reaching out and networking with the right people. I was
        able to build a strong resume, one that landed me a solid post grad job
        where I will continue to build my resume and learn lots of new skills to
        add as bullet points in the future.
      </p>

      <div>
        <h3 style={styles.sectionTitle}>
          1. Get used to updating your resume regularly
        </h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            You want to get in the habit of constantly updating your resume even
            if your work experience hasn’t changed.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Just changing a few words and cleaning things up will compound over
            the long term.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>2. Get a second opinion</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Have other people check over things before you send it out.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>A second set of eyes can see
            things you glossed over.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            If you are in college, use resume review resources available to you!
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>3. Focus on the bullet points</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            The bullets under your experience are the most important lines of
            text on your resume.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            These might be the only context a recruiter has on you and your past
            experience, so make sure they are optimized.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>
          4. Don’t let your resume hold you back
        </h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            The resume is the initial screen before offering an interview, so
            don’t let it hold you back.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            It is too easy to control and improve with just a few hours of
            focus—so do it.
          </li>
        </ul>
      </div>

      <p>
        Thanks for reading and I hope you learned something or found this
        useful!{" "}
      </p>
      <p>-Jack</p>

      <p style={styles.date}>Published on June 13, 2025</p>

      <Link to="/blogs" style={styles.backLink}>
        Back to Blogs
      </Link>
    </div>
  );
};

export default NewSite;
