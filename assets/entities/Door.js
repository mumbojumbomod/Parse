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
        anims(this.scene.anims)
        this.status = 'Locked'
        this.setPipeline('Light2D')
        this.lockedLight = this.scene.lights.addLight(this.x, this.y - 10, 50, 0xff0008, 0)
        this.UNlockedLight = this.scene.lights.addLight(this.x, this.y - 10, 50, 0x15ff00, 0)
        this.once('open', () => {
            this.scene.cameras.main.fadeOut(1500, 0, 0, 0);
            this.play('dooranim', true)
            this.scene.physics.pause()
            let timer3 = this.scene.time.addEvent({
                delay: 1500,
                callback: () => {
                    //this.scene.cameras.main.fadeIn(1500, 0, 0, 0);
                    this.scene.scene.stop('Level')
                    this.scene.scene.start('MenuScene')
                    this.scene.physics.resume()
                }
            })
        })


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
