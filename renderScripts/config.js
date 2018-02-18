const config = {
	OTHER_ROBOT_POOL_SIZE: 10,
	CUBE_LOCATION_POOL_SIZE: 10
}

// Materials
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaa00, emissive: 0x888822, side: THREE.DoubleSide, flatShading: true, wireframe: false})
const otherRobotMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, emissive: 0xdd4444, side: THREE.DoubleSide, flatShading: true, wireframe: false})
const robotMaterial = new THREE.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true, wireframe: false})
