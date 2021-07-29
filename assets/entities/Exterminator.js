import Phaser from 'phaser';
import anims from './exterminatorAnims'
class Exterminator extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'ext_appear');
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.init()
    }
    init() {
        this.attacking = false;
        this.damage = 0
        this.hp = 40//rand to 20/25 
        anims(this.scene.anims)
        this.setOrigin(0, 0)
        this.originalWidth = this.width
        this.originalHeight = this.height
        this.originalY = this.y
        this.originalX = this.x
        this.setSize(this.width - 75, this.height + 100)
        this.once('appear', () => {
            this.body.setSize(this.width, this.height, true)
            this.play('skyAttack', true)
            this.y += 50
            this.setSize(this.width - 60, this.height, true)
            this.scene.time.addEvent({
                delay: 1000,
                callback: callback_ext,
                callbackScope: this,
                loop: false
            })
            this.wait = 0;
            function callback_ext() {
                this.play('appear', true)
                this.on('animationcomplete', () => {
                    this.modeEXT = 'follow', this.damage = 1, this.play('walk', true), this.wait++
                })
                this.body.setSize(this.width, this.height, true)
                this.setSize(this.width - 75, this.height - 55, true).setOffset(37.5, 55);
            }
        })
        this.once('ded', () => {
            this.damage = 0
            this.modeEXT = 'dead'
            this.setVelocity(0)
            this.play('death', true)
            this.on('animationcomplete', () => {
                this.destroy()
            })
        })
        if (this.modeEXT === 'follow') {
            this.damage = 1
        }
        this.once('setSize', () => {
            this.damage = 20
            this.setVelocity(0)
            this.body.setSize(this.width, this.height, true)
        })
    }
    attack() {
        this.attacking = true;
        if (this.hp <= 5) {
            this.chain(['vanish', 'skyAttack', 'skyAttack'])
            this.scene.time.addEvent({
                delay: 2200,
                callback: () => {
                    this.emit('setSize')
                },
                callbackScope: this,
                loop: false
            })
            this.scene.time.addEvent({
                delay: 2250,
                callback: () => {
                    this.damage = 0
                    this.modeEXT = 'dead'
                    this.destroy()
                },
                callbackScope: this,
                loop: false
            })
        } else {
            this.setVelocity(0)
            this.body.setSize(this.width, this.height, true)
            this.setSize(this.width, this.height - 55, true).setOffset(0, 55);
            this.play('attack', true)
            this.on('animationcomplete', () => {
                this.setSize(this.width - 75, this.height - 55, true).setOffset(37.5, 55);
                this.damage = 1;
                this.modeEXT = 'follow'
                this.play('walk', true)
            })
        }
        this.on('animationcomplete', () => {
            this.attacking = false;
        })
    }
    hitAnimation() {
        this.modeEXT = 'hit'
        this.setVelocity(0)
        this.play('damaged', true)
        this.scene.time.addEvent({
            delay: 1000,
            callback: () => {
                if (this.hp > 0) {
                    this.modeEXT = 'follow'
                }
            },
            callbackScope: this,
            loop: false
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
        // if (this.wait != 0 && this.wait % 5 === 0) {
        //     this.modeEXT = 'gas attack'
        // }
        if (this.modeEXT === 'gas attack' && this.attacking === false) {
            this.attack()
        }
    }

}
export default Exterminator