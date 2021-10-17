import Phaser, { Math } from 'phaser';
import Monster from './Monster'
import anims from './janitorAnims'
import PreloadScene from './PreloadScene'
class Door extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'door');
        this.init()

        scene.add.existing(this)
        scene.physics.add.existing(this)
    }
    init() {
        this.status = 'Locked'
        this.setPipeline('Light2D')
        this.lockedLight = this.scene.lights.addLight(this.x, this.y - 10, 30, 0xff0008, 0)
        this.UNlockedLight = this.scene.lights.addLight(this.x, this.y - 10, 30, 0x4c00ff, 0)
    }
    addCollider(otherObj, callback) {
        this.scene.physics.add.collider(this, otherObj, callback, null, this);
    }
    addOverlap(otherObj, callback) {
        this.scene.physics.add.overlap(this, otherObj, callback, null, this);
    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta)
    }

}
export default Door
