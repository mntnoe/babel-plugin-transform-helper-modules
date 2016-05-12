"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  var HELPER_BLACKLIST = ["interopRequireWildcard", "interopRequireDefault"];

  return {
    pre: function pre(file) {
      file.set("helperGenerator", function (name) {
        if (HELPER_BLACKLIST.indexOf(name) < 0) {
          return file.addImport("babel-helper-modules/lib/" + name, "default", name);
        }
      });

      this.setDynamic("regeneratorIdentifier", function () {
        return file.addImport("regenerator-runtime", "default", "regeneratorRuntime");
      });
    },


    visitor: {
      ReferencedIdentifier: function ReferencedIdentifier(path, state) {
        if (path.node.name === "regeneratorRuntime" && state.opts.regenerator !== false) {
          path.replaceWith(state.get("regeneratorIdentifier"));
          return;
        }
      }
    }
  };
};
