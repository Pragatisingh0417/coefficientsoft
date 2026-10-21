export type SiteImage = {
  src: string | null;
  filename: string;
  alt: string;
  aspectRatio: string;
};

export const siteImages = {
  homepageProduct: {
    src: "/images/projects/c-3.jpg",
    filename: "projects/c-3.jpg",
    alt: "Product interface capability illustration",
    aspectRatio: "16 / 10",
  },
  homepageOperations: {
    src: "/images/projects/c-5.jpg",
    filename: "projects/c-5.jpg",
    alt: "Connected operations capability illustration",
    aspectRatio: "16 / 10",
  },
  servicesMarketing: {
    src: "/images/services/Digital Marketing & Advertising.jpg",
    filename: "services/Digital Marketing & Advertising.jpg",
    alt: "Digital marketing and advertising visual",
    aspectRatio: "3 / 2",
  },
  servicesSoftware: {
    src: "/images/services/SaaS & Software Products.jpg",
    filename: "services/SaaS & Software Products.jpg",
    alt: "SaaS and software product visual",
    aspectRatio: "3 / 2",
  },
  servicesWebsite: {
    src: "/images/services/website-development.jpg",
    filename: "services/website-development.jpg",
    alt: "Website development visual",
    aspectRatio: "3 / 2",
  },
  servicesMobile: {
    src: "/images/services/mobile-app.jpg",
    filename: "services/mobile-app.jpg",
    alt: "Mobile app development visual",
    aspectRatio: "3 / 2",
  },
  servicesIntegrations: {
    src: "/images/services/custome.jpg",
    filename: "services/custome.jpg",
    alt: "Custom software and integrations visual",
    aspectRatio: "3 / 2",
  },
  servicesCounselling: {
    src: "/images/services/Career Counselling.jpg",
    filename: "services/Career Counselling.jpg",
    alt: "Career counselling visual",
    aspectRatio: "3 / 2",
  },
  aboutCollaboration: {
    src: "/images/about/about-collaboration.jpg",
    filename: "about/about-collaboration.jpg",
    alt: "Two colleagues collaborating at a computer",
    aspectRatio: "4 / 3",
  },
  careersLearning: {
    src: "/images/careers/career.jpg",
    filename: "careers/career.jpg",
    alt: "Internship learning and collaboration visual",
    aspectRatio: "4 / 3",
  },
  contactConversation: {
    src: "/images/contact/contact.png",
    filename: "contact/contact.png",
    alt: "Contact and project conversation visual",
    aspectRatio: "4 / 3",
  },
} satisfies Record<string, SiteImage>;
