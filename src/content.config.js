import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  type: "data",
  schema: z.object({
    site_name: z.string(),
    tagline: z.string(),
    hero_image: z.string().optional(),
    hero_image_position: z.string().optional(),
  }),
});

const services = defineCollection({
  type: "data",
  schema: z.object({
    services: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            subtitle: z.string().optional(),
            list: z.array(z.string()),
          })
        ),
      })
    ),
  }),
});

const restoration = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    full_description: z.string(),
    gallery_images: z.array(z.string()),
  }),
});

const whyus = defineCollection({
  type: "data",
  schema: z.object({
    section_title: z.string(),
    section_subtitle: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
});

const cta = defineCollection({
  type: "data",
  schema: z.object({
    heading: z.string(),
    description: z.string(),
    button_text: z.string(),
    button_link: z.string(),
  }),
});

const contact = defineCollection({
  type: "data",
  schema: z.object({
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    hours: z.string().optional(),
    maps_embed_url: z.string().optional(),
    github_profile: z.string().optional(),
  }),
});

export const collections = { hero, services, restoration, whyus, cta, contact };