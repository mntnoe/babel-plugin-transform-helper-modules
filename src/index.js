
export default function ({ types: t }) {
  let HELPER_BLACKLIST = ["interopRequireWildcard", "interopRequireDefault"];

  return {
    pre(file) {
      file.set("helperGenerator", function (name) {
        if (HELPER_BLACKLIST.indexOf(name) < 0) {
          return file.addImport(`babel-helper-modules/lib/${name}`, "default", name);
        }
      });
    }
  };
}

