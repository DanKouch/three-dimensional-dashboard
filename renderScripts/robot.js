const robotAndCube = new THREE.Group();

function addRobot(scene){
	const robot = new THREE.Mesh(assets.robotShape, robotMaterial);
	robot.rotation.z = Math.PI * 0.5;

	const cube = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), cubeMaterial);
	cube.position.y = 1;


	robotAndCube.add(robot);
	robotAndCube.add(cube);
	scene.add(robotAndCube);
}

function animateRobot(){
	robotAndCube.children[1].visible = data.holdingCube;
}