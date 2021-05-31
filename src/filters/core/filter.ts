class Filter {
  static Type: {
    Single: number;
  };
  static initClass() {
    // All of the different render operatives
    this.Type = {
      Single: 1,
    };
  }

  // Registers a filter function.
  // @param [String] name The name of the filter.
  // @param [Function] filterFunc The filter function.
  static register(name, filterFunc) {
    return (window.Caman.prototype[name] = filterFunc);
  }
}

Filter.initClass();

export default Filter;
