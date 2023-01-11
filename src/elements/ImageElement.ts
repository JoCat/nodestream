import { CanvasRenderingContext2D, Image, loadImage } from "canvas";
import { BaseElement, BaseElementOptions } from "./BaseElement";

export interface ImageElementOptions extends BaseElementOptions {
  url: string;
}

export class ImageElement implements BaseElement {
  options: ImageElementOptions;
  private image?: Image;

  constructor(options: ImageElementOptions) {
    this.options = options;

    this.prepare();
  }

  private async prepare() {
    const { url } = this.options;
    this.image = await loadImage(url);
  }

  public draw(context: CanvasRenderingContext2D) {
    const { position } = this.options;
    const [x, y] = position;

    if (this.image) context.drawImage(this.image, x, y);
  }
}
