export type SiteImage = {
  src: string | null;
  filename: string;
  alt: string;
  aspectRatio: string;
};

export const siteImages = {
  homepageProduct: {
    src: null,
    filename: "projects/capabilities-product.webp",
    alt: "Product interface capability illustration",
    aspectRatio: "16 / 10",
  },
  homepageOperations: {
    src: null,
    filename: "projects/capabilities-commerce.webp",
    alt: "Connected operations capability illustration",
    aspectRatio: "16 / 10",
  },
  servicesMarketing: {
    src: null,
    filename: "services/services-marketing.webp",
    alt: "Digital marketing and advertising visual",
    aspectRatio: "3 / 2",
  },
  servicesSoftware: {
    src: null,
    filename: "services/services-software.webp",
    alt: "SaaS and software product visual",
    aspectRatio: "3 / 2",
  },
  servicesWebsite: {
    src: null,
    filename: "services/services-websites.webp",
    alt: "Website development visual",
    aspectRatio: "3 / 2",
  },
  servicesMobile: {
    src: null,
    filename: "services/services-mobile-apps.webp",
    alt: "Mobile app development visual",
    aspectRatio: "3 / 2",
  },
  servicesIntegrations: {
    src: null,
    filename: "services/services-integrations.webp",
    alt: "Custom software and integrations visual",
    aspectRatio: "3 / 2",
  },
  servicesCounselling: {
    src: null,
    filename: "services/services-career-counselling.webp",
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
    src: null,
    filename: "careers/careers-internships.webp",
    alt: "Internship learning and collaboration visual",
    aspectRatio: "4 / 3",
  },
  contactConversation: {
    src: null,
    filename: "contact/contact-conversation.webp",
    alt: "Contact and project conversation visual",
    aspectRatio: "4 / 3",
  },
} satisfies Record<string, SiteImage>;
