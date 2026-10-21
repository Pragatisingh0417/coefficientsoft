# Image asset map

The `siteImages` registry in `app/data/site-images.ts` is the canonical map for page imagery. To add or replace an image, put the file at the path below `public/images/`, then set that registry entry's `src` to `/images/<filename>`. The `filename` field records the intended path; a `null` `src` deliberately shows the component's designed fallback rather than requesting a missing file.

| Page / section | Registry key | Exact filename under `public/images/` | Ratio | Current source |
| --- | --- | --- | --- | --- |
| Home / product capability | `homepageProduct` | `projects/capabilities-product.webp` | 16:10 | Designed fallback |
| Home / operations capability | `homepageOperations` | `projects/capabilities-commerce.webp` | 16:10 | Designed fallback |
| Services / digital marketing | `servicesMarketing` | `services/services-marketing.webp` | 3:2 | Designed fallback |
| Services / SaaS and software products | `servicesSoftware` | `services/services-software.webp` | 3:2 | Designed fallback |
| Services / website development | `servicesWebsite` | `services/services-websites.webp` | 3:2 | Designed fallback |
| Services / mobile app development | `servicesMobile` | `services/services-mobile-apps.webp` | 3:2 | Designed fallback |
| Services / custom software and integrations | `servicesIntegrations` | `services/services-integrations.webp` | 3:2 | Designed fallback |
| Services / career counselling | `servicesCounselling` | `services/services-career-counselling.webp` | 3:2 | Designed fallback |
| About / collaboration banner | `aboutCollaboration` | `about/about-collaboration.jpg` | 4:3 | Existing local image |
| Careers / learning banner | `careersLearning` | `careers/careers-internships.webp` | 4:3 | Designed fallback |
| Contact / conversation banner | `contactConversation` | `contact/contact-conversation.webp` | 4:3 | Designed fallback |

The Home hero is the Three.js C sculpture, not a raster image. Shared page banners use purpose-built visual fallbacks for Services, Careers, and Contact; the About banner uses the mapped collaboration photograph. No testimonial, client project, or team photo is fabricated. Each registry entry includes its descriptive alt text and ratio. `AssetFrame` renders configured sources with `next/image`, responsive `sizes`, and `object-cover`; keep files at the documented ratio and use a meaningful alt for informative images.
