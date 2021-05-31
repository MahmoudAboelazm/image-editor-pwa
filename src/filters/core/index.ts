// The idea of the code came from CamanJs with some modifications.
// You can check for the original code @ https://github.com/meltingice/CamanJS

import Renderer from "./renderer";
import Calculate from "./calculate";
import Convert from "./convert";

class Caman {
  static Filter: typeof import("./filter").default;

  static renderer = new Renderer();
  static Calculate = new Calculate();
  static Convert = new Convert();
  process(name, processFn) {
    Caman.renderer.add({
      type: Caman.Filter.Type.Single,
      name,
      processFn,
    });

    return this;
  }
}

declare global {
  interface Window {
    Caman: any;
  }
}
export default Caman;
