import Renderer from "./core/renderer";
import Calculate from "./core/calculate";
import Convert from "./core/convert";
/// Main idea of this code came from CamanJs ///
class Mou {
  static Filter: typeof import("./core/filter").default;

  static renderer = new Renderer();
  static Calculate = new Calculate();
  static Convert = new Convert();
  process(name, processFn) {
    Mou.renderer.add({
      type: Mou.Filter.Type.Single,
      name,
      processFn,
    });

    return this;
  }
}

declare global {
  interface Window {
    Mou: any;
  }
}
export default Mou;
