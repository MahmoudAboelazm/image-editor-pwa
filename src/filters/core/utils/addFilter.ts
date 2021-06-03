import { showLoading } from "../../../utils/showLoading";
import { sendCanvasDataToRenderer } from "./sendCanvasDataToRenderer";

export const addFilter = (filterName: string, filterFunc: Function) => {
  showLoading();
  sendCanvasDataToRenderer();
  return new Promise((resolve, _) => resolve(filterFunc())).then(() =>
    setTimeout(() => window.Caman.renderer.processNext()),
  );
};
