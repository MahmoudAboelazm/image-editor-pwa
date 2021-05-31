import { sendCanvasDataToRenderer } from "../core/utils/sendCanvasDataToRenderer";

export const filterOne = () => {
  sendCanvasDataToRenderer();

  (window.Caman.prototype as any).exposure(5);
  (window.Caman.prototype as any).colorize("#e87b22", 4);

  (window.Caman.prototype as any).sepia(20);
  (window.Caman.prototype as any).channels({
    blue: 8,
    red: 3,
  });

  (window.Caman.prototype as any).curves(
    "b",
    [0, 0],
    [100, 150],
    [180, 180],
    [255, 255],
  );
  (window.Caman.prototype as any).contrast(15);
  (window.Caman.prototype as any).vibrance(75);
  (window.Caman.prototype as any).gamma(1.6);

  return window.Caman.renderer.processNext();
};
export const filterTwo = () => {
  sendCanvasDataToRenderer();
  (window.Caman.prototype as any).saturation(-35);
  (window.Caman.prototype as any).curves(
    "b",
    [20, 0],
    [90, 120],
    [186, 144],
    [255, 230],
  );
  (window.Caman.prototype as any).curves(
    "r",
    [0, 0],
    [144, 90],
    [138, 120],
    [255, 255],
  );
  (window.Caman.prototype as any).curves(
    "g",
    [10, 0],
    [115, 105],
    [148, 100],
    [255, 248],
  );
  (window.Caman.prototype as any).curves(
    "rgb",
    [0, 0],
    [120, 100],
    [128, 140],
    [255, 255],
  );
  return window.Caman.renderer.processNext();
};
export const filterThree = () => {
  sendCanvasDataToRenderer();
  (window.Caman.prototype as any).saturation(-20);
  (window.Caman.prototype as any).vibrance(-50);
  (window.Caman.prototype as any).gamma(1.1);
  (window.Caman.prototype as any).sepia(30);
  (window.Caman.prototype as any).channels({
    red: -10,
    blue: 5,
  });
  (window.Caman.prototype as any).curves(
    "rgb",
    [0, 0],
    [80, 50],
    [128, 230],
    [255, 255],
  );
  return window.Caman.renderer.processNext();
};
