class Weapon {
    ammo = null
    handlerAmmo = null
    scene = null
    camera = null

    scythe = null
    xSScale = null
    ySScale = null
    zSScale = null
    xSPos = null
    ySPos = null
    zSPos = null

    sword = null
    xSwScale = null
    ySwScale = null
    zSwScale = null
    xSwPos = null
    ySwPos = null
    zSwPos = null
    tutorialRoom = null

    swordReady = false
    scytheReady = false
    choosen = false
    choosenType = null
    flagSetOnlyOnce = true
    roomReady = false
    tweenBoth = null
    tweenBackOriginalPos = null
    tweenWeaponEquipped = null
    finalAnimation = false
    tweenFinalAnimation = null
    arrayTutorialRoom = []
    swordParams = null
    scytheParams = null
    animationFlag = false
    finished = false
    goBack = false
    arrayWeapon = []
    flagGateIsOpen = false
    portal = null

    constructor(ammo, handlerAmmo, scene, camera, scythe, xSScale, ySScale, zSScale, xSPos, ySPos, zSPos, sword, xSwScale, ySwScale, zSwScale, xSwPos, ySwPos, zSwPos, tutorialRoom, portal) {
        this.ammo = ammo
        this.handlerAmmo = handlerAmmo
        this.scene = scene
        this.camera = camera

        this.xSScale = xSScale
        this.ySScale = ySScale
        this.zSScale = zSScale
        this.xSPos = xSPos
        this.ySPos = ySPos
        this.zSPos = zSPos

        this.xSwScale = xSwScale
        this.ySwScale = ySwScale
        this.zSwScale = zSwScale
        this.xSwPos = xSwPos
        this.ySwPos = ySwPos
        this.zSwPos = zSwPos
        this.tutorialRoom = tutorialRoom
        this.arrayTutorialRoom = this.tutorialRoom.getTutorialRoomElements()
        this.portal = portal

        Promise.resolve(sword).then((data) => {
            this.sword = data;
            this.sword.scale.set(this.xSwScale, this.ySwScale, this.zSwScale);
            this.sword.position.z = this.zSwPos;
            this.sword.position.y = this.ySwPos;


            this.swordParams = {
                swpx: this.sword.position.x, swpy: this.sword.position.y, swpz: this.sword.position.z,
                swrx: this.sword.rotation.x, swry: this.sword.rotation.y, swrz: this.sword.rotation.z,
            }
            this.swordReady = true
        })
        this.sword = sword

        Promise.resolve(scythe).then((data) => {
            this.scythe = data
            this.scythe.scale.set(this.xSScale, this.ySScale, this.zSScale);
            this.scythe.position.z = this.zSPos;
            this.scythe.position.y = this.ySPos;

            this.scytheParams = {
                spx: this.scythe.position.x, spy: this.scythe.position.y, spz: this.scythe.position.z,
                srx: this.scythe.rotation.x, sry: this.scythe.rotation.y, srz: this.scythe.rotation.z
            }

            this.scytheReady = true
        })
        this.scythe = scythe
    }

