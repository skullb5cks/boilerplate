import Library from '../src/library';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = ['Hello', 'webpack!!!1'].join(' ');

    return element;
}

var x = [];

function grow() {
    console.log(grow);
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement('div'));
  }
  x.push(new Array(1000000).join('x'));
}

document.getElementById('grow').addEventListener('click', grow);



// document.body.appendChild(component());

if (module.hot) module.hot.accept()
