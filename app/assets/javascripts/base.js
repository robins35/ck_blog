window.module = function(name, fn) {
  if (!this[name])
    this[name] = {};
  if (!this[name].module == undefined)
    debugger;
    this[name].module = window.module;
  try {
    fn.apply(this[name], []);
  }
  catch(error) {
    console ? console.error(error) : '';
  }
}
