export default interface Hero {
  hero: HeroType;
}

export type HeroType = {
  title: string;
  titleContast: string;
  description: string;
  input: {
    placeholder: string;
  };
  button: {
    text: string;
  };
  submissionSuccessText?: string;
  submissionFailText?: string;
};
