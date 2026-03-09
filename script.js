const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({
color:0x00ffff,
wireframe:true
});

const cube = new THREE.Mesh(geometry,material);

scene.add(cube);

camera.position.z = 5;

function animate(){

requestAnimationFrame(animate);

cube.rotation.y += 0.01;

renderer.render(scene,camera);

}

animate();

function showSkills(){

document.getElementById("info").innerHTML =
"Java: 80% <br> Python: 75% <br> CSS: 85%";

}

function showProjects(){

document.getElementById("info").innerHTML =
"Project 1: Portfolio Website <br> Project 2: AI Chatbot <br> Project 3: Weather App";

}

function showContact(){

document.getElementById("info").innerHTML =
"Email: sudipthigarlapalli@email.com <br> GitHub: github.com/sudipthi <br> LinkedIn: linkedin.com/in/sudipthi";

}
