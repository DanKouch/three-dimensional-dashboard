const otherRobots = [];

function addOtherRobots(scene){
	for(var i = 0; i < config.OTHER_ROBOT_POOL_SIZE; i++){
		var group = new THREE.Group();
		var base = new THREE.Mesh(assets.otherRobotBaseShape, otherRobotMaterial);
		var questionMark = new THREE.Mesh(assets.questionMarkShape, otherRobotMaterial);
		questionMark.position.z = 2;
		group.add(base);
		group.add(questionMark);
		group.position.z = -0.1;
		scene.add(group)
		otherRobots[i] = group;
	}
}

function animateOtherRobots(){
	// DEBUG - RANDOM ROBOT MOVEMENT
	for(var i = 0; i < data.otherRobotPositions.length; i++){
		data.otherRobotPositions[i].x += (Math.random()-0.5)/4;
		data.otherRobotPositions[i].y += (Math.random()-0.5)/4;
	}

	// Animate other robots
	for(var i = 0; i < otherRobots.length; i++){
		if(data.otherRobotPositions.length > otherRobots.length){
			alert("Robot pool size not large enough");
		}
		if(i >= data.otherRobotPositions.length){
			otherRobots[i].visible = false;
			continue;
		}
		otherRobots[i].visible = true;
		otherRobots[i].position.x = data.otherRobotPositions[i].x;
		otherRobots[i].position.y = data.otherRobotPositions[i].y;
		otherRobots[i].children[1].rotation.z += 0.02;
		otherRobots[i].children[1].position.z = 2 + Math.sin(otherRobots[i].children[1].rotation.z)/5
	}
}