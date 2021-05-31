export const applyCurrentFilter = (data: any) => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement,
    ctx = canvas.getContext("2d");
  return ctx.putImageData(data, 0, 0);
};
