import { showEditImage } from "../utils/showEditImage";

export const applyAdjust = (value) => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement,
    img = document.getElementById("edit-image") as HTMLImageElement,
    ctx = canvas.getContext("2d");

  if (typeof ctx.filter !== "undefined") {
    ctx.filter =
      "contrast(1.4) sepia(6) brightness(0.5) hue-rotate(0deg) grayscale(0) saturate(7.5)";
  }

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  showEditImage(canvas.toDataURL("image/jpeg", 1.0));
};
// blur, opacity(0.5) and drop-shadow doesn't work properly
// invert(1) it can be added also
/// default values
// contrast(100%) sepia(0) brightness(1) hue-rotate(0deg) grayscale(0) saturate(1)
