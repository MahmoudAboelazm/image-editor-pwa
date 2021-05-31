import { showEditImage } from "../utils/showEditImage";

export interface adjustEditorProps {
  contrast?: any;
  sepia?: number;
  brightness?: number;
  hueRotate?: number;
  grayscale?: number;
  saturate?: number;
}

export const adjustEditor = ({
  contrast,
  sepia,
  brightness,
  hueRotate,
  grayscale,
  saturate,
}: adjustEditorProps) => {
  const img = document.getElementById("edit-image") as HTMLImageElement;

  return (img.style.filter = `contrast(${contrast}) sepia(${sepia}) brightness(${brightness}) hue-rotate(${hueRotate}deg) grayscale(${grayscale}) saturate(${saturate})`);
};
export const applyAdjust = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement,
    img = document.getElementById("edit-image") as HTMLImageElement,
    ctx = canvas.getContext("2d");
  ctx.filter = img.style.filter;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  img.style.filter =
    "contrast(1) sepia(0) brightness(1) hue-rotate(0deg) grayscale(0) saturate(1)";
  return showEditImage(canvas.toDataURL("image/jpeg", 1.0));
};

export const cancelAdjust = () => {
  const img = document.getElementById("edit-image") as HTMLImageElement;
  return (img.style.filter =
    "contrast(1) sepia(0) brightness(1) hue-rotate(0deg) grayscale(0) saturate(1)");
};
