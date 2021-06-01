let imgH,
  imgW: any,
  tileCountX: any,
  tileCountY: any,
  image: HTMLCanvasElement,
  imgData: any,
  canvas: HTMLCanvasElement,
  context: any,
  w: any,
  h: any,
  tileDim = 200;

const init = () => {
  image = document.getElementById("canvas") as HTMLCanvasElement;
  canvas = document.createElement("canvas");
  context = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;
  imgW = image.width;
  imgH = image.height;
  tileDim = Math.ceil((image.width + image.height) / 2 / 5);

  //check how many full tiles we can fit
  //right and bottom sides of the image will get cropped
  tileCountX = ~~(imgW / tileDim);
  tileCountY = ~~(imgH / tileDim);

  context.drawImage(image, 0, 0, imgW, imgH);
  imgData = context.getImageData(0, 0, imgW, imgH).data;
  context.clearRect(0, 0, w, h);
};
export const getTiles = () => {
  init();
  let tiles = [];
  for (let yi = 0; yi < tileCountY; yi++) {
    for (let xi = 0; xi < tileCountX; xi++) {
      tiles.push(getTile(xi * tileDim, yi * tileDim));
    }
  }

  return tiles;
};

const indexY = (y: any) => {
  let i = imgW * 4 * y;
  if (i > imgData.length) console.warn("Y out of bounds");
  return i;
};
const indexX = (x: any) => {
  let i = x * 4;
  if (i > imgData.length) console.warn("X out of bounds");
  return i;
};
const getIndex = (x: any, y: any) => {
  let i = indexX(x) + indexY(y);
  if (i > imgData.length) console.warn("XY out of bounds");
  return i;
};

const getTile = (x: any, y: any) => {
  let tile = [];
  //loop over rows
  for (let i = 0; i < tileDim; i++) {
    //slice original image from x to x + tileDim, concat
    tile.push(
      ...imgData.slice(getIndex(x, y + i), getIndex(x + tileDim, y + i)),
    );
  }
  //convert back to typed array and to imgdata object
  tile = new ImageData(new Uint8ClampedArray(tile), tileDim, tileDim) as any;

  //save original position
  (tile as any).x = x;
  (tile as any).y = y;
  return tile;
};

////////////////////////////////////////////////
export const getTilesAverageRGB = () => {
  const tiles = getTiles();
  let tile;

  let tilesRGB = [];
  let donminantColor = { r: 0, g: 0, b: 0 };
  let allPixelsCount = 0;
  for (let i = 0; i < tiles.length; i++) {
    tile = tiles[i].data;
    let rgb = { r: 0, g: 0, b: 0 };
    let pixelsCount = 0;
    for (let k = 0; k < tile.length; k += 4) {
      ++pixelsCount;
      ++allPixelsCount;
      rgb.r += tile[k];
      rgb.g += tile[k + 1];
      rgb.b += tile[k + 2];

      donminantColor.r += tile[k];
      donminantColor.g += tile[k + 1];
      donminantColor.b += tile[k + 2];
    }

    rgb.r = ~~(rgb.r / pixelsCount);
    rgb.g = ~~(rgb.g / pixelsCount);
    rgb.b = ~~(rgb.b / pixelsCount);

    tilesRGB.push(rgb);
  }
  donminantColor.r = ~~(donminantColor.r / allPixelsCount);
  donminantColor.g = ~~(donminantColor.g / allPixelsCount);
  donminantColor.b = ~~(donminantColor.b / allPixelsCount);

  return { tilesRGB, donminantColor };
};
