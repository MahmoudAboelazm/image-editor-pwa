export default class Convert {
  // Converts the hex representation of a color to RGB values.
  // Hex value can optionally start with the hash (#).
  //
  // @param  [String] hex  The colors hex value
  // @return [Array]       The RGB representation
  hexToRGB(hex) {
    if (hex.charAt(0) === "#") {
      hex = hex.substr(1);
    }
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    return { r, g, b };
  }

  // Converts an RGB color value to HSV. Conversion formula
  // adapted from {http://en.wikipedia.org/wiki/HSV_color_space}.
  // Assumes r, g, and b are contained in the set [0, 255] and
  // returns h, s, and v in the set [0, 1].
  //
  // @param   [Number]  r       The red color value
  // @param   [Number]  g       The green color value
  // @param   [Number]  b       The blue color value
  // @return  [Array]           The HSV representation
  rgbToHSV(r, g, b) {
    let h;
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const v = max;
    const d = max - min;

    const s = max === 0 ? 0 : d / max;

    if (max === min) {
      h = 0;
    } else {
      h = (() => {
        switch (max) {
          case r:
            return (g - b) / d + (g < b ? 6 : 0);
          case g:
            return (b - r) / d + 2;
          case b:
            return (r - g) / d + 4;
        }
      })();

      h /= 6;
    }

    return { h, s, v };
  }

  // Converts an HSV color value to RGB. Conversion formula
  // adapted from http://en.wikipedia.org/wiki/HSV_color_space.
  // Assumes h, s, and v are contained in the set [0, 1] and
  // returns r, g, and b in the set [0, 255].
  //
  // @param   [Number]  h       The hue
  // @param   [Number]  s       The saturation
  // @param   [Number]  v       The value
  // @return  [Array]           The RGB representation
  hsvToRGB(h, s, v) {
    let b, g, r;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
    }

    return {
      r: Math.floor(r * 255),
      g: Math.floor(g * 255),
      b: Math.floor(b * 255),
    };
  }
}
