export type SiteImage = {
  src: string | null;
  filename: string;
  alt: string;
  aspectRatio: string;
};

export const siteImages = {
  homepageCrystal: {
    src: null,
    filename: "home/crystal-artwork.webp",
    alt: "A clean, faceted blue crystal artwork with no embedded text or interface",
    aspectRatio: "1 / 1",
  },
  servicesHeroArtwork: {
    src: "/images/hero/services-systems.svg",
    filename: "hero/services-systems.svg",
    alt: "Transparent illustration of connected software systems orbiting a central hub",
    aspectRatio: "16 / 9",
  },
  homepageNetwork: {
    src: null,
    filename: "home/network-background.webp",
    alt: "",
    aspectRatio: "16 / 9",
  },
  homepageTechnology: {
    src: null,
    filename: "about/liquid-sphere.webp",
    alt: "A blue liquid sphere representing an inventive, connected approach to engineering",
    aspectRatio: "16 / 9",
  },
  aboutSphere: {
    src: null,
    filename: "about/liquid-sphere.webp",
    alt: "A blue liquid sphere representing an inventive, connected approach to engineering",
    aspectRatio: "4 / 3",
  },
  homepageProduct: {
    src: "/images/projects/product-interface-capability.jpg",
    filename: "projects/product-interface-capability.jpg",
    alt: "Illustrative software interface with abstract charts and panels, without real business data",
    aspectRatio: "16 / 10",
  },
  homepageSystems: {
    src: "/images/services/custom-software-integrations.jpg",
    filename: "services/custom-software-integrations.jpg",
    alt: "Abstract illustration of software systems connected through a central integration",
    aspectRatio: "16 / 10",
  },
  homepageMobile: {
    src: "/images/services/mobile-app.jpg",
    filename: "services/mobile-app.jpg",
    alt: "Illustrative mobile app screens with abstract, non-specific interface elements",
    aspectRatio: "4 / 3",
  },
  servicesMarketing: {
    src: "/images/services/Digital-Marketing-Advertising.jpg",
    filename: "services/Digital-Marketing-Advertising.jpg",
    alt: "Abstract digital marketing interface illustration with charts and no specific performance figures",
    aspectRatio: "3 / 2",
  },
  servicesSoftware: {
    src: "/images/services/saas.png",
    filename: "services/saas.png",
    alt: "Illustrative SaaS platform interface with abstract panels and no real customer data",
    aspectRatio: "3 / 2",
  },
  servicesWebsite: {
    src: "/images/services/website-development.jpg",
    filename: "services/website-development.jpg",
    alt: "Developers collaborating on a website at a laptop",
    aspectRatio: "3 / 2",
  },
  servicesMobile: {
    src: "/images/services/mobile-app.jpg",
    filename: "services/mobile-app.jpg",
    alt: "Illustrative mobile app screens with abstract, non-specific interface elements",
    aspectRatio: "3 / 2",
  },
  servicesIntegrations: {
    src: "/images/services/custom-software-integrations.svg",
    filename: "services/custom-software-integrations.svg",
    alt: "Abstract illustration of software systems connected through a central integration",
    aspectRatio: "3 / 2",
  },
  servicesCounselling: {
    src: "/images/services/Career Counselling.jpg",
    filename: "services/Career Counselling.jpg",
    alt: "Illustration of two people discussing a career path beside a laptop",
    aspectRatio: "3 / 2",
  },
  aboutCollaboration: {
    src: "/images/about/about-main.jpg",
    filename: "about/about-main.jpg",
    alt: "Illustration of a digital engineering workspace with product interfaces and collaborators",
    aspectRatio: "4 / 3",
  },
  careersLearning: {
    src: "/images/careers/career-mentoring-session.jpg",
    filename: "careers/career-mentoring-session.jpg",
    alt: "Illustration of software professionals collaborating around a laptop",
    aspectRatio: "4 / 3",
  },
  contactConversation: {
    src: "/images/contact/contact-connections.svg",
    filename: "contact/contact-connections.svg",
    alt: "Abstract blue network illustration representing a project conversation",
    aspectRatio: "4 / 3",
  },
  aboutHero: {
    src: "/images/hero/about-engineering.svg",
    filename: "hero/about-engineering.svg",
    alt: "Illustration of a software engineer working at a laptop, surrounded by floating interface panels",
    aspectRatio: "19 / 16",
  },
  careersHero: {
    src: "/images/hero/careers-growth.svg",
    filename: "hero/careers-growth.svg",
    alt: "Transparent illustration of a glowing path ascending through learning milestones",
    aspectRatio: "19 / 16",
  },
  contactHero: {
    src: "/images/hero/contact-orbit.svg",
    filename: "hero/contact-orbit.svg",
    alt: "Transparent illustration of connected communication points around a shared center",
    aspectRatio: "19 / 16",
  },
} as const satisfies Record<string, SiteImage>;
