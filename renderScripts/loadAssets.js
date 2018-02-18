const STLLoader = new THREE.STLLoader();
const TextureLoader = new THREE.TextureLoader();

var assets = {};

TextureLoader.load("/textures/floorTile.jpg/", (floorTexture) => {
	assets.floorTexture = floorTexture;
	STLLoader.load("/models/Robot.stl", (robotShape) => {
		assets.robotShape = robotShape;
		STLLoader.load("/models/QuestionMark.stl", (questionMarkShape) => {
			assets.questionMarkShape = questionMarkShape;
			STLLoader.load("/models/OtherRobotBase.stl", (otherRobotBaseShape) => {
				assets.otherRobotBaseShape = otherRobotBaseShape;
				STLLoader.load("/models/CubeLocationBase.stl", (cubeLocationBaseShape) => {
					assets.cubeLocationBaseShape = cubeLocationBaseShape;
					STLLoader.load("/models/ExclaimationMark.stl", (exclaimationMarkShape) => {
						assets.exclaimationMarkShape = exclaimationMarkShape;
						onReady();
					}, ()=>{}, console.log);
				}, ()=>{}, console.log);
			}, ()=>{}, console.log);
		}, ()=>{}, console.log);
	}, ()=>{}, console.log);
});