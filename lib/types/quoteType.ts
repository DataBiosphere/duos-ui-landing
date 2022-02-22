export default interface Quote {
  quote: QuoteType;
}

export type QuoteType = {
  text: string;
  author: string;
  company: string;
  image: string;
};
