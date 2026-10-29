export const internshipTracks = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Explore accessible, responsive websites and the fundamentals behind a polished web experience.",
    skills: "HTML, CSS, JavaScript, responsive design, accessibility",
    candidateProfile:
      "For learners interested in building and refining browser-based experiences.",
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    description:
      "Explore how interfaces, APIs, and data fit together in a complete application.",
    skills: "JavaScript or TypeScript, React, APIs, databases, Git",
    candidateProfile:
      "For learners curious about both frontend interfaces and backend systems.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Practice turning user needs into clear journeys, wireframes, and interface designs.",
    skills: "User flows, wireframing, visual hierarchy, prototyping, usability",
    candidateProfile:
      "For people interested in making digital products easier to understand and use.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Learn how content, search, and campaign planning contribute to a coherent online presence.",
    skills: "Content planning, SEO fundamentals, analytics, campaign basics",
    candidateProfile:
      "For learners interested in digital communication and audience discovery.",
  },
  {
    id: "software-testing",
    title: "Software Testing",
    description:
      "Build a quality mindset through test planning, clear bug reports, and systematic checks.",
    skills: "Test cases, exploratory testing, defect reporting, quality basics",
    candidateProfile:
      "For detail-oriented learners curious about how reliable software is evaluated.",
  },
] as const;

export const guidanceTopics = [
  "Career Direction & Planning",
  "Resume & Portfolio Review",
  "Interview Preparation",
  "Skills & Learning Roadmaps",
  "Career Transition Guidance",
] as const;

export const careerStages = [
  "Student",
  "Recent graduate",
  "Early-career professional",
  "Experienced professional",
  "Considering a career transition",
  "Prefer to discuss",
] as const;

export const careerFaqs = [
  {
    question: "Are the internship tracks currently open positions?",
    answer:
      "No. The tracks describe areas of interest, not confirmed vacancies. We will only describe a position as open when it has been formally confirmed.",
  },
  {
    question: "Do I need prior professional experience to enquire?",
    answer:
      "You can introduce yourself with your current experience, learning, and interests. Any requirements for a specific confirmed opportunity will be shared with that opportunity.",
  },
  {
    question: "Do you guarantee internships, certificates, or jobs?",
    answer:
      "No. An enquiry is not a placement, and we do not promise certificates, stipends, or employment outcomes. Details are confirmed only for specific opportunities when available.",
  },
  {
    question: "What happens after I send an internship enquiry?",
    answer:
      "Your details are sent to the CoefficientSoft team for review. If a relevant next step is available, the team can contact you using the details you provide.",
  },
  {
    question: "What does career guidance include?",
    answer:
      "Guidance is practical and career-focused: exploring options, reviewing application materials, preparing for interviews, or identifying learning steps. It is not clinical or mental-health counselling and does not guarantee employment.",
  },
  {
    question: "Is there a fixed fee or session schedule?",
    answer:
      "No fee or schedule is stated here because arrangements have not been confirmed. Submit a request and the team can clarify what is currently available.",
  },
] as const;
