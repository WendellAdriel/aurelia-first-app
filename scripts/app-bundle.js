define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/attributes/primary-text',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var PrimaryTextCustomAttribute = exports.PrimaryTextCustomAttribute = (_temp = _class = function PrimaryTextCustomAttribute(element) {
    _classCallCheck(this, PrimaryTextCustomAttribute);

    this.element = element;
    this.element.style.color = 'red';
    this.element.style.fontFamily = 'Verdana, sans-serif';
    this.element.style.fontSize = '26px';
    this.element.style.fontWeight = 'bolder';
  }, _class.inject = [Element], _temp);
});
define('resources/value-converters/capitalize-words',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CapitalizeWordsValueConverter = exports.CapitalizeWordsValueConverter = function () {
    function CapitalizeWordsValueConverter() {
      _classCallCheck(this, CapitalizeWordsValueConverter);
    }

    CapitalizeWordsValueConverter.prototype.toView = function toView(value) {
      return value.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    };

    return CapitalizeWordsValueConverter;
  }();
});
define('resources/elements/greeting-message/greeting-message',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var GreetingMessageCustomElement = exports.GreetingMessageCustomElement = function GreetingMessageCustomElement() {
    _classCallCheck(this, GreetingMessageCustomElement);

    this.greeting = 'hello aurelia framework!';
  };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./resources/elements/greeting-message/greeting-message\"></require>\n  <greeting-message></greeting-message>\n</template>\n"; });
define('text!resources/elements/greeting-message/greeting-message.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../../attributes/primary-text\"></require>\n  <require from=\"../../value-converters/capitalize-words\"></require>\n  <h1 primary-text>${greeting | capitalizeWords}</h1>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map