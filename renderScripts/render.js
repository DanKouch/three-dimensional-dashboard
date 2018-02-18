var renderDiv = $("#renderDiv");

function onReady(){
	var scene = new THREE.Scene();
	scene.rotation.y = Math.PI * 2;
	scene.fog = new THREE.FogExp2( 0xEEEEEE, 0.022 );
	scene.background = new THREE.Color( 0xEEEEEE );

	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(renderDiv.width(), renderDiv.height());
	renderDiv.append(renderer.domElement);

	// Call other scripts
	addCubeLocations(scene);
	addOtherRobots(scene);
	addRobot(scene);

	// Ground
	assets.floorTexture.wrapS = assets.floorTexture.wrapT = THREE.RepeatWrapping;
	assets.floorTexture.offset.set( 0, 0 );
	assets.floorTexture.repeat.set(300, 300);

	const groundShape = new THREE.PlaneGeometry(400, 400)
	const groundMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, map: assets.floorTexture} );
	const ground = new THREE.Mesh(groundShape, groundMaterial);
	ground.position.z = -0.4;
	scene.add(ground)

	// Camera
	var camera = new THREE.PerspectiveCamera(75, renderDiv.width() / renderDiv.height(), 0.1, 1000);
	camera.position.z = 5.5;
	camera.position.y = -4.5;
	camera.rotation.x = 0.1*Math.PI;

	// Controls
	var controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.enablePan = false;
	controls.enableKeys = false;
	controls.enableDampering = true;
	controls.enableRotate = true;
	controls.minAzimuthAngle = 0;
	controls.maxAzimuthAngle = 0;
	controls.update();

	// Lighting
	var lights = [];
	lights[0] = new THREE.PointLight(0xffffff, 1, 0);
	lights[1] = new THREE.PointLight(0xffffff, 1, 0);
	lights[2] = new THREE.PointLight(0xffffff, 1, 0);

	lights[0].position.set(0, 200, 0);
	lights[1].position.set(100, 200, 100);
	lights[2].position.set(- 100, - 200, - 100);

	scene.add(lights[0]);
	scene.add(lights[1]);
	scene.add(lights[2]);

	// Animation
	function animate() {
		animateOtherRobots();
		animateCubeLocations();

		controls.update();
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}
	animate();
}
