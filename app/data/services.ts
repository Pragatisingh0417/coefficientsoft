import {
  AppWindow,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Smartphone,
  Workflow,
} from "lucide-react";
import { siteImages } from "./site-images";

export const services = [
  {
    id: "digital-marketing-advertising",
    number: "01",
    title: "Digital Marketing & Advertising",
    summary:
      "Build a clearer route from discovery to action with search, campaigns, paid media, and useful content.",
    detail:
      "SEO, digital campaigns, paid advertising, content, and online growth—planned around the audience and goals you actually have.",
    outcome: "Reach the right people with a more coherent digital presence.",
    image: siteImages.servicesMarketing,
    icon: ChartNoAxesCombined,
  },
  {
    id: "saas-software-products",
    number: "02",
    title: "SaaS & Software Products",
    summary:
      "Shape an idea into a product people can use, from early product definition to a dependable release.",
    detail:
      "SaaS platforms, dashboards, business applications, automation, and custom product engineering.",
    outcome: "Turn product requirements into a maintainable working system.",
    image: siteImages.servicesSoftware,
    icon: AppWindow,
  },
  {
    id: "website-development",
    number: "03",
    title: "Website Development",
    summary:
      "Create a considered web experience that makes your offer clear and gives visitors a useful next step.",
    detail:
      "Business websites, e-commerce, landing pages, and web applications built around your audience and workflow.",
    outcome: "Give customers and teams a web experience that works for them.",
    image: siteImages.servicesWebsite,
    icon: Code2,
  },
  {
    id: "mobile-app-development",
    number: "04",
    title: "Mobile App Development",
    summary:
      "Plan and build mobile experiences that fit the way people need to use your product on the move.",
    detail:
      "Mobile applications and experiences selected to suit the product goals, audience, and delivery constraints.",
    outcome: "Make important product journeys accessible beyond the desktop.",
    image: siteImages.servicesMobile,
    icon: Smartphone,
  },
  {
    id: "custom-software-integrations",
    number: "05",
    title: "Custom Software & Integrations",
    summary:
      "Connect systems and improve the operational workflows that slow down your team.",
    detail:
      "Tailored business systems, APIs, integrations, and workflow improvements designed around existing operations.",
    outcome: "Reduce friction between the tools and processes your business relies on.",
    image: siteImages.servicesIntegrations,
    icon: Workflow,
  },
  {
    id: "career-counselling",
    number: "06",
    title: "Career Counselling",
    summary:
      "Ask us about career guidance and counselling options; programme details are being confirmed.",
    detail:
      "We are preparing the details of this offering. Contact us to ask about current career guidance and counselling options.",
    outcome: "Get in touch for accurate information about what is currently available.",
    image: siteImages.servicesCounselling,
    icon: BriefcaseBusiness,
  },
] as const;
