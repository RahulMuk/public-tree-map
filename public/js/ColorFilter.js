var app = this.app || {};

(function(module) {

  function ColorFilter(map) {
    this.map = map;

    var filter = document.getElementById('color-filter');

    filter.addEventListener('change', (function(e) {
      this.map.setColorProperty(e.target.value);
    }).bind(this));
  }

  // Exports
  module.ColorFilter = ColorFilter;

})(app);
