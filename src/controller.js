function Controller(model, view) {
  this.model = model;
  this.view = view;
}

Controller.prototype.initialise = async function() {
  await this.model.loadNews(() => {
    this.view.renderNews(this.model.data, () => {
      this.view.setClickFunctions()
    });
  });
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Controller
}