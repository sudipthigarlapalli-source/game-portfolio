const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

const light = new THREE.HemisphereLight(0xffffff,0x444444)
scene.add(light)

const loader = new THREE.GLTFLoader()

let character

loader.load("character.glb",function(gltf){

character = gltf.scene

scene.add(character)

})

camera.position.z = 3

function animate(){

requestAnimationFrame(animate)

if(character){

character.rotation.y += 0.01

}

renderer.render(scene,camera)

}

animate()

function showSkills(){

document.getElementById("info").innerHTML =
"<h2>Skills</h2> Java ████████ 80% <br> Python ███████ 70% <br> CSS █████████ 90%"

}

function showProjects(){

document.getElementById("info").innerHTML =
"<h2>Projects</h2> AI Chatbot <br> Portfolio Website <br> Weather App"

}

function showContact(){

document.getElementById("info").innerHTML =
"<h2>Contact</h2> Email: your@email.com <br> GitHub: github.com/yourname <br> LinkedIn: linkedin.com/in/yourname"

}
