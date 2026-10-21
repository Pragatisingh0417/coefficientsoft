# Image assets

`app/data/site-images.ts` is the single registry for website images. Put a file
inside the matching folder under `public/images/`, then update that registry
entry's `src` to its public URL, for example:

```ts
src: "/images/services/digital-marketing-analytics.svg",
filename: "services/digital-marketing-analytics.svg",
alt: "A concise, accurate description of the image",
aspectRatio: "3 / 2",
```

Use `/images/...` in `src`—never `/public/images/...`. `AssetFrame` uses
`next/image`, responsive `sizes`, and an in-layout fallback if a file is not
configured or cannot load. Keep informative alt text accurate and write
decorative imagery as `alt: ""`.

| Page / section | Registry entry | File under `public/images/` | Ratio |
| --- | --- | --- | --- |
| Home / software product capability | `homepageProduct` | `projects/product-interface-capability.svg` | 16:10 |
| Home / connected systems capability | `homepageSystems` | `services/custom-software-integrations.svg` | 16:10 |
| Home / mobile applications capability | `homepageMobile` | `services/mobile-app-interface.svg` | 4:3 |
| Home / connected digital experiences illustration | Inline animated SVG in `NetworkStory.tsx` | No raster file | Responsive vector |
| Services / Digital Marketing & Advertising | `servicesMarketing` | `services/digital-marketing-analytics.svg` | 3:2 |
| Services / SaaS & Software Products | `servicesSoftware` | `services/saas-product-platform.svg` | 3:2 |
| Services / Website Development | `servicesWebsite` | `services/website-development.jpg` | 3:2 |
| Services / Mobile App Development | `servicesMobile` | `services/mobile-app-interface.svg` | 3:2 |
| Services / Custom Software & Integrations | `servicesIntegrations` | `services/custom-software-integrations.svg` | 3:2 |
| Services / Career Counselling | `servicesCounselling` | `services/career-counselling.svg` | 3:2 |
| About / engineering story banner | `aboutCollaboration` | `about/about-engineering.svg` | 4:3 |
| Careers / collaboration banner | `careersLearning` | `careers/careers-collaboration.svg` | 4:3 |
| Contact / project conversation banner | `contactConversation` | `contact/contact-connections.svg` | 4:3 |

The Home hero is the live Three.js C sculpture. The network story is an original
animated SVG, not a static screenshot. Product, marketing, mobile, and system
visuals are original interface illustrations with no customer names or
performance figures; they are illustrative capability imagery, not completed
client work. About, Careers, and Contact use original vector illustrations. To
replace them, add the new files under their page folders and update the matching
registry entry in `app/data/site-images.ts`; the `AssetFrame` fallback remains
available while a replacement is being prepared.

Folders are organized by page intent: `home/`, `services/`, `about/`, `projects/`,
`careers/`, and `contact/`. For a future testimonial, add only genuine approved
feedback to the typed `testimonials` array in `app/data/testimonials.ts`; include
the speaker's confirmed name and role/company only when permission to publish
those details has been given. The section already renders a clear unpublished
state while the array is empty.
