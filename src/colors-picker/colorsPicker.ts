let imgH,
  imgW: number,
  tileCountX: number,
  tileCountY: number,
  image: HTMLCanvasElement,
  imgData: any,
  canvas: HTMLCanvasElement,
  context: any,
  tileDim = 3; /* For more accurracy in detecting colors you can less down the tileDim
                  or level it up for less accurracy and fast processing. */

const init = () => {
  image = document.getElementById("canvas") as HTMLCanvasElement;
  canvas = document.createElement("canvas");
  context = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;
  imgW = image.width;
  imgH = image.height;

  //check how many full tiles we can fit
  //right and bottom sides of the image will get cropped
  tileCountX = ~~(imgW / tileDim);
  tileCountY = ~~(imgH / tileDim);
  context.drawImage(image, 0, 0, imgW, imgH);
  imgData = context.getImageData(0, 0, imgW, imgH).data;
  context.clearRect(0, 0, 0, 0);
  return;
};
const makeTiles = () => {
  let tiles = [];
  for (let yi = 0; yi < tileCountY; yi++) {
    for (let xi = 0; xi < tileCountX; xi++) {
      tiles.push(getTile(xi * tileDim, yi * tileDim));
    }
  }
  return tiles;
};

const indexY = (y: number) => {
  let i = imgW * 4 * y;
  if (i > imgData.length) console.warn("Y out of bounds");
  return i;
};
const indexX = (x: number) => {
  let i = x * 4;
  if (i > imgData.length) console.warn("X out of bounds");
  return i;
};
const getIndex = (x: number, y: number) => {
  let i = indexX(x) + indexY(y);
  if (i > imgData.length) console.warn("XY out of bounds");
  return i;
};

const getTile = (x: number, y: number) => {
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
const getTilesAverageRGB = (tiles) => {
  let tile;
  let i;
  let tilesRGB = [];
  let donminantColor = { r: 0, g: 0, b: 0 };
  let allPixelsCount = 0;

  for (i = 0; i < tiles.length; i++) {
    tile = tiles[i].data;
    delete tiles[i];
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
    // Check if the color already exiset in tileRGB then we don't put it
    if (tilesRGB.length !== 0) {
      const closest = tilesRGB.reduce((a, b) => {
        return Math.abs(b.r - rgb.r) < Math.abs(a.r - rgb.r) &&
          Math.abs(b.g - rgb.g) < Math.abs(a.g - rgb.g) &&
          Math.abs(b.b - rgb.b) < Math.abs(a.b - rgb.b)
          ? b
          : a;
      });
      // To get more colors you can less down the number 15
      if (
        Math.abs(closest.r - rgb.r) > 15 &&
        Math.abs(closest.g - rgb.g) > 15 &&
        Math.abs(closest.b - rgb.b) > 15
      ) {
        tilesRGB.push(rgb);
      }
    } else {
      tilesRGB.push(rgb);
    }
  }
  donminantColor.r = ~~(donminantColor.r / allPixelsCount);
  donminantColor.g = ~~(donminantColor.g / allPixelsCount);
  donminantColor.b = ~~(donminantColor.b / allPixelsCount);

  return {
    donminantColor,
    tilesRGB,
  };
};

const makeInit = () => new Promise((resolve) => resolve(init()));
const getTiles = () => new Promise((resolve) => resolve(makeTiles()));
const makeRGB = (tiles) =>
  new Promise((resolve) => resolve(getTilesAverageRGB(tiles)));

export const getRGB = async () => {
  await makeInit();
  let tiles = await getTiles();
  freeMemory();
  return await makeRGB(tiles);
};

const freeMemory = () => {
  return (imgH =
    imgW =
    tileCountX =
    tileCountY =
    image =
    imgData =
    canvas =
    context =
      null);
};
