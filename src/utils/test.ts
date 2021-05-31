const addFilter = () => {
  var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  var img = document.getElementById("scream") as HTMLImageElement;

  canvas.width = img.width;
  canvas.height = img.height;
  if (typeof ctx.filter !== "undefined") {
    ctx.filter = "invert(1)";
    // console.log(true, ctx);
  }

  ctx.drawImage(img, 0, 0, img.width, img.height);
  var image = document.getElementById("h") as HTMLImageElement;
  var tiles = getTiles(image);
  var domaindColor = getAverageRGB(image);
  let averageRGB = getTilesRGB(tiles);
  let mainColor = domaindColor.r + domaindColor.g + domaindColor.b;
  console.log("tiles", tiles);
  console.log("tiles rgb", averageRGB);
  // console.log(domaindColor);
  /////////////////////////////////////////////////////////////////////////
  const data = ctx.getImageData(0, 0, img.width, img.height);
  const imageData = data;

  /////////////////////////////////////////////////////////////////////////////
  //console.log(getAverageRGB(image));

  /////////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = averageRGB.reduce((a, b) =>
      Math.abs(b.r - imageData.data[i]) < Math.abs(a.r - imageData.data[i])
        ? b
        : a,
    );
    const g = averageRGB.reduce((a, b) =>
      Math.abs(b.g - imageData.data[i + 1]) <
      Math.abs(a.g - imageData.data[i + 1])
        ? b
        : a,
    );

    const b = averageRGB.reduce((a, b) =>
      Math.abs(b.b - imageData.data[i + 2]) <
      Math.abs(a.b - imageData.data[i + 2])
        ? b
        : a,
    );

    const currnetPixelTotal =
      imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2];
    // XX r.r + imageData[i] / 2 done XX
    // XX (mainColor + currnetPixelTotal) / 6 XX
    // XX ((mainColor + currnetPixelTotal) / 6 + domaindColor.g) / 2 XX
    // XX (((mainColor + currnetPixelTotal) / 6 + domaindColor.b) / 2 +imageData.data[i + 2]) /2,
    // XX (mainColor +currnetPixelTotal +domaindColor.r +imageData.data[i + 1]) /8,
    // total of the rgb in pixel then the total of the domant color / 6 then + the color of r,g or b / 2

    imageData.data[i] = Math.ceil((r.r + imageData.data[i]) / 2);
    imageData.data[i + 1] = Math.ceil(imageData.data[i + 1]);
    imageData.data[i + 2] = Math.ceil((b.b + imageData.data[i + 2]) / 2);
  }

  ctx.putImageData(imageData, 0, 0);
};
function getTilesRGB(tiles: any) {
  let tile: any;

  let tilesRGB = [];

  for (let i = 0; i < tiles.length; i++) {
    tile = tiles[i].data;
    let rgb = { r: 0, g: 0, b: 0 };
    let pixelsCount = 0;
    for (let k = 0; k < tile.length; k += 4) {
      ++pixelsCount;
      rgb.r += tile[k];
      rgb.g += tile[k + 1];
      rgb.b += tile[k + 2];
    }

    rgb.r = ~~(rgb.r / pixelsCount);
    rgb.g = ~~(rgb.g / pixelsCount);
    rgb.b = ~~(rgb.b / pixelsCount);
    tilesRGB.push(rgb);
  }
  return tilesRGB;
}

function getAverageRGB(imgEl: HTMLImageElement) {
  var blockSize = 5, // only visit every 5 pixels
    defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = document.createElement("canvas"),
    context = canvas.getContext("2d"),
    data,
    width,
    height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */ alert("x");
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values

  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);
  console.log("Dominant Color", rgb, count);
  return rgb;
}
function getImageTiles(image: HTMLImageElement) {
  let imgW: any,
    imgH,
    tileCountX: any,
    tileCountY: any,
    imgData: any,
    tileDim = 550,
    w: any,
    h: any;

  let canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  let context = canvas.getContext("2d");
  // if (typeof context?.filter !== "undefined") {
  //   //context.filter = "invert(1)";
  //   console.log(true, "inverted");
  // }
  function init() {
    imgW = image.width;
    imgH = image.height;
    //check how many full tiles we can fit
    //right and bottom sides of the image will get cropped
    tileCountX = ~~(imgW / tileDim);
    tileCountY = ~~(imgH / tileDim);

    context!.drawImage(image, 0, 0, imgW, imgH);
    imgData = context!.getImageData(0, 0, imgW, imgH).data;
    context!.clearRect(0, 0, w, h);
  }

  function indexX(x: any) {
    var i = x * 4;
    if (i > imgData.length) console.warn("X out of bounds");
    return i;
  }

  function indexY(y: any) {
    var i = imgW * 4 * y;
    if (i > imgData.length) console.warn("Y out of bounds");
    return i;
  }

  function getIndex(x: any, y: any) {
    var i = indexX(x) + indexY(y);
    if (i > imgData.length) console.warn("XY out of bounds");
    return i;
  }

  function getTile(x: any, y: any) {
    var tile = [];
    //loop over rows
    for (var i = 0; i < tileDim; i++) {
      //slice original image from x to x + tileDim, concat
      tile.push(
        ...imgData.slice(getIndex(x, y + i), getIndex(x + tileDim, y + i)),
      );
    }
    //convert back to typed array and to imgdata object
    tile = new ImageData(new Uint8ClampedArray(tile), tileDim, tileDim) as any;
    //save original position
    tile.x = x;
    tile.y = y;
    return tile;
  }

  function getTiles() {
    var tiles = [];
    for (var yi = 0; yi < tileCountY; yi++) {
      for (var xi = 0; xi < tileCountX; xi++) {
        tiles.push(getTile(xi * tileDim, yi * tileDim));
      }
    }
    return tiles;
  }
  var offset = 1.1;
  function drawTiles(tiles: any) {
    tiles.forEach((d: any, i: any) =>
      context!.putImageData(d, d.x * offset, d.y * offset),
    );
  }
  init();
  return getTiles();
}
export { getImageTiles };
// const filterTest = () => {
//   sendCanvasDataToRenderer();
//   //console.log(Mou.version);
//   // (Mou.prototype as any).fillColor(105, 200, 205);
//   (Mou.prototype as any).channels({
//     blue: 8,
//     red: 3,
//   });
//   (Mou.prototype as any).gamma(1.6);
//   // (Mou.prototype as any).sepia(20);
//   // (Mou.prototype as any).contrast(15);
//   (Mou.prototype as any).vibrance(75);
//   (Mou.prototype as any).saturation(-35);
//   // (Mou.prototype as any).brightness(5);
//   //(Mou.prototype as any).exposure(8);
//   (Mou.prototype as any).clip(8);
//   // (Mou.prototype as any).curves(
//   //   "rgb",
//   //   [0, 0],
//   //   [120, 100],
//   //   [128, 140],
//   //   [255, 255],
//   // );

//   //(Mou.prototype as any).colorize("#c42007", 30);
//   return Mou.renderer.processNext();
// };
