(function (moduleName, env, definition) {
  if (typeof module !== "undefined" && module.exports) {
    env[moduleName] = definition();
  } else {
    env[moduleName] = definition();
  }
})("joModule", this, function () {
  let api = {
    mult: (x, y) => {
      return x * y;
    },
  };
  return api;
});
