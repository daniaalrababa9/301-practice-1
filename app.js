'use strict';
$.get('./object.json')
    .then(data => {
        data.forEach(val => {
            console.log(val.name);
            $('ul').append(`<li> ${val.name }</li>`);
        });
    });