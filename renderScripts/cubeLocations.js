const cubeLocations = [];

function addCubeLocations(scene){
	const cubeLocationMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaa00, emissive: 0x888822, side: THREE.DoubleSide, flatShading: true, wireframe: false})
	for(var i = 0; i < config.CUBE_LOCATION_POOL_SIZE; i++){
		var group = new THREE.Group();
		var base = new THREE.Mesh(assets.cubeLocationBaseShape, cubeLocationMaterial);
		var exclaimationMark = new THREE.Mesh(assets.exclaimationMarkShape, cubeLocationMaterial);
		exclaimationMark.position.z = 0.25;
		exclaimationMark.scale.set(2, 2, 2);
		group.add(base);
		group.add(exclaimationMark);
		scene.add(group)
		cubeLocations[i] = group;
	}
}

function animateCubeLocations(){
	for(var i = 0; i < cubeLocations.length; i++){
		if(data.cubeLocationPositions.length > cubeLocations.length){
			alert("Cube location pool size not large enough");
		}
		if(i >= data.cubeLocationPositions.length){
			cubeLocations[i].visible = false;
			continue;
		}
		cubeLocations[i].visible = true;
		cubeLocations[i].position.x = data.cubeLocationPositions[i].x;
		cubeLocations[i].position.y = data.cubeLocationPositions[i].y;
		cubeLocations[i].children[1].rotation.z += 0.02;
		cubeLocations[i].children[1].position.z = 0.15 + Math.sin(cubeLocations[i].children[1].rotation.z)/5
	}
}