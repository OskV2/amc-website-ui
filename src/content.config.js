import { defineCollection, z } from "astro:content";

// Ustawienia globalne — dane kontaktowe, social media, godziny otwarcia
const settings = defineCollection({
  type: "data",
  schema: z.object({
    site_name: z.string(),
    tagline: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    hours: z.string().optional(),
    maps_embed_url: z.string().optional(),
    instagram_profile: z.string().optional(),
    github_profile: z.string().optional(),
    years_on_market: z.number().optional(),
  }),
});

// Usługi warsztatu
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

// Sekcja renowacji
const restoration = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    full_description: z.string(),
    before_after: z.object({
      before_image: z.string(),
      after_image: z.string(),
      before_image_mobile: z.string(),
      after_image_mobile: z.string(),
    }),
    gallery_images: z.array(z.string()),
  }),
});

export const collections = { settings, services, restoration };
