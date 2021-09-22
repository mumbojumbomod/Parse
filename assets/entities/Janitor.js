import Phaser, { Math } from 'phaser';
import Monster from './Monster'
import anims from './janitorAnims'
import PreloadScene from './PreloadScene'
class Janitor extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'janitorIdle');
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.init()
    }
    init() {
        this.rand = Phaser.Math.Between(1, 2)
        this.HPrand = Phaser.Math.Between(7, 12)
        console.log(this.rand)
        this.hp = this.HPrand
        this.damage = 0
        this.left = false;
        this.sweepMode = 'deactivated';
        anims(this.scene.anims)
        this.setBodySize(50, 200).setOffset(0, -170)
        this.y -= 10;
        this.once('turnOn', () => {
            this.play('janitorWakeA')
            this.setBodySize(50, 25).setOffset(0, 5)
            this.on('animationcomplete', () => {
                this.sweepMode = 'walking'
                this.play('janitorShuffleA', true)
                this.damage = 1
            })
        })
        this.once('Clorox', () => {
            this.damage = 0;
            this.play('janitorDeathA', true)
            this.on('animationcomplete', () => { this.destroy() })
        })
    }
    hitAnimation() {
        if (this.sweepMode != 'deactivated') {
            this.sweepMode = 'hit'
            this.setVelocity(0)
            this.play('janitorHitA', true)
            this.scene.time.addEvent({
                delay: 1000,
                callback: () => {
                    if (this.hp > 0) {
                        this.modeEXT = 'walk'
                    }
                },
                callbackScope: this,
                loop: false
            })
        }
    }
    move() {
        if (this.left === true) {
            this.setOffset(50, 5)
            this.x -= 30
            this.sweep()
        } else {
            this.setOffset(0, 5)
            this.x += 30;
            this.sweep()
        }
    }
    addCollider(otherObj, callback) {
        this.scene.physics.add.collider(this, otherObj, callback, null, this);
    }
    addOverlap(otherObj, callback) {
        this.scene.physics.add.overlap(this, otherObj, callback, null, this);
    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta)
        if (this.sweepMode === 'sweepOrSlam') {
            if (this.rand === 1) {
                this.damage = 10
                this.setBodySize(100, 25).setOffset(-15, 5)
                this.play('janitorSpinSlamA', true)
            } else if (this.rand === 2) {
                this.damage = 10
                this.setBodySize(100, 25).setOffset(-15, 5)
                this.play('janitorSlamA', true)
            }
            this.on('animationcomplete', () => {
                this.damage = 1
                this.setBodySize(50, 25).setOffset(0, 5)
                this.sweepMode = 'walking'
            })
        }
    }

}
export default Janitor
