import Phaser from 'phaser';
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
        //this.anchor.X = 100;
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
            })
        })    
    }
    move(){
        if(this.left === true){
            this.setOffset(50,5)
            this.x-=30
            this.sweep()
        } else {
            this.setOffset(0, 5)
            this.x+=30;
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
    }

};
export default Janitor
