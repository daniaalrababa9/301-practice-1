'use strict';

function People(data) {
    this.name = data.name,
        this.age = data.age
}
People.prototype.render = function() {
    let templateMarkup = $('#people-template').html();
    let template = Handlebars.compile(templateMarkup);
    let firstPerson = template(this);
    $('.section').append(firstPerson);
}
$.get('./object.json')
    .then(data => {
        data.forEach(val => {
            let firstPerson = new People(val);
            firstPerson.render();
        });
    });