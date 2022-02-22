export default interface Resources {
  resources: Resource[];
}

export type Resource = {
  id: number;
  title: string;
  href: string;
  date: string;
  datetime: string;
  category: { name: string; href: string };
  imageUrl: string;
  preview: string;
  author: {
    name: string;
    imageUrl: string;
    href: string;
  };
  readingLength: string;
};
