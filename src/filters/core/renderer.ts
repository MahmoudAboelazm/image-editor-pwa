import { applyCurrentFilter } from "./utils/applyCurrentFilter";
import { showEditImage } from "../../utils/showEditImage";

class Renderer {
  currentJob: any;
  static renderQueue = [];
  static pixelData: any;
  clampRGB(val) {
    if (val < 0) {
      return 0;
    }
    if (val > 255) {
      return 255;
    }
    return val;
  }

  getCanvasData(data) {
    return (Renderer.pixelData = data);
  }
  add(job) {
    if (job == null) {
      return;
    }
    return Renderer.renderQueue.push(job);
  }
  showFilter() {
    const canvas = document.createElement("canvas"),
      context = canvas.getContext("2d");
    canvas.height = Renderer.pixelData.height;
    canvas.width = Renderer.pixelData.width;
    context.putImageData(Renderer.pixelData, 0, 0);
    return showEditImage(canvas.toDataURL("image/png", 1.0));
  }
  // Grabs the next operation from the render queue and passes it to Renderer
  // for execution
  processNext() {
    // If the queue is empty, fire the finished callback
    if (Renderer.renderQueue.length == 0) {
      this.showFilter();
      return "queue is empty";
    }
    // check if there is image data inside the canvas
    if (Renderer.pixelData.data.length === 4) return;

    this.currentJob = Renderer.renderQueue.shift();

    return this.executeFilter();
  }

  executeFilter() {
    const pixel = { r: 0, g: 0, b: 0, a: 0 };

    for (let i = 0; i < Renderer.pixelData.data.length; i += 4) {
      pixel.r = Renderer.pixelData.data[i];
      pixel.g = Renderer.pixelData.data[i + 1];
      pixel.b = Renderer.pixelData.data[i + 2];
      pixel.a = Renderer.pixelData.data[i + 3];
      this.currentJob.processFn(pixel);
      Renderer.pixelData.data[i] = this.clampRGB(pixel.r);
      Renderer.pixelData.data[i + 1] = this.clampRGB(pixel.g);
      Renderer.pixelData.data[i + 2] = this.clampRGB(pixel.b);
      Renderer.pixelData.data[i + 3] = this.clampRGB(pixel.a);
    }
    return this.processNext();
  }
  // This to apply the current filter data to the original canvas
  applyFilter() {
    return applyCurrentFilter(Renderer.pixelData);
  }

  cancelFilter() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    return showEditImage(canvas.toDataURL("image/png", 1.0));
  }
}

export default Renderer;
