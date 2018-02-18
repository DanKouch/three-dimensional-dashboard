function addRobot(scene){
	const robotMaterial = new THREE.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true, wireframe: false})
	const robot = new THREE.Mesh(assets.robotShape, robotMaterial);
	robot.rotation.z = Math.PI * 0.5;
	scene.add(robot);
}