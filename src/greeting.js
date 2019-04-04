function Greeting() {
  var root = document.getElementById('root');
  var container = document.createElement('div');
  container.innerText = '你好!';
  root.append(container);
}

export default Greeting;
