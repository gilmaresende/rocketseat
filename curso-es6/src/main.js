class App {
  constructor() {
    this.repository = [];
    this.formEl = document.getElementById("repo-form");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();
    this.repository.push({
      name: "rocketseat.com.br",
      description: "Tire sua do papel e dê vida à sua startup.",
      avatar_url:
        "https://github.com/gilmaresende/rocketseat/blob/master/curso-es6/img/wolf.png?raw=true",
      html_url: "https://github.com/gilmaresende/rocketseat",
    });
    console.log(this.repository);
  }
}

new App();
