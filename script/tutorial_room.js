class TutorialRoom {
    scene = null;
    camera = null;
    model = null;
    object = null;
    xScale = null;
    yScale = null;
    zScale = null;
    xPos = null;
    yPos = null;
    zPos = null;
    ready = null;
    flagSetOnlyOnce = true;
    ammo = null;
    handlerAmmo = null;
    arrayComponents = [];
    arrayBoxComponents = [];
    rigidBodies = []
    lightsArray = []
    flagEndPhysics = false
    flagRoomRemoved = false
    lightHelper = null
    shadowHelper = null

    Altar_and_Book_2_standardSurface6_0 = null
    Altar_and_Book_2 = null
    Floor_Section_3_standardSurface2_0 = null
    Floor_Section_3_standardSurface2_0_002 = null
    Floor_Section_3_standardSurface2_0_008 = null
    Floor_Quarter_Section_5_standardSurface3_0 = null
    Floor_Quarter_Section_5 = null
    Floor_Section_3 = null

    Torch_5_standardSurface3_0 = null
    Torch_5_standardSurface3_0_001 = null
    Torch_5_standardSurface3_0_002 = null
    Torch_5_standardSurface5_0_005 = null
    Torch_5_standardSurface5_0_006 = null
    Torch_5_standardSurface5_0_009 = null
    Torch_5_standardSurface5_0_010 = null
    Torch_5 = null
    Pillar_6_standardSurface5_0_003 = null
    Pillar_6 = null

    Wall_10_standardSurface2_0_004 = null
    Wall_10_standardSurface2_0_009 = null
    Wall_10_standardSurface2_0_010 = null
    Wall_10_standardSurface2_0_011 = null
    Wall_10_standardSurface2_0_016 = null
    Wall_10_standardSurface2_0_020 = null
    Wall_10_standardSurface2_0_021 = null
    Wall_10 = null

    Door_6_standardSurface2_0_001 = null
    Door_6 = null
    Alcove_4_standardSurface3_0 = null
    Alcove_4_standardSurface3_0_003 = null
    Alcove_4 = null
    Portcullis_3_standardSurface5_0 = null
    Portcullis_3 = null
    Candle_56677_standardSurface3_0_001 = null
    Candle_56677_standardSurface3_0_002 = null
    Candle_56677_standardSurface3_0_003 = null
    Candle_56677_standardSurface3_0_004 = null
    Candle_56677_standardSurface3_0_005 = null
    Candle_56677_standardSurface3_0_006 = null
    Candle_56677_standardSurface3_0_007 = null
    Candle_56677_standardSurface3_0_008 = null
    Candle_56677_standardSurface3_0_009 = null
    Candle_56677_standardSurface3_0_010 = null
    Candle_56677_standardSurface3_0_011 = null
    Candle_56677 = null


    Hallway_Path_3_standardSurface2_0_001 = null
    Hallway_Path_3_standardSurface2_0_002 = null
    Hallway_Path_3_standardSurface2_0_003 = null
    Hallway_Path_3_standardSurface2_0_004 = null
    Hallway_Path_3_standardSurface2_0_005 = null
    Hallway_Path_3_standardSurface2_0_008 = null
    Hallway_Path_3_standardSurface2_0_012 = null
    Hallway_Path_3_standardSurface2_0_013 = null
    Hallway_Path_3_standardSurface2_0_014 = null
    Hallway_Path_3_standardSurface2_0_015 = null
    Hallway_Path_3 = null

    Door_6_001 = null

    constructor(ammo, handlerAmmo, scene, camera, model, xScale, yScale, zScale, xPos, yPos, zPos) {
        this.scene = scene
        this.camera = camera
        this.xScale = xScale
        this.yScale = yScale
        this.zScale = zScale
        this.xPos = xPos
        this.yPos = yPos
        this.zPos = zPos
        this.ammo = ammo
        this.handlerAmmo = handlerAmmo

        Promise.resolve(model).then((data) => {
            this.model = data;
            this.model.scale.set(this.xScale, this.yScale, this.zScale);
            this.model.position.z = this.zPos;
            this.model.position.y = this.yPos




            this.Altar_and_Book_2 = this.model.getObjectByName("Altar_and_Book_2")
            this.arrayComponents.push(
                this.Altar_and_Book_2
            )
            this.arrayBoxComponents.push(
                new this.ammo.btBoxShape(new this.ammo.btVector3(4, 8, 4))
            )


            this.Floor_Section_3_standardSurface2_0_008 = this.model.getObjectByName("Floor_Section_3_standardSurface2_0008")
            this.Floor_Quarter_Section_5_standardSurface3_0 = this.model.getObjectByName("Floor_Quarter_Section_5_standardSurface3_0")
            this.arrayComponents.push(
                this.Floor_Section_3_standardSurface2_0_008,
                this.Floor_Quarter_Section_5_standardSurface3_0
            )
            this.arrayBoxComponents.push(
                new this.ammo.btBoxShape(new this.ammo.btVector3(33, 0.1, 15)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(24.5, 0.3, 24.5))
            )



            this.Wall_10_standardSurface2_0_004 = this.model.getObjectByName("Wall_10_standardSurface2_0004")
            this.Wall_10_standardSurface2_0_009 = this.model.getObjectByName("Wall_10_standardSurface2_0009")
            this.Wall_10_standardSurface2_0_010 = this.model.getObjectByName("Wall_10_standardSurface2_0010")
            this.Wall_10_standardSurface2_0_011 = this.model.getObjectByName("Wall_10_standardSurface2_0011")
            this.Wall_10_standardSurface2_0_016 = this.model.getObjectByName("Wall_10_standardSurface2_0016")
            this.Wall_10_standardSurface2_0_020 = this.model.getObjectByName("Wall_10_standardSurface2_0020")
            this.Wall_10_standardSurface2_0_021 = this.model.getObjectByName("Wall_10_standardSurface2_0021")
            this.arrayComponents.push(
                this.Wall_10_standardSurface2_0_004,
                this.Wall_10_standardSurface2_0_009,
                this.Wall_10_standardSurface2_0_010,
                this.Wall_10_standardSurface2_0_011,
                this.Wall_10_standardSurface2_0_016,
                this.Wall_10_standardSurface2_0_020,
                this.Wall_10_standardSurface2_0_021
            )
            this.arrayBoxComponents.push(
                new this.ammo.btBoxShape(new this.ammo.btVector3(25, 8, 1)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(30, 10, 1)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1, 10, 11)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(25, 8, 1)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(30, 10, 1)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1, 10, 11)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1, 10, 25))
            )


            this.Alcove_4_standardSurface3_0 = this.model.getObjectByName("Alcove_4_standardSurface3_0")
            this.Alcove_4_standardSurface3_0_003 = this.model.getObjectByName("Alcove_4_standardSurface3_0003")
            this.Portcullis_3_standardSurface5_0 = this.model.getObjectByName("Portcullis_3_standardSurface5_0")
            this.Candle_56677_standardSurface3_0_011 = this.model.getObjectByName("Candle_56677_standardSurface3_0011")
            this.arrayComponents.push(
                this.Alcove_4_standardSurface3_0,
                this.Alcove_4_standardSurface3_0_003,
                this.Portcullis_3_standardSurface5_0,
                this.Candle_56677_standardSurface3_0_011
            )
            this.arrayBoxComponents.push(
                new this.ammo.btBoxShape(new this.ammo.btVector3(1, 4, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1, 4, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1, 11, 10)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(0.5, 1.5, 1.5))
            )

            this.Hallway_Path_3_standardSurface2_0_001 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0001")
            this.Hallway_Path_3_standardSurface2_0_002 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0002")
            this.Hallway_Path_3_standardSurface2_0_003 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0003")
            this.Hallway_Path_3_standardSurface2_0_004 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0004")
            this.Hallway_Path_3_standardSurface2_0_005 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0005")
            this.Hallway_Path_3_standardSurface2_0_008 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0008")
            this.Hallway_Path_3_standardSurface2_0_012 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0012")
            this.Hallway_Path_3_standardSurface2_0_013 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0013")
            this.Hallway_Path_3_standardSurface2_0_014 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0014")
            this.Hallway_Path_3_standardSurface2_0_015 = this.model.getObjectByName("Hallway_Path_3_standardSurface2_0015")
            this.arrayComponents.push(
                this.Hallway_Path_3_standardSurface2_0_001,
                this.Hallway_Path_3_standardSurface2_0_002,
                this.Hallway_Path_3_standardSurface2_0_003,
                this.Hallway_Path_3_standardSurface2_0_004,
                this.Hallway_Path_3_standardSurface2_0_005,
                this.Hallway_Path_3_standardSurface2_0_008,
                this.Hallway_Path_3_standardSurface2_0_012,
                this.Hallway_Path_3_standardSurface2_0_013,
                this.Hallway_Path_3_standardSurface2_0_014,
                this.Hallway_Path_3_standardSurface2_0_015
            )
            this.arrayBoxComponents.push(
                new this.ammo.btBoxShape(new this.ammo.btVector3(35, 0.5, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(22.8, 0.85, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(22.8, 0.85, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1.5, 1.8, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1.5, 1.8, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1.5, 1, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(35, 0.5, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1.5, 1.8, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1.5, 1.8, 6)),
                new this.ammo.btBoxShape(new this.ammo.btVector3(1.5, 1, 6))
            )

            this.ready = true

        })
        this.model = model
    }

    update() {
        if (this.ready) {
            if (this.flagSetOnlyOnce) {

                this.flagSetOnlyOnce = false
                this.model.traverse(function (object) {

                    if (object.isMesh && (
                        object.name == "Portcullis_3_standardSurface5_0" ||
                        object.name == "Altar_and_Book_2_standardSurface6_0" ||
                        object.name == "Candle_56677_standardSurface3_0011")) {
                        object.castShadow = true;
                    }
                    if (object.isMesh) {
                        object.receiveShadow = true;
                    }

                })

                var handVec = new THREE.Vector3()
                for (let i = 0; i < 24; i++) {
                    this.arrayComponents[i].getWorldPosition(handVec)

                    var transform = new this.ammo.btTransform()
                    transform.setIdentity()
                    transform.setOrigin(new this.ammo.btVector3(handVec.x, handVec.y, handVec.z))
                    var motionState = new this.ammo.btDefaultMotionState(transform);

                    var shape = this.arrayBoxComponents[i];
                    shape.setMargin(0.5)

                    var localInertia = new this.ammo.btVector3(0, 0, 0);
                    shape.calculateLocalInertia(0, localInertia);

                    var rigidBodyInfo = new this.ammo.btRigidBodyConstructionInfo(0, motionState, shape, localInertia);
                    var rigidBody = new this.ammo.btRigidBody(rigidBodyInfo);
                    this.arrayComponents[i].userData.physicsBody = rigidBody
                    this.handlerAmmo.addRigidBodyToWorld(rigidBody);
                    this.rigidBodies.push(rigidBody)
                }
                this.flagEndPhysics = true

                const color = 0xffd1be;
                const mediumIntensity = 3
                const mediumDistance = 1000
                const decay = 3
                var light = new THREE.PointLight(color, mediumIntensity, mediumDistance, decay);
                light.position.set(-22, 14, -22);
                this.scene.add(light);
                this.lightsArray.push(light)

                light = new THREE.PointLight(color, mediumIntensity, mediumDistance, decay);
                light.position.set(-22, 14, 22);
                this.scene.add(light);
                this.lightsArray.push(light)

                light = new THREE.PointLight(color, mediumIntensity, mediumDistance, decay);
                light.position.set(22, 14, 22);
                this.scene.add(light);
                this.lightsArray.push(light)

                light = new THREE.PointLight(color, mediumIntensity, mediumDistance, decay);
                light.position.set(22, 14, -22);
                this.scene.add(light);
                this.lightsArray.push(light)

                const lowIntensity = 2
                const lowDistance = 500
                light = new THREE.PointLight(color, lowIntensity, lowDistance, decay)
                light.position.set(-3, 3, 0)
                this.scene.add(light)
                this.lightsArray.push(light)

                light = new THREE.PointLight(color, lowIntensity, lowDistance, decay)
                light.position.set(23.9, 3, 0)
                this.scene.add(light)
                this.lightsArray.push(light)


                light = new THREE.PointLight(color, lowIntensity, lowDistance, decay)
                light.position.set(25, -4, -6)
                this.scene.add(light)
                this.lightsArray.push(light)

                light = new THREE.PointLight(color, lowIntensity, lowDistance, decay)
                light.position.set(25, -4, 6)
                this.scene.add(light)
                this.lightsArray.push(light)

                const highIntensity = 4
                const highDistance = 1100

                light = new THREE.PointLight(color, highIntensity, highDistance, decay)
                light.position.set(82, 14, -11.7)
                this.scene.add(light)
                this.lightsArray.push(light)

                light = new THREE.PointLight(color, highIntensity, highDistance, decay)
                light.position.set(82, 14, 11.7)
                this.scene.add(light)
                this.lightsArray.push(light)

                light = new THREE.DirectionalLight(color, 1)
                light.position.set(100, 20, 20)
                light.castShadow = true;
                const dim = 50
                light.shadow.camera.top = dim;
                light.shadow.camera.bottom = - dim;
                light.shadow.camera.left = - dim;
                light.shadow.camera.right = dim;
                light.shadow.camera.near = 2;
                light.shadow.camera.far = 1000;
                light.shadow.mapSize.x = 2048;
                light.shadow.mapSize.y = 2048;
                this.scene.add(light)
                this.lightsArray.push(light)

                this.scene.add(this.model)
            }

        }
    }

    isReady() {
        return this.flagEndPhysics
    }

    getTutorialRoomElements() {
        return this.arrayComponents
    }

    getRigidBodies() {
        return this.rigidBodies
    }

    removeRoom() {
        for (let i = 0; i < this.lightsArray.length; i += 1) {
            this.scene.remove(this.lightsArray[i])
        }
        for (let i = 0; i < this.rigidBodies.length; i += 1) {
            this.handlerAmmo.removeRigidBodyFromWorld(this.rigidBodies[i])
        }
        this.scene.remove(this.model)
        this.flagRoomRemoved = true
    }

    roomRemoved() {
        return this.flagRoomRemoved
    }
}