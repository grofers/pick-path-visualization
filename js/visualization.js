// Scene
var renderWidth = 900;
var renderHeight = 700;
var scene = new THREE.Scene();

// Camera

var aspect = renderWidth / renderHeight;
var frustumSize = 1000;
camera = new THREE.OrthographicCamera(
  frustumSize * aspect / -2,
  frustumSize * aspect / 2,
  frustumSize / 2,
  frustumSize / -2,
  1,
  2000
);
camera.position.y = 400;
scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);
// Grid
var size = 1000;
var divisions = 100;
var gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

// lights
var ambientLight = new THREE.AmbientLight(Math.random() * 0x10);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
directionalLight.position.x = Math.random() - 0.5;
directionalLight.position.y = Math.random() - 0.5;
directionalLight.position.z = Math.random() - 0.5;
directionalLight.position.normalize();
scene.add(directionalLight);
var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
directionalLight.position.x = Math.random() - 0.5;
directionalLight.position.y = Math.random() - 0.5;
directionalLight.position.z = Math.random() - 0.5;
directionalLight.position.normalize();
scene.add(directionalLight);

var cubeSize = size / divisions;
var coordinateSize = cubeSize / 2;
var geometry = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
var material = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  overdraw: 0.5
});

for (var i = 0; i < 10; i++) {
  var posX = Math.floor(Math.random() * divisions);
  var posY = Math.floor(Math.random() * divisions);
  var cube = new THREE.Mesh(geometry, material);
  cube.scale.y = Math.floor(Math.random() + 1);
  cube.position.x = -size / 2 + (posX * 2 + 1) * coordinateSize;
  cube.position.y = cube.scale.y * 50 / 2;
  cube.position.z = -size / 2 + (posY * 2 + 1) * coordinateSize;
  scene.add(cube);
}

var renderer = new THREE.WebGLRenderer();
renderer.setSize(renderWidth, renderHeight);
document.getElementById("scene").appendChild(renderer.domElement);

camera.position.z = 5;
var animate = function() {
  requestAnimationFrame(animate);
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
};

animate();
