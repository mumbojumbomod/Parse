import Phaser, { Math } from 'phaser';
import Monster from './Monster'
import anims from './janitorAnims'
import PreloadScene from './PreloadScene'
class Bkey extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bluekey');
        this.init()
        scene.add.existing(this)
        scene.physics.add.existing(this)
    }
    init() {
        this.collected = false
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
export default Bkey
