import Mou from "..";
import { sendCanvasDataToRenderer } from "../../utils/sendCanvasDataToRenderer";

export const filterOne = () => {
  sendCanvasDataToRenderer();

  (Mou.prototype as any).exposure(5);
  (Mou.prototype as any).colorize("#e87b22", 4);

  (Mou.prototype as any).sepia(20);
  (Mou.prototype as any).channels({
    blue: 8,
    red: 3,
  });

  (Mou.prototype as any).curves(
    "b",
    [0, 0],
    [100, 150],
    [180, 180],
    [255, 255],
  );
  (Mou.prototype as any).contrast(15);
  (Mou.prototype as any).vibrance(75);
  (Mou.prototype as any).gamma(1.6);

  return Mou.renderer.processNext();
};
export const filterTwo = () => {
  sendCanvasDataToRenderer();
  (Mou.prototype as any).saturation(-35);
  (Mou.prototype as any).curves(
    "b",
    [20, 0],
    [90, 120],
    [186, 144],
    [255, 230],
  );
  (Mou.prototype as any).curves("r", [0, 0], [144, 90], [138, 120], [255, 255]);
  (Mou.prototype as any).curves(
    "g",
    [10, 0],
    [115, 105],
    [148, 100],
    [255, 248],
  );
  (Mou.prototype as any).curves(
    "rgb",
    [0, 0],
    [120, 100],
    [128, 140],
    [255, 255],
  );
  return Mou.renderer.processNext();
};
export const filterThree = () => {
  sendCanvasDataToRenderer();
  (Mou.prototype as any).saturation(-20);
  (Mou.prototype as any).vibrance(-50);
  (Mou.prototype as any).gamma(1.1);
  (Mou.prototype as any).sepia(30);
  (Mou.prototype as any).channels({
    red: -10,
    blue: 5,
  });
  (Mou.prototype as any).curves(
    "rgb",
    [0, 0],
    [80, 50],
    [128, 230],
    [255, 255],
  );
  return Mou.renderer.processNext();
};
