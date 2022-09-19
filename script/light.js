class Light {
    type = ""
    color = null
    intensity = null

    constructor(type, color, intensity) {
        this.type = type
        this.color = color
        this.intensity = intensity
    }

    getLight() {
        if (this.type == "ambient") {
            return new THREE.AmbientLight(this.color, this.intensity);
        }
        else if (this.type == "directional") {
            return new THREE.DirectionalLight(this.color, this.intensity)
        }
        else {
            throw new TypeError("not ambient or directional light selected!!")
        }
    }
}