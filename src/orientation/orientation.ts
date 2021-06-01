import { showEditImage } from "../utils/showEditImage";

let dataPixels: ImageData;

export const flip = (axis) => {
  const originalCanvas = document.getElementById("canvas") as HTMLCanvasElement,
    canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");
  canvas.width = originalCanvas.width;
  canvas.height = originalCanvas.height;

  if (axis === "x") {
    ctx.translate(originalCanvas.width, 0);
    ctx.scale(-1, 1);
  } else if (axis === "y") {
    ctx.translate(0, originalCanvas.height);
    ctx.scale(1, -1);
  }

  ctx.drawImage(originalCanvas, 0, 0);
  dataPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return showEditImage(canvas.toDataURL());
};

export const rotate = (degree) => {
  const originalCanvas = document.getElementById("canvas") as HTMLCanvasElement,
    canvas = document.createElement("canvas") as HTMLCanvasElement,
    context = canvas.getContext("2d");

  switch (degree) {
    case 0:
      canvas.width = originalCanvas.width;
      canvas.height = originalCanvas.height;
      context.rotate((degree * Math.PI) / 180);
      context.drawImage(originalCanvas, 0, 0);
      break;

    case 90:
      canvas.height = originalCanvas.width;
      canvas.width = originalCanvas.height;
      context.rotate((degree * Math.PI) / 180);
      context.drawImage(originalCanvas, 0, -originalCanvas.height);
      break;

    case 180:
      canvas.width = originalCanvas.width;
      canvas.height = originalCanvas.height;
      context.rotate((degree * Math.PI) / 180);
      context.drawImage(
        originalCanvas,
        -originalCanvas.width,
        -originalCanvas.height,
      );
      break;

    case 270:
    case -90:
      canvas.height = originalCanvas.width;
      canvas.width = originalCanvas.height;
      context.rotate((degree * Math.PI) / 180);
      context.drawImage(originalCanvas, -originalCanvas.width, 0);
      break;
  }
  dataPixels = context.getImageData(0, 0, canvas.width, canvas.height);
  return showEditImage(canvas.toDataURL());
};

export const applyOrientation = () => {
  if (!dataPixels) return;
  const originalCanvas = document.getElementById("canvas") as HTMLCanvasElement;
  originalCanvas.width = dataPixels.width;
  originalCanvas.height = dataPixels.height;
  originalCanvas.getContext("2d").putImageData(dataPixels, 0, 0);
  return (dataPixels = null);
};
export const cancelOrientation = () => {
  if (!dataPixels) return;
  dataPixels = null;
  const originalCanvas = document.getElementById("canvas") as HTMLCanvasElement;
  return showEditImage(originalCanvas.toDataURL());
};
