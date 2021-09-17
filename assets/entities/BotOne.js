import Phaser from 'phaser';
import anims from './botOneAnims'
class BotOne extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.init()
    }
    init() {
        const SensorSoundConfig = { mute: false, volume: 0.5, rate: 1, detune: 0, seek: 0, loop: true, delay: 0 }
        this.Sensor = this.scene.sound.add('Sensor', SensorSoundConfig);
        this.setOrigin(0, 0)
        this.setPipeline('Light2D')
        this.body.setSize(this.width + 50, this.height).setOffset(-20, 34);
        this.y -= 50
        this.x -= 50
        anims(this.scene.anims)
        this.mode = 'walk';
        this.play('wlak', true);
        this.hp = 10;
        this.damage = 1;
        const moveTween = this.scene.tweens.add({
            targets: this,
            x: '+=100',
            ease: 'Linear',
            flipX: true,
            duration: 1666,
            repeat: -1,
            yoyo: true,
        });
        this.once('FADE', () => {
            this.damage = 0;
            this.play('fade', true)
            this.on('animationcomplete', () => { this.destroy() })
        })
        this.once('attack', () => {
            this.mode = 'attack';
            this.play('wlak', false)
            moveTween.stop()
            this.body.setSize(32 + 70, 32).setOffset(+15, 34);
            this.x -= 50;
            this.play('quickspin', true)
            this.Sensor.play()
            let lite = this.scene.lights.addLight(this.x + 50, this.y, 100, 0xff0019, 2)
            let timer2 = this.scene.time.addEvent({
                delay: 100,
                callback: () => {
                    //lite.setActive(false);
                    lite.setVisible(false);
                }
            })
        });

    }
    addCollider(otherObj, callback) {
        this.scene.physics.add.collider(this, otherObj, callback, null, this);
    }
    addOverlap(otherObj, callback) {
        this.scene.physics.add.overlap(this, otherObj, callback, null, this);
    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta)
        if (this.mode === 'attack') {
        }
    }

}
export default BotOne
