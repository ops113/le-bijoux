type CollectionItem = {
  id: number;
  name: string;
  category: string;
  slug: string;
};

// Eagerly import all assets so we can build galleries without manual imports.
const imageModules = import.meta.glob("../assets/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const normalize = (value: string) => value.toLowerCase().replace(/%20/g, " ");

const extractOrder = (path: string, slug: string) => {
  const match = normalize(path).match(new RegExp(`${slug}\\s*-\\s*(\\d+)`));
  return match ? parseInt(match[1], 10) : 0; // base image gets order 0
};

export const getImagesForSlug = (slug: string) => {
  return Object.entries(imageModules)
    .filter(([path]) => normalize(path).includes(slug))
    .map(([path, src]) => ({
      src,
      order: extractOrder(path, slug),
      path,
    }))
    .sort((a, b) => a.order - b.order || a.path.localeCompare(b.path))
    .map((item) => item.src);
};

export const getCoverForSlug = (slug: string) => getImagesForSlug(slug)[0];

export const collectionItems: CollectionItem[] = [
  { id: 1, name: "Tourmaline Dream", category: "Rings", slug: "ring-tourmaline" },
  { id: 2, name: "Sapphire Eternity", category: "Rings", slug: "ring-sapphire" },
  { id: 3, name: "Marquise Solitaire", category: "Necklaces", slug: "necklace-marquise" },
  { id: 4, name: "Tanzanite Pendant", category: "Necklaces", slug: "necklace-tanzanite" },
  { id: 5, name: "Cluster Florals", category: "Earrings", slug: "earrings-cluster" },
  { id: 6, name: "Emerald Studs", category: "Earrings", slug: "earrings-emerald" },
  { id: 7, name: "Sapphire Art Deco", category: "Earrings", slug: "earring-sapphire" },
  { id: 8, name: "Pear Sapphire Drop", category: "Necklaces", slug: "necklace-pear-sapphire" },
  { id: 9, name: "Butterfly Grace", category: "Necklaces", slug: "necklace-butterfly" },
  { id: 10, name: "Butterfly Whisper", category: "Necklaces", slug: "necklace-butterfly-2" },
];

export type { CollectionItem };
