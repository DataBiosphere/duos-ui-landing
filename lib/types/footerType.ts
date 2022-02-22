export interface Footers {
  company: Company[];
  legal: Legal[];
}

export type Company = {
  name: string;
  href: string;
};

export type Legal = {
  name: string;
  href: string;
};
