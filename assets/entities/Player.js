import Phaser from 'phaser';
import playerAnims from './playerAnims';
import animations from './playerAnims'
class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'robodude');
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.init()
    }
    init() {
        const bulletSoundConfig = { mute: false, volume: 100, rate: 1, detune: 0, seek: 0, loop: false, delay: 0 }
        this.Gunshot = this.scene.sound.add('Gunshot3', bulletSoundConfig);
        this.HPint = 1000
        this.active = true;
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.setCollideWorldBounds()
        this.depth = 100
        this.body.setSize(this.width - 100, this.height - 3).setOffset(15, 3);
        this.left = false;
        this.lastBulletTime = null;
        animations(this.scene.anims)
        this.bullets = this.scene.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10,
            allowGravity: false,
        })
        this.lastFired = 0;
    }
    addCollider(otherObj, callback) {
        this.scene.physics.add.collider(this, otherObj, callback, null, this);
    }
    addOverlap(otherObj, callback) {
        this.scene.physics.add.overlap(this, otherObj, callback, null, this);
    }
    shoot() {

        /**
         * called when spacebar is pressed, check difference in time between last time bullet shot and time to be 500 MS then check if bullet is active then shoot bullet.
         */
        let timeDifference = this.scene.time.now - this.lastBulletTime
        if (timeDifference >= 500) {
            var bullet = this.bullets.get(this.x, this.y).setPipeline('Light2D')
            if (bullet) {
                this.Gunshot.play();
                bullet.setActive(true);
                bullet.setVisible(true);
                if (this.left === false) {
                    bullet.body.velocity.x = 200;
                    bullet.x -= 25
                } else if (this.left === true) {
                    bullet.body.velocity.x = -200;
                    bullet.x -= 50
                }
                this.lastBulletTime = this.scene.time.now;
            }
        }
    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta)
        if (this.y >= 493) {
            this.scene.anims.pauseAll()
            this.scene.game.sound.stopAll()
            this.scene.scene.start("DeathScene")
        }
        if (this.active) {
            if (this.cursors.right.isDown) {
                this.flip = false
                this.left = false;
                this.setVelocityX(100);
                this.play('run', true);
            } else if (this.cursors.left.isDown) {
                this.flip = true
                this.left = true;
                this.setVelocityX(-100);
                this.play('runF', true);
            } else if (this.cursors.space.isDown) {
                if (this.flip === true && time > this.lastFired) {
                    this.play('shootF', true);
                    this.setVelocityX(0);
                } else if (this.flip === false && time > this.lastFired) {
                    this.play('shoot', true);
                    this.setVelocityX(0);
                }
                this.shoot()
            } else {


                if (this.flip === true) {
                    this.setVelocityX(0);
                    this.play('notF', true);
                } else {
                    this.setVelocityX(0);
                    this.play('not', true);
                }

            }
            if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.body.onFloor()) {
                if (this.flip === true) {
                    this.play('jumpF', true);
                    this.setVelocityY(-500);
                } else {
                    this.play('jump', true);
                    this.setVelocityY(-500);
                }
            }
            if (!this.body.onFloor()) {
                if (this.flip === true) {
                    this.play('jumpF', true);
                } else {
                    this.play('jump', true);
                }
            }

        }
        this.bullets.children.each(function (b) {
            if (b.active) {
                if (b.x < this.x - this.scene.sys.game.canvas.width || b.x > this.x + this.scene.sys.game.canvas.width) {
                    b.setActive(false)
                    b.setVisible(false)

                }
            }
        }.bind(this));
    }
}
export default Player