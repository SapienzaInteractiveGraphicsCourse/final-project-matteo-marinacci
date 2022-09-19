class Portal {
    scene = null
    camera = null
    portal = null
    xPos = null
    yPos = null
    zPos = null
    xScale = null
    yScale = null
    zScale = null

    portalParams = null
    portalReady = false
    tutorialRoom = null
    arrayTutorialRoom = []
    flagSetOnlyOnce = true
    tweenPortalSpawn = null
    flagPortalShown = false
    tweenPortalScale = null
    flagPortalEnabled = true
    flagStopScale = false
    flagRemovePortal = false
    tweenRemovePortal = null

    constructor(scene, camera, portal, xPos, yPos, zPos, xScale, yScale, zScale, tutorialRoom) {
        this.scene = scene
        this.camera = camera
        this.xPos = xPos
        this.yPos = yPos
        this.zPos = zPos
        this.xScale = xScale
        this.yScale = yScale
        this.zScale = zScale
        this.tutorialRoom = tutorialRoom
        this.arrayTutorialRoom = this.tutorialRoom.getTutorialRoomElements()

        Promise.resolve(portal).then((data) => {
            this.portal = data;
            this.portal.scale.set(this.xScale, this.yScale, this.zScale);
            this.portal.position.x = this.xPos;
            this.portal.position.y = this.yPos;
            this.portal.position.z = this.zPos;

            this.portalParams = {
                ppx: this.portal.position.x, ppy: this.portal.position.y, ppz: this.portal.position.z,
                prx: this.portal.rotation.x, pry: this.portal.rotation.y, prz: this.portal.rotation.z,
            }
            this.portalReady = true
        })
        this.portal = portal
    }

    update(gateUp) {
        if (gateUp && this.portalReady) {
            if (this.flagSetOnlyOnce) {
                this.flagSetOnlyOnce = false

                var handVec = new THREE.Vector3()
                this.arrayTutorialRoom[12].getWorldPosition(handVec)
                this.portal.position.x = handVec.x + 3.0
                this.portal.position.y = handVec.y - 12.0
                this.portal.position.z = handVec.z

                this.tweenPortalSpawn = new TWEEN.Tween(this.portal.scale).to({
                    x: 3.0,
                    y: 3.0,
                    z: 3.0
                }, 1000).onComplete(() => {
                    this.flagPortalShown = true
                    this.tweenPortalScale = new TWEEN.Tween(this.portal.scale).to({
                        x: 2.7,
                        y: 2.7,
                        z: 2.7
                    }, 1000).repeat(Infinity).yoyo(true).start()
                }).start()
                this.scene.add(this.portal)
            }
            if(this.flagPortalEnabled){
                if(!this.flagRemovePortal){
                    if (!this.flagPortalShown) {
                        this.tweenPortalSpawn.update()
                    }
                    else {
                        if(!this.flagStopScale){
                        this.tweenPortalScale.update()
                            
                        }
                        else{
                            this.tweenPortalScale.stop()
                        }
                    }
                }
                else{
                    this.tweenRemovePortal.update()
                }
            }
            
            
        }
    }

    getPortal(){
        return this.portal
    }

    portalEnabled(){
        return this.flagPortalEnabled
    }

    removePortal(){
        this.flagRemovePortal = true
        this.tweenRemovePortal = new TWEEN.Tween(this.portal.scale).to({
            x: 0,
            y: 0,
            z: 0
        },2000).onComplete(()=>{
            this.flagPortalEnabled = false
            this.scene.remove(this.portal)
        }).start()
    }

    stopScale(){
        this.flagStopScale = true
    }
}