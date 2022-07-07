export default interface Screenshot {
  screenshot: ScreenshotType;
}

export type ScreenshotType = {
  Category: string;
  Title: string;
  Description: string;
  Image: string;
};
