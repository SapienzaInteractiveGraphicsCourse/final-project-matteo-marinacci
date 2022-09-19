class Camera {

    type = ""
    fov = null
    aspect = null
    near = null
    far = null
    left = null
    right = null
    top = null
    bottom = null

    constructor(array) {
        if (array[0] == "perspective") {
            this.type = array[0]
            this.fov = array[1]
            this.aspect = array[2]
            this.near = array[3]
            this.far = array[4]
        }
        else if (array[0] == "orthographic") {
            this.type = array[0]
            this.left = array[1]
            this.right = array[2]
            this.top = array[3]
            this.bottom = array[4]
            this.near = array[5]
            this.far = array[6]
        }
        else {
            throw new TypeError("not perspective or orthographic camera selected!!")
        }

    };

    getCamera() {
        if (this.type == "perspective") {
            return new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
        }
        else if (this.type == "orthographic") {
            return new THREE.OrthographicCamera(this.left, this.right, this.top, this.bottom, this.near, this.far)
        }
    }
}