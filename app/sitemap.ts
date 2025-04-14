import { pakej } from "@/lib/pakej";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const pakejUrls = pakej.map((p) => {
    return {
      url: `${baseUrl}/pakej/${p.link}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tempah`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hubungi`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#pakej`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#tentang-kami`,
      lastModified: new Date(),
    },
    ...pakejUrls,
  ];
}
