class HandlerAmmo {
    trans = null
    world = null
    ammo = null

    rigidBodies = []
    constructor(trans, world, ammo) {
        this.trans = trans
        this.world = world
        this.ammo = ammo
    }

    update(deltaTime) {
        this.world.stepSimulation(deltaTime, 10);

        for (let i = 0; i < this.rigidBodies.length; i++) {
            let body = this.rigidBodies[i];
            let physicalBody = body.userData.physicsBody;
            let ms = physicalBody.getMotionState();
            if (ms) {

                ms.getWorldTransform(this.trans);
                let p = this.trans.getOrigin();
                body.position.set(p.x(), p.y(), p.z());
            }
        }
    }

    addRigidBodyToSet(model) {
        this.rigidBodies.push(model)
    }

    addRigidBodyToWorld(body) {
        this.world.addRigidBody(body)
    }

    removeRigidBodyFromWorld(body) {
        this.world.removeRigidBody(body)
    }

    removeRigidBodyFromSet(model) {
       this.rigidBodies.splice(this.rigidBodies.indexOf(model), 1)
    }

    getWorld() {
        return this.world
    }
}