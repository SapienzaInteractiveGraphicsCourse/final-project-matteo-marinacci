window.onload = function () {
  main()
}

function main() {
  let world, trans = null, handlerAmmo;
  let scene, sceneUid, camera_array, camera_array_uid, camera, cameraUid, renderer, clock
  let uid, font_menu, leftImage, rightImage, arrowImage

  let character_model, character
  let tutorial_room_model, tutorial_room, weapon
  let portal_model, portal
  let outside
  let rock_model, sword_model, wall_model
  let enemy_model, enemy

  let loadFinished = false
  let errorFlag = false

  Ammo().then(ammo => start(ammo))

  function start(ammo) {
    document.body.addEventListener("contextmenu", function (e) {
      e.preventDefault()
      return false
    })


    trans = new ammo.btTransform()

    setupWorld(ammo)

    handlerAmmo = new HandlerAmmo(trans, world, ammo)

    graphics()

    models(ammo, handlerAmmo, clock)

    animate()
  }

  function setupWorld(ammo) {

    let collConf = new ammo.btDefaultCollisionConfiguration()
    let dispatcher = new ammo.btCollisionDispatcher(collConf)
    let broadphase = new ammo.btDbvtBroadphase()
    let solver = new ammo.btSequentialImpulseConstraintSolver()

    world = new ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collConf);
    world.setGravity(new ammo.btVector3(0, -20, 0));

  }

  function graphics() {
    clock = new THREE.Clock()


    scene = new THREE.Scene();
    sceneUid = new THREE.Scene()


    camera_array = ["perspective", 75, window.innerWidth / window.innerHeight, 1, 1000]
    camera = new Camera(camera_array).getCamera();

    camera_array_uid = ["orthographic", window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 100]
    cameraUid = new Camera(camera_array_uid).getCamera()


    camera.position.set(0, 10, 5);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.autoClear = false
    document.body.appendChild(renderer.domElement)



    renderer.setClearColor(0xffffff, 0)




  }



  function models(ammo, handlerAmmo) {
    const manager = new THREE.LoadingManager()

    manager.onLoad = function () {
      console.log('Loading complete!');
      loadFinished = true
      var loadingBar = document.getElementById("loadingBar").style
      loadingBar.visibility = "hidden"
      var body = document.body.style
      body.background = "whitesmoke"
    };


    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
      var progressBar = document.getElementById("progressBar")
      progressBar.value = itemsLoaded / itemsTotal * 100
      var loaded = document.getElementById("loaded")
      loaded.textContent = itemsLoaded
      var total = document.getElementById("total")
      total.textContent = itemsTotal
    };



    manager.onError = function (url) {

      console.log('There was an error loading ' + url + " Please Refresh!");
      errorFlag = true
    };

    font_menu = Utils.loadFontPromise(sceneUid, manager, "fonts/gypsycurse.json")
    leftImage = Utils.loadImagePromise(sceneUid, manager, "left_click.png")
    rightImage = Utils.loadImagePromise(sceneUid, manager, "right_click.png")
    arrowImage = Utils.loadImagePromise(sceneUid, manager, "arrows.png")

    uid = new Uid(sceneUid, cameraUid, font_menu, leftImage, rightImage, arrowImage)

    tutorial_room_model = Utils.loadModel(scene, manager, "models/tutorial_room/scene.gltf")
    tutorial_room = new TutorialRoom(ammo, handlerAmmo, scene, camera, tutorial_room_model, 3, 3, 3, 0, 0, 0)

    portal_model = Utils.loadModel(scene, manager, "models/portal/scene.gltf")
    portal = new Portal(scene, camera, portal_model, 0, 0, 0, 0, 0, 0, tutorial_room)

    weapon_scythe_model = Utils.loadModel(scene, manager, "models/scythe/scene.gltf")
    weapon_sword_model = Utils.loadModel(scene, manager, "models/sword/scene.gltf")
    weapon = new Weapon(ammo, handlerAmmo, scene, camera, weapon_scythe_model, 0.1, 0.1, 0.1, 0, 0, 0, weapon_sword_model, 0.2, 0.2, 0.2, 0, 0, 0, tutorial_room, portal)

    character_model = Utils.loadModel(scene, manager, "models/grim_reaper/scene.gltf")
    character = new Character(ammo, handlerAmmo, scene, camera, character_model, 0.1, 0.1, 0.1, -6, 5, 0, tutorial_room, weapon, portal, uid)

    wall_model = Utils.loadModel(scene, manager, "models/granit_rock_wall/scene.gltf")
    rock_model = Utils.loadModel(scene, manager, "models/rock/scene.gltf")
    sword_model = Utils.loadModel(scene, manager, "models/broken_sword/scene.gltf")

    outside = new Outstide(ammo, handlerAmmo, scene, camera, 0, -10, 0, 500, 1, 500, wall_model, rock_model, sword_model, tutorial_room)

    enemy_model = Utils.loadModel(scene, manager, "models/eye/scene.gltf")
    enemy = new Enemy(ammo, handlerAmmo, scene, enemy_model, 0.008, 0.008, 0.008, 10, 0, 0, character, outside, uid)
  }






  function animate() {
    if (loadFinished && !errorFlag) {
      uid.update(character.loadMenu())

      enemy.update()

      character.moveCharacter(uid.startGame())
      if (!uid.gameOver()) {
        handlerAmmo.update(clock.getDelta())
      }
      tutorial_room.update()
      weapon.update(tutorial_room.isReady())
      character.update(tutorial_room.isReady(), weapon.isReady(), uid.startGame())
      portal.update(weapon.gateIsOpen())
      outside.update()

      renderer.render(scene, camera);
      renderer.render(sceneUid, cameraUid)
    }



    requestAnimationFrame(animate);
  }


}

