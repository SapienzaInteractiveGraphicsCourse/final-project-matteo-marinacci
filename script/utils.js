class Utils {
    static loadModel(scene, model_gltf) {
        const myPromise = new Promise((resolve, reject) => {
            const gltfLoader = new THREE.GLTFLoader()
            gltfLoader.load(
                model_gltf,
                function (gltf) {
                    resolve(gltf.scene);
                },
                function (xhr) {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
                },
                function (error) {
                    console.log("An error happened");
                    reject(error);
                }
            )
        })
        return myPromise;
    }


    static loadFontPromise(scene, inputFont) {
        const myPromise = new Promise((resolve, reject) => {
            const fontLoader = new FontLoader()
            fontLoader.load(inputFont,
                function (font) {
                    resolve(font)
                }),
                function (xhr) {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
                },
                function (error) {
                    console.log("An error happened");
                    reject(error);
                }
        })
        return myPromise
    }

    static loadImagePromise(scene, inputImage) {
        const myPromise = new Promise((resolve, reject) => {
            const imgLoader = new THREE.TextureLoader()
            imgLoader.load(inputImage,
                function (image) {
                    resolve(image)
                },
                undefined,
                function (error) {
                    console.log("An error happened");
                    reject(error);
                })
        })
        return myPromise
    }
}