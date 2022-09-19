class Outstide {
    ammo = null
    handlerAmmo = null
    scene = null
    camera = null
    xPos = null
    yPos = null
    zPos = null
    xScale = null
    yScale = null
    zScale = null

    mesh = null

    wall = null
    rock = null
    sword = null
    flagSetOnlyOnce = true
    wallReady = false
    rockReady = false
    swordReady = false

    tutorialRoom = null
    arrayWallPositionX = [270, 270, 270, 0, 165, -165, -270, -270, -270, 0, 165, -165]
    arrayWallPositionZ = [0, -165, 165, 270, 270, 270, 0, 165, -165, -270, -270, -270]
    arrayWallRotation = [0, 0, 0, -1.58, -1.58, -1.58, -3.15, -3.15, -3.15, -4.72, -4.72, -4.72]

    occlusion = null
    base = null
    height = null
    normal = null
    roughness = null

    constructor(ammo, handlerAmmo, scene, camera, xPos, yPos, zPos, xScale, yScale, zScale, wall, rock, sword, tutorialRoom) {
        this.ammo = ammo
        this.handlerAmmo = handlerAmmo
        this.scene = scene
        this.camera = camera
        this.xPos = xPos
        this.yPos = yPos
        this.zPos = zPos
        this.xScale = xScale
        this.yScale = yScale
        this.zScale = zScale
        this.tutorialRoom = tutorialRoom

        this.occlusion = new THREE.TextureLoader().load('textures/forest/occlusion.jpg');
        this.applyParams(this.occlusion)
        this.base = new THREE.TextureLoader().load('textures/forest/base.jpg')
        this.applyParams(this.base)
        this.height = new THREE.TextureLoader().load('textures/forest/height.png')
        this.applyParams(this.height)
        this.normal = new THREE.TextureLoader().load('textures/forest/normal.jpg')
        this.applyParams(this.normal)
        this.roughness = new THREE.TextureLoader().load('textures/forest/roughness.jpg')
        this.applyParams(this.roughness)

        Promise.resolve(wall).then((data) => {
            this.wall = data;
            this.wall.scale.set(90, 90, 90);
            this.wall.position.x = 0;
            this.wall.position.y = 50 + this.yPos;
            this.wall.position.z = 0;

            this.wallReady = true
        })
        this.wall = wall

        Promise.resolve(rock).then((data) => {
            this.rock = data;
            this.rock.scale.set(1, 1, 1);
            this.rock.position.x = 0;
            this.rock.position.y = this.yPos + 0.6;
            this.rock.position.z = 0;

            this.rockReady = true
        })
        this.rock = rock

        Promise.resolve(sword).then((data) => {
            this.sword = data;
            this.sword.scale.set(2, 2, 2);
            this.sword.position.x = 0;
            this.sword.position.y = 2.5 + this.yPos;
            this.sword.position.z = 0;
            this.sword.rotation.x = 3
            this.swordReady = true
        })
        this.sword = sword


    }
    geometry = new THREE.BoxGeometry(72, 120, 500);
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    cube = new THREE.Mesh(this.geometry, this.material);
    update() {
        if (this.wallReady && this.rockReady && this.swordReady && this.tutorialRoom.roomRemoved()) {
            if (this.flagSetOnlyOnce) {
                this.flagSetOnlyOnce = false

                let lightAmbient = new Light("ambient", 0xffffff, 1).getLight();
                lightAmbient.position.set(0, 100, 0);
                this.scene.add(lightAmbient);



                this.mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhysicalMaterial({ aoMap: this.occlusion, map: this.base, normalMap: this.normal, roughnessMap: this.roughness, displacementMap: this.height, displacementScale: 1 }));

                this.mesh.position.set(this.xPos, this.yPos, this.zPos);
                this.mesh.scale.set(this.xScale, this.yScale, this.zScale);
                this.mesh.castShadow = true;
                this.mesh.receiveShadow = true;

                this.scene.add(this.mesh)

                let transform = new this.ammo.btTransform();
                transform.setIdentity();
                transform.setOrigin(new this.ammo.btVector3(this.xPos, this.yPos, this.zPos));
                let motionState = new this.ammo.btDefaultMotionState(transform);

                let shape = new this.ammo.btBoxShape(new this.ammo.btVector3(this.xScale * 0.5, this.yScale * 0.5, this.zScale * 0.5));
                shape.setMargin(0.05);

                let localInertia = new this.ammo.btVector3(0, 0, 0);
                shape.calculateLocalInertia(0, localInertia);

                let rigidBodyInfo = new this.ammo.btRigidBodyConstructionInfo(0, motionState, shape, localInertia);
                let rigidBody = new this.ammo.btRigidBody(rigidBodyInfo);


                this.handlerAmmo.addRigidBodyToWorld(rigidBody);

                for (let i = 0; i < 12; i++) {
                    var cloneWall = this.wall.clone()

                    cloneWall.rotation.y = this.arrayWallRotation[i]
                    cloneWall.position.x = this.arrayWallPositionX[i]
                    cloneWall.position.z = this.arrayWallPositionZ[i]
                    if (i == 0 || i == 3 || i == 6 || i == 9) {

                        transform = new this.ammo.btTransform()
                        transform.setIdentity()
                        transform.setOrigin(new this.ammo.btVector3(cloneWall.position.x, cloneWall.position.y, cloneWall.position.z))

                        motionState = new this.ammo.btDefaultMotionState(transform);

                        if (i == 0 || i == 6) {

                            shape = new this.ammo.btBoxShape(new this.ammo.btVector3(36, 60, 250))
                        }
                        else {

                            shape = new this.ammo.btBoxShape(new this.ammo.btVector3(250, 60, 36))
                        }


                        shape.setMargin(0.5)

                        localInertia = new this.ammo.btVector3(0, 0, 0);
                        shape.calculateLocalInertia(0, localInertia);

                        rigidBodyInfo = new this.ammo.btRigidBodyConstructionInfo(0, motionState, shape, localInertia);
                        rigidBody = new this.ammo.btRigidBody(rigidBodyInfo);
                        cloneWall.userData.physicsBody = rigidBody
                        this.handlerAmmo.addRigidBodyToWorld(rigidBody);
                    }
                    this.scene.add(cloneWall)
                }

                for (let i = 0; i < 100; i++) {
                    var cloneRock = this.rock.clone()
                    cloneRock.position.x = Math.floor(Math.random() * (((this.xScale / 2) - 5) - ((-this.xScale / 2) + 5) + 1)) + ((-this.xScale / 2) + 5);
                    cloneRock.position.z = Math.floor(Math.random() * (((this.zScale / 2) - 5) - ((-this.zScale / 2) + 5) + 1)) + ((-this.zScale / 2) + 5);
                    this.scene.add(cloneRock)
                }
                for (let i = 0; i < 100; i++) {
                    var cloneSword = this.sword.clone()
                    cloneSword.position.x = Math.floor(Math.random() * (((this.xScale / 2) - 5) - ((-this.xScale / 2) + 5) + 1)) + ((-this.xScale / 2) + 5);
                    cloneSword.position.z = Math.floor(Math.random() * (((this.zScale / 2) - 5) - ((-this.zScale / 2) + 5) + 1)) + ((-this.zScale / 2) + 5);
                    this.scene.add(cloneSword)
                }
            }
        }
    }

    getScale() {
        return new THREE.Vector3(this.xScale, this.yScale, this.zScale)
    }

    applyParams(texture){
        texture.repeat.set(14, 14);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter
    }
}