import Library from '../src/library';

console.log(1);

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = ['Hello', 'webpack!!!1'].join(' ');

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./library', function() {
    console.log('Accepting the updated library module!');
    Library.log();
  })
}
