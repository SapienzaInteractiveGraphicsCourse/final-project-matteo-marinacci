class Character {
    historyKey = null;
    scene = null;
    camera = null;
    lookatxMenu = 0
    lookatyMenu = 1
    lookatzMenu = 140
    camposxMenu = 0
    camposyMenu = 60
    camposzMenu = 55
    lookatx = 0
    lookaty = 50
    lookatz = 70
    camposx = 0
    camposy = 160
    camposz = -66

    model = null;
    object = null;
    xScale = null;
    yScale = null;
    zScale = null;
    xPos = null;
    yPos = null;
    zPos = null;
    currMPosY = null;
    ready = null;
    animateFlag = false;
    tweenStill = null;
    tweenFront = null;
    tweenBack = null;
    tweenLeft = null;
    tweenRight = null;
    tweenEndMov = null;
    tweenBackGround = null;
    tweenActionRight = null
    tweenExitMenu = null
    flagSetOnlyOnce = true
    ammo = null;
    handlerAmmo = null;
    movementDir = { l: 0, r: 0, f: 0, b: 0 }
    flagStillAnim = false;
    flagMovAnim = false;
    tutorialRoom = null
    arrayTutorialRoom = []
    arrayWeapon = []
    collisionPair = null
    collisione = null
    roomReady = false
    weapon = null
    weaponReady = false
    flagEndMov = false
    flagMouseDown = false
    lastX = 0
    flagActionRight = false
    flagActionAnimation = false
    weaponPicked = false
    equipped = false
    weaponEquipped = null
    attackEnabled = false
    WeaponPivot = new THREE.Object3D()
    portal = null
    worldPosModel = new THREE.Vector3()
    worldPosSword = new THREE.Vector3()
    worldPosScythe = new THREE.Vector3()
    worldPosPortal = new THREE.Vector3()
    onMouseDown = this.onMouseDown.bind(this)
    onMouseUp = this.onMouseUp.bind(this)
    onMouseMove = this.onMouseMove.bind(this)
    onDocumentKeyDown = this.onDocumentKeyDown.bind(this)
    onDocumentKeyUp = this.onDocumentKeyUp.bind(this)
    traversePortalFlag = false
    tweenTraversePortal = null
    flagTraversed = false
    tweenZoomIn = null
    zoomedIn = false
    tweenZoomOut = null
    tweenExitPortal = null
    flagExitFromPortal = false
    flagExitedFromPortal = false
    tweenCamBackAndPortalDisappear = null
    flagAdjustCamAndPortal = false
    flagLoadMenu = false
    flagSetListeners = false
    flagMenuExited = false
    flagMenuExiting = false
    tweenLeftHand = null


    LeftFwdSkirt2 = null;
    LeftFwdSkirt3 = null;
    LeftFwdSkirt4 = null;
    LeftFwdSkirt5 = null;
    LeftFwdBelt1 = null;
    LeftFwdBelt2 = null;
    LeftFwdBelt3 = null;
    LeftFwdBelt4 = null;
    LeftFwdBelt5 = null;
    LeftFwdBelt6 = null;
    LeftMidSkirt2 = null;
    LeftMidSkirt3 = null;
    LeftMidSkirt4 = null;
    LeftMidSkirt5 = null;
    LeftMidSkirt6 = null;
    LeftMidBelt1 = null;
    LeftMidBelt2 = null;
    LeftMidBelt3 = null;
    LeftMidBelt4 = null;
    LeftMidBelt5 = null;
    LeftMidBelt6 = null;
    LeftBwdSkirt2 = null;
    LeftBwdSkirt3 = null;
    LeftBwdSkirt4 = null;
    LeftBwdSkirt5 = null;
    LeftBwdBelt1 = null;
    LeftBwdBelt2 = null;
    LeftBwdBelt3 = null;
    LeftBwdBelt4 = null;
    LeftBwdBelt5 = null;
    LeftBwdBelt6 = null;
    RightFwdSkirt2 = null;
    RightFwdSkirt3 = null;
    RightFwdSkirt4 = null;
    RightFwdSkirt5 = null;
    RightFwdBelt1 = null;
    RightFwdBelt2 = null;
    RightFwdBelt3 = null;
    RightFwdBelt4 = null;
    RightFwdBelt5 = null;
    RightFwdBelt6 = null;
    RightMidSkirt2 = null;
    RightMidSkirt3 = null;
    RightMidSkirt4 = null;
    RightMidSkirt5 = null;
    RightMidSkirt6 = null;
    RightMidBelt1 = null;
    RightMidBelt2 = null;
    RightMidBelt3 = null;
    RightMidBelt4 = null;
    RightMidBelt5 = null;
    RightMidBelt6 = null;
    RightBwdSkirt2 = null;
    RightBwdSkirt3 = null;
    RightBwdSkirt4 = null;
    RightBwdSkirt5 = null;
    RightBwdBelt1 = null;
    RightBwdBelt2 = null;
    RightBwdBelt3 = null;
    RightBwdBelt4 = null;
    RightBwdBelt5 = null;
    RightBwdBelt6 = null;
    Spine = null;
    Spine1 = null;
    Neck = null;
    Head = null;
    HoodLeftBtm = null;
    HoodRightBtm = null;
    HoodRightMid = null;
    HoodLeftMid = null;
    HoodRightTop = null;
    HoodTop = null;
    HoodLefTop = null;
    LeftShoulder = null;
    LeftArm = null;
    LeftForeArm = null;
    LeftHand = null;
    LeftFingerBase = null;
    LeftHandMiddle1 = null;
    LeftHandMiddle2 = null;
    LeftHandMiddle3 = null;
    LeftHandMiddle4 = null;
    LeftHandRing1 = null;
    LeftHandRing2 = null;
    LeftHandRing3 = null;
    LeftHandRing4 = null;
    LeftHandIndex1 = null;
    LeftHandIndex2 = null;
    LeftHandIndex3 = null;
    LeftHandIndex4 = null;
    LeftHandPinky1 = null;
    LeftHandPinky2 = null;
    LeftHandPinky3 = null;
    LeftHandPinky4 = null;
    LeftHandThumb1 = null;
    LeftHandThumb2 = null;
    LeftHandThumb3 = null;
    LeftForeArmRoll = null;
    LeftSleeve = null;
    LeftArmRoll = null;
    LeftWingBase = null;
    LeftChain1 = null;
    LeftChain2 = null;
    LeftChain3 = null;
    LeftChain4 = null;
    LeftChain5 = null;
    LeftChain6 = null;
    RightChain1 = null;
    RightChain2 = null;
    RightChain3 = null;
    RightChain4 = null;
    RightChain5 = null;
    RightChain6 = null;
    RightShoulder = null;
    RightArm = null;
    RightForeArm = null;
    RightHand = null;
    RightFingerBase = null;
    RightHandMiddle1 = null;
    RightHandMiddle2 = null;
    RightHandMiddle3 = null;
    RightHandMiddle4 = null;
    RightHandRing1 = null;
    RightHandRing2 = null;
    RightHandRing3 = null;
    RightHandRing4 = null;
    RightHandIndex1 = null;
    RightHandIndex2 = null;
    RightHandIndex3 = null;
    RightHandIndex4 = null;
    RightHandPinky1 = null;
    RightHandPinky2 = null;
    RightHandPinky3 = null;
    RightHandPinky4 = null;
    RightHandThumb1 = null;
    RightHandThumb2 = null;
    RightHandThumb3 = null;
    RightForeArmRoll = null;
    RightSleeve = null;
    RightArmRoll = null;
    RightWingBase = null;

    skirtCurRotation = null;
    beltCurRotation = null;
    wingCurRotation = null;
    rightHandCurRotation = null
    rightArmCurRotation = null
    leftHandCurRotation = null
    leftArmCurRotation = null
    weaponPivotCurRotation = null
    weaponCurRotation = null

    box = null
    uid = null


    constructor(ammo, handlerAmmo, scene, camera, model, xScale, yScale, zScale, xPos, yPos, zPos, tutorialRoom, weapon, portal, uid) {
        this.historyKey = new Set()
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
        this.tutorialRoom = tutorialRoom
        this.weapon = weapon
        this.portal = portal
        this.arrayTutorialRoom = this.tutorialRoom.getTutorialRoomElements()
        this.arrayWeapon = this.weapon.getWeapons()
        this.uid = uid

        Promise.resolve(model).then((data) => {
            this.model = data;
            this.model.scale.set(this.xScale, this.yScale, this.zScale);
            this.model.position.x = this.xPos
            this.model.position.z = this.zPos;
            this.model.position.y = this.yPos;
            this.currMPosY = this.yPos

            this.LeftFwdSkirt2 = this.model.getObjectByName("LeftFwdSkirt2_05")
            this.LeftFwdSkirt3 = this.model.getObjectByName("LeftFwdSkirt3_06")
            this.LeftFwdSkirt4 = this.model.getObjectByName("LeftFwdSkirt4_07")
            this.LeftFwdSkirt5 = this.model.getObjectByName("LeftFwdSkirt5_08")

            this.LeftMidSkirt2 = this.model.getObjectByName("LeftMidSkirt2_016")
            this.LeftMidSkirt3 = this.model.getObjectByName("LeftMidSkirt3_017")
            this.LeftMidSkirt4 = this.model.getObjectByName("LeftMidSkirt4_018")
            this.LeftMidSkirt5 = this.model.getObjectByName("LeftMidSkirt5_019")
            this.LeftMidSkirt6 = this.model.getObjectByName("LeftMidSkirt6_020")

            this.LeftBwdSkirt2 = this.model.getObjectByName("LeftBwdSkirt2_028")
            this.LeftBwdSkirt3 = this.model.getObjectByName("LeftBwdSkirt3_029")
            this.LeftBwdSkirt4 = this.model.getObjectByName("LeftBwdSkirt4_030")
            this.LeftBwdSkirt5 = this.model.getObjectByName("LeftBwdSkirt5_031")

            this.RightFwdSkirt2 = this.model.getObjectByName("RightFwdSkirt2_043")
            this.RightFwdSkirt3 = this.model.getObjectByName("RightFwdSkirt3_044")
            this.RightFwdSkirt4 = this.model.getObjectByName("RightFwdSkirt4_045")
            this.RightFwdSkirt5 = this.model.getObjectByName("RightFwdSkirt5_046")

            this.RightMidSkirt2 = this.model.getObjectByName("RightMidSkirt2_054")
            this.RightMidSkirt3 = this.model.getObjectByName("RightMidSkirt3_055")
            this.RightMidSkirt4 = this.model.getObjectByName("RightMidSkirt4_056")
            this.RightMidSkirt5 = this.model.getObjectByName("RightMidSkirt5_057")
            this.RightMidSkirt6 = this.model.getObjectByName("RightMidSkirt6_058")

            this.RightBwdSkirt2 = this.model.getObjectByName("RightBwdSkirt2_064")
            this.RightBwdSkirt3 = this.model.getObjectByName("RightBwdSkirt3_065")
            this.RightBwdSkirt4 = this.model.getObjectByName("RightBwdSkirt4_066")
            this.RightBwdSkirt5 = this.model.getObjectByName("RightBwdSkirt5_067")

            this.skirtCurRotation = {
                lfs2x: this.LeftFwdSkirt2.rotation.x, lfs2y: this.LeftFwdSkirt2.rotation.y, lfs2z: this.LeftFwdSkirt2.rotation.z,
                lfs3x: this.LeftFwdSkirt3.rotation.x, lfs3y: this.LeftFwdSkirt3.rotation.y, lfs3z: this.LeftFwdSkirt3.rotation.z,
                lfs4x: this.LeftFwdSkirt4.rotation.x, lfs4y: this.LeftFwdSkirt4.rotation.y, lfs4z: this.LeftFwdSkirt4.rotation.z,
                lfs5x: this.LeftFwdSkirt5.rotation.x, lfs5y: this.LeftFwdSkirt5.rotation.y, lfs5z: this.LeftFwdSkirt5.rotation.z,

                lms2x: this.LeftMidSkirt2.rotation.x, lms2y: this.LeftMidSkirt2.rotation.y, lms2z: this.LeftMidSkirt2.rotation.z,
                lms3x: this.LeftMidSkirt3.rotation.x, lms3y: this.LeftMidSkirt3.rotation.y, lms3z: this.LeftMidSkirt3.rotation.z,
                lms4x: this.LeftMidSkirt4.rotation.x, lms4y: this.LeftMidSkirt4.rotation.y, lms4z: this.LeftMidSkirt4.rotation.z,
                lms5x: this.LeftMidSkirt5.rotation.x, lms5y: this.LeftMidSkirt5.rotation.y, lms5z: this.LeftMidSkirt5.rotation.z,
                lms6x: this.LeftMidSkirt6.rotation.x, lms6y: this.LeftMidSkirt6.rotation.y, lms6z: this.LeftMidSkirt6.rotation.z,

                lbs2x: this.LeftBwdSkirt2.rotation.x, lbs2y: this.LeftBwdSkirt2.rotation.y, lbs2z: this.LeftBwdSkirt2.rotation.z,
                lbs3x: this.LeftBwdSkirt3.rotation.x, lbs3y: this.LeftBwdSkirt3.rotation.y, lbs3z: this.LeftBwdSkirt3.rotation.z,
                lbs4x: this.LeftBwdSkirt4.rotation.x, lbs4y: this.LeftBwdSkirt4.rotation.y, lbs4z: this.LeftBwdSkirt4.rotation.z,
                lbs5x: this.LeftBwdSkirt5.rotation.x, lbs5y: this.LeftBwdSkirt5.rotation.y, lbs5z: this.LeftBwdSkirt5.rotation.z,

                rfs2x: this.RightFwdSkirt2.rotation.x, rfs2y: this.RightFwdSkirt2.rotation.y, rfs2z: this.RightFwdSkirt2.rotation.z,
                rfs3x: this.RightFwdSkirt3.rotation.x, rfs3y: this.RightFwdSkirt3.rotation.y, rfs3z: this.RightFwdSkirt3.rotation.z,
                rfs4x: this.RightFwdSkirt4.rotation.x, rfs4y: this.RightFwdSkirt4.rotation.y, rfs4z: this.RightFwdSkirt4.rotation.z,
                rfs5x: this.RightFwdSkirt5.rotation.x, rfs5y: this.RightFwdSkirt5.rotation.y, rfs5z: this.RightFwdSkirt5.rotation.z,

                rms2x: this.RightMidSkirt2.rotation.x, rms2y: this.RightMidSkirt2.rotation.y, rms2z: this.RightMidSkirt2.rotation.z,
                rms3x: this.RightMidSkirt3.rotation.x, rms3y: this.RightMidSkirt3.rotation.y, rms3z: this.RightMidSkirt3.rotation.z,
                rms4x: this.RightMidSkirt4.rotation.x, rms4y: this.RightMidSkirt4.rotation.y, rms4z: this.RightMidSkirt4.rotation.z,
                rms5x: this.RightMidSkirt5.rotation.x, rms5y: this.RightMidSkirt5.rotation.y, rms5z: this.RightMidSkirt5.rotation.z,
                rms6x: this.RightMidSkirt6.rotation.x, rms6y: this.RightMidSkirt6.rotation.y, rms6z: this.RightMidSkirt6.rotation.z,

                rbs2x: this.RightBwdSkirt2.rotation.x, rbs2y: this.RightBwdSkirt2.rotation.y, rbs2z: this.RightBwdSkirt2.rotation.z,
                rbs3x: this.RightBwdSkirt3.rotation.x, rbs3y: this.RightBwdSkirt3.rotation.y, rbs3z: this.RightBwdSkirt3.rotation.z,
                rbs4x: this.RightBwdSkirt4.rotation.x, rbs4y: this.RightBwdSkirt4.rotation.y, rbs4z: this.RightBwdSkirt4.rotation.z,
                rbs5x: this.RightBwdSkirt5.rotation.x, rbs5y: this.RightBwdSkirt5.rotation.y, rbs5z: this.RightBwdSkirt5.rotation.z,
            }

            this.LeftFwdBelt1 = this.model.getObjectByName("LeftFwdBelt1_09")
            this.LeftFwdBelt2 = this.model.getObjectByName("LeftFwdBelt2_010")
            this.LeftFwdBelt3 = this.model.getObjectByName("LeftFwdBelt3_011")
            this.LeftFwdBelt4 = this.model.getObjectByName("LeftFwdBelt4_012")
            this.LeftFwdBelt5 = this.model.getObjectByName("LeftFwdBelt5_013")

            this.LeftMidBelt1 = this.model.getObjectByName("LeftMidBelt1_021")
            this.LeftMidBelt2 = this.model.getObjectByName("LeftMidBelt2_022")
            this.LeftMidBelt3 = this.model.getObjectByName("LeftMidBelt3_023")
            this.LeftMidBelt4 = this.model.getObjectByName("LeftMidBelt4_024")
            this.LeftMidBelt5 = this.model.getObjectByName("LeftMidBelt5_025")

            this.LeftBwdBelt1 = this.model.getObjectByName("LeftBwdBelt1_032")
            this.LeftBwdBelt2 = this.model.getObjectByName("LeftBwdBelt2_033")
            this.LeftBwdBelt3 = this.model.getObjectByName("LeftBwdBelt3_034")
            this.LeftBwdBelt4 = this.model.getObjectByName("LeftBwdBelt4_035")
            this.LeftBwdBelt5 = this.model.getObjectByName("LeftBwdBelt5_036")

            this.RightFwdBelt1 = this.model.getObjectByName("RightFwdBelt1_047")
            this.RightFwdBelt2 = this.model.getObjectByName("RightFwdBelt2_048")
            this.RightFwdBelt3 = this.model.getObjectByName("RightFwdBelt3_049")
            this.RightFwdBelt4 = this.model.getObjectByName("RightFwdBelt4_050")
            this.RightFwdBelt5 = this.model.getObjectByName("RightFwdBelt5_051")

            this.RightMidBelt1 = this.model.getObjectByName("RightMidBelt1_059")
            this.RightMidBelt2 = this.model.getObjectByName("RightMidBelt2_060")
            this.RightMidBelt3 = this.model.getObjectByName("RightMidBelt3_061")
            this.RightMidBelt4 = this.model.getObjectByName("RightMidBelt4_062")
            this.RightMidBelt5 = this.model.getObjectByName("RightMidBelt5_063")

            this.RightBwdBelt1 = this.model.getObjectByName("RightBwdBelt1_068")
            this.RightBwdBelt2 = this.model.getObjectByName("RightBwdBelt2_069")
            this.RightBwdBelt3 = this.model.getObjectByName("RightBwdBelt3_070")
            this.RightBwdBelt4 = this.model.getObjectByName("RightBwdBelt4_071")
            this.RightBwdBelt5 = this.model.getObjectByName("RightBwdBelt5_072")


            this.LeftFwdBelt1.rotation.z = this.LeftFwdBelt1.rotation.z - 0.1
            this.LeftMidBelt1.rotation.z = this.LeftMidBelt1.rotation.z - 0.1
            this.LeftBwdBelt2.rotation.z = this.LeftBwdBelt2.rotation.z + 0.1
            this.RightFwdBelt1.rotation.z = this.RightFwdBelt1.rotation.z - 0.1
            this.RightMidBelt1.rotation.z = this.RightMidBelt1.rotation.z - 0.1
            this.RightBwdBelt2.rotation.z = this.RightBwdBelt2.rotation.z + 0.1


            this.beltCurRotation = {
                lfb2x: this.LeftFwdBelt2.rotation.x, lfb2y: this.LeftFwdBelt2.rotation.y, lfb2z: this.LeftFwdBelt2.rotation.z,
                lfb3x: this.LeftFwdBelt3.rotation.x, lfb3y: this.LeftFwdBelt3.rotation.y, lfb3z: this.LeftFwdBelt3.rotation.z,
                lfb4x: this.LeftFwdBelt4.rotation.x, lfb4y: this.LeftFwdBelt4.rotation.y, lfb4z: this.LeftFwdBelt4.rotation.z,
                lfb5x: this.LeftFwdBelt5.rotation.x, lfb5y: this.LeftFwdBelt5.rotation.y, lfb5z: this.LeftFwdBelt5.rotation.z,

                lmb2x: this.LeftMidBelt2.rotation.x, lmb2y: this.LeftMidBelt2.rotation.y, lmb2z: this.LeftMidBelt2.rotation.z,
                lmb3x: this.LeftMidBelt3.rotation.x, lmb3y: this.LeftMidBelt3.rotation.y, lmb3z: this.LeftMidBelt3.rotation.z,
                lmb4x: this.LeftMidBelt4.rotation.x, lmb4y: this.LeftMidBelt4.rotation.y, lmb4z: this.LeftMidBelt4.rotation.z,
                lmb5x: this.LeftMidBelt5.rotation.x, lmb5y: this.LeftMidBelt5.rotation.y, lmb5z: this.LeftMidBelt5.rotation.z,

                lbb2x: this.LeftBwdBelt2.rotation.x, lbb2y: this.LeftBwdBelt2.rotation.y, lbb2z: this.LeftBwdBelt2.rotation.z,
                lbb3x: this.LeftBwdBelt3.rotation.x, lbb3y: this.LeftBwdBelt3.rotation.y, lbb3z: this.LeftBwdBelt3.rotation.z,
                lbb4x: this.LeftBwdBelt4.rotation.x, lbb4y: this.LeftBwdBelt4.rotation.y, lbb4z: this.LeftBwdBelt4.rotation.z,
                lbb5x: this.LeftBwdBelt5.rotation.x, lbb5y: this.LeftBwdBelt5.rotation.y, lbb5z: this.LeftBwdBelt5.rotation.z,

                rfb2x: this.RightFwdBelt2.rotation.x, rfb2y: this.RightFwdBelt2.rotation.y, rfb2z: this.RightFwdBelt2.rotation.z,
                rfb3x: this.RightFwdBelt3.rotation.x, rfb3y: this.RightFwdBelt3.rotation.y, rfb3z: this.RightFwdBelt3.rotation.z,
                rfb4x: this.RightFwdBelt4.rotation.x, rfb4y: this.RightFwdBelt4.rotation.y, rfb4z: this.RightFwdBelt4.rotation.z,
                rfb5x: this.RightFwdBelt5.rotation.x, rfb5y: this.RightFwdBelt5.rotation.y, rfb5z: this.RightFwdBelt5.rotation.z,

                rmb2x: this.RightMidBelt2.rotation.x, rmb2y: this.RightMidBelt2.rotation.y, rmb2z: this.RightMidBelt2.rotation.z,
                rmb3x: this.RightMidBelt3.rotation.x, rmb3y: this.RightMidBelt3.rotation.y, rmb3z: this.RightMidBelt3.rotation.z,
                rmb4x: this.RightMidBelt4.rotation.x, rmb4y: this.RightMidBelt4.rotation.y, rmb4z: this.RightMidBelt4.rotation.z,
                rmb5x: this.RightMidBelt5.rotation.x, rmb5y: this.RightMidBelt5.rotation.y, rmb5z: this.RightMidBelt5.rotation.z,

                rbb2x: this.RightBwdBelt2.rotation.x, rbb2y: this.RightBwdBelt2.rotation.y, rbb2z: this.RightBwdBelt2.rotation.z,
                rbb3x: this.RightBwdBelt3.rotation.x, rbb3y: this.RightBwdBelt3.rotation.y, rbb3z: this.RightBwdBelt3.rotation.z,
                rbb4x: this.RightBwdBelt4.rotation.x, rbb4y: this.RightBwdBelt4.rotation.y, rbb4z: this.RightBwdBelt4.rotation.z,
                rbb5x: this.RightBwdBelt5.rotation.x, rbb5y: this.RightBwdBelt5.rotation.y, rbb5z: this.RightBwdBelt5.rotation.z,
            }

            this.LeftWingBase = this.model.getObjectByName("LeftWingBase_0138")
            this.RightWingBase = this.model.getObjectByName("RightWingBase_0184")

            this.RightWingBase.rotation.z = this.RightWingBase.rotation.z + 0.3

            this.wingCurRotation = {
                lwbx: this.LeftWingBase.rotation.x, lwby: this.LeftWingBase.rotation.y, lwbz: this.LeftWingBase.rotation.z,
                rwbx: this.RightWingBase.rotation.x, rwby: this.RightWingBase.rotation.y, rwbz: this.RightWingBase.rotation.z
            }

            this.Spine = this.model.getObjectByName("Spine_074")
            this.Spine1 = this.model.getObjectByName("Spine1_075")

            this.LeftShoulder = this.model.getObjectByName("LeftShoulder_0111")
            this.LeftArm = this.model.getObjectByName("LeftArm_0112")
            this.LeftForeArm = this.model.getObjectByName("LeftForeArm_0113")
            this.LeftForeArmRoll = this.model.getObjectByName("LeftForeArmRoll_0135")
            this.LeftArmRoll = this.model.getObjectByName("LeftArmRoll_0137")
            this.LeftSleeve = this.model.getObjectByName("LeftSleeve_0136")
            this.leftArmCurRotation = {
                lsx: this.LeftShoulder.rotation.x, lsy: this.LeftShoulder.rotation.y, lsz: this.LeftShoulder.rotation.z,
                lax: this.LeftArm.rotation.x, lay: this.LeftArm.rotation.y, laz: this.LeftArm.rotation.z,
                lfax: this.LeftForeArm.rotation.x, lfay: this.LeftForeArm.rotation.y, lfaz: this.LeftForeArm.rotation.z,
                lfarx: this.LeftForeArmRoll.rotation.x, lfary: this.LeftForeArmRoll.rotation.y, lfarz: this.LeftForeArmRoll.rotation.z,
                larx: this.LeftArmRoll.rotation.x, lary: this.LeftArmRoll.rotation.y, larz: this.LeftArmRoll.rotation.z,
                lslx: this.LeftSleeve.rotation.x, lsly: this.LeftSleeve.rotation.y, lslz: this.LeftSleeve.rotation.z
            }
            this.LeftHand = this.model.getObjectByName("LeftHand_0114")
            this.LeftFingerBase = this.model.getObjectByName("LeftFingerBase_0115")
            this.LeftHandMiddle1 = this.model.getObjectByName("LeftHandMiddle1_0116")
            this.LeftHandMiddle2 = this.model.getObjectByName("LeftHandMiddle2_0117")
            this.LeftHandMiddle3 = this.model.getObjectByName("LeftHandMiddle3_0118")
            this.LeftHandMiddle4 = this.model.getObjectByName("LeftHandMiddle4_0119")
            this.LeftHandRing1 = this.model.getObjectByName("LeftHandRing1_0120")
            this.LeftHandRing2 = this.model.getObjectByName("LeftHandRing2_0121")
            this.LeftHandRing3 = this.model.getObjectByName("LeftHandRing3_0122")
            this.LeftHandRing4 = this.model.getObjectByName("LeftHandRing4_0123")
            this.LeftHandIndex1 = this.model.getObjectByName("LeftHandIndex1_0124")
            this.LeftHandIndex2 = this.model.getObjectByName("LeftHandIndex2_0125")
            this.LeftHandIndex3 = this.model.getObjectByName("LeftHandIndex3_0126")
            this.LeftHandIndex4 = this.model.getObjectByName("LeftHandIndex4_0127")
            this.LeftHandPinky1 = this.model.getObjectByName("LeftHandPinky1_0128")
            this.LeftHandPinky2 = this.model.getObjectByName("LeftHandPinky2_0129")
            this.LeftHandPinky3 = this.model.getObjectByName("LeftHandPinky3_0130")
            this.LeftHandPinky4 = this.model.getObjectByName("LeftHandPinky4_0131")
            this.LeftHandThumb1 = this.model.getObjectByName("LeftHandThumb1_0132")
            this.LeftHandThumb2 = this.model.getObjectByName("LeftHandThumb2_0133")
            this.LeftHandThumb3 = this.model.getObjectByName("LeftHandThumb3_0134")
            this.leftHandCurRotation = {
                lhx: this.LeftHand.rotation.x, lhy: this.LeftHand.rotation.y, lhz: this.LeftHand.rotation.z,
                lfbx: this.LeftFingerBase.rotation.x, lfby: this.LeftFingerBase.rotation.y, lfbz: this.LeftFingerBase.rotation.z,
                lhm1x: this.LeftHandMiddle1.rotation.x, lhm1y: this.LeftHandMiddle1.rotation.y, lhm1z: this.LeftHandMiddle1.rotation.z,
                lhm2x: this.LeftHandMiddle2.rotation.x, lhm2y: this.LeftHandMiddle2.rotation.y, lhm2z: this.LeftHandMiddle2.rotation.z,
                lhm3x: this.LeftHandMiddle3.rotation.x, lhm3y: this.LeftHandMiddle3.rotation.y, lhm3z: this.LeftHandMiddle3.rotation.z,
                lhm4x: this.LeftHandMiddle4.rotation.x, lhm4y: this.LeftHandMiddle4.rotation.y, lhm4z: this.LeftHandMiddle4.rotation.z,
                lhr1x: this.LeftHandRing1.rotation.x, lhr1y: this.LeftHandRing1.rotation.y, lhr1z: this.LeftHandRing1.rotation.z,
                lhr2x: this.LeftHandRing2.rotation.x, lhr2y: this.LeftHandRing2.rotation.y, lhr2z: this.LeftHandRing2.rotation.z,
                lhr3x: this.LeftHandRing3.rotation.x, lhr3y: this.LeftHandRing3.rotation.y, lhr3z: this.LeftHandRing3.rotation.z,
                lhr4x: this.LeftHandRing4.rotation.x, lhr4y: this.LeftHandRing4.rotation.y, lhr4z: this.LeftHandRing4.rotation.z,
                lhi1x: this.LeftHandIndex1.rotation.x, lhi1y: this.LeftHandIndex1.rotation.y, lhi1z: this.LeftHandIndex1.rotation.z,
                lhi2x: this.LeftHandIndex2.rotation.x, lhi2y: this.LeftHandIndex2.rotation.y, lhi2z: this.LeftHandIndex2.rotation.z,
                lhi3x: this.LeftHandIndex3.rotation.x, lhi3y: this.LeftHandIndex3.rotation.y, lhi3z: this.LeftHandIndex3.rotation.z,
                lhi4x: this.LeftHandIndex4.rotation.x, lhi4y: this.LeftHandIndex4.rotation.y, lhi4z: this.LeftHandIndex4.rotation.z,
                lhp1x: this.LeftHandPinky1.rotation.x, lhp1y: this.LeftHandPinky1.rotation.y, lhp1z: this.LeftHandPinky1.rotation.z,
                lhp2x: this.LeftHandPinky2.rotation.x, lhp2y: this.LeftHandPinky2.rotation.y, lhp2z: this.LeftHandPinky2.rotation.z,
                lhp3x: this.LeftHandPinky3.rotation.x, lhp3y: this.LeftHandPinky3.rotation.y, lhp3z: this.LeftHandPinky3.rotation.z,
                lhp4x: this.LeftHandPinky4.rotation.x, lhp4y: this.LeftHandPinky4.rotation.y, lhp4z: this.LeftHandPinky4.rotation.z,
                lht1x: this.LeftHandThumb1.rotation.x, lht1y: this.LeftHandThumb1.rotation.y, lht1z: this.LeftHandThumb1.rotation.z,
                lht2x: this.LeftHandThumb2.rotation.x, lht2y: this.LeftHandThumb2.rotation.y, lht2z: this.LeftHandThumb2.rotation.z,
                lht3x: this.LeftHandThumb3.rotation.x, lht3y: this.LeftHandThumb3.rotation.y, lht3z: this.LeftHandThumb3.rotation.z
            }


            this.Neck = this.model.getObjectByName("Neck_076")
            this.Head = this.model.getObjectByName("Head_077")
            this.HoodLeftBtm = this.model.getObjectByName("HoodLeftBtm_092")
            this.HoodRightBtm = this.model.getObjectByName("HoodRightBtm_093")
            this.HoodRightMid = this.model.getObjectByName("HoodRightMid_094")
            this.HoodLeftMid = this.model.getObjectByName("HoodLeftMid_095")
            this.HoodRightTop = this.model.getObjectByName("HoodRightTop_096")
            this.HoodTop = this.model.getObjectByName("HoodTop_097")
            this.HoodLefTop = this.model.getObjectByName("HoodLefTop_098")

            this.RightShoulder = this.model.getObjectByName("RightShoulder_0157")
            this.RightArm = this.model.getObjectByName("RightArm_0158")
            this.RightForeArm = this.model.getObjectByName("RightForeArm_0159")
            this.RightForeArmRoll = this.model.getObjectByName("RightForeArmRoll_0181")
            this.RightArmRoll = this.model.getObjectByName("RightArmRoll_0183")
            this.RightSleeve = this.model.getObjectByName("RightSleeve_0182")
            this.rightArmCurRotation = {
                rsx: this.RightShoulder.rotation.x, rsy: this.RightShoulder.rotation.y, rsz: this.RightShoulder.rotation.z,
                rax: this.RightArm.rotation.x, ray: this.RightArm.rotation.y, raz: this.RightArm.rotation.z,
                rfax: this.RightForeArm.rotation.x, rfay: this.RightForeArm.rotation.y, rfaz: this.RightForeArm.rotation.z,
                rfarx: this.RightForeArmRoll.rotation.x, rfary: this.RightForeArmRoll.rotation.y, rfarz: this.RightForeArmRoll.rotation.z,
                rarx: this.RightArmRoll.rotation.x, rary: this.RightArmRoll.rotation.y, rarz: this.RightArmRoll.rotation.z,
                rslx: this.RightSleeve.rotation.x, rsly: this.RightSleeve.rotation.y, rslz: this.RightSleeve.rotation.z
            }

            this.RightHand = this.model.getObjectByName("RightHand_0160")
            this.RightFingerBase = this.model.getObjectByName("RightFingerBase_0161")
            this.RightHandMiddle1 = this.model.getObjectByName("RightHandMiddle1_0162")
            this.RightHandMiddle2 = this.model.getObjectByName("RightHandMiddle2_0163")
            this.RightHandMiddle3 = this.model.getObjectByName("RightHandMiddle3_0164")
            this.RightHandMiddle4 = this.model.getObjectByName("RightHandMiddle4_0165")
            this.RightHandRing1 = this.model.getObjectByName("RightHandRing1_0166")
            this.RightHandRing2 = this.model.getObjectByName("RightHandRing2_0167")
            this.RightHandRing3 = this.model.getObjectByName("RightHandRing3_0168")
            this.RightHandRing4 = this.model.getObjectByName("RightHandRing4_0169")
            this.RightHandIndex1 = this.model.getObjectByName("RightHandIndex1_0170")
            this.RightHandIndex2 = this.model.getObjectByName("RightHandIndex2_0171")
            this.RightHandIndex3 = this.model.getObjectByName("RightHandIndex3_0172")
            this.RightHandIndex4 = this.model.getObjectByName("RightHandIndex4_0173")
            this.RightHandPinky1 = this.model.getObjectByName("RightHandPinky1_0174")
            this.RightHandPinky2 = this.model.getObjectByName("RightHandPinky2_0175")
            this.RightHandPinky3 = this.model.getObjectByName("RightHandPinky3_0176")
            this.RightHandPinky4 = this.model.getObjectByName("RightHandPinky4_0177")
            this.RightHandThumb1 = this.model.getObjectByName("RightHandThumb1_0178")
            this.RightHandThumb2 = this.model.getObjectByName("RightHandThumb2_0179")
            this.RightHandThumb3 = this.model.getObjectByName("RightHandThumb3_0180")
            this.rightHandCurRotation = {
                rhx: this.RightHand.rotation.x, rhy: this.RightHand.rotation.y, rhz: this.RightHand.rotation.z,
                rfbx: this.RightFingerBase.rotation.x, rfby: this.RightFingerBase.rotation.y, rfbz: this.RightFingerBase.rotation.z,
                rhm1x: this.RightHandMiddle1.rotation.x, rhm1y: this.RightHandMiddle1.rotation.y, rhm1z: this.RightHandMiddle1.rotation.z,
                rhm2x: this.RightHandMiddle2.rotation.x, rhm2y: this.RightHandMiddle2.rotation.y, rhm2z: this.RightHandMiddle2.rotation.z,
                rhm3x: this.RightHandMiddle3.rotation.x, rhm3y: this.RightHandMiddle3.rotation.y, rhm3z: this.RightHandMiddle3.rotation.z,
                rhm4x: this.RightHandMiddle4.rotation.x, rhm4y: this.RightHandMiddle4.rotation.y, rhm4z: this.RightHandMiddle4.rotation.z,
                rhr1x: this.RightHandRing1.rotation.x, rhr1y: this.RightHandRing1.rotation.y, rhr1z: this.RightHandRing1.rotation.z,
                rhr2x: this.RightHandRing2.rotation.x, rhr2y: this.RightHandRing2.rotation.y, rhr2z: this.RightHandRing2.rotation.z,
                rhr3x: this.RightHandRing3.rotation.x, rhr3y: this.RightHandRing3.rotation.y, rhr3z: this.RightHandRing3.rotation.z,
                rhr4x: this.RightHandRing4.rotation.x, rhr4y: this.RightHandRing4.rotation.y, rhr4z: this.RightHandRing4.rotation.z,
                rhi1x: this.RightHandIndex1.rotation.x, rhi1y: this.RightHandIndex1.rotation.y, rhi1z: this.RightHandIndex1.rotation.z,
                rhi2x: this.RightHandIndex2.rotation.x, rhi2y: this.RightHandIndex2.rotation.y, rhi2z: this.RightHandIndex2.rotation.z,
                rhi3x: this.RightHandIndex3.rotation.x, rhi3y: this.RightHandIndex3.rotation.y, rhi3z: this.RightHandIndex3.rotation.z,
                rhi4x: this.RightHandIndex4.rotation.x, rhi4y: this.RightHandIndex4.rotation.y, rhi4z: this.RightHandIndex4.rotation.z,
                rhp1x: this.RightHandPinky1.rotation.x, rhp1y: this.RightHandPinky1.rotation.y, rhp1z: this.RightHandPinky1.rotation.z,
                rhp2x: this.RightHandPinky2.rotation.x, rhp2y: this.RightHandPinky2.rotation.y, rhp2z: this.RightHandPinky2.rotation.z,
                rhp3x: this.RightHandPinky3.rotation.x, rhp3y: this.RightHandPinky3.rotation.y, rhp3z: this.RightHandPinky3.rotation.z,
                rhp4x: this.RightHandPinky4.rotation.x, rhp4y: this.RightHandPinky4.rotation.y, rhp4z: this.RightHandPinky4.rotation.z,
                rht1x: this.RightHandThumb1.rotation.x, rht1y: this.RightHandThumb1.rotation.y, rht1z: this.RightHandThumb1.rotation.z,
                rht2x: this.RightHandThumb2.rotation.x, rht2y: this.RightHandThumb2.rotation.y, rht2z: this.RightHandThumb2.rotation.z,
                rht3x: this.RightHandThumb3.rotation.x, rht3y: this.RightHandThumb3.rotation.y, rht3z: this.RightHandThumb3.rotation.z
            }


            {
                this.LeftChain1 = this.model.getObjectByName("LeftChain1_0145")
                this.LeftChain2 = this.model.getObjectByName("LeftChain2_0146")
                this.LeftChain3 = this.model.getObjectByName("LeftChain3_0147")
                this.LeftChain4 = this.model.getObjectByName("LeftChain4_0148")
                this.LeftChain5 = this.model.getObjectByName("LeftChain5_0149")
                this.LeftChain6 = this.model.getObjectByName("LeftChain6_0150")
                this.RightChain1 = this.model.getObjectByName("RightChain1_0151")
                this.RightChain2 = this.model.getObjectByName("RightChain2_0152")
                this.RightChain3 = this.model.getObjectByName("RightChain3_0153")
                this.RightChain4 = this.model.getObjectByName("RightChain4_0154")
                this.RightChain5 = this.model.getObjectByName("RightChain5_0155")
                this.RightChain6 = this.model.getObjectByName("RightChain6_0156")

                this.LeftChain1.rotation.x = -3.092741907310932
                this.LeftChain1.rotation.y = -0.22744792640911818
                this.LeftChain1.rotation.z = -3.058379504307676

                this.LeftChain2.rotation.x = 0.21559680328704048

                this.LeftChain4.rotation.y = -0.06756853029525563
                this.LeftChain4.rotation.z = -0.30489549235754665


                this.RightChain1.rotation.x = -2.940532720156433
                this.RightChain1.rotation.y = 0.20811825012551782
                this.RightChain1.rotation.z = -2.909881776004529

                this.RightChain4.rotation.x = 1.4274107487724708
                this.RightChain4.rotation.z = -0.2040706879066024
            }


            this.ready = true;
        })
        this.model = model
    }

    update(roomReady, weaponReady, startGame) {
        if (this.ready && roomReady && weaponReady) {
            if (this.flagSetOnlyOnce) {
                this.setRoomReady()
                this.flagSetOnlyOnce = false

                this.model.traverse(function (object) {

                    if (object.isMesh) {
                        object.castShadow = true;
                        object.receiveShadow = true;
                    }

                })

                this.model.rotation.y = Math.PI / 2

                let transform = new this.ammo.btTransform()
                transform.setIdentity();
                transform.setOrigin(new this.ammo.btVector3(this.model.position.x, this.model.position.y, this.model.position.z));
                let motionState = new this.ammo.btDefaultMotionState(transform);

                let shape = new this.ammo.btBoxShape(new this.ammo.btVector3(1.75, 0.8, 1.75));

                shape.setMargin(0.05);

                let localInertia = new this.ammo.btVector3(0, 0, 0);
                shape.calculateLocalInertia(1, localInertia);

                let rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(1, motionState, shape, localInertia);
                let rigidBody = new Ammo.btRigidBody(rigidBodyInfo);
                rigidBody.setAngularFactor(0, 0, 0)
                rigidBody.setActivationState(4)
                this.handlerAmmo.addRigidBodyToWorld(rigidBody)

                this.model.userData.physicsBody = rigidBody
                this.model.tag = "character"
                this.handlerAmmo.addRigidBodyToSet(this.model)


                this.collisionCallback()

                this.camera.position.set(this.camposxMenu, this.camposyMenu, this.camposzMenu)
                this.camera.lookAt(this.lookatxMenu, this.lookatyMenu, this.lookatzMenu)
                this.model.add(this.camera)
                this.scene.add(this.model)
            }
            else {
                this.flagLoadMenu = true
                if (!this.flagMenuExited && !this.flagMenuExiting && startGame) {
                    this.exitMenu()
                }
                else if (!this.flagMenuExited && this.flagMenuExiting && startGame) {
                    this.tweenExitMenu.update()
                }
                if (startGame && this.flagMenuExited) {
                    if (!this.flagSetListeners) {
                        this.flagSetListeners = true
                        document.addEventListener("keydown", this.onDocumentKeyDown)
                        document.addEventListener("keyup", this.onDocumentKeyUp)
                        document.addEventListener("mousedown", this.onMouseDown)
                        document.addEventListener("mousemove", this.onMouseMove)
                        document.addEventListener("mouseup", this.onMouseUp)
                        this.moveLeftHand()

                    }
                    this.tweenLeftHand.update()

                    if (!this.animateFlag && this.historyKey.size == 0) {
                        this.animateFlag = true;
                        this.startFluctuate()
                    }
                    else if (!this.animateFlag && this.historyKey.size != 0) {
                        if (this.flagStillAnim) {
                            this.tweenStill.stop()
                            this.tweenBackGround.update()
                        }
                        else {
                            if (!this.flagMovAnim && !this.flagEndMov) {
                                var tweenArgsMov = {
                                    lfs2x: this.skirtCurRotation.lfs2x,
                                    lfs2y: this.skirtCurRotation.lfs2y,
                                    lfs2z: this.skirtCurRotation.lfs2z,
                                    lms2y: this.skirtCurRotation.lms2y,
                                    lms2z: this.skirtCurRotation.lms2z,
                                    lbs2x: this.skirtCurRotation.lbs2x,
                                    lbs2y: this.skirtCurRotation.lbs2y,
                                    lbs2z: this.skirtCurRotation.lbs2z,
                                    rfs2x: this.skirtCurRotation.rfs2x,
                                    rfs2y: this.skirtCurRotation.rfs2y,
                                    rfs2z: this.skirtCurRotation.rfs2z,
                                    rms2y: this.skirtCurRotation.rms2y,
                                    rms2z: this.skirtCurRotation.rms2z,
                                    rbs2x: this.skirtCurRotation.rbs2x,
                                    rbs2y: this.skirtCurRotation.rbs2y,
                                    rbs2z: this.skirtCurRotation.rbs2z,


                                    lfs3x: this.skirtCurRotation.lfs3x,
                                    lfs3y: this.skirtCurRotation.lfs3y,
                                    lms3x: this.skirtCurRotation.lms3x,
                                    lbs3x: this.skirtCurRotation.lbs3x,
                                    lbs3y: this.skirtCurRotation.lbs3y,
                                    rfs3x: this.skirtCurRotation.rfs3x,
                                    rfs3y: this.skirtCurRotation.rfs3y,
                                    rms3x: this.skirtCurRotation.rms3x,
                                    rbs3x: this.skirtCurRotation.rbs3x,
                                    rbs3y: this.skirtCurRotation.rbs3y,

                                    lfs4y: this.skirtCurRotation.lfs4y,
                                    lms4y: this.skirtCurRotation.lms4y,
                                    lbs4y: this.skirtCurRotation.lbs4y,
                                    rfs4y: this.skirtCurRotation.rfs4y,
                                    rms4y: this.skirtCurRotation.rms4y,
                                    rbs4y: this.skirtCurRotation.rbs4y,

                                    lfs5y: this.skirtCurRotation.lfs5y,
                                    lms5y: this.skirtCurRotation.lms5y,
                                    lbs5y: this.skirtCurRotation.lbs5y,
                                    rfs5y: this.skirtCurRotation.rfs5y,
                                    rms5y: this.skirtCurRotation.rms5y,
                                    rbs5y: this.skirtCurRotation.rbs5y,

                                    lms6y: this.skirtCurRotation.lms6y,
                                    rms6y: this.skirtCurRotation.rms6y,

                                    lfb2y: this.beltCurRotation.lfb2y,
                                    lfb2z: this.beltCurRotation.lfb2z,
                                    lmb2y: this.beltCurRotation.lmb2y,
                                    lmb2z: this.beltCurRotation.lmb2z,
                                    lbb2y: this.beltCurRotation.lbb2y,
                                    lbb2z: this.beltCurRotation.lbb2z,
                                    rfb2y: this.beltCurRotation.rfb2y,
                                    rfb2z: this.beltCurRotation.rfb2z,
                                    rmb2y: this.beltCurRotation.rmb2y,
                                    rmb2z: this.beltCurRotation.rmb2z,
                                    rbb2y: this.beltCurRotation.rbb2y,
                                    rbb2z: this.beltCurRotation.rbb2z,

                                    lwbx: this.wingCurRotation.lwbx,
                                    lwbz: this.wingCurRotation.lwbz,
                                    rwbx: this.wingCurRotation.rwbx,
                                    rwbz: this.wingCurRotation.rwbz
                                }
                                var moveX = this.movementDir.f - this.movementDir.b
                                var moveZ = this.movementDir.r - this.movementDir.l
                                if (moveX == 1 && moveZ == 0) {
                                    this.flagMovAnim = true
                                    this.startFront(tweenArgsMov)
                                }
                                else if (moveX == -1 && moveZ == 0) {
                                    this.flagMovAnim = true
                                    this.startBack(tweenArgsMov)
                                }
                                else if (moveZ == 1 && moveX == 0) {
                                    this.flagMovAnim = true
                                    this.startRight(tweenArgsMov)
                                }
                                else if (moveZ == -1 && moveX == 0) {
                                    this.flagMovAnim = true
                                    this.startLeft(tweenArgsMov)
                                }
                            }
                            else if (this.flagMovAnim && !this.flagEndMov) {
                                var moveX = this.movementDir.f - this.movementDir.b
                                var moveZ = this.movementDir.r - this.movementDir.l
                                if (moveX == 1 && moveZ == 0) {
                                    this.tweenFront.update()
                                }
                                else if (moveX == -1 && moveZ == 0) {
                                    this.tweenBack.update()
                                }
                                else if (moveZ == 1 && moveX == 0) {
                                    this.tweenRight.update()
                                }
                                else if (moveZ == -1 && moveX == 0) {
                                    this.tweenLeft.update()
                                }

                            }
                            else if (this.flagEndMov) {
                                this.tweenEndMov.update()
                            }
                        }

                        this.animateFlagBackGround = true
                    }
                    else if (this.animateFlag) {
                        if (!this.traversePortalFlag || this.flagExitedFromPortal) {

                            this.tweenStill.update()
                        }
                        if (this.animateFlagBackGround && this.flagStillAnim) {
                            this.tweenBackGround.update()
                        }
                        if (this.flagEndMov) {
                            this.tweenEndMov.update()
                        }
                    }

                    this.worldPosModel = this.model.position
                    this.worldPosSword = this.arrayWeapon[0].position
                    this.worldPosScythe = this.arrayWeapon[1].position
                    if (this.worldPosModel.distanceTo(this.worldPosSword) != this.worldPosModel.distanceTo(this.worldPosScythe) && !this.weaponPicked) {
                        if (this.worldPosModel.distanceTo(this.worldPosScythe) <= 12 && this.worldPosModel.distanceTo(this.worldPosSword) > 10) {
                            var elem = document.getElementById("scythe");
                            elem.style.visibility = "visible";
                            var elem = document.getElementById("sword");
                            elem.style.visibility = "hidden";
                            if (this.flagActionRight && !this.flagActionAnimation) {
                                this.startAction(this.equipped)
                                this.flagActionAnimation = true
                                this.weaponPicked = true
                            }
                            else if (this.flagActionAnimation) {
                                this.tweenActionRight.update()
                            }
                        }
                        else if (this.worldPosModel.distanceTo(this.worldPosSword) <= 10 && this.worldPosModel.distanceTo(this.worldPosScythe) > 12) {
                            var elem = document.getElementById("sword");
                            elem.style.visibility = "visible";
                            var elem = document.getElementById("scythe");
                            elem.style.visibility = "hidden";
                            if (this.flagActionRight && !this.flagActionAnimation) {
                                this.startAction(this.equipped)
                                this.flagActionAnimation = true
                                this.weaponPicked = true
                            }
                            else if (this.flagActionAnimation) {
                                this.tweenActionRight.update()
                            }
                        }
                        else {
                            this.flagActionRight = false
                            var elem = document.getElementById("scythe");
                            elem.style.visibility = "hidden";

                            var elem = document.getElementById("sword");
                            elem.style.visibility = "hidden";
                        }
                    }
                    else {
                        if (this.flagActionAnimation) {
                            this.tweenActionRight.update()
                        }
                        var elem = document.getElementById("scythe");
                        elem.style.visibility = "hidden";

                        var elem = document.getElementById("sword");
                        elem.style.visibility = "hidden";
                        if (this.weapon.isFinished()) {
                            if (!this.equipped) {
                                this.weaponEquipped = this.weapon.equipWeapon(this)
                                this.model.add(this.WeaponPivot)
                                this.WeaponPivot.add(this.weaponEquipped.weapon)
                                this.weaponPivotCurRotation = {
                                    wrx: this.WeaponPivot.rotation.x,
                                    wry: this.WeaponPivot.rotation.y,
                                    wrz: this.WeaponPivot.rotation.z
                                }
                                this.weaponCurRotation = {
                                    wrx: this.weaponEquipped.weapon.rotation.x,
                                    wry: this.weaponEquipped.weapon.rotation.y,
                                    wrz: this.weaponEquipped.weapon.rotation.z
                                }
                                if (this.weaponEquipped.type == "scythe") {
                                    this.weaponEquipped.weapon.position.x = -40.0
                                    this.weaponEquipped.weapon.position.y = 20.0
                                    this.weaponEquipped.weapon.position.z = 20.0
                                }
                                else {
                                    this.weaponEquipped.weapon.position.x = -40.0
                                    this.weaponEquipped.weapon.position.y = 60.0
                                    this.weaponEquipped.weapon.position.z = 20.0
                                }
                                this.equipped = true
                            }
                            else {
                                this.weaponEquipped.tween.update()
                                this.model.add(this.WeaponPivot)
                                this.WeaponPivot.add(this.weaponEquipped.weapon)
                                if (this.weaponEquipped.type == "scythe") {
                                    this.weaponEquipped.weapon.position.x = -40.0
                                    this.weaponEquipped.weapon.position.y = 20.0
                                    this.weaponEquipped.weapon.position.z = 20.0
                                }
                                else {
                                    this.weaponEquipped.weapon.position.x = -40.0
                                    this.weaponEquipped.weapon.position.y = 60.0
                                    this.weaponEquipped.weapon.position.z = 20.0
                                }
                            }
                            if (!this.flagActionAnimation) {
                                this.box = null
                            }
                            if (this.flagActionRight && !this.flagActionAnimation && this.attackEnabled) {
                                this.startAction(this.equipped)
                                this.flagActionAnimation = true

                                this.box = new THREE.Box3().setFromObject(this.weaponEquipped.weapon)


                            }
                            else if (this.flagActionAnimation && this.attackEnabled) {
                                this.tweenActionRight.update()
                                this.box.setFromObject(this.weaponEquipped.weapon)

                            }
                            if (this.attackEnabled && this.portal.portalEnabled() && !this.flagExitedFromPortal) {
                                this.worldPosPortal = this.portal.getPortal().position
                                if (this.worldPosModel.distanceTo(this.worldPosPortal) <= 10) {
                                    document.removeEventListener("mousedown", this.onMouseDown)
                                    document.removeEventListener("mousemove", this.onMouseMove)
                                    document.removeEventListener("mouseup", this.onMouseUp)
                                    document.removeEventListener("keydown", this.onDocumentKeyDown)
                                    document.removeEventListener("keyup", this.onDocumentKeyUp)
                                    this.movementDir.f = 0
                                    this.historyKey.delete("ArrowUp")
                                    this.movementDir.b = 0
                                    this.historyKey.delete("ArrowDown")
                                    this.movementDir.l = 0
                                    this.historyKey.delete("ArrowLeft")
                                    this.movementDir.r = 0
                                    this.historyKey.delete("ArrowRight")
                                    this.flagMovAnim = false
                                    this.historyKey.delete("RightClick")
                                    if (this.tweenFront) {
                                        this.tweenFront.stop()
                                    }
                                    if (this.tweenBack) {
                                        this.tweenBack.stop()
                                    }
                                    if (this.tweenLeft) {
                                        this.tweenLeft.stop()
                                    }
                                    if (this.tweenRight) {
                                        this.tweenRight.stop()
                                    }

                                    if (!this.traversePortalFlag) {
                                        this.handlerAmmo.removeRigidBodyFromSet(this.model)
                                        var tweenTraversePortalArgs = {
                                            lookatx: this.lookatx,
                                            lookaty: this.lookaty,
                                            lookatz: this.lookatz,
                                            camposx: this.camposx,
                                            camposy: this.camposy,
                                            camposz: this.camposz,
                                            roty: this.model.rotation.y,
                                            mposx: this.model.position.x,
                                            mposz: this.model.position.z
                                        }
                                        var tweenExitPortalArgs = {
                                            mposx: this.model.position.x,
                                            mposz: this.model.position.z
                                        }
                                        this.tweenTraversePortal = new TWEEN.Tween(tweenTraversePortalArgs).to({
                                            lookatx: -0.5037284900196041,
                                            lookaty: this.lookaty,
                                            lookatz: 0.38361296414383866,
                                            camposx: -40,
                                            camposy: 160,
                                            camposz: 348,
                                            roty: 4.8,
                                            mposx: 100,
                                            mposz: 0,
                                        }, 2000).onUpdate(() => {
                                            this.model.remove(this.camera)
                                            this.model.rotation.y = tweenTraversePortalArgs.roty
                                            this.model.position.x = tweenTraversePortalArgs.mposx
                                            this.model.position.z = tweenTraversePortalArgs.mposz
                                            this.camera.position.x = tweenTraversePortalArgs.camposx
                                            this.camera.position.y = tweenTraversePortalArgs.camposy
                                            this.camera.position.z = tweenTraversePortalArgs.camposz
                                            this.camera.lookAt(tweenTraversePortalArgs.lookatx, tweenTraversePortalArgs.lookaty, tweenTraversePortalArgs.lookatz)
                                            this.model.add(this.camera)
                                        }).onComplete(() => {
                                            this.portal.stopScale()
                                            this.flagTraversed = true
                                            var tweenZoomInArgs = {
                                                x: 1
                                            }
                                            this.tweenZoomIn = new TWEEN.Tween(tweenZoomInArgs).to({
                                                x: 10
                                            }, 2000).onUpdate(() => {
                                                this.camera.zoom = tweenZoomInArgs.x
                                                this.camera.updateProjectionMatrix()
                                            }).onComplete(() => {
                                                this.tutorialRoom.removeRoom()
                                                this.scene.fog = new THREE.Fog(0xFFFFFF, 1, 1000);
                                                this.uid.showBars()
                                                this.zoomedIn = true
                                                var tweenZoomOutArgs = {
                                                    x: 10
                                                }
                                                this.tweenZoomOut = new TWEEN.Tween(tweenZoomOutArgs).to({
                                                    x: 1
                                                }, 2000).onUpdate(() => {
                                                    this.camera.zoom = tweenZoomOutArgs.x
                                                    this.camera.updateProjectionMatrix()
                                                }).onComplete(() => {
                                                    this.flagExitFromPortal = true
                                                    var tweenExitPortalTraversedArgs = {
                                                        mposx: this.model.position.x,
                                                        mposz: this.model.position.z
                                                    }
                                                    this.tweenExitPortal = new TWEEN.Tween(tweenExitPortalTraversedArgs).to({
                                                        mposx: tweenExitPortalArgs.mposx,
                                                        mposz: tweenExitPortalArgs.mposz
                                                    }, 2000).onUpdate(() => {
                                                        this.model.position.x = tweenExitPortalTraversedArgs.mposx
                                                        this.model.position.z = tweenExitPortalTraversedArgs.mposz
                                                    }).onComplete(() => {
                                                        var shadowLight = new THREE.DirectionalLight(0xe6e6e6, 0.4)
                                                        shadowLight.position.set(1, 100, 1)
                                                        shadowLight.castShadow = true;
                                                        const dim = 10
                                                        shadowLight.shadow.camera.top = dim;
                                                        shadowLight.shadow.camera.bottom = - dim;
                                                        shadowLight.shadow.camera.left = - dim;
                                                        shadowLight.shadow.camera.right = dim;
                                                        shadowLight.shadow.camera.near = 2;
                                                        shadowLight.shadow.camera.far = 1000;
                                                        shadowLight.shadow.mapSize.x = 2048;
                                                        shadowLight.shadow.mapSize.y = 2048;
                                                        shadowLight.target = this.model
                                                        this.scene.add(shadowLight)


                                                        this.flagAdjustCamAndPortal = true
                                                        this.portal.removePortal()
                                                        var tweenCamBackAndPortalDisappearArgs = {
                                                            lookatx: -0.5037284900196041,
                                                            lookaty: this.lookaty,
                                                            lookatz: 0.38361296414383866,
                                                            camposx: -40,
                                                            camposy: 160,
                                                            camposz: 348,
                                                        }
                                                        this.tweenCamBackAndPortalDisappear = new TWEEN.Tween(tweenCamBackAndPortalDisappearArgs).to({
                                                            lookatx: this.lookatx,
                                                            lookaty: this.lookaty,
                                                            lookatz: this.lookatz,
                                                            camposx: this.camposx,
                                                            camposy: this.camposy,
                                                            camposz: this.camposz
                                                        }, 2000).onUpdate(() => {
                                                            this.model.remove(this.camera)
                                                            this.camera.position.x = tweenCamBackAndPortalDisappearArgs.camposx
                                                            this.camera.position.y = tweenCamBackAndPortalDisappearArgs.camposy
                                                            this.camera.position.z = tweenCamBackAndPortalDisappearArgs.camposz
                                                            this.camera.lookAt(tweenCamBackAndPortalDisappearArgs.lookatx, tweenCamBackAndPortalDisappearArgs.lookaty, tweenCamBackAndPortalDisappearArgs.lookatz)
                                                            this.model.add(this.camera)
                                                        }).onComplete(() => {
                                                            this.handlerAmmo.addRigidBodyToSet(this.model)
                                                            document.addEventListener("mousedown", this.onMouseDown)
                                                            document.addEventListener("mousemove", this.onMouseMove)
                                                            document.addEventListener("mouseup", this.onMouseUp)
                                                            document.addEventListener("keydown", this.onDocumentKeyDown)
                                                            document.addEventListener("keyup", this.onDocumentKeyUp)
                                                            this.flagExitedFromPortal = true
                                                        }).start()
                                                    }).start()
                                                }).start()
                                            }).start()
                                        }).start()

                                        this.traversePortalFlag = true
                                    }
                                }
                                if (this.traversePortalFlag) {
                                    this.tweenEndMov.update()
                                    if (!this.flagAdjustCamAndPortal) {
                                        if (!this.flagExitFromPortal) {
                                            if (!this.zoomedIn) {
                                                if (!this.flagTraversed) {
                                                    this.tweenTraversePortal.update()
                                                }
                                                else {
                                                    this.tweenTraversePortal.stop()
                                                    this.tweenZoomIn.update()
                                                }
                                            }
                                            else {
                                                this.tweenZoomOut.update()
                                            }
                                        }
                                        else {
                                            this.tweenExitPortal.update()
                                        }
                                    }
                                    else {
                                        this.tweenCamBackAndPortalDisappear.update()
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    }

    onDocumentKeyDown(event) {
        if (this.roomReady) {
            switch (event.key) {
                case 'ArrowUp':
                    this.movementDir.f = 1
                    this.historyKey.add("ArrowUp")
                    this.animateFlag = false
                    break;
                case 'ArrowDown':
                    this.movementDir.b = 1
                    this.historyKey.add("ArrowDown")
                    this.animateFlag = false
                    break;
                case 'ArrowLeft':
                    this.movementDir.l = 1
                    this.historyKey.add("ArrowLeft")
                    this.animateFlag = false
                    break;
                case 'ArrowRight':
                    this.movementDir.r = 1
                    this.historyKey.add("ArrowRight")
                    this.animateFlag = false
                    break;
                default:
                    break;
            }
        }
    }

    onDocumentKeyUp(event) {
        if (this.roomReady) {
            switch (event.key) {
                case 'ArrowUp':
                    this.movementDir.f = 0
                    this.historyKey.delete("ArrowUp")
                    if (this.flagMovAnim) {
                        this.flagMovAnim = false
                        this.tweenFront.stop()
                    }
                    break;
                case 'ArrowDown':
                    this.movementDir.b = 0
                    this.historyKey.delete("ArrowDown")
                    if (this.flagMovAnim) {
                        this.flagMovAnim = false
                        this.tweenBack.stop()
                    }
                    break;
                case 'ArrowLeft':
                    this.movementDir.l = 0
                    this.historyKey.delete("ArrowLeft")
                    if (this.flagMovAnim) {
                        this.flagMovAnim = false
                        this.tweenLeft.stop()
                    }
                    break;
                case 'ArrowRight':
                    this.movementDir.r = 0
                    this.historyKey.delete("ArrowRight")
                    if (this.flagMovAnim) {
                        this.flagMovAnim = false
                        this.tweenRight.stop()
                    }
                    break;
                default:
                    break;
            }
        }

    }

    onMouseMove(event) {
        if (this.ready && this.flagMouseDown) {
            const theta = Math.PI / 2 * 0.009 * (event.clientX - this.lastX)
            this.lastX = event.clientX
            this.model.rotation.y += theta

        }
    }

    onMouseUp(event) {
        if (this.ready) {
            if (event.button == 0) {
                this.flagMouseDown = false
                this.lastX = event.clientX
            }
            else if (event.button == 2) {
                this.historyKey.delete("RightClick")
            }
        }

    }


    onMouseDown(event) {
        if (this.ready) {
            if (event.button == 0) {
                this.lastX = event.clientX

                this.flagMouseDown = true
            }
            else if (event.button == 2) {
                this.historyKey.add("RightClick")
                this.animateFlag = false
                this.flagActionRight = true
                this.worldPosModel = this.model.position
                this.worldPosSword = this.arrayWeapon[0].position
                this.worldPosScythe = this.arrayWeapon[1].position
                if (this.worldPosModel.distanceTo(this.worldPosSword) != this.worldPosModel.distanceTo(this.worldPosScythe)) {
                    if (this.worldPosModel.distanceTo(this.worldPosScythe) <= 12 && this.worldPosModel.distanceTo(this.worldPosSword) > 10) {
                        this.weapon.pickWeapon("scythe")
                    }
                    else if (this.worldPosModel.distanceTo(this.worldPosSword) <= 10 && this.worldPosModel.distanceTo(this.worldPosScythe) > 12) {
                        this.weapon.pickWeapon("sword")
                    }

                }
            }
        }

    }


    moveCharacter(startGame) {
        if (startGame) {
            var moveX = this.movementDir.f - this.movementDir.b
            var moveZ = this.movementDir.r - this.movementDir.l

            if (moveX == 0 && moveZ == 0 || (moveX != 0 && moveZ != 0)) return;


            this.collisionPair.hasContact = false;
            if (!this.tutorialRoom.roomRemoved()) {
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[14].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[15].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[16].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[17].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[18].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[19].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[20].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[21].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[22].userData.physicsBody, this.collisionPair)
                this.handlerAmmo.getWorld().contactPairTest(this.model.userData.physicsBody, this.arrayTutorialRoom[23].userData.physicsBody, this.collisionPair)
            }


            var temp = new THREE.Vector3
            this.model.getWorldDirection(temp)
            let velocity = null

            if (moveZ == 0) {
                velocity = new this.ammo.btVector3(temp.x, 0, temp.z)
                if (moveX == -1) {
                    velocity.op_mul(-10);
                }
                else if (moveX == 1) {
                    velocity.op_mul(10);
                }
            }
            else {
                var temp1 = new THREE.Vector3(0, 1, 0)
                temp1.cross(temp)
                if (moveZ == -1) {
                    velocity = new this.ammo.btVector3(temp1.x, 0, temp1.z)
                    velocity.op_mul(10);
                }
                else if (moveZ == 1) {
                    velocity = new this.ammo.btVector3(temp1.x, 0, temp1.z)
                    velocity.op_mul(-10);
                }

            }



            if (this.collisionPair.hasContact) {
                velocity.setY(10)
            }

            let physicsBody = this.model.userData.physicsBody;
            physicsBody.applyCentralForce(new this.ammo.btVector3(0, -200, 0))
            physicsBody.setLinearVelocity(velocity);

        }


    }

    collisionCallback() {
        this.collisionPair = new this.ammo.ConcreteContactResultCallback();
        this.collisionPair.hasContact = false;
        this.collisionPair.addSingleResult = function (cp) {
            let collisionPoint = Ammo.wrapPointer(cp, Ammo.btManifoldPoint);
            if (collisionPoint.getDistance() > 0) return;
            this.hasContact = true;
        }
    }

    setRoomReady() {
        this.roomReady = true
    }

    enableAttack() {
        this.attackEnabled = true
    }

    portalTraversed() {
        return this.flagExitedFromPortal
    }

    getModel() {
        return this.model
    }

    getWeaponBox() {
        if (this.flagActionAnimation && this.attackEnabled) {
            return this.box
        }
        return null
    }

    goBackGroundAnim(args) {
        var tweenArgsBackGround = {
            mposy: this.model.position.y,
            lfs2x: this.LeftFwdSkirt2.rotation.x,
            lms2x: this.LeftMidSkirt2.rotation.x,
            lbs2x: this.LeftBwdSkirt2.rotation.x,
            rfs2x: this.RightFwdSkirt2.rotation.x,
            rms2x: this.RightMidSkirt2.rotation.x,
            rbs2x: this.RightBwdSkirt2.rotation.x,
            lfs3x: this.LeftFwdSkirt3.rotation.x,
            lms3x: this.LeftMidSkirt3.rotation.x,
            lbs3x: this.LeftBwdSkirt3.rotation.x,
            rfs3x: this.RightFwdSkirt3.rotation.x,
            rms3x: this.RightMidSkirt3.rotation.x,
            rbs3x: this.RightBwdSkirt3.rotation.x,
            lfs4z: this.LeftFwdSkirt4.rotation.z,
            lms4y: this.LeftMidSkirt4.rotation.y,
            lbs4y: this.LeftBwdSkirt4.rotation.y,
            lbs4z: this.LeftBwdSkirt4.rotation.z,
            rfs4z: this.RightFwdSkirt4.rotation.z,
            rms4y: this.RightMidSkirt4.rotation.y,
            rbs4z: this.RightBwdSkirt4.rotation.z,
            lfs5z: this.LeftFwdSkirt5.rotation.z,
            lms5y: this.LeftMidSkirt5.rotation.y,
            lbs5y: this.LeftBwdSkirt5.rotation.y,
            rfs5z: this.RightFwdSkirt5.rotation.z,
            rms5y: this.RightMidSkirt5.rotation.y,
            rbs5y: this.RightBwdSkirt5.rotation.y,
            lms6y: this.LeftMidSkirt6.rotation.y,
            rms6y: this.RightMidSkirt6.rotation.y,
            lfb2z: this.LeftFwdBelt2.rotation.z,
            lmb2y: this.LeftMidBelt2.rotation.y,
            lbb2z: this.LeftBwdBelt2.rotation.z,
            rfb2z: this.RightFwdBelt2.rotation.z,
            rmb2y: this.RightMidBelt2.rotation.y,
            rbb2z: this.RightBwdBelt2.rotation.z,
            lwbz: this.LeftWingBase.rotation.z,
            rwbz: this.RightWingBase.rotation.z
        }
        this.tweenBackGround = new TWEEN.Tween(tweenArgsBackGround).to({
            mposy: this.currMPosY,
            lfs2x: this.skirtCurRotation.lfs2x,
            lms2x: this.skirtCurRotation.lms2x,
            lbs2x: this.skirtCurRotation.lbs2x,
            rfs2x: this.skirtCurRotation.rfs2x,
            rms2x: this.skirtCurRotation.rms2x,
            rbs2x: this.skirtCurRotation.rbs2x,
            lfs3x: this.skirtCurRotation.lfs3x,
            lms3x: this.skirtCurRotation.lms3x,
            lbs3x: this.skirtCurRotation.lbs3x,
            rfs3x: this.skirtCurRotation.rfs3x,
            rms3x: this.skirtCurRotation.rms3x,
            rbs3x: this.skirtCurRotation.rbs3x,
            lfs4z: this.skirtCurRotation.lfs4z,
            lms4y: this.skirtCurRotation.lms4y,
            lbs4y: this.skirtCurRotation.lbs4y,
            lbs4z: this.skirtCurRotation.lbs4z,
            rfs4z: this.skirtCurRotation.rfs4z,
            rms4y: this.skirtCurRotation.rms4y,
            rbs4z: this.skirtCurRotation.rbs4z,
            lfs5z: this.skirtCurRotation.lfs5z,
            lms5y: this.skirtCurRotation.lms5y,
            lbs5y: this.skirtCurRotation.lbs5y,
            rfs5z: this.skirtCurRotation.rfs5z,
            rms5y: this.skirtCurRotation.rms5y,
            rbs5y: this.skirtCurRotation.rbs5y,
            lms6y: this.skirtCurRotation.lms6y,
            rms6y: this.skirtCurRotation.rms6y,
            lfb2z: this.beltCurRotation.lfb2z,
            lmb2y: this.beltCurRotation.lmb2y,
            lbb2z: this.beltCurRotation.lbb2z,
            rfb2z: this.beltCurRotation.rfb2z,
            rmb2y: this.beltCurRotation.rmb2y,
            rbb2z: this.beltCurRotation.rbb2z,
            lwbz: this.wingCurRotation.lwbz,
            rwbz: this.wingCurRotation.rwbz
        }, 1000).onStart(() => {
            if (this.flagStillAnim) {
                tweenArgsBackGround.mposy = args.mposy
                this.tweenBackGround._object.mposy = this.currMPosY
                this.tweenBackGround._valuesStart.mposy = args.mposy
                this.tweenBackGround._valuesEnd.mposy = this.currMPosY
                this.tweenBackGround._valuesStartRepeat.mposy = args.mposy
            }
            else {
                this.currMPosY = this.model.position.y
                tweenArgsBackGround.mposy = this.model.position.y
                this.tweenBackGround._object.mposy = this.currMPosY
                this.tweenBackGround._valuesStart.mposy = this.model.position.y
                this.tweenBackGround._valuesEnd.mposy = this.currMPosY
                this.tweenBackGround._valuesStartRepeat.mposy = this.model.position.y

            }

        }
        ).onUpdate(() => {

            this.model.position.y = tweenArgsBackGround.mposy
            this.LeftFwdSkirt2.rotation.x = tweenArgsBackGround.lfs2x
            this.LeftMidSkirt2.rotation.x = tweenArgsBackGround.lms2x
            this.LeftBwdSkirt2.rotation.x = tweenArgsBackGround.lbs2x
            this.RightFwdSkirt2.rotation.x = tweenArgsBackGround.rfs2x
            this.RightMidSkirt2.rotation.x = tweenArgsBackGround.rms2x
            this.RightBwdSkirt2.rotation.x = tweenArgsBackGround.rbs2x
            this.LeftFwdSkirt3.rotation.x = tweenArgsBackGround.lfs3x
            this.LeftMidSkirt3.rotation.x = tweenArgsBackGround.lms3x
            this.LeftBwdSkirt3.rotation.x = tweenArgsBackGround.lbs3x
            this.RightFwdSkirt3.rotation.x = tweenArgsBackGround.rfs3x
            this.RightMidSkirt3.rotation.x = tweenArgsBackGround.rms3x
            this.RightBwdSkirt3.rotation.x = tweenArgsBackGround.rbs3x
            this.LeftFwdSkirt4.rotation.z = tweenArgsBackGround.lfs4z
            this.LeftMidSkirt4.rotation.y = tweenArgsBackGround.lms4y
            this.LeftBwdSkirt4.rotation.y = tweenArgsBackGround.lbs4y
            this.LeftBwdSkirt4.rotation.z = tweenArgsBackGround.lbs4z
            this.RightFwdSkirt4.rotation.z = tweenArgsBackGround.rfs4z
            this.RightMidSkirt4.rotation.y = tweenArgsBackGround.rms4y
            this.RightBwdSkirt4.rotation.z = tweenArgsBackGround.rbs4z
            this.LeftFwdSkirt5.rotation.z = tweenArgsBackGround.lfs5z
            this.LeftMidSkirt5.rotation.y = tweenArgsBackGround.lms5y
            this.LeftBwdSkirt5.rotation.y = tweenArgsBackGround.lbs5y
            this.RightFwdSkirt5.rotation.z = tweenArgsBackGround.rfs5z
            this.RightMidSkirt5.rotation.y = tweenArgsBackGround.rms5y
            this.RightBwdSkirt5.rotation.y = tweenArgsBackGround.rbs5y
            this.LeftMidSkirt6.rotation.y = tweenArgsBackGround.lms6y
            this.RightMidSkirt6.rotation.y = tweenArgsBackGround.rms6y
            this.LeftFwdBelt2.rotation.z = tweenArgsBackGround.lfb2z
            this.LeftMidBelt2.rotation.y = tweenArgsBackGround.lmb2y
            this.LeftBwdBelt2.rotation.z = tweenArgsBackGround.lbb2z
            this.RightFwdBelt2.rotation.z = tweenArgsBackGround.rfb2z
            this.RightMidBelt2.rotation.y = tweenArgsBackGround.rmb2y
            this.RightBwdBelt2.rotation.z = tweenArgsBackGround.rbb2z
            this.LeftWingBase.rotation.z = tweenArgsBackGround.lwbz
            this.RightWingBase.rotation.z = tweenArgsBackGround.rwbz
        }).onComplete(() => {
            this.flagStillAnim = false
        }).start()

    }

    startFluctuate() {
        var tweenArgs = {
            mposy: this.currMPosY,

            lfs2x: this.skirtCurRotation.lfs2x,
            lms2x: this.skirtCurRotation.lms2x,
            lbs2x: this.skirtCurRotation.lbs2x,
            rfs2x: this.skirtCurRotation.rfs2x,
            rms2x: this.skirtCurRotation.rms2x,
            rbs2x: this.skirtCurRotation.rbs2x,

            lfs3x: this.skirtCurRotation.lfs3x,
            lms3x: this.skirtCurRotation.lms3x,
            lbs3x: this.skirtCurRotation.lbs3x,
            rfs3x: this.skirtCurRotation.rfs3x,
            rms3x: this.skirtCurRotation.rms3x,
            rbs3x: this.skirtCurRotation.rbs3x,

            lfs4z: this.skirtCurRotation.lfs4z,
            lms4y: this.skirtCurRotation.lms4y,
            lbs4y: this.skirtCurRotation.lbs4y,
            lbs4z: this.skirtCurRotation.lbs4z,
            rfs4z: this.skirtCurRotation.rfs4z,
            rms4y: this.skirtCurRotation.rms4y,
            rbs4z: this.skirtCurRotation.rbs4z,

            lfs5z: this.skirtCurRotation.lfs5z,
            lms5y: this.skirtCurRotation.lms5y,
            lbs5y: this.skirtCurRotation.lbs5y,
            rfs5z: this.skirtCurRotation.rfs5z,
            rms5y: this.skirtCurRotation.rms5y,
            rbs5y: this.skirtCurRotation.rbs5y,

            lms6y: this.skirtCurRotation.lms6y,
            rms6y: this.skirtCurRotation.rms6y,


            lfb2z: this.beltCurRotation.lfb2z,
            lmb2y: this.beltCurRotation.lmb2y,
            lbb2z: this.beltCurRotation.lbb2z,
            rfb2z: this.beltCurRotation.rfb2z,
            rmb2y: this.beltCurRotation.rmb2y,
            rbb2z: this.beltCurRotation.rbb2z,


            lwbz: this.wingCurRotation.lwbz,
            rwbz: this.wingCurRotation.rwbz
        }

        this.tweenStill = new TWEEN.Tween(tweenArgs).to({
            mposy: this.currMPosY + 1.0,

            lfs2x: this.skirtCurRotation.lfs2x - 0.5,
            lms2x: this.skirtCurRotation.lms2x - 0.5,
            lbs2x: this.skirtCurRotation.lbs2x - 0.3,
            rfs2x: this.skirtCurRotation.rfs2x + 0.5,
            rms2x: this.skirtCurRotation.rms2x - 0.5,
            rbs2x: this.skirtCurRotation.rbs2x - 0.3,

            lfs3x: this.skirtCurRotation.lfs3x + 0.5,
            lms3x: this.skirtCurRotation.lms3x + 0.5,
            lbs3x: this.skirtCurRotation.lbs3x - 0.2,
            rfs3x: this.skirtCurRotation.rfs3x - 0.5,
            rms3x: this.skirtCurRotation.rms3x - 0.5,
            rbs3x: this.skirtCurRotation.rbs3x + 0.2,

            lfs4z: this.skirtCurRotation.lfs4z + 0.3,
            lms4y: this.skirtCurRotation.lms4y + 0.2,
            lbs4y: this.skirtCurRotation.lbs4y + 0.2,
            lbs4z: this.skirtCurRotation.lbs4z - 0.4,
            rfs4z: this.skirtCurRotation.rfs4z + 0.3,
            rms4y: this.skirtCurRotation.rms4y - 0.2,
            rbs4z: this.skirtCurRotation.rbs4z - 0.4,

            lfs5z: this.skirtCurRotation.lfs5z + 0.5,
            lms5y: this.skirtCurRotation.lms5y + 0.1,
            lbs5y: this.skirtCurRotation.lbs5y - 0.6,
            rfs5z: this.skirtCurRotation.rfs5z + 0.5,
            rms5y: this.skirtCurRotation.rms5y + 0.1,
            rbs5y: this.skirtCurRotation.rbs5y + 0.6,

            lms6y: this.skirtCurRotation.lms6y - 0.9,
            rms6y: this.skirtCurRotation.rms6y + 0.9,

            lfb2z: this.beltCurRotation.lfb2z + 0.1,
            lmb2y: this.beltCurRotation.lmb2y + 0.2,
            lbb2z: this.beltCurRotation.lbb2z - 0.2,
            rfb2z: this.beltCurRotation.rfb2z + 0.1,
            rmb2y: this.beltCurRotation.rmb2y + 0.2,
            rbb2z: this.beltCurRotation.rbb2z - 0.2,


            lwbz: this.wingCurRotation.lwbz - 0.2,
            rwbz: this.wingCurRotation.rwbz - 0.2

        }, 1000).repeat(Infinity).yoyo(true).onStart(() => {
            this.animateFlagBackGround = false
            this.flagStillAnim = true
            this.currMPosY = this.model.position.y
            tweenArgs.mposy = this.model.position.y
            this.tweenStill._valuesStart.mposy = this.model.position.y
            this.tweenStill._valuesEnd.mposy = this.model.position.y + 1.0
            this.tweenStill._valuesStartRepeat.mposy = this.model.position.y

        }).onUpdate(() => {
            this.model.position.y = tweenArgs.mposy

            this.LeftFwdSkirt2.rotation.x = tweenArgs.lfs2x
            this.LeftMidSkirt2.rotation.x = tweenArgs.lms2x
            this.LeftBwdSkirt2.rotation.x = tweenArgs.lbs2x
            this.RightFwdSkirt2.rotation.x = tweenArgs.rfs2x
            this.RightMidSkirt2.rotation.x = tweenArgs.rms2x
            this.RightBwdSkirt2.rotation.x = tweenArgs.rbs2x

            this.LeftFwdSkirt3.rotation.x = tweenArgs.lfs3x
            this.LeftMidSkirt3.rotation.x = tweenArgs.lms3x
            this.LeftBwdSkirt3.rotation.x = tweenArgs.lbs3x
            this.RightFwdSkirt3.rotation.x = tweenArgs.rfs3x
            this.RightMidSkirt3.rotation.x = tweenArgs.rms3x
            this.RightBwdSkirt3.rotation.x = tweenArgs.rbs3x

            this.LeftFwdSkirt4.rotation.z = tweenArgs.lfs4z
            this.LeftMidSkirt4.rotation.y = tweenArgs.lms4y
            this.LeftBwdSkirt4.rotation.y = tweenArgs.lbs4y
            this.LeftBwdSkirt4.rotation.z = tweenArgs.lbs4z
            this.RightFwdSkirt4.rotation.z = tweenArgs.rfs4z
            this.RightMidSkirt4.rotation.y = tweenArgs.rms4y
            this.RightBwdSkirt4.rotation.z = tweenArgs.rbs4z

            this.LeftFwdSkirt5.rotation.z = tweenArgs.lfs5z
            this.LeftMidSkirt5.rotation.y = tweenArgs.lms5y
            this.LeftBwdSkirt5.rotation.y = tweenArgs.lbs5y
            this.RightFwdSkirt5.rotation.z = tweenArgs.rfs5z
            this.RightMidSkirt5.rotation.y = tweenArgs.rms5y
            this.RightBwdSkirt5.rotation.y = tweenArgs.rbs5y

            this.LeftMidSkirt6.rotation.y = tweenArgs.lms6y
            this.RightMidSkirt6.rotation.y = tweenArgs.rms6y


            this.LeftFwdBelt2.rotation.z = tweenArgs.lfb2z
            this.LeftMidBelt2.rotation.y = tweenArgs.lmb2y
            this.LeftBwdBelt2.rotation.z = tweenArgs.lbb2z
            this.RightFwdBelt2.rotation.z = tweenArgs.rfb2z
            this.RightMidBelt2.rotation.y = tweenArgs.rmb2y
            this.RightBwdBelt2.rotation.z = tweenArgs.rbb2z


            this.LeftWingBase.rotation.z = tweenArgs.lwbz
            this.RightWingBase.rotation.z = tweenArgs.rwbz
        }).onStop(() => {
            this.goBackGroundAnim(tweenArgs)
        }).delay(4000).repeatDelay(0).start()
    }

    startFront(tweenArgsMov) {
        this.tweenFront = new TWEEN.Tween(tweenArgsMov).to({
            lfs2z: this.skirtCurRotation.lfs2z + 0.2,
            lms2z: this.skirtCurRotation.lms2z + 0.1,
            lbs2x: this.skirtCurRotation.lbs2x - 0.5,
            lbs2z: this.skirtCurRotation.lbs2z + 0.1,
            rfs2z: this.skirtCurRotation.rfs2z + 0.2,
            rms2z: this.skirtCurRotation.rms2z + 0.1,
            rbs2x: this.skirtCurRotation.rbs2x - 0.5,
            rbs2z: this.skirtCurRotation.rbs2z + 0.1,


            lms3x: this.skirtCurRotation.lms3x + 0.9,
            lbs3x: this.skirtCurRotation.lbs3x + 0.2,
            lbs3y: this.skirtCurRotation.lbs3y - 0.2,
            rms3x: this.skirtCurRotation.rms3x - 0.9,
            rbs3x: this.skirtCurRotation.rbs3x - 0.2,
            rbs3y: this.skirtCurRotation.rbs3y + 0.2,

            lms4y: this.skirtCurRotation.lms4y + 0.1,
            lbs4y: this.skirtCurRotation.lbs4y - 0.2,
            rms4y: this.skirtCurRotation.rms4y - 0.1,
            rbs4y: this.skirtCurRotation.rbs4y + 0.2,

            lms5y: this.skirtCurRotation.lms5y + 0.2,
            lbs5y: this.skirtCurRotation.lbs5y - 0.6,
            rms5y: this.skirtCurRotation.rms5y - 0.2,
            rbs5y: this.skirtCurRotation.rbs5y + 0.6,

            lms6y: this.skirtCurRotation.lms6y - 0.9,
            rms6y: this.skirtCurRotation.rms6y + 0.9,

            lfb2z: this.beltCurRotation.lfb2z + 0.2,
            lmb2z: this.beltCurRotation.lmb2z + 0.4,
            lbb2z: this.beltCurRotation.lbb2z + 0.4,
            rfb2z: this.beltCurRotation.rfb2z + 0.2,
            rmb2z: this.beltCurRotation.rmb2z + 0.4,
            rbb2z: this.beltCurRotation.rbb2z + 0.4,


            lwbz: this.wingCurRotation.lwbz + 0.2,
            rwbz: this.wingCurRotation.rwbz + 0.2

        }, 1000).onStart(() => {
        }).onUpdate(() => {
            this.LeftFwdSkirt2.rotation.z = tweenArgsMov.lfs2z
            this.LeftMidSkirt2.rotation.z = tweenArgsMov.lms2z
            this.LeftBwdSkirt2.rotation.x = tweenArgsMov.lbs2x
            this.LeftBwdSkirt2.rotation.z = tweenArgsMov.lbs2z
            this.RightFwdSkirt2.rotation.z = tweenArgsMov.rfs2z
            this.RightMidSkirt2.rotation.z = tweenArgsMov.rms2z
            this.RightBwdSkirt2.rotation.x = tweenArgsMov.rbs2x
            this.RightBwdSkirt2.rotation.z = tweenArgsMov.rbs2z


            this.LeftMidSkirt3.rotation.x = tweenArgsMov.lms3x
            this.LeftBwdSkirt3.rotation.x = tweenArgsMov.lbs3x
            this.LeftBwdSkirt3.rotation.y = tweenArgsMov.lbs3y
            this.RightMidSkirt3.rotation.x = tweenArgsMov.rms3x
            this.RightBwdSkirt3.rotation.x = tweenArgsMov.rbs3x
            this.RightBwdSkirt3.rotation.y = tweenArgsMov.rbs3y

            this.LeftMidSkirt4.rotation.y = tweenArgsMov.lms4y
            this.LeftBwdSkirt4.rotation.y = tweenArgsMov.lbs4y
            this.RightMidSkirt4.rotation.y = tweenArgsMov.rms4y
            this.RightBwdSkirt4.rotation.y = tweenArgsMov.rbs4y

            this.LeftMidSkirt5.rotation.y = tweenArgsMov.lms5y
            this.LeftBwdSkirt5.rotation.y = tweenArgsMov.lbs5y
            this.RightMidSkirt5.rotation.y = tweenArgsMov.rms5y
            this.RightBwdSkirt5.rotation.y = tweenArgsMov.rbs5y

            this.LeftMidSkirt6.rotation.y = tweenArgsMov.lms6y
            this.RightMidSkirt6.rotation.y = tweenArgsMov.rms6y


            this.LeftFwdBelt2.rotation.z = tweenArgsMov.lfb2z
            this.LeftMidBelt2.rotation.z = tweenArgsMov.lmb2z
            this.LeftBwdBelt2.rotation.z = tweenArgsMov.lbb2z
            this.RightFwdBelt2.rotation.z = tweenArgsMov.rfb2z
            this.RightMidBelt2.rotation.z = tweenArgsMov.rmb2z
            this.RightBwdBelt2.rotation.z = tweenArgsMov.rbb2z


            this.LeftWingBase.rotation.z = tweenArgsMov.lwbz
            this.RightWingBase.rotation.z = tweenArgsMov.rwbz
        }).repeat(Infinity).yoyo(true).onStop(() => {

            this.backFromFront()
        }).start()
    }


    startBack(tweenArgsMov) {
        this.tweenBack = new TWEEN.Tween(tweenArgsMov).to({
            lfs2x: this.skirtCurRotation.lfs2x + 0.5,
            lfs2z: this.skirtCurRotation.lfs2z - 0.1,
            lms2z: this.skirtCurRotation.lms2z - 0.1,
            lbs2z: this.skirtCurRotation.lbs2z - 0.2,
            rfs2x: this.skirtCurRotation.rfs2x - 0.5,
            rfs2z: this.skirtCurRotation.rfs2z - 0.1,
            rms2z: this.skirtCurRotation.rms2z - 0.1,
            rbs2z: this.skirtCurRotation.rbs2z - 0.2,

            lfs3x: this.skirtCurRotation.lfs3x + 0.2,
            lfs3y: this.skirtCurRotation.lfs3y - 0.2,
            lms3x: this.skirtCurRotation.lms3x - 0.9,
            rfs3x: this.skirtCurRotation.rfs3x - 0.2,
            rfs3y: this.skirtCurRotation.rfs3y + 0.2,
            rms3x: this.skirtCurRotation.rms3x + 0.9,

            lfs4y: this.skirtCurRotation.lfs4y + 0.2,
            lms4y: this.skirtCurRotation.lms4y - 0.1,
            rfs4y: this.skirtCurRotation.rfs4y - 0.2,
            rms4y: this.skirtCurRotation.rms4y + 0.1,

            lfs5y: this.skirtCurRotation.lfs5y - 0.6,
            lms5y: this.skirtCurRotation.lms5y - 0.2,
            rfs5y: this.skirtCurRotation.rfs5y + 0.6,
            rms5y: this.skirtCurRotation.rms5y + 0.2,

            lms6y: this.skirtCurRotation.lms6y - 0.9,
            rms6y: this.skirtCurRotation.rms6y + 0.9,

            lfb2z: this.beltCurRotation.lfb2z - 0.2,
            lmb2z: this.beltCurRotation.lmb2z - 0.4,
            lbb2z: this.beltCurRotation.lbb2z - 0.4,
            rfb2z: this.beltCurRotation.rfb2z - 0.2,
            rmb2z: this.beltCurRotation.rmb2z - 0.4,
            rbb2z: this.beltCurRotation.rbb2z - 0.4,


            lwbz: this.wingCurRotation.lwbz - 0.2,
            rwbz: this.wingCurRotation.rwbz - 0.2

        }, 1000).onStart(() => {
        }).onUpdate(() => {
            this.LeftFwdSkirt2.rotation.x = tweenArgsMov.lfs2x
            this.LeftFwdSkirt2.rotation.z = tweenArgsMov.lfs2z
            this.LeftMidSkirt2.rotation.z = tweenArgsMov.lms2z
            this.LeftBwdSkirt2.rotation.z = tweenArgsMov.lbs2z
            this.RightFwdSkirt2.rotation.x = tweenArgsMov.rfs2x
            this.RightFwdSkirt2.rotation.z = tweenArgsMov.rfs2z
            this.RightMidSkirt2.rotation.z = tweenArgsMov.rms2z
            this.RightBwdSkirt2.rotation.z = tweenArgsMov.rbs2z


            this.LeftFwdSkirt3.rotation.x = tweenArgsMov.lfs3x
            this.LeftFwdSkirt3.rotation.y = tweenArgsMov.lfs3y
            this.LeftMidSkirt3.rotation.x = tweenArgsMov.lms3x
            this.RightFwdSkirt3.rotation.x = tweenArgsMov.rfs3x
            this.RightFwdSkirt3.rotation.y = tweenArgsMov.rfs3y
            this.RightMidSkirt3.rotation.x = tweenArgsMov.rms3x

            this.LeftFwdSkirt4.rotation.y = tweenArgsMov.lfs4y
            this.LeftMidSkirt4.rotation.y = tweenArgsMov.lms4y
            this.RightFwdSkirt4.rotation.y = tweenArgsMov.rfs4y
            this.RightMidSkirt4.rotation.y = tweenArgsMov.rms4y

            this.LeftFwdSkirt5.rotation.y = tweenArgsMov.lfs5y
            this.LeftMidSkirt5.rotation.y = tweenArgsMov.lms5y
            this.RightFwdSkirt5.rotation.y = tweenArgsMov.rfs5y
            this.RightMidSkirt5.rotation.y = tweenArgsMov.rms5y

            this.LeftMidSkirt6.rotation.y = tweenArgsMov.lms6y
            this.RightMidSkirt6.rotation.y = tweenArgsMov.rms6y


            this.LeftFwdBelt2.rotation.z = tweenArgsMov.lfb2z
            this.LeftMidBelt2.rotation.z = tweenArgsMov.lmb2z
            this.LeftBwdBelt2.rotation.z = tweenArgsMov.lbb2z
            this.RightFwdBelt2.rotation.z = tweenArgsMov.rfb2z
            this.RightMidBelt2.rotation.z = tweenArgsMov.rmb2z
            this.RightBwdBelt2.rotation.z = tweenArgsMov.rbb2z


            this.LeftWingBase.rotation.z = tweenArgsMov.lwbz
            this.RightWingBase.rotation.z = tweenArgsMov.rwbz
        }).repeat(Infinity).yoyo(true).onStop(() => {

            this.backFromFront()
        }).start()

    }

    startLeft(tweenArgsMov) {
        this.tweenLeft = new TWEEN.Tween(tweenArgsMov).to({

            lfs2y: this.skirtCurRotation.lfs2y + 0.2,
            lms2y: this.skirtCurRotation.lms2y + 0.2,
            lbs2y: this.skirtCurRotation.lbs2y + 0.2,
            rfs2y: this.skirtCurRotation.rfs2y + 0.2,
            rms2y: this.skirtCurRotation.rms2y - 0.25,
            rbs2y: this.skirtCurRotation.rbs2y - 0.2,


            lfb2y: this.beltCurRotation.lfb2y + 0.4,
            lmb2y: this.beltCurRotation.lmb2y + 0.4,
            lbb2y: this.beltCurRotation.lbb2y + 0.4,
            rfb2y: this.beltCurRotation.rfb2y + 0.4,
            rmb2y: this.beltCurRotation.rmb2y - 0.4,
            rbb2y: this.beltCurRotation.rbb2y - 0.4,

            lwbx: this.wingCurRotation.lwbx + 0.2,
            rwbx: this.wingCurRotation.rwbx + 0.2

        }, 1000).onStart(() => {
        }).onUpdate(() => {

            this.LeftFwdSkirt2.rotation.y = tweenArgsMov.lfs2y
            this.LeftMidSkirt2.rotation.y = tweenArgsMov.lms2y
            this.LeftBwdSkirt2.rotation.y = tweenArgsMov.lbs2y
            this.RightFwdSkirt2.rotation.y = tweenArgsMov.rfs2y
            this.RightMidSkirt2.rotation.y = tweenArgsMov.rms2y
            this.RightBwdSkirt2.rotation.y = tweenArgsMov.rbs2y

            this.LeftFwdBelt2.rotation.y = tweenArgsMov.lfb2y
            this.LeftMidBelt2.rotation.y = tweenArgsMov.lmb2y
            this.LeftBwdBelt2.rotation.y = tweenArgsMov.lbb2y
            this.RightFwdBelt2.rotation.y = tweenArgsMov.rfb2y
            this.RightMidBelt2.rotation.y = tweenArgsMov.rmb2y
            this.RightBwdBelt2.rotation.y = tweenArgsMov.rbb2y

            this.LeftWingBase.rotation.x = tweenArgsMov.lwbx
            this.RightWingBase.rotation.x = tweenArgsMov.rwbx
        }).repeat(Infinity).yoyo(true).onStop(() => {

            this.backFromFront()
        }).start()

    }

    startRight(tweenArgsMov) {
        this.tweenRight = new TWEEN.Tween(tweenArgsMov).to({

            lfs2y: this.skirtCurRotation.lfs2y - 0.2,
            lms2y: this.skirtCurRotation.lms2y - 0.25,
            lbs2y: this.skirtCurRotation.lbs2y - 0.2,
            rfs2y: this.skirtCurRotation.rfs2y - 0.2,
            rms2y: this.skirtCurRotation.rms2y + 0.2,
            rbs2y: this.skirtCurRotation.rbs2y + 0.2,


            lfb2y: this.beltCurRotation.lfb2y - 0.4,
            lmb2y: this.beltCurRotation.lmb2y - 0.4,
            lbb2y: this.beltCurRotation.lbb2y - 0.4,
            rfb2y: this.beltCurRotation.rfb2y - 0.4,
            rmb2y: this.beltCurRotation.rmb2y + 0.4,
            rbb2y: this.beltCurRotation.rbb2y + 0.4,

            lwbx: this.wingCurRotation.lwbx - 0.2,
            rwbx: this.wingCurRotation.rwbx - 0.2

        }, 1000).onStart(() => {
        }).onUpdate(() => {

            this.LeftFwdSkirt2.rotation.y = tweenArgsMov.lfs2y
            this.LeftMidSkirt2.rotation.y = tweenArgsMov.lms2y
            this.LeftBwdSkirt2.rotation.y = tweenArgsMov.lbs2y
            this.RightFwdSkirt2.rotation.y = tweenArgsMov.rfs2y
            this.RightMidSkirt2.rotation.y = tweenArgsMov.rms2y
            this.RightBwdSkirt2.rotation.y = tweenArgsMov.rbs2y

            this.LeftFwdBelt2.rotation.y = tweenArgsMov.lfb2y
            this.LeftMidBelt2.rotation.y = tweenArgsMov.lmb2y
            this.LeftBwdBelt2.rotation.y = tweenArgsMov.lbb2y
            this.RightFwdBelt2.rotation.y = tweenArgsMov.rfb2y
            this.RightMidBelt2.rotation.y = tweenArgsMov.rmb2y
            this.RightBwdBelt2.rotation.y = tweenArgsMov.rbb2y

            this.LeftWingBase.rotation.x = tweenArgsMov.lwbx
            this.RightWingBase.rotation.x = tweenArgsMov.rwbx
        }).repeat(Infinity).yoyo(true).onStop(() => {

            this.backFromFront()
        }).start()

    }

    backFromFront() {
        this.flagEndMov = true

        var tweenArgsEndMov = {
            lfs2x: this.LeftFwdSkirt2.rotation.x,
            lfs2y: this.LeftFwdSkirt2.rotation.y,
            lfs2z: this.LeftFwdSkirt2.rotation.z,
            lms2y: this.LeftMidSkirt2.rotation.y,
            lms2z: this.LeftMidSkirt2.rotation.z,
            lbs2x: this.LeftBwdSkirt2.rotation.x,
            lbs2y: this.LeftBwdSkirt2.rotation.y,
            lbs2z: this.LeftBwdSkirt2.rotation.z,
            rfs2x: this.RightFwdSkirt2.rotation.x,
            rfs2y: this.RightFwdSkirt2.rotation.y,
            rfs2z: this.RightFwdSkirt2.rotation.z,
            rms2y: this.RightMidSkirt2.rotation.y,
            rms2z: this.RightMidSkirt2.rotation.z,
            rbs2x: this.RightBwdSkirt2.rotation.x,
            rbs2y: this.RightBwdSkirt2.rotation.y,
            rbs2z: this.RightBwdSkirt2.rotation.z,

            lfs3x: this.LeftFwdSkirt3.rotation.x,
            lfs3y: this.LeftFwdSkirt3.rotation.y,
            lms3x: this.LeftMidSkirt3.rotation.x,
            lbs3x: this.LeftBwdSkirt3.rotation.x,
            lbs3y: this.LeftBwdSkirt3.rotation.y,
            rfs3x: this.RightFwdSkirt3.rotation.x,
            rfs3y: this.RightFwdSkirt3.rotation.y,
            rms3x: this.RightMidSkirt3.rotation.x,
            rbs3x: this.RightBwdSkirt3.rotation.x,
            rbs3y: this.RightBwdSkirt3.rotation.y,

            lfs4y: this.LeftFwdSkirt4.rotation.y,
            lms4y: this.LeftMidSkirt4.rotation.y,
            lbs4y: this.LeftBwdSkirt4.rotation.y,
            rfs4y: this.RightFwdSkirt4.rotation.y,
            rms4y: this.RightMidSkirt4.rotation.y,
            rbs4y: this.RightBwdSkirt4.rotation.y,

            lfs5y: this.LeftFwdSkirt5.rotation.y,
            lms5y: this.LeftMidSkirt5.rotation.y,
            lbs5y: this.LeftBwdSkirt5.rotation.y,
            rfs5y: this.RightFwdSkirt5.rotation.y,
            rms5y: this.RightMidSkirt5.rotation.y,
            rbs5y: this.RightBwdSkirt5.rotation.y,

            lms6y: this.LeftMidSkirt6.rotation.y,
            rms6y: this.RightMidSkirt6.rotation.y,

            lfb2y: this.LeftFwdBelt2.rotation.y,
            lfb2z: this.LeftFwdBelt2.rotation.z,
            lmb2y: this.LeftMidBelt2.rotation.y,
            lmb2z: this.LeftMidBelt2.rotation.z,
            lbb2y: this.LeftBwdBelt2.rotation.y,
            lbb2z: this.LeftBwdBelt2.rotation.z,
            rfb2y: this.RightFwdBelt2.rotation.y,
            rfb2z: this.RightFwdBelt2.rotation.z,
            rmb2y: this.RightMidBelt2.rotation.y,
            rmb2z: this.RightMidBelt2.rotation.z,
            rbb2y: this.RightBwdBelt2.rotation.y,
            rbb2z: this.RightBwdBelt2.rotation.z,

            lwbx: this.LeftWingBase.rotation.x,
            lwbz: this.LeftWingBase.rotation.z,
            rwbx: this.RightWingBase.rotation.x,
            rwbz: this.RightWingBase.rotation.z,
        }
        this.tweenEndMov = new TWEEN.Tween(tweenArgsEndMov).to({
            lfs2x: this.skirtCurRotation.lfs2x,
            lfs2y: this.skirtCurRotation.lfs2y,
            lfs2z: this.skirtCurRotation.lfs2z,
            lms2y: this.skirtCurRotation.lms2y,
            lms2z: this.skirtCurRotation.lms2z,
            lbs2x: this.skirtCurRotation.lbs2x,
            lbs2y: this.skirtCurRotation.lbs2y,
            lbs2z: this.skirtCurRotation.lbs2z,
            rfs2x: this.skirtCurRotation.rfs2x,
            rfs2y: this.skirtCurRotation.rfs2y,
            rfs2z: this.skirtCurRotation.rfs2z,
            rms2y: this.skirtCurRotation.rms2y,
            rms2z: this.skirtCurRotation.rms2z,
            rbs2x: this.skirtCurRotation.rbs2x,
            rbs2y: this.skirtCurRotation.rbs2y,
            rbs2z: this.skirtCurRotation.rbs2z,


            lfs3x: this.skirtCurRotation.lfs3x,
            lfs3y: this.skirtCurRotation.lfs3y,
            lms3x: this.skirtCurRotation.lms3x,
            lbs3x: this.skirtCurRotation.lbs3x,
            lbs3y: this.skirtCurRotation.lbs3y,
            rfs3x: this.skirtCurRotation.rfs3x,
            rfs3y: this.skirtCurRotation.rfs3y,
            rms3x: this.skirtCurRotation.rms3x,
            rbs3x: this.skirtCurRotation.rbs3x,
            rbs3y: this.skirtCurRotation.rbs3y,

            lfs4y: this.skirtCurRotation.lfs4y,
            lms4y: this.skirtCurRotation.lms4y,
            lbs4y: this.skirtCurRotation.lbs4y,
            rfs4y: this.skirtCurRotation.rfs4y,
            rms4y: this.skirtCurRotation.rms4y,
            rbs4y: this.skirtCurRotation.rbs4y,

            lfs5y: this.skirtCurRotation.lfs5y,
            lms5y: this.skirtCurRotation.lms5y,
            lbs5y: this.skirtCurRotation.lbs5y,
            rfs5y: this.skirtCurRotation.rfs5y,
            rms5y: this.skirtCurRotation.rms5y,
            rbs5y: this.skirtCurRotation.rbs5y,

            lms6y: this.skirtCurRotation.lms6y,
            rms6y: this.skirtCurRotation.rms6y,

            lfb2y: this.beltCurRotation.lfb2y,
            lfb2z: this.beltCurRotation.lfb2z,
            lmb2y: this.beltCurRotation.lmb2y,
            lmb2z: this.beltCurRotation.lmb2z,
            lbb2y: this.beltCurRotation.lbb2y,
            lbb2z: this.beltCurRotation.lbb2z,
            rfb2y: this.beltCurRotation.rfb2y,
            rfb2z: this.beltCurRotation.rfb2z,
            rmb2y: this.beltCurRotation.rmb2y,
            rmb2z: this.beltCurRotation.rmb2z,
            rbb2y: this.beltCurRotation.rbb2y,
            rbb2z: this.beltCurRotation.rbb2z,

            lwbx: this.wingCurRotation.lwbx,
            lwbz: this.wingCurRotation.lwbz,
            rwbx: this.wingCurRotation.rwbx,
            rwbz: this.wingCurRotation.rwbz
        }, 500).onUpdate(() => {
            this.LeftFwdSkirt2.rotation.x = tweenArgsEndMov.lfs2x
            this.LeftFwdSkirt2.rotation.y = tweenArgsEndMov.lfs2y
            this.LeftFwdSkirt2.rotation.z = tweenArgsEndMov.lfs2z
            this.LeftMidSkirt2.rotation.y = tweenArgsEndMov.lms2y
            this.LeftMidSkirt2.rotation.z = tweenArgsEndMov.lms2z
            this.LeftBwdSkirt2.rotation.x = tweenArgsEndMov.lbs2x
            this.LeftBwdSkirt2.rotation.y = tweenArgsEndMov.lbs2y
            this.LeftBwdSkirt2.rotation.z = tweenArgsEndMov.lbs2z
            this.RightFwdSkirt2.rotation.x = tweenArgsEndMov.rfs2x
            this.RightFwdSkirt2.rotation.y = tweenArgsEndMov.rfs2y
            this.RightFwdSkirt2.rotation.z = tweenArgsEndMov.rfs2z
            this.RightMidSkirt2.rotation.y = tweenArgsEndMov.rms2y
            this.RightMidSkirt2.rotation.z = tweenArgsEndMov.rms2z
            this.RightBwdSkirt2.rotation.x = tweenArgsEndMov.rbs2x
            this.RightBwdSkirt2.rotation.y = tweenArgsEndMov.rbs2y
            this.RightBwdSkirt2.rotation.z = tweenArgsEndMov.rbs2z

            this.LeftFwdSkirt3.rotation.x = tweenArgsEndMov.lfs3x
            this.LeftFwdSkirt3.rotation.y = tweenArgsEndMov.lfs3y
            this.LeftMidSkirt3.rotation.x = tweenArgsEndMov.lms3x
            this.LeftBwdSkirt3.rotation.x = tweenArgsEndMov.lbs3x
            this.LeftBwdSkirt3.rotation.y = tweenArgsEndMov.lbs3y
            this.RightFwdSkirt3.rotation.x = tweenArgsEndMov.rfs3x
            this.RightFwdSkirt3.rotation.y = tweenArgsEndMov.rfs3y
            this.RightMidSkirt3.rotation.x = tweenArgsEndMov.rms3x
            this.RightBwdSkirt3.rotation.x = tweenArgsEndMov.rbs3x
            this.RightBwdSkirt3.rotation.y = tweenArgsEndMov.rbs3y

            this.LeftFwdSkirt4.rotation.y = tweenArgsEndMov.lfs4y
            this.LeftMidSkirt4.rotation.y = tweenArgsEndMov.lms4y
            this.LeftBwdSkirt4.rotation.y = tweenArgsEndMov.lbs4y
            this.RightFwdSkirt4.rotation.y = tweenArgsEndMov.rfs4y
            this.RightMidSkirt4.rotation.y = tweenArgsEndMov.rms4y
            this.RightBwdSkirt4.rotation.y = tweenArgsEndMov.rbs4y

            this.LeftFwdSkirt5.rotation.y = tweenArgsEndMov.lfs5y
            this.LeftMidSkirt5.rotation.y = tweenArgsEndMov.lms5y
            this.LeftBwdSkirt5.rotation.y = tweenArgsEndMov.lbs5y
            this.RightFwdSkirt5.rotation.y = tweenArgsEndMov.rfs5y
            this.RightMidSkirt5.rotation.y = tweenArgsEndMov.rms5y
            this.RightBwdSkirt5.rotation.y = tweenArgsEndMov.rbs5y

            this.LeftMidSkirt6.rotation.y = tweenArgsEndMov.lms6y
            this.RightMidSkirt6.rotation.y = tweenArgsEndMov.rms6y

            this.LeftFwdBelt2.rotation.y = tweenArgsEndMov.lfb2y
            this.LeftFwdBelt2.rotation.z = tweenArgsEndMov.lfb2z
            this.LeftMidBelt2.rotation.y = tweenArgsEndMov.lmb2y
            this.LeftMidBelt2.rotation.z = tweenArgsEndMov.lmb2z
            this.LeftBwdBelt2.rotation.y = tweenArgsEndMov.lbb2y
            this.LeftBwdBelt2.rotation.z = tweenArgsEndMov.lbb2z
            this.RightFwdBelt2.rotation.y = tweenArgsEndMov.rfb2y
            this.RightFwdBelt2.rotation.z = tweenArgsEndMov.rfb2z
            this.RightMidBelt2.rotation.y = tweenArgsEndMov.rmb2y
            this.RightMidBelt2.rotation.z = tweenArgsEndMov.rmb2z
            this.RightBwdBelt2.rotation.y = tweenArgsEndMov.rbb2y
            this.RightBwdBelt2.rotation.z = tweenArgsEndMov.rbb2z

            this.LeftWingBase.rotation.x = tweenArgsEndMov.lwbx
            this.LeftWingBase.rotation.z = tweenArgsEndMov.lwbz
            this.RightWingBase.rotation.x = tweenArgsEndMov.rwbx
            this.RightWingBase.rotation.z = tweenArgsEndMov.rwbz
        }).onComplete(() => {
            this.flagEndMov = false
        }).start()
    }

    loadMenu() {
        return this.flagLoadMenu
    }

    startAction(equipped) {
        if (!equipped) {
            var tweenArgsActionRight = {
                rsx: this.RightShoulder.rotation.x,
                rax: this.RightArm.rotation.x,
                ray: this.RightArm.rotation.y,
                raz: this.RightArm.rotation.z,
                rfax: this.RightForeArm.rotation.x,
                rfay: this.RightForeArm.rotation.y,
                rfaz: this.RightForeArm.rotation.z,
                rfarx: this.RightForeArmRoll.rotation.x,
                rfary: this.RightForeArmRoll.rotation.y,
                rfarz: this.RightForeArmRoll.rotation.z,
                rarx: this.RightArmRoll.rotation.x,
                rary: this.RightArmRoll.rotation.y,
                rarz: this.RightArmRoll.rotation.z,
                rslx: this.RightSleeve.rotation.x,
                rsly: this.RightSleeve.rotation.y,
                rslz: this.RightSleeve.rotation.z,


                rhy: this.RightHand.rotation.y,
                rhm1y: this.RightHandMiddle1.rotation.y,
                rhm1z: this.RightHandMiddle1.rotation.z,
                rhm2y: this.RightHandMiddle2.rotation.y,
                rhm3y: this.RightHandMiddle3.rotation.y,
                rhm4y: this.RightHandMiddle4.rotation.y,
                rhr1y: this.RightHandRing1.rotation.y,
                rhr1z: this.RightHandRing1.rotation.z,
                rhr2y: this.RightHandRing2.rotation.y,
                rhr3y: this.RightHandRing3.rotation.y,
                rhr4y: this.RightHandRing4.rotation.y,
                rhi1y: this.RightHandIndex1.rotation.y,
                rhi1z: this.RightHandIndex1.rotation.z,
                rhi2y: this.RightHandIndex2.rotation.y,
                rhi3y: this.RightHandIndex3.rotation.y,
                rhi4y: this.RightHandIndex4.rotation.y,
                rhp1y: this.RightHandPinky1.rotation.y,
                rhp1z: this.RightHandPinky1.rotation.z,
                rhp2y: this.RightHandPinky2.rotation.y,
                rhp3y: this.RightHandPinky3.rotation.y,
                rhp4y: this.RightHandPinky4.rotation.y,
                rht1x: this.RightHandThumb1.rotation.x,
                rht1y: this.RightHandThumb1.rotation.y,
                rht1z: this.RightHandThumb1.rotation.z
            }
            this.tweenActionRight = new TWEEN.Tween(tweenArgsActionRight).to({
                rsx: this.rightArmCurRotation.rsx + 0.5,
                rax: this.rightArmCurRotation.rax - 1.0,
                ray: this.rightArmCurRotation.ray + 0.1,
                raz: this.rightArmCurRotation.raz - 1.0,
                rfay: this.rightArmCurRotation.rfay + 1.1,
                rfary: this.rightArmCurRotation.rfary + 1.0,
                rary: this.rightArmCurRotation.rary + 0.5,
                rslx: this.rightArmCurRotation.rslx + 0.5,
                rsly: this.rightArmCurRotation.rsly - 0.5,
                rslz: this.rightArmCurRotation.rslz + 0.8,



                rhy: this.rightHandCurRotation.rhy - 0.4,
                rhm1y: this.rightHandCurRotation.rhm1y + 0.4,
                rhm1z: this.rightHandCurRotation.rhm1z - 0.2,
                rhm2y: this.rightHandCurRotation.rhm2y + 0.8,
                rhm3y: this.rightHandCurRotation.rhm3y + 0.6,
                rhm4y: this.rightHandCurRotation.rhm4y + 0.6,
                rhr1y: this.rightHandCurRotation.rhr1y + 0.5,
                rhr1z: this.rightHandCurRotation.rhr1z - 0.2,
                rhr2y: this.rightHandCurRotation.rhr2y + 0.9,
                rhr3y: this.rightHandCurRotation.rhr3y + 0.7,
                rhr4y: this.rightHandCurRotation.rhr4y + 0.7,
                rhi1y: this.rightHandCurRotation.rhi1y + 0.2,
                rhi1z: this.rightHandCurRotation.rhi1z - 0.1,
                rhi2y: this.rightHandCurRotation.rhi2y + 0.5,
                rhi3y: this.rightHandCurRotation.rhi3y + 0.3,
                rhi4y: this.rightHandCurRotation.rhi4y + 0.2,
                rhp1y: this.rightHandCurRotation.rhp1y + 0.6,
                rhp1z: this.rightHandCurRotation.rhp1z - 0.2,
                rhp2y: this.rightHandCurRotation.rhp2y + 0.9,
                rhp3y: this.rightHandCurRotation.rhp3y + 0.7,
                rhp4y: this.rightHandCurRotation.rhp4y + 0.5,
                rht1x: this.rightHandCurRotation.rht1x + 1.0,
                rht1y: this.rightHandCurRotation.rht1y + 0.5,
                rht1z: this.rightHandCurRotation.rht1z - 0.2,
            }, 1000).onStart(() => {

            }
            ).onUpdate(() => {
                this.RightShoulder.rotation.x = tweenArgsActionRight.rsx
                this.RightArm.rotation.x = tweenArgsActionRight.rax
                this.RightArm.rotation.y = tweenArgsActionRight.ray
                this.RightArm.rotation.z = tweenArgsActionRight.raz
                this.RightForeArm.rotation.x = tweenArgsActionRight.rfax
                this.RightForeArm.rotation.y = tweenArgsActionRight.rfay
                this.RightForeArm.rotation.z = tweenArgsActionRight.rfaz
                this.RightForeArmRoll.rotation.y = tweenArgsActionRight.rfary
                this.RightArmRoll.rotation.y = tweenArgsActionRight.rary
                this.RightSleeve.rotation.x = tweenArgsActionRight.rslx
                this.RightSleeve.rotation.y = tweenArgsActionRight.rsly
                this.RightSleeve.rotation.z = tweenArgsActionRight.rslz


                this.RightHand.rotation.y = tweenArgsActionRight.rhy
                this.RightHandMiddle1.rotation.y = tweenArgsActionRight.rhm1y
                this.RightHandMiddle1.rotation.z = tweenArgsActionRight.rhm1z
                this.RightHandMiddle2.rotation.y = tweenArgsActionRight.rhm2y
                this.RightHandMiddle3.rotation.y = tweenArgsActionRight.rhm3y
                this.RightHandMiddle4.rotation.y = tweenArgsActionRight.rhm4y
                this.RightHandRing1.rotation.y = tweenArgsActionRight.rhr1y
                this.RightHandRing1.rotation.z = tweenArgsActionRight.rhr1z
                this.RightHandRing2.rotation.y = tweenArgsActionRight.rhr2y
                this.RightHandRing3.rotation.y = tweenArgsActionRight.rhr3y
                this.RightHandRing4.rotation.y = tweenArgsActionRight.rhr4y
                this.RightHandIndex1.rotation.y = tweenArgsActionRight.rhi1y
                this.RightHandIndex1.rotation.z = tweenArgsActionRight.rhi1z
                this.RightHandIndex2.rotation.y = tweenArgsActionRight.rhi2y
                this.RightHandIndex3.rotation.y = tweenArgsActionRight.rhi3y
                this.RightHandIndex4.rotation.y = tweenArgsActionRight.rhi4y
                this.RightHandPinky1.rotation.y = tweenArgsActionRight.rhp1y
                this.RightHandPinky1.rotation.z = tweenArgsActionRight.rhp1z
                this.RightHandPinky2.rotation.y = tweenArgsActionRight.rhp2y
                this.RightHandPinky3.rotation.y = tweenArgsActionRight.rhp3y
                this.RightHandPinky4.rotation.y = tweenArgsActionRight.rhp4y
                this.RightHandThumb1.rotation.x = tweenArgsActionRight.rht1x
                this.RightHandThumb1.rotation.y = tweenArgsActionRight.rht1y
                this.RightHandThumb1.rotation.z = tweenArgsActionRight.rht1z
            }).onComplete(() => {
                this.flagActionAnimation = false
                this.flagActionRight = false
            }).repeat(1).yoyo(true).start()
        }
        else {
            var argsForWeapon = null
            var atkSpd = 0
            if (this.weaponEquipped.type == "scythe") {
                argsForWeapon = {
                    wprx: -0.3,
                    wpry: 2.0,
                    wprz: 0.0,
                    wrx: -3.0,
                    wry: this.weaponCurRotation.wry,
                    wrz: this.weaponCurRotation.wrz
                }
                atkSpd = 600
            }
            else {
                argsForWeapon = {
                    wprx: -0.3,
                    wpry: 1.5,
                    wprz: 0.0,
                    wrx: -3.5,
                    wry: this.weaponCurRotation.wry,
                    wrz: this.weaponCurRotation.wrz
                }
                atkSpd = 1000
            }
            var tweenArgsActionRight = {
                rsx: this.RightShoulder.rotation.x,
                rax: this.RightArm.rotation.x,
                ray: this.RightArm.rotation.y,
                raz: this.RightArm.rotation.z,
                rfax: this.RightForeArm.rotation.x,
                rfay: this.RightForeArm.rotation.y,
                rfaz: this.RightForeArm.rotation.z,
                rfarx: this.RightForeArmRoll.rotation.x,
                rfary: this.RightForeArmRoll.rotation.y,
                rfarz: this.RightForeArmRoll.rotation.z,
                rarx: this.RightArmRoll.rotation.x,
                rary: this.RightArmRoll.rotation.y,
                rarz: this.RightArmRoll.rotation.z,
                rslx: this.RightSleeve.rotation.x,
                rsly: this.RightSleeve.rotation.y,
                rslz: this.RightSleeve.rotation.z,


                rhy: this.RightHand.rotation.y,
                rhm1y: this.RightHandMiddle1.rotation.y,
                rhm1z: this.RightHandMiddle1.rotation.z,
                rhm2y: this.RightHandMiddle2.rotation.y,
                rhm3y: this.RightHandMiddle3.rotation.y,
                rhm4y: this.RightHandMiddle4.rotation.y,
                rhr1y: this.RightHandRing1.rotation.y,
                rhr1z: this.RightHandRing1.rotation.z,
                rhr2y: this.RightHandRing2.rotation.y,
                rhr3y: this.RightHandRing3.rotation.y,
                rhr4y: this.RightHandRing4.rotation.y,
                rhi1y: this.RightHandIndex1.rotation.y,
                rhi1z: this.RightHandIndex1.rotation.z,
                rhi2y: this.RightHandIndex2.rotation.y,
                rhi3y: this.RightHandIndex3.rotation.y,
                rhi4y: this.RightHandIndex4.rotation.y,
                rhp1y: this.RightHandPinky1.rotation.y,
                rhp1z: this.RightHandPinky1.rotation.z,
                rhp2y: this.RightHandPinky2.rotation.y,
                rhp3y: this.RightHandPinky3.rotation.y,
                rhp4y: this.RightHandPinky4.rotation.y,
                rht1x: this.RightHandThumb1.rotation.x,
                rht1y: this.RightHandThumb1.rotation.y,
                rht1z: this.RightHandThumb1.rotation.z,

                wprx: this.WeaponPivot.rotation.x,
                wpry: this.WeaponPivot.rotation.y,
                wprz: this.WeaponPivot.rotation.z,
                wrx: this.weaponEquipped.weapon.rotation.x,
                wry: this.weaponEquipped.weapon.rotation.y,
                wrz: this.weaponEquipped.weapon.rotation.z,
            }
            this.tweenActionRight = new TWEEN.Tween(tweenArgsActionRight).to({
                rsx: this.rightArmCurRotation.rsx + 0.5,
                rax: this.rightArmCurRotation.rax - 1.0,
                ray: this.rightArmCurRotation.ray + 0.1,
                raz: this.rightArmCurRotation.raz - 1.0,
                rfay: this.rightArmCurRotation.rfay + 1.1,
                rfary: this.rightArmCurRotation.rfary + 1.0,
                rary: this.rightArmCurRotation.rary + 0.5,
                rslx: this.rightArmCurRotation.rslx + 0.5,
                rsly: this.rightArmCurRotation.rsly - 0.5,
                rslz: this.rightArmCurRotation.rslz + 0.8,



                rhy: this.rightHandCurRotation.rhy - 0.4,
                rhm1y: this.rightHandCurRotation.rhm1y + 0.4,
                rhm1z: this.rightHandCurRotation.rhm1z - 0.2,
                rhm2y: this.rightHandCurRotation.rhm2y + 0.8,
                rhm3y: this.rightHandCurRotation.rhm3y + 0.6,
                rhm4y: this.rightHandCurRotation.rhm4y + 0.6,
                rhr1y: this.rightHandCurRotation.rhr1y + 0.5,
                rhr1z: this.rightHandCurRotation.rhr1z - 0.2,
                rhr2y: this.rightHandCurRotation.rhr2y + 0.9,
                rhr3y: this.rightHandCurRotation.rhr3y + 0.7,
                rhr4y: this.rightHandCurRotation.rhr4y + 0.7,
                rhi1y: this.rightHandCurRotation.rhi1y + 0.2,
                rhi1z: this.rightHandCurRotation.rhi1z - 0.1,
                rhi2y: this.rightHandCurRotation.rhi2y + 0.5,
                rhi3y: this.rightHandCurRotation.rhi3y + 0.3,
                rhi4y: this.rightHandCurRotation.rhi4y + 0.2,
                rhp1y: this.rightHandCurRotation.rhp1y + 0.6,
                rhp1z: this.rightHandCurRotation.rhp1z - 0.2,
                rhp2y: this.rightHandCurRotation.rhp2y + 0.9,
                rhp3y: this.rightHandCurRotation.rhp3y + 0.7,
                rhp4y: this.rightHandCurRotation.rhp4y + 0.5,
                rht1x: this.rightHandCurRotation.rht1x + 1.0,
                rht1y: this.rightHandCurRotation.rht1y + 0.5,
                rht1z: this.rightHandCurRotation.rht1z - 0.2,

                wprx: this.weaponPivotCurRotation.wrx + argsForWeapon.wprx,
                wpry: this.weaponPivotCurRotation.wry + argsForWeapon.wpry,
                wprz: this.weaponPivotCurRotation.wrz + argsForWeapon.wprz,
                wrx: argsForWeapon.wrx,
                wry: argsForWeapon.wry,
                wrz: argsForWeapon.wrz
            }, atkSpd).onStart(() => {

            }
            ).onUpdate(() => {
                this.RightShoulder.rotation.x = tweenArgsActionRight.rsx
                this.RightArm.rotation.x = tweenArgsActionRight.rax
                this.RightArm.rotation.y = tweenArgsActionRight.ray
                this.RightArm.rotation.z = tweenArgsActionRight.raz
                this.RightForeArm.rotation.x = tweenArgsActionRight.rfax
                this.RightForeArm.rotation.y = tweenArgsActionRight.rfay
                this.RightForeArm.rotation.z = tweenArgsActionRight.rfaz
                this.RightForeArmRoll.rotation.y = tweenArgsActionRight.rfary
                this.RightArmRoll.rotation.y = tweenArgsActionRight.rary
                this.RightSleeve.rotation.x = tweenArgsActionRight.rslx
                this.RightSleeve.rotation.y = tweenArgsActionRight.rsly
                this.RightSleeve.rotation.z = tweenArgsActionRight.rslz


                this.RightHand.rotation.y = tweenArgsActionRight.rhy
                this.RightHandMiddle1.rotation.y = tweenArgsActionRight.rhm1y
                this.RightHandMiddle1.rotation.z = tweenArgsActionRight.rhm1z
                this.RightHandMiddle2.rotation.y = tweenArgsActionRight.rhm2y
                this.RightHandMiddle3.rotation.y = tweenArgsActionRight.rhm3y
                this.RightHandMiddle4.rotation.y = tweenArgsActionRight.rhm4y
                this.RightHandRing1.rotation.y = tweenArgsActionRight.rhr1y
                this.RightHandRing1.rotation.z = tweenArgsActionRight.rhr1z
                this.RightHandRing2.rotation.y = tweenArgsActionRight.rhr2y
                this.RightHandRing3.rotation.y = tweenArgsActionRight.rhr3y
                this.RightHandRing4.rotation.y = tweenArgsActionRight.rhr4y
                this.RightHandIndex1.rotation.y = tweenArgsActionRight.rhi1y
                this.RightHandIndex1.rotation.z = tweenArgsActionRight.rhi1z
                this.RightHandIndex2.rotation.y = tweenArgsActionRight.rhi2y
                this.RightHandIndex3.rotation.y = tweenArgsActionRight.rhi3y
                this.RightHandIndex4.rotation.y = tweenArgsActionRight.rhi4y
                this.RightHandPinky1.rotation.y = tweenArgsActionRight.rhp1y
                this.RightHandPinky1.rotation.z = tweenArgsActionRight.rhp1z
                this.RightHandPinky2.rotation.y = tweenArgsActionRight.rhp2y
                this.RightHandPinky3.rotation.y = tweenArgsActionRight.rhp3y
                this.RightHandPinky4.rotation.y = tweenArgsActionRight.rhp4y
                this.RightHandThumb1.rotation.x = tweenArgsActionRight.rht1x
                this.RightHandThumb1.rotation.y = tweenArgsActionRight.rht1y
                this.RightHandThumb1.rotation.z = tweenArgsActionRight.rht1z

                this.WeaponPivot.rotation.x = tweenArgsActionRight.wprx
                this.WeaponPivot.rotation.y = tweenArgsActionRight.wpry
                this.WeaponPivot.rotation.z = tweenArgsActionRight.wprz
                this.weaponEquipped.weapon.rotation.x = tweenArgsActionRight.wrx
            }).onComplete(() => {
                this.flagActionAnimation = false
                this.flagActionRight = false
            }).repeat(1).yoyo(true).start()
        }

    }

    exitMenu() {
        var tweenExitMenuArgs = {
            lookatx: this.lookatxMenu,
            lookaty: this.lookatyMenu,
            lookatz: this.lookatzMenu,
            camposx: this.camposxMenu,
            camposy: this.camposyMenu,
            camposz: this.camposzMenu
        }
        this.tweenExitMenu = new TWEEN.Tween(tweenExitMenuArgs).to({
            lookatx: this.lookatx,
            lookaty: this.lookaty,
            lookatz: this.lookatz,
            camposx: this.camposx,
            camposy: this.camposy,
            camposz: this.camposz
        }, 2000).onUpdate(() => {
            this.model.remove(this.camera)
            this.camera.position.set(tweenExitMenuArgs.camposx, tweenExitMenuArgs.camposy, tweenExitMenuArgs.camposz)
            this.camera.lookAt(tweenExitMenuArgs.lookatx, tweenExitMenuArgs.lookaty, tweenExitMenuArgs.lookatz)
            this.model.add(this.camera)
        }).onComplete(() => {
            this.flagMenuExited = true
        }).start()
        this.flagMenuExiting = true
    }

    moveLeftHand() {
        var tweenLeftHandArgs = {
            lsz: this.LeftShoulder.rotation.z,
            laz: this.LeftArm.rotation.z,
            lfaz: this.LeftForeArm.rotation.z,
            lfarz: this.LeftForeArmRoll.rotation.z,
            larz: this.LeftArmRoll.rotation.z,
            lslx: this.LeftSleeve.rotation.x,
            lslz: this.LeftSleeve.rotation.z,

         
            lhm1y: this.LeftHandMiddle1.rotation.y,
            lhm2y: this.LeftHandMiddle2.rotation.y,
            lhm3y: this.LeftHandMiddle3.rotation.y,
            lhm4y: this.LeftHandMiddle4.rotation.y,
            lhr1y: this.LeftHandRing1.rotation.y,
            lhr2y: this.LeftHandRing2.rotation.y,
            lhr3y: this.LeftHandRing3.rotation.y,
            lhr4y: this.LeftHandRing4.rotation.y,
            lhi1y: this.LeftHandIndex1.rotation.y,
            lhi2y: this.LeftHandIndex2.rotation.y,
            lhi3y: this.LeftHandIndex3.rotation.y,
            lhi4y: this.LeftHandIndex4.rotation.y,
            lhp1y: this.LeftHandPinky1.rotation.y,
            lhp2y: this.LeftHandPinky2.rotation.y,
            lhp3y: this.LeftHandPinky3.rotation.y,
            lhp4y: this.LeftHandPinky4.rotation.y
        }
        this.tweenLeftHand = new TWEEN.Tween(tweenLeftHandArgs).to({
            lsz: this.leftArmCurRotation.lsz - 0.1,
            laz: this.leftArmCurRotation.laz - 0.1,
            lfaz: this.leftArmCurRotation.lfaz - 0.3,
            lfarz: this.leftArmCurRotation.lfarz - 0.3,
            larz: this.leftArmCurRotation.larz - 0.3,
            lslx: this.leftArmCurRotation.lslx + 0.5,
            lslz: this.leftArmCurRotation.lslz + 0.5,

            lhp1y: this.leftHandCurRotation.lhp1y + 0.3,
            lhp2y: this.leftHandCurRotation.lhp2y + 0.4,
            lhp3y: this.leftHandCurRotation.lhp3y + 0.5,
            lhp4y: this.leftHandCurRotation.lhp4y + 0.5,
            lhr1y: this.leftHandCurRotation.lhr1y + 0.4,
            lhr2y: this.leftHandCurRotation.lhr2y + 0.4,
            lhr3y: this.leftHandCurRotation.lhr3y + 0.5,
            lhr4y: this.leftHandCurRotation.lhr4y + 0.5,
            lhm1y: this.leftHandCurRotation.lhm1y + 0.3,
            lhm2y: this.leftHandCurRotation.lhm2y + 0.4,
            lhm3y: this.leftHandCurRotation.lhm3y + 0.5,
            lhm4y: this.leftHandCurRotation.lhm4y + 0.5,
            lhi1y: this.leftHandCurRotation.lhi1y + 0.3,
            lhi2y: this.leftHandCurRotation.lhi2y + 0.4,
            lhi3y: this.leftHandCurRotation.lhi3y + 0.5,
            lhi4y: this.leftHandCurRotation.lhi4y + 0.5,

        }, 3000).onUpdate(() => {
            this.LeftShoulder.rotation.z = tweenLeftHandArgs.lsz
            this.LeftArm.rotation.z = tweenLeftHandArgs.laz
            this.LeftForeArm.rotation.z = tweenLeftHandArgs.lfaz
            this.LeftForeArmRoll.rotation.z = tweenLeftHandArgs.lfarz
            this.LeftArmRoll.rotation.z = tweenLeftHandArgs.larz
            this.LeftSleeve.rotation.x = tweenLeftHandArgs.lslx
            this.LeftSleeve.rotation.z = tweenLeftHandArgs.lslz

            this.LeftHandPinky1.rotation.y = tweenLeftHandArgs.lhp1y
            this.LeftHandPinky2.rotation.y = tweenLeftHandArgs.lhp2y
            this.LeftHandPinky3.rotation.y = tweenLeftHandArgs.lhp3y
            this.LeftHandPinky4.rotation.y = tweenLeftHandArgs.lhp4y
            this.LeftHandRing1.rotation.y = tweenLeftHandArgs.lhr1y
            this.LeftHandRing2.rotation.y = tweenLeftHandArgs.lhr2y
            this.LeftHandRing3.rotation.y = tweenLeftHandArgs.lhr3y
            this.LeftHandRing4.rotation.y = tweenLeftHandArgs.lhr4y
            this.LeftHandMiddle1.rotation.y = tweenLeftHandArgs.lhm1y
            this.LeftHandMiddle2.rotation.y = tweenLeftHandArgs.lhm2y
            this.LeftHandMiddle3.rotation.y = tweenLeftHandArgs.lhm3y
            this.LeftHandMiddle4.rotation.y = tweenLeftHandArgs.lhm4y
            this.LeftHandIndex1.rotation.y = tweenLeftHandArgs.lhi1y
            this.LeftHandIndex2.rotation.y = tweenLeftHandArgs.lhi2y
            this.LeftHandIndex3.rotation.y = tweenLeftHandArgs.lhi3y
            this.LeftHandIndex4.rotation.y = tweenLeftHandArgs.lhi4y
        }).repeat(Infinity).yoyo(true).start()
    }

}