import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leetjump.lirena.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://leetjump.lirena.in/og_1.png, https://leetjump.lirena.in/og_2.png, https://leetjump.lirena.in/og_3.png, https://leetjump.lirena.in/og_4.png",
      ],
    },
    {
      url: "https://leetjump.lirena.in/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://leetjump.lirena.in/release-notes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
