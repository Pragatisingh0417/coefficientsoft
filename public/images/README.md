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
| Home / hero crystal artwork | `homepageCrystal` | `home/crystal-artwork.webp` | 1:1 |
| Services / full-bleed crystal hero | `servicesHeroArtwork` | `hero/crystal-artwork.webp` | 16:9 |
| Home / connected experiences background | `homepageNetwork` | `home/network-background.webp` | 16:9 |
| Home / lower technology spotlight | `homepageTechnology` | `about/liquid-sphere.webp` | 16:9 crop |
| Home / software product capability | `homepageProduct` | `projects/product-interface-capability.svg` | 16:10 |
| Home / connected systems capability | `homepageSystems` | `services/custom-software-integrations.svg` | 16:10 |
| Home / mobile applications capability | `homepageMobile` | `services/mobile-app.jpg` | 4:3 |
| About / engineering approach sphere | `aboutSphere` | `about/liquid-sphere.webp` | 4:3 |
| Services / Digital Marketing & Advertising | `servicesMarketing` | `services/Digital-Marketing-Advertising.jpg` | 3:2 |
| Services / SaaS & Software Products | `servicesSoftware` | `services/saas.png` | 3:2 |
| Services / Website Development | `servicesWebsite` | `services/website-development.jpg` | 3:2 |
| Services / Mobile App Development | `servicesMobile` | `services/mobile-app.jpg` | 3:2 |
| Services / Custom Software & Integrations | `servicesIntegrations` | `services/custom-software-integrations.svg` | 3:2 |
| Services / Career Counselling | `servicesCounselling` | `services/Career Counselling.jpg` | 3:2 |
| About / engineering story banner | `aboutCollaboration` | `about/about-main.jpg` | 4:3 |
| Careers / collaboration banner | `careersLearning` | `careers/career-mentoring-session.jpg` | 4:3 |
| Contact / project conversation banner | `contactConversation` | `contact/contact-connections.svg` | 4:3 |

The crystal, blue network, and liquid sphere references must be standalone
artwork, not complete website screenshots. Remove all embedded navigation,
text, and UI, while retaining comfortable margins around the artwork. Export
the crystal as square WebP and the network and sphere as wide 16:9 or 4:3 WebP,
ideally at least 1400 px wide. The liquid sphere is reused in the About section
and the lower homepage technology spotlight; the two registry entries can be
configured independently if you later want separate files. Place each file at
the path shown above and set its matching registry entry's `src` to
`/images/<path>` to enable it. These reference entries are intentionally set
to `src: null` until the files exist, preventing 404s.

The full-width Services banner needs the supplied cinematic crystal-fragment
artwork at `public/images/hero/crystal-artwork.webp` (16:9 or wider). This exact
file is not currently present. The Services hero intentionally does not fall
back to the standalone 3D crystal; add the clean background artwork at this
path and set `servicesHeroArtwork.src` to `/images/hero/crystal-artwork.webp`.

The hero uses the existing Three.js faceted crystal while its clean image is
unavailable. The connected-experiences section uses an original network
illustration as its image fallback, and the lower technology spotlight uses a
custom faceted-technology illustration until the liquid sphere file is added.
Product, marketing, mobile, and system visuals are original interface
illustrations with no customer names or performance figures; they are
illustrative capability imagery, not completed client work. To replace other
images, add files under their page folders and update the matching registry
entry; the `AssetFrame` fallback remains available while a replacement is
being prepared.

Folders are organized by page intent: `home/`, `services/`, `about/`, `projects/`,
`careers/`, and `contact/`. For a future testimonial, add only genuine approved
feedback to the typed `testimonials` array in `app/data/testimonials.ts`; include
the speaker's confirmed name and role/company only when permission to publish
those details has been given. The section already renders a clear unpublished
state while the array is empty.
