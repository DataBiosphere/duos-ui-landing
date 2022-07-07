export default interface Resources {
  resources: Resource[];
}

export type Resource = {
  id: number;
  Title: string;
  TitleLink: string;
  Date: string;
  Tags: string[];
  HeaderImage: string;
  Summary: string;
  AuthorName: string;
  AuthorLink: string;
  AuthorImage: string;
  ReadingLength: string;
};
