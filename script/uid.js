class Uid {
    scene = null
    camera = null
    plane = null
    fontMenu = null
    readyFontMenu = false
    flagSetOnlyOnce = true

    startGeometry = null
    startMaterial = null
    startPlan = null
    startMesh = null

    commandGeometry = null
    cameraGeometry = null
    moveGeometry = null
    actionGeometry = null
    material = null
    commandMesh = null
    cameraMesh = null
    moveMesh = null
    actionMesh = null

    left = null
    readyLeft = false
    leftMaterial = null
    leftMesh = null

    right = null
    rightMaterial = null
    rightMesh = null
    readyRight = false

    arrows = null
    arrowsMaterial = null
    arrowsMesh = null
    readyArrows = false

    flagStartGame = false

    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();

    onPointerMove = this.onPointerMove.bind(this)
    onMouseDown = this.onMouseDown.bind(this)
    selectStart = null

    flagShowBars = false
    flagBarsOn = false

    hpMaterial = null
    hpX = null
    hpGeometry = null
    hpMesh = null

    hpLostMaterial = null
    hpLostX = null
    hpLostGeometry = null
    hpLostMesh = null

    killMaterial = null
    killGeometry = null
    killMesh = null

    killCountText = 0

    deathMaterial = null
    deathGeometry = null
    deathMesh = null

    gameOverMaterial = null
    gameOverGeometry = null
    gameOverMesh = null

    isHitted = false
    hasHitted = false
    recover = false
    increaseBar = false
    flagDeath = false

    constructor(scene, camera, fontMenu, left, right, arrows) {
        this.scene = scene
        this.camera = camera

        Promise.resolve(fontMenu).then((data) => {
            this.fontMenu = data
            this.readyFontMenu = true
        })
        this.fontMenu = fontMenu

        Promise.resolve(left).then((data) => {
            this.left = data
            this.readyLeft = true
        })
        this.left = left

        Promise.resolve(right).then((data) => {
            this.right = data
            this.readyRight = true
        })
        this.right = right

        Promise.resolve(arrows).then((data) => {
            this.arrows = data
            this.readyArrows = true
        })
        this.arrows = arrows
    }



    update(loadMenu) {
        if (this.readyFontMenu && this.readyLeft && this.readyRight && this.readyArrows) {
            if (this.flagSetOnlyOnce && loadMenu && !this.flagStartGame) {
                this.flagSetOnlyOnce = false

                this.startMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
                this.startGeometry = new TextGeometry('Start Game', {
                    font: this.fontMenu,
                    size: 100,
                    height: 5,
                    curveSegments: 12,

                })
                this.startMesh = new THREE.Mesh(this.startGeometry, this.startMaterial)

                var startPlanMaterial = new THREE.MeshBasicMaterial({
                    visible: false
                })
                this.startPlan = new THREE.Mesh(new THREE.PlaneGeometry(425, 160), startPlanMaterial);
                this.startPlan.add(this.startMesh)
                this.startGeometry.computeBoundingBox()
                this.startGeometry.center()
                this.startPlan.position.set(0, 200, 0)
                this.scene.add(this.startPlan)


                this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })

                this.commandGeometry = new TextGeometry('Commands:', {
                    font: this.fontMenu,
                    size: 50,
                    height: 5,
                    curveSegments: 12,
                })
                this.commandMesh = new THREE.Mesh(this.commandGeometry, this.material)
                this.commandGeometry.computeBoundingBox()
                this.commandGeometry.center()
                this.commandMesh.position.set(0, 50, 0)
                this.scene.add(this.commandMesh)

                this.cameraGeometry = new TextGeometry('Camera:', {
                    font: this.fontMenu,
                    size: 50,
                    height: 5,
                    curveSegments: 12,
                })
                this.cameraMesh = new THREE.Mesh(this.cameraGeometry, this.material)
                this.cameraGeometry.computeBoundingBox()
                this.cameraGeometry.center()
                this.cameraMesh.position.set(-300, -50, 0)
                this.scene.add(this.cameraMesh)

                this.actionGeometry = new TextGeometry('Action:', {
                    font: this.fontMenu,
                    size: 50,
                    height: 5,
                    curveSegments: 12,
                })
                this.actionMesh = new THREE.Mesh(this.actionGeometry, this.material)
                this.actionGeometry.computeBoundingBox()
                this.actionGeometry.center()
                this.actionMesh.position.set(0, -50, 0)
                this.scene.add(this.actionMesh)


                this.moveGeometry = new TextGeometry('Move:', {
                    font: this.fontMenu,
                    size: 50,
                    height: 5,
                    curveSegments: 12,
                })
                this.moveMesh = new THREE.Mesh(this.moveGeometry, this.material)
                this.moveGeometry.computeBoundingBox()
                this.moveGeometry.center()
                this.moveMesh.position.set(300, -50, 0)
                this.scene.add(this.moveMesh)

                this.leftMaterial = new THREE.MeshBasicMaterial({
                    map: this.left,
                    transparent: true
                })
                this.leftMesh = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), this.leftMaterial);
                this.leftMesh.overdraw = true
                this.leftMesh.position.set(-300, -200, 0)
                this.scene.add(this.leftMesh)

                this.rightMaterial = new THREE.MeshBasicMaterial({
                    map: this.right,
                    transparent: true
                })
                this.rightMesh = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), this.rightMaterial);
                this.rightMesh.overdraw = true
                this.rightMesh.position.set(0, -200, 0)
                this.scene.add(this.rightMesh)

                this.arrowsMaterial = new THREE.MeshBasicMaterial({
                    map: this.arrows,
                    transparent: true
                })
                this.arrowsMesh = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), this.arrowsMaterial);
                this.arrowsMesh.overdraw = true
                this.arrowsMesh.position.set(300, -200, 0)
                this.scene.add(this.arrowsMesh)

                var elem = document.getElementById("killCount");
                elem.style.visibility = "hidden";

                window.addEventListener('pointermove', this.onPointerMove);
            }
            if (loadMenu && !this.flagStartGame) {
                this.raycaster.setFromCamera(this.pointer, this.camera);
                const intersects = this.raycaster.intersectObjects(this.scene.children, false);

                if (intersects.length > 0) {
                    if (this.selectStart != intersects[0].object) {
                        this.selectStart = intersects[0].object
                        if (this.selectStart == this.startPlan) {
                            this.selectStart.children[0].material.color.set(0xffff00)
                            window.addEventListener('mousedown', this.onMouseDown)
                        }
                    }
                } else {
                    if (this.selectStart == this.startPlan) {
                        this.selectStart.children[0].material.color.set(0xff0000)
                        window.removeEventListener('mousedown', this.onMouseDown)
                    }
                    this.selectStart = null;

                }
            }

            if (this.flagShowBars) {
                if (!this.flagBarsOn) {
                    this.flagBarsOn = true

                    this.hpMaterial = new THREE.MeshBasicMaterial({
                        color: 0x00ff00,
                        side: THREE.DoubleSide
                    })
                    this.hpX = 30
                    this.hpGeometry = new THREE.PlaneGeometry(1, 1)
                    this.hpMesh = new THREE.Mesh(this.hpGeometry, this.hpMaterial)
                    this.hpMesh.scale.set(this.hpX, 10)
                    this.hpMesh.position.set((-window.innerWidth / 2) + (this.hpX / 2), (window.innerHeight / 2) - 5, 0)
                    this.scene.add(this.hpMesh)

                    this.hpLostMaterial = new THREE.MeshBasicMaterial({
                        color: 0xff0000,
                        side: THREE.DoubleSide
                    })
                    this.hpLostX = 30
                    this.hpLostGeometry = new THREE.PlaneGeometry(1, 1)
                    this.hpLostMesh = new THREE.Mesh(this.hpLostGeometry, this.hpLostMaterial)
                    this.hpLostMesh.scale.set(this.hpLostX, 8)
                    this.hpLostMesh.position.set((-window.innerWidth / 2) + (this.hpLostX / 2), (window.innerHeight / 2) - 5, -1)
                    this.scene.add(this.hpLostMesh)


                    this.killMaterial = new THREE.MeshBasicMaterial({
                        color: 0x000000,
                        side: THREE.DoubleSide
                    })

                    var elem = document.getElementById("killCount");
                    elem.style.visibility = "visible";

                    this.killGeometry = new THREE.PlaneGeometry(1, 1)
                    this.killMesh = new THREE.Mesh(this.killGeometry, this.killMaterial)
                    this.killMesh.scale.set(68, 20)
                    this.killMesh.position.set((window.innerWidth / 2) - 36, (-window.innerHeight / 2) + 12)
                    this.scene.add(this.killMesh)
                }
                else {
                    if (this.isHitted) {
                        this.isHitted = false
                        this.hpMesh.scale.set(this.hpX, 10)
                        this.hpMesh.position.set((-window.innerWidth / 2) + (this.hpX / 2), (window.innerHeight / 2) - 5, 0)
                    }

                    if (this.recover) {
                        this.recover = false
                        this.hpMesh.scale.set(this.hpX, 10)
                        this.hpMesh.position.set((-window.innerWidth / 2) + (this.hpX / 2), (window.innerHeight / 2) - 5, 0)
                    }

                    if (this.increaseBar) {
                        this.increaseBar = false
                        this.hpMesh.scale.set(this.hpX, 10)
                        this.hpMesh.position.set((-window.innerWidth / 2) + (this.hpX / 2), (window.innerHeight / 2) - 5, 0)
                        this.hpLostMesh.scale.set(this.hpLostX, 8)
                        this.hpLostMesh.position.set((-window.innerWidth / 2) + (this.hpLostX / 2), (window.innerHeight / 2) - 5, -1)
                    }

                    if (this.flagDeath) {
                        this.deathMaterial = new THREE.MeshBasicMaterial({
                            color: 0xff0000,
                            transparent: true,
                            opacity: 0.01
                        })
                        this.deathGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
                        this.deathMesh = new THREE.Mesh(this.deathGeometry, this.deathMaterial)
                        this.scene.add(this.deathMesh)
                        this.scene.remove(this.killMesh, this.hpLostMesh, this.hpMesh)
                        var elem = document.getElementById("killCount");
                        elem.style.visibility = "hidden";


                        this.gameOverMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide })
                        this.gameOverGeometry = new TextGeometry('GameOver', {
                            font: this.fontMenu,
                            size: 100,
                            height: 5,
                            curveSegments: 12,
        
                        })
                        this.gameOverMesh = new THREE.Mesh(this.gameOverGeometry, this.gameOverMaterial)
        
                        var gameOverPlanMaterial = new THREE.MeshBasicMaterial({
                            visible: false
                        })
                        var gameOverPlan = new THREE.Mesh(new THREE.PlaneGeometry(425, 160), gameOverPlanMaterial);
                        gameOverPlan.add(this.gameOverMesh)
                        this.gameOverGeometry.computeBoundingBox()
                        this.gameOverGeometry.center()
                        gameOverPlan.position.set(0, 200, 3)
                        this.scene.add(gameOverPlan)

                        var finalMessage = document.getElementById("finalKillScore")
                        finalMessage.style.visibility = "visible"
                        var finalScore = document.getElementById("score")
                        finalScore.innerText = this.killCountText.toString()
                    }
                }
            }

        }
    }



    onPointerMove(event) {


        this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;


    }

    onMouseDown(event) {
        if (event.button == 0 || event.button == 2) {
            this.flagStartGame = true
            window.removeEventListener('pointermove', this.onPointerMove);
            this.scene.remove(this.startPlan, this.commandMesh, this.actionMesh, this.cameraMesh, this.moveMesh, this.leftMesh, this.rightMesh, this.arrowsMesh)
        }
    }


    startGame() {
        return this.flagStartGame
    }

    showBars() {
        this.flagShowBars = true
    }

    hitted() {
        this.isHitted = true
        this.hpX -= 10
        if (this.hpX <= 0) {
            this.hpX = 0
            this.flagDeath = true
        }
    }

    hit() {
        this.hasHitted = true
        this.killCountText += 1
        var elem = document.getElementById("killCount");
        elem.innerText = this.killCountText.toString();
        if (this.killCountText % 30 == 0) {
            this.increaseBar = true
            this.hpLostX += 3
            this.hpX = this.hpLostX
        }
        else {
            if (this.killCountText % 15 == 0) {
                this.recover = true
                var temp = Math.floor(this.hpLostX / 20)
                if ((this.hpX + temp) >= this.hpLostX) {
                    this.hpX = this.hpLostX
                }
                else {
                    this.hpX += temp * 10
                }
            }
        }
    }

    gameOver() {
        return this.flagDeath
    }
}