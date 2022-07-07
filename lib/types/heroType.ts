export default interface Hero {
  hero: HeroType;
}

export type HeroType = {
  Title: string;
  Subtitle: string;
  Description: string;
  InputPlaceholder: string;
  ButtonText: string;
  SubmissionSuccessText?: string;
  SubmissionFailText?: string;
};
