export const sendCanvasDataToRenderer = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement,
    ctx = canvas.getContext("2d");
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return window.Caman.renderer.getCanvasData(data);
};
