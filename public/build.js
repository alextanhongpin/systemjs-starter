System.register('scripts/atom/_colors.js', [], function (_export) {
	'use strict';

	var colors;
	return {
		setters: [],
		execute: function () {
			colors = {
				_red: '#ff4444'
			};

			_export('default', colors);
		}
	};
});
System.registerDynamic("scripts/atom/_colors.css", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.register('scripts/app.js', ['scripts/atom/_colors.js', 'scripts/atom/_colors.css'], function (_export) {
	'use strict';

	var Colors;

	function init() {
		console.log(Colors);
		document.body.innerHTML = '<div class="red">Hello world</div>';
	}

	return {
		setters: [function (_scriptsAtom_colorsJs) {
			Colors = _scriptsAtom_colorsJs['default'];
		}, function (_scriptsAtom_colorsCss) {}],
		execute: function () {
			init();
		}
	};
});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[a](d.createTextNode(c));})
(".red{color:#f44}\n/*# sourceMappingURL=__.css.map */");
//# sourceMappingURL=build.js.map