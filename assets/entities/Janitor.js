import Phaser from 'phaser';
import anims from './playerAnims'
import Monster from './Monster'
class Janitor extends Monster {
    constructor(scene, x, y) {
        super(scene, x, y, 'robodude');
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.init()
    }
    init() {
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
export default Janitor
