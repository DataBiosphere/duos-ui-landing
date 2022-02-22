export default interface Screenshot {
  screenshot: ScreenshotType;
}

export type ScreenshotType = {
  category: string;
  title: string;
  description: string;
  image: string;
};
