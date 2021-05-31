import { showEditImage } from "../utils/showEditImage";

export const flip = (axis) => {
  const image = document.getElementById("edit-image") as HTMLImageElement,
    canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");
  //ctx.save();
  canvas.width = image.width;
  canvas.height = image.height;

  if (axis === "x") {
    ctx.translate(image.width, 0);
    ctx.scale(-1, 1);
  } else {
    ctx.translate(0, image.height);
    ctx.scale(1, -1);
  }

  ctx.drawImage(image, 0, 0);
  return (image.src = canvas.toDataURL("image/jpeg"));
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

  return showEditImage(canvas.toDataURL());
};
export const applyOrientation = () => {
  const image = document.getElementById("edit-image") as HTMLImageElement,
    originalCanvas = document.getElementById("canvas") as HTMLCanvasElement;

  originalCanvas.width = image.width;
  originalCanvas.height = image.height;
  return originalCanvas.getContext("2d").drawImage(image, 0, 0);
};
export const cancelOrientation = () => {
  const originalCanvas = document.getElementById("canvas") as HTMLCanvasElement;
  return showEditImage(originalCanvas.toDataURL());
};