    update(roomReady) {
        if (roomReady && this.swordReady && this.scytheReady) {
            if (this.flagSetOnlyOnce) {
                this.flagSetOnlyOnce = false

                this.sword.traverse(function (object) {
                    if (object.isMesh) {
                        object.castShadow = true;
                        object.receiveShadow = true;

                    }
                })

                this.scythe.traverse(function (object) {
                    if (object.isMesh) {
                        object.castShadow = true;
                        object.receiveShadow = true;

                    }
                })

                this.arrayWeapon.push(
                    this.sword,
                    this.scythe
                )
                var handVec = new THREE.Vector3()
                this.arrayTutorialRoom[10].getWorldPosition(handVec)
                this.scythe.position.x = handVec.x + 3.0
                this.scythe.position.y = handVec.y + 7.0
                this.scythe.position.z = handVec.z
                this.scythe.rotation.x = -1.6
                this.scythe.rotation.z = -1.6
                this.scytheParams.spx = this.scythe.position.x
                this.scytheParams.spy = this.scythe.position.y
                this.scytheParams.spz = this.scythe.position.z
                this.scytheParams.sry = this.scythe.rotation.y

                this.arrayTutorialRoom[11].getWorldPosition(handVec)
                this.sword.position.x = handVec.x + 3.0
                this.sword.position.y = handVec.y + 4.0
                this.sword.position.z = handVec.z
                this.sword.rotation.x = -1.6
                this.sword.rotation.z = -1.6
                this.swordParams.swpx = this.sword.position.x
                this.swordParams.swpy = this.sword.position.y
                this.swordParams.swpz = this.sword.position.z
                this.swordParams.swry = this.sword.rotation.y

                this.setRoomReady()
            }

            if (!this.choosen) {
                this.scene.add(this.sword, this.scythe)
                if (!this.animationFlag) {
                    this.animationFlag = true
                    var tweenBothArgs = {
                        swpy: this.swordParams.swpy,
                        spy: this.scytheParams.spy
                    }
                    this.tweenBoth = new TWEEN.Tween(tweenBothArgs).to({
                        swpy: this.swordParams.swpy + 1.5,
                        spy: this.scytheParams.spy + 1.5
                    }).repeat(Infinity).yoyo(true).onUpdate(() => {
                        this.sword.position.y = tweenBothArgs.swpy
                        this.scythe.position.y = tweenBothArgs.spy
                    }).onStop(() => {
                        this.goBack = true
                        var tweenArgsBackOriginalPos = {
                            swpy: this.sword.position.y,
                            spy: this.scythe.position.y
                        }
                        this.tweenBackOriginalPos = new TWEEN.Tween(tweenArgsBackOriginalPos).to({
                            swpy: this.swordParams.swpy,
                            spy: this.scytheParams.spy
                        }, 1000).onUpdate(() => {
                            this.sword.position.y = tweenArgsBackOriginalPos.swpy
                            this.scythe.position.y = tweenArgsBackOriginalPos.spy
                        }).onComplete(() => {
                            this.finalAnimation = true
                            var tweenArgsDisappear = {
                                swsx: this.sword.scale.x,
                                swsy: this.sword.scale.y,
                                swsz: this.sword.scale.z,

                                ssx: this.scythe.scale.x,
                                ssy: this.scythe.scale.y,
                                ssz: this.scythe.scale.z,

                                gatepy: this.arrayTutorialRoom[12].position.y,
                                gatesy: this.arrayTutorialRoom[12].scale.y,
                                gatesz: this.arrayTutorialRoom[12].scale.z
                            }
                            this.tweenFinalAnimation = new TWEEN.Tween(tweenArgsDisappear).to({
                                swsx: 0,
                                swsy: 0,
                                swsz: 0,

                                ssx: 0,
                                ssy: 0,
                                ssz: 0,

                                gatepy: 410,
                                gatesy: 0.5,
                                gatesz: this.arrayTutorialRoom[12].scale.z - 0.6
                            }, 1000).onUpdate(() => {
                                this.sword.scale.y = tweenArgsDisappear.swsy
                                this.sword.scale.z = tweenArgsDisappear.swsz

                                this.scythe.scale.y = tweenArgsDisappear.ssy
                                this.scythe.scale.z = tweenArgsDisappear.ssz

                                this.arrayTutorialRoom[12].position.y = tweenArgsDisappear.gatepy
                                this.arrayTutorialRoom[12].scale.y = tweenArgsDisappear.gatesy
                                this.arrayTutorialRoom[12].scale.z = tweenArgsDisappear.gatesz
                            }).onComplete(() => {
                                this.finished = true
                                this.scythe.scale.x = 0
                                this.sword.scale.x = 0
                                this.flagGateIsOpen = true
                            }).start()
                        }).start()
                    }).start()
                }
                else {
                    this.tweenBoth.update()
                }
            }
            else {
                this.tweenBoth.stop()
                if (this.goBack) {
                    this.tweenBackOriginalPos.update()
                }
                if (this.finalAnimation) {
                    this.tweenFinalAnimation.update()
                }
                if (this.finished) {
                    this.tweenBackOriginalPos.stop()
                    this.tweenFinalAnimation.stop()
                }
            }
        }
    }

    

    setRoomReady() {
        this.roomReady = true
    }

    isReady() {
        return this.roomReady
    }

    getWeapons() {
        return this.arrayWeapon
    }

    pickWeapon(type) {
        if (type == "sword") {
            this.choosenType = "sword"
        }
        else {
            this.choosenType = "scythe"
        }
        this.choosen = true
    }

    isFinished() {
        return this.finished
    }

    gateIsOpen() {
        return this.flagGateIsOpen
    }

    equipWeapon(character) {
        if (this.choosenType == "sword") {
            var tweenWeaponEquippedArgs = {
                sx: this.sword.scale.x,
                sy: this.sword.scale.y,
                sz: this.sword.scale.z,

                rx: this.sword.rotation.x,
                ry: this.sword.rotation.y,
                rz: this.sword.rotation.z
            }
            this.tweenWeaponEquipped = new TWEEN.Tween(tweenWeaponEquippedArgs).to({
                sx: 1.3,
                sy: 1.3,
                sz: 1.3,
                rz: 1.5
            }, 1000).onUpdate(() => {
                this.sword.scale.x = tweenWeaponEquippedArgs.sx
                this.sword.scale.y = tweenWeaponEquippedArgs.sy
                this.sword.scale.z = tweenWeaponEquippedArgs.sz
                this.sword.rotation.z = tweenWeaponEquippedArgs.rz
            }).onComplete(() => {
                character.enableAttack()
            }).start()
            return {
                tween: this.tweenWeaponEquipped,
                type: "sword",
                weapon: this.sword
            }
        }
        else {
            var tweenWeaponEquippedArgs = {
                sx: this.scythe.scale.x,
                sy: this.scythe.scale.y,
                sz: this.scythe.scale.z,

                rx: this.scythe.rotation.x,
                ry: this.scythe.rotation.y,
                rz: this.scythe.rotation.z
            }
            this.tweenWeaponEquipped = new TWEEN.Tween(tweenWeaponEquippedArgs).to({
                sx: 0.8,
                sy: 0.8,
                sz: 0.8,
                ry: 3.25,
                rz: 1.5
            }, 1000).onUpdate(() => {
                this.scythe.scale.x = tweenWeaponEquippedArgs.sx
                this.scythe.scale.y = tweenWeaponEquippedArgs.sy
                this.scythe.scale.z = tweenWeaponEquippedArgs.sz
                this.scythe.rotation.y = tweenWeaponEquippedArgs.ry
                this.scythe.rotation.z = tweenWeaponEquippedArgs.rz
            }).onComplete(() => {
                character.enableAttack()
            }).start()
            return {
                tween: this.tweenWeaponEquipped,
                type: "scythe",
                weapon: this.scythe
            }
        }

    }
}