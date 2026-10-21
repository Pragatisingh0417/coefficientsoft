export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
};

// Add only authentic client feedback with permission to publish.
export const testimonials: Testimonial[] = [];
