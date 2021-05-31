import { showEditImage } from "./showEditImage";

export const getImage = () => {
  const reader = new FileReader(),
    img = new Image() as HTMLImageElement,
    input = document.getElementById("file") as HTMLInputElement,
    canvas = document.getElementById("canvas") as HTMLCanvasElement,
    ctx = canvas.getContext("2d");

  if (!input.files[0]) {
    return;
  }
  reader.readAsDataURL(input.files[0]);
  reader.onload = function () {
    img.src = reader.result as string;
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      showEditImage(canvas.toDataURL("image/jpeg", 1.0));
    };
  };
};
