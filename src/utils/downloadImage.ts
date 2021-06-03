export const downloadImage = (filename = "untitled.jpeg") => {
  const a = document.createElement("a"),
    canvas = document.getElementById("canvas") as HTMLCanvasElement,
    data = canvas.toDataURL("image/jpeg", 1.0);
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
};
