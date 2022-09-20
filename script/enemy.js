class Enemy {
    ammo = null
    handlerAmmo = null
    scene = null
    enemy = null
    xPos = null
    yPos = null
    zPos = null
    xScale = null
    yScale = null
    zScale = null
    enemyReady = false
    character = null
    outsideScale = null

    eye0 = null
    eye1 = null
    eye2 = null
    eye3 = null
    eye4 = null
    eye5 = null
    eye6 = null
    eye7 = null
    eye8 = null
    eye9 = null

    dictOfEnemies = {
        "enemy0": null,
        "enemy1": null,
        "enemy2": null,
        "enemy3": null,
        "enemy4": null,
        "enemy5": null,
        "enemy6": null,
        "enemy7": null,
        "enemy8": null,
        "enemy9": null,
        "enemy10": null,
        "enemy11": null,
        "enemy12": null,
        "enemy13": null,
        "enemy14": null
    }
    dictOfDeletingEnemy = {
        "enemy0": null,
        "enemy1": null,
        "enemy2": null,
        "enemy3": null,
        "enemy4": null,
        "enemy5": null,
        "enemy6": null,
        "enemy7": null,
        "enemy8": null,
        "enemy9": null,
        "enemy10": null,
        "enemy11": null,
        "enemy12": null,
        "enemy13": null,
        "enemy14": null
    }
    dictTweenOfSpawnEnemy = {
        "enemy0": null,
        "enemy1": null,
        "enemy2": null,
        "enemy3": null,
        "enemy4": null,
        "enemy5": null,
        "enemy6": null,
        "enemy7": null,
        "enemy8": null,
        "enemy9": null,
        "enemy10": null,
        "enemy11": null,
        "enemy12": null,
        "enemy13": null,
        "enemy14": null
    }
    dictTweenOfKillEnemy = {
        "enemy0": null,
        "enemy1": null,
        "enemy2": null,
        "enemy3": null,
        "enemy4": null,
        "enemy5": null,
        "enemy6": null,
        "enemy7": null,
        "enemy8": null,
        "enemy9": null,
        "enemy10": null,
        "enemy11": null,
        "enemy12": null,
        "enemy13": null,
        "enemy14": null
    }
    dictTweenAnimEnemy = {
        "enemy0": null,
        "enemy1": null,
        "enemy2": null,
        "enemy3": null,
        "enemy4": null,
        "enemy5": null,
        "enemy6": null,
        "enemy7": null,
        "enemy8": null,
        "enemy9": null,
        "enemy10": null,
        "enemy11": null,
        "enemy12": null,
        "enemy13": null,
        "enemy14": null
    }

    dictBox = {
        "enemy0": null,
        "enemy1": null,
        "enemy2": null,
        "enemy3": null,
        "enemy4": null,
        "enemy5": null,
        "enemy6": null,
        "enemy7": null,
        "enemy8": null,
        "enemy9": null,
        "enemy10": null,
        "enemy11": null,
        "enemy12": null,
        "enemy13": null,
        "enemy14": null
    }


    flagSetOnlyOnce = true
    eyesTransf = null

    dir = new THREE.Vector3()
    realPos = new THREE.Vector3()

    uid = null

    constructor(ammo, handlerAmmo, scene, enemy, xScale, yScale, zScale, xPos, yPos, zPos, character, outside, uid) {
        this.ammo = ammo
        this.handlerAmmo = handlerAmmo
        this.scene = scene
        this.xPos = xPos
        this.yPos = yPos
        this.zPos = zPos
        this.xScale = xScale
        this.yScale = yScale
        this.zScale = zScale
        this.character = character
        this.outsideScale = outside.getScale()
        this.uid = uid


        Promise.resolve(enemy).then((data) => {
            this.enemy = data;
            this.enemy.scale.set(this.xScale, this.yScale, this.zScale);
            this.enemy.position.x = this.xPos;
            this.enemy.position.y = this.yPos;
            this.enemy.position.z = this.zPos;
            this.enemy.rotation.z = 1.5
            this.enemyReady = true

            this.eye0 = this.enemy.children[0].children[0].children[0].children[0]
            this.eye1 = this.enemy.children[0].children[0].children[0].children[1]
            this.eye2 = this.enemy.children[0].children[0].children[0].children[2]
            this.eye3 = this.enemy.children[0].children[0].children[0].children[3]
            this.eye4 = this.enemy.children[0].children[0].children[0].children[4]
            this.eye5 = this.enemy.children[0].children[0].children[0].children[5]
            this.eye6 = this.enemy.children[0].children[0].children[0].children[6]
            this.eye7 = this.enemy.children[0].children[0].children[0].children[7]
            this.eye8 = this.enemy.children[0].children[0].children[0].children[8]
            this.eye9 = this.enemy.children[0].children[0].children[0].children[9]

            this.eyesTransf = {
                eye0rx: this.eye0.rotation.x, eye0ry: this.eye0.rotation.y, eye0rz: this.eye0.rotation.z,
                eye1rx: this.eye1.rotation.x, eye1ry: this.eye1.rotation.y, eye1rz: this.eye1.rotation.z,
                eye2rx: this.eye2.rotation.x, eye2ry: this.eye2.rotation.y, eye2rz: this.eye2.rotation.z,
                eye3rx: this.eye3.rotation.x, eye3ry: this.eye3.rotation.y, eye3rz: this.eye3.rotation.z,
                eye4rx: this.eye4.rotation.x, eye4ry: this.eye4.rotation.y, eye4rz: this.eye4.rotation.z,
                eye5rx: this.eye5.rotation.x, eye5ry: this.eye5.rotation.y, eye5rz: this.eye5.rotation.z,
                eye6rx: this.eye6.rotation.x, eye6ry: this.eye6.rotation.y, eye6rz: this.eye6.rotation.z,
                eye7rx: this.eye7.rotation.x, eye7ry: this.eye7.rotation.y, eye7rz: this.eye7.rotation.z,
                eye8rx: this.eye8.rotation.x, eye8ry: this.eye8.rotation.y, eye8rz: this.eye8.rotation.z,
                eye9rx: this.eye9.rotation.x, eye9ry: this.eye9.rotation.y, eye9rz: this.eye9.rotation.z,

                eye0sx: this.eye0.scale.x, eye0sy: this.eye0.scale.y, eye0sz: this.eye0.scale.z,
                eye1sx: this.eye1.scale.x, eye1sy: this.eye1.scale.y, eye1sz: this.eye1.scale.z,
                eye2sx: this.eye2.scale.x, eye2sy: this.eye2.scale.y, eye2sz: this.eye2.scale.z,
                eye3sx: this.eye3.scale.x, eye3sy: this.eye3.scale.y, eye3sz: this.eye3.scale.z,
                eye4sx: this.eye4.scale.x, eye4sy: this.eye4.scale.y, eye4sz: this.eye4.scale.z,
                eye5sx: this.eye5.scale.x, eye5sy: this.eye5.scale.y, eye5sz: this.eye5.scale.z,
                eye6sx: this.eye6.scale.x, eye6sy: this.eye6.scale.y, eye6sz: this.eye6.scale.z,
                eye7sx: this.eye7.scale.x, eye7sy: this.eye7.scale.y, eye7sz: this.eye7.scale.z,
                eye8sx: this.eye8.scale.x, eye8sy: this.eye8.scale.y, eye8sz: this.eye8.scale.z,
                eye9sx: this.eye9.scale.x, eye9sy: this.eye9.scale.y, eye9sz: this.eye9.scale.z,
            }
            this.eye0.scale.set(0, 0, 0)
            this.eye1.scale.set(0, 0, 0)
            this.eye2.scale.set(0, 0, 0)
            this.eye3.scale.set(0, 0, 0)
            this.eye4.scale.set(0, 0, 0)
            this.eye5.scale.set(0, 0, 0)
            this.eye6.scale.set(0, 0, 0)
            this.eye7.scale.set(0, 0, 0)
            this.eye8.scale.set(0, 0, 0)
            this.eye9.scale.set(0, 0, 0)
        })
        this.enemy = enemy

    }


    update() {
        if (this.enemyReady && this.character.portalTraversed()) {
            if (this.flagSetOnlyOnce) {
                this.flagSetOnlyOnce = false



                for (let i = 0; i < 15; i++) {

                    if (!this.createEnemy(i)) {
                        i--
                    }
                }

            }
            if (this.character.portalTraversed()) {
                for (let i = 0; i < 15; i++) {
                    var tmpSpawn = this.dictTweenOfSpawnEnemy["enemy" + i.toString()]
                    if (tmpSpawn) {
                        this.dictBox["enemy" + i.toString()].setFromObject(this.dictOfEnemies["enemy" + i.toString()])
                        tmpSpawn[0].update()
                        tmpSpawn[1].update()
                        tmpSpawn[2].update()
                        tmpSpawn[3].update()
                        tmpSpawn[4].update()
                        tmpSpawn[5].update()
                        tmpSpawn[6].update()
                        tmpSpawn[7].update()
                        tmpSpawn[8].update()
                        tmpSpawn[9].update()
                    }
                    else {
                        var animEnemy = this.dictTweenAnimEnemy["enemy" + i.toString()]
                        if (animEnemy) {
                            animEnemy.update()
                        }
                        var deletingEnemy = this.dictOfDeletingEnemy["enemy" + i.toString()]
                        if (!deletingEnemy) {
                            var enemy = this.dictOfEnemies["enemy" + i.toString()]
                            if (enemy) {
                                this.dictBox["enemy" + i.toString()].setFromObject(enemy)
                                this.dir.subVectors(this.character.getModel().position, enemy.position)
                                const targetRot = Math.atan2(this.dir.x, this.dir.z) - Math.PI * 1.5;
                                const deltaRot = (targetRot - this.character.getModel().rotation.y);
                                enemy.rotation.y = THREE.MathUtils.euclideanModulo(this.character.getModel().rotation.y + deltaRot, Math.PI * 2);
                                var tmp = new THREE.Vector3(0, 1, 0)

                                var weaponBox = this.character.getWeaponBox()
                                var hitted = false
                                if (weaponBox && this.dictBox["enemy" + i.toString()].intersectsBox(weaponBox)) {
                                    hitted = true
                                }


                                if (this.dir.length() > 9.1 && !hitted && !this.uid.gameOver()) {
                                    enemy.translateOnAxis(tmp, 0.2)
                                    enemy.position.y = 0
                                }
                                else {
                                    if(hitted){
                                        this.uid.hit()
                                    }
                                    else{
                                        this.uid.hitted()
                                    }
                                    
                                    this.removeEnemy(enemy, "enemy" + i.toString(), i,
                                        enemy.children[0].children[0].children[0].children[0],
                                        enemy.children[0].children[0].children[0].children[1],
                                        enemy.children[0].children[0].children[0].children[2],
                                        enemy.children[0].children[0].children[0].children[3],
                                        enemy.children[0].children[0].children[0].children[4],
                                        enemy.children[0].children[0].children[0].children[5],
                                        enemy.children[0].children[0].children[0].children[6],
                                        enemy.children[0].children[0].children[0].children[7],
                                        enemy.children[0].children[0].children[0].children[8],
                                        enemy.children[0].children[0].children[0].children[9])
                                }
                            }
                            else {
                                this.createEnemy(i)
                            }
                        }
                        else {
                            var tmpKill = this.dictTweenOfKillEnemy["enemy" + i.toString()]
                            tmpKill[0].update()
                            tmpKill[1].update()
                            tmpKill[2].update()
                            tmpKill[3].update()
                            tmpKill[4].update()
                            tmpKill[5].update()
                            tmpKill[6].update()
                            tmpKill[7].update()
                            tmpKill[8].update()
                            tmpKill[9].update()
                        }

                    }
                }

            }

        }
    }

    createEnemy(index) {
        var tempClone = this.enemy.clone()

        tempClone.position.x = Math.floor(Math.random() * (((this.outsideScale.x / 2) - 5) - ((-this.outsideScale.x / 2) + 5) + 1)) + ((-this.outsideScale.x / 2) + 5);
        tempClone.position.z = Math.floor(Math.random() * (((this.outsideScale.z / 2) - 5) - ((-this.outsideScale.z / 2) + 5) + 1)) + ((-this.outsideScale.z / 2) + 5);

        if (tempClone.position.distanceTo(this.character.getModel().position) > 15) {
            this.dictOfEnemies["enemy" + index.toString()] = tempClone
            this.dictBox["enemy" + index.toString()] = new THREE.Box3().setFromObject(tempClone)




            this.addEnemy(
                tempClone.children[0].children[0].children[0].children[0],
                tempClone.children[0].children[0].children[0].children[1],
                tempClone.children[0].children[0].children[0].children[2],
                tempClone.children[0].children[0].children[0].children[3],
                tempClone.children[0].children[0].children[0].children[4],
                tempClone.children[0].children[0].children[0].children[5],
                tempClone.children[0].children[0].children[0].children[6],
                tempClone.children[0].children[0].children[0].children[7],
                tempClone.children[0].children[0].children[0].children[8],
                tempClone.children[0].children[0].children[0].children[9],
                "enemy" + index.toString()
            )
            return true
        }
        else {
            return false
        }
    }


    addEnemy(eye0, eye1, eye2, eye3, eye4, eye5, eye6, eye7, eye8, eye9, nameDict) {
        var tweenSpawnEye0 = null, tweenSpawnEye1 = null, tweenSpawnEye2 = null, tweenSpawnEye3 = null,
            tweenSpawnEye4 = null, tweenSpawnEye5 = null, tweenSpawnEye6 = null, tweenSpawnEye7 = null,
            tweenSpawnEye8 = null, tweenSpawnEye9 = null, arrayTween = []

        tweenSpawnEye0 = new TWEEN.Tween(eye0.scale).to({
            x: this.eyesTransf.eye0sx,
            y: this.eyesTransf.eye0sy,
            z: this.eyesTransf.eye0sz,
        }, 250).delay(0).start().stop()
        arrayTween.push(tweenSpawnEye0)
        tweenSpawnEye1 = new TWEEN.Tween(eye1.scale).to({
            x: this.eyesTransf.eye1sx,
            y: this.eyesTransf.eye1sy,
            z: this.eyesTransf.eye1sz,
        }, 250).delay(250).start().stop()
        arrayTween.push(tweenSpawnEye1)
        tweenSpawnEye2 = new TWEEN.Tween(eye2.scale).to({
            x: this.eyesTransf.eye2sx,
            y: this.eyesTransf.eye2sy,
            z: this.eyesTransf.eye2sz,
        }, 250).delay(500).start().stop()
        arrayTween.push(tweenSpawnEye2)
        tweenSpawnEye3 = new TWEEN.Tween(eye3.scale).to({
            x: this.eyesTransf.eye3sx,
            y: this.eyesTransf.eye3sy,
            z: this.eyesTransf.eye3sz,
        }, 250).delay(750).start().stop()
        arrayTween.push(tweenSpawnEye3)
        tweenSpawnEye4 = new TWEEN.Tween(eye4.scale).to({
            x: this.eyesTransf.eye4sx,
            y: this.eyesTransf.eye4sy,
            z: this.eyesTransf.eye4sz,
        }, 250).delay(1000).start().stop()
        arrayTween.push(tweenSpawnEye4)
        tweenSpawnEye5 = new TWEEN.Tween(eye5.scale).to({
            x: this.eyesTransf.eye5sx,
            y: this.eyesTransf.eye5sy,
            z: this.eyesTransf.eye5sz,
        }, 250).delay(1250).start().stop()
        arrayTween.push(tweenSpawnEye5)
        tweenSpawnEye6 = new TWEEN.Tween(eye6.scale).to({
            x: this.eyesTransf.eye6sx,
            y: this.eyesTransf.eye6sy,
            z: this.eyesTransf.eye6sz,
        }, 250).delay(1500).start().stop()
        arrayTween.push(tweenSpawnEye6)
        tweenSpawnEye7 = new TWEEN.Tween(eye7.scale).to({
            x: this.eyesTransf.eye7sx,
            y: this.eyesTransf.eye7sy,
            z: this.eyesTransf.eye7sz,
        }, 250).delay(1750).start().stop()
        arrayTween.push(tweenSpawnEye7)
        tweenSpawnEye8 = new TWEEN.Tween(eye8.scale).to({
            x: this.eyesTransf.eye8sx,
            y: this.eyesTransf.eye8sy,
            z: this.eyesTransf.eye8sz,
        }, 250).delay(2000).start().stop()
        arrayTween.push(tweenSpawnEye8)
        tweenSpawnEye9 = new TWEEN.Tween(eye9.scale).to({
            x: this.eyesTransf.eye9sx,
            y: this.eyesTransf.eye9sy,
            z: this.eyesTransf.eye9sz,
        }, 250).delay(2250).onComplete(() => {
            this.dictTweenOfSpawnEnemy[nameDict] = null
            this.animateEnemy(eye0, eye1, eye2, eye3, eye4, eye5, eye6, eye7, eye8, eye9, nameDict)
        }).start().stop()
        arrayTween.push(tweenSpawnEye9)

        this.dictTweenOfSpawnEnemy[nameDict] = arrayTween
        this.scene.add(this.dictOfEnemies[nameDict])
    }

    removeEnemy(enemy, enemyDictName, index, eye0, eye1, eye2, eye3, eye4, eye5, eye6, eye7, eye8, eye9) {
        this.dictOfDeletingEnemy[enemyDictName] = enemy
        var tweenRemoveEye0 = null, tweenRemoveEye1 = null, tweenRemoveEye2 = null, tweenRemoveEye3 = null,
            tweenRemoveEye4 = null, tweenRemoveEye5 = null, tweenRemoveEye6 = null, tweenRemoveEye7 = null,
            tweenRemoveEye8 = null, tweenRemoveEye9 = null, arrayTween = []

        tweenRemoveEye9 = new TWEEN.Tween(eye9.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(0).start().stop()
        arrayTween.push(tweenRemoveEye9)
        tweenRemoveEye8 = new TWEEN.Tween(eye8.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(250).start().stop()
        arrayTween.push(tweenRemoveEye8)
        tweenRemoveEye7 = new TWEEN.Tween(eye7.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(500).start().stop()
        arrayTween.push(tweenRemoveEye7)
        tweenRemoveEye6 = new TWEEN.Tween(eye6.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(750).start().stop()
        arrayTween.push(tweenRemoveEye6)
        tweenRemoveEye5 = new TWEEN.Tween(eye5.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(1000).start().stop()
        arrayTween.push(tweenRemoveEye5)
        tweenRemoveEye4 = new TWEEN.Tween(eye4.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(1250).start().stop()
        arrayTween.push(tweenRemoveEye4)
        tweenRemoveEye3 = new TWEEN.Tween(eye3.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(1500).start().stop()
        arrayTween.push(tweenRemoveEye3)
        tweenRemoveEye2 = new TWEEN.Tween(eye2.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(1750).start().stop()
        arrayTween.push(tweenRemoveEye2)
        tweenRemoveEye1 = new TWEEN.Tween(eye1.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(2000).start().stop()
        arrayTween.push(tweenRemoveEye1)
        tweenRemoveEye0 = new TWEEN.Tween(eye0.scale).to({
            x: 0,
            y: 0,
            z: 0
        }, 250).delay(2250).onComplete(() => {
            this.scene.remove(enemy)
            enemy = null
            this.dictOfEnemies[enemyDictName] = null
            this.dictTweenOfKillEnemy[enemyDictName] = null
            this.dictOfDeletingEnemy[enemyDictName] = null
            this.dictBox[enemyDictName] = null
            this.dictTweenAnimEnemy[enemyDictName].stop()
            this.dictTweenAnimEnemy[enemyDictName] = null
            this.createEnemy(index)
        }).start().stop()
        arrayTween.push(tweenRemoveEye0)
        this.dictTweenOfKillEnemy[enemyDictName] = arrayTween
    }

    animateEnemy(eye0, eye1, eye2, eye3, eye4, eye5, eye6, eye7, eye8, eye9, enemyDictName) {

        var eyeTransfClone = this.eyesTransf
        var tweenAnimate = new TWEEN.Tween(eyeTransfClone).to({
            eye1rz: this.eyesTransf.eye1rz + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
            eye2rx: this.eyesTransf.eye2rx + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
            eye3rx: this.eyesTransf.eye3rx + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
            eye4rx: this.eyesTransf.eye4rx + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
            eye5rx: this.eyesTransf.eye5rx + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
            eye6rx: this.eyesTransf.eye6rx + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
            eye7rz: this.eyesTransf.eye7rz + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
            eye8rz: this.eyesTransf.eye8rz + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
            eye9rx: this.eyesTransf.eye9rx + Math.floor(Math.random() * (4.0 + 4.0) + 1) - 4.0,
        }, 1000).onUpdate(() => {
            eye1.rotation.z = eyeTransfClone.eye1rz
            eye2.rotation.x = eyeTransfClone.eye2rx
            eye3.rotation.x = eyeTransfClone.eye3rx
            eye4.rotation.x = eyeTransfClone.eye4rx
            eye5.rotation.x = eyeTransfClone.eye5rx
            eye6.rotation.x = eyeTransfClone.eye6rx
            eye7.rotation.z = eyeTransfClone.eye7rz
            eye8.rotation.z = eyeTransfClone.eye8rz
            eye9.rotation.x = eyeTransfClone.eye9rx
        }).repeat(Infinity).yoyo(true).start()

        this.dictTweenAnimEnemy[enemyDictName] = tweenAnimate
    }

    isReady() {
        return !this.flagSetOnlyOnce
    }
}