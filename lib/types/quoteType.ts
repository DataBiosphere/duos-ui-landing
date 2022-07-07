export default interface Quote {
  quote: QuoteType;
}

export type QuoteType = {
  Text: string;
  Author: string;
  Company: string;
  Image: string;
};
