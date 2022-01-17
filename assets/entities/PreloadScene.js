import Phaser from 'phaser'
class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene')
    }
    preload() {
        this.load.spritesheet('robodude', 'assets/images/playermove.png', { frameWidth: 117, frameHeight: 26 });
        this.load.spritesheet('spites', 'assets/images/spites.png', { frameWidth: 8, frameHeight: 16 });
        this.load.spritesheet('spitesD', 'assets/images/spitesD.png', { frameWidth: 8, frameHeight: 16 });
        this.load.spritesheet('robodude2', 'assets/images/playermove2.png', { frameWidth: 117, frameHeight: 26 });
        this.load.spritesheet('robodudenodust', 'assets/images/movenodust.png', { frameWidth: 117, frameHeight: 26 });
        this.load.spritesheet('robodudenodust2', 'assets/images/movenodust2.png', { frameWidth: 117, frameHeight: 26 });
        this.load.spritesheet('shooting', 'assets/images/shooting.png', { frameWidth: 117, frameHeight: 26 });
        this.load.spritesheet('shooting2', 'assets/images/shooting2.png', { frameWidth: 117, frameHeight: 26 });
        this.load.spritesheet('wake', 'assets/images/wake.png', { frameWidth: 117, frameHeight: 26 });
        this.load.image('bullet', 'assets/images/bullet.png');
        this.load.image('tiles', ['assets/maps/derelict_spacecraft_tiles.png', 'assets/maps/NormalMap.png']);
        this.load.image('intro', 'assets/maps/spritesheet_lesson.png');
        this.load.image('bg1', 'assets/images/parallax/parallax1.png');
        this.load.image('bg2', 'assets/images/parallax/parallax2.png');
        this.load.image('bg3', 'assets/images/parallax/parallax3.png');
        this.load.image('bg4', 'assets/images/parallax/parallax4.png');
        this.load.image('bg5', 'assets/images/parallax/parallax5.png');
        //DOORSPRITES
        this.load.image('door', 'assets/images/doordoo.png');
        this.load.spritesheet('dooranim', 'assets/images/dooropening.png', { frameWidth: 48, frameHeight: 64 });
        this.load.image('bluekey', 'assets/images/bluekey.png');
        //DOORSPRITES
        this.load.image('H0', 'assets/images/H/H0.png');
        this.load.image('H1', 'assets/images/H/H1.png');
        this.load.image('H2', 'assets/images/H/H2.png');
        this.load.image('H3', 'assets/images/H/H3.png');
        this.load.image('H4', 'assets/images/H/H4.png');
        this.load.image('HF', 'assets/images/H/HF.png');
        this.load.image('numH', 'assets/images/H/num.png');
        this.load.image('saberdude', 'assets/images/saber/saberdude.png');
        this.load.spritesheet('idle', 'assets/images/saber/idle.png', { frameWidth: 121, frameHeight: 70 });
        this.load.spritesheet('quickspin', 'assets/images/saber/quick spin attack.png', { frameWidth: 121, frameHeight: 70 });
        this.load.spritesheet('wlak', 'assets/images/saber/move.png', { frameWidth: 40, frameHeight: 70 });
        this.load.spritesheet('fade', 'assets/images/saber/fade.png', { frameWidth: 121, frameHeight: 70 });
        this.load.tilemapTiledJSON('map', 'assets/maps/levelone.json');
        // Exterminator images
        this.load.spritesheet('ext_appear', 'assets/images/exterminator/appear.png', { frameWidth: 97, frameHeight: 108 });
        this.load.spritesheet('ext_attack', 'assets/images/exterminator/attack.png', { frameWidth: 97, frameHeight: 108 });
        this.load.spritesheet('ext_damaged', 'assets/images/exterminator/damaged.png', { frameWidth: 97, frameHeight: 108 });
        this.load.spritesheet('ext_death', 'assets/images/exterminator/death.png', { frameWidth: 97, frameHeight: 108 });
        this.load.spritesheet('ext_idle', 'assets/images/exterminator/idle.png', { frameWidth: 97, frameHeight: 108 });
        this.load.spritesheet('ext_skyAttack', 'assets/images/exterminator/skyAttack.png', { frameWidth: 97, frameHeight: 108 });
        this.load.spritesheet('ext_vanish', 'assets/images/exterminator/vanish.png', { frameWidth: 97, frameHeight: 108 });
        this.load.spritesheet('ext_walk', 'assets/images/exterminator/walk.png', { frameWidth: 97, frameHeight: 108 });
        //Music/Sound Effects\
        this.load.audio('Gunshot1', ['assets/Sound/Gunshot1.mp3', 'assets/Sound/Gunshot1.ogg'])
        this.load.audio('Gunshot2', ['assets/Sound/Gunshot2.mp3', 'assets/Sound/Gunshot2.ogg'])
        this.load.audio('Gunshot3', ['assets/Sound/Gunshot3.mp3', 'assets/Sound/Gunshot3.ogg'])
        this.load.audio('Sensor', ['assets/Sound/Sensor.mp3', 'assets/Sound/Sensor.ogg'])
        this.load.audio('gasAttack', ['assets/Sound/Gas_attack.mp3', 'assets/Sound/Gas_attack.ogg'])
        this.load.audio('Lightning', ['assets/Sound/ZAP.mp3', 'assets/Sound/ZAP.ogg'])
        //Shock Sweeper
        this.load.spritesheet('janitorDeath', 'assets/images/janitor/death.png', { frameWidth: 70, frameHeight: 30 });//NULL
        this.load.spritesheet('janitorHit', 'assets/images/janitor/hit.png', { frameWidth: 56, frameHeight: 30 });//NULL
        this.load.spritesheet('janitorWalk', 'assets/images/janitor/shuffle.png', { frameWidth: 56, frameHeight: 30 });//NULL
        this.load.spritesheet('janitorIdle', 'assets/images/janitor/idle.png', { frameWidth: 88, frameHeight: 30 });
        this.load.spritesheet('janitorShuffle', 'assets/images/janitor/shuffle.png', { frameWidth: 56, frameHeight: 30 });//NULL
        this.load.spritesheet('janitorSlam', 'assets/images/janitor/slam.png', { frameWidth: 59, frameHeight: 30 });//NULL
        this.load.spritesheet('janitorSpinSlam', 'assets/images/janitor/spinSlam.png', { frameWidth: 64, frameHeight: 30 });//NULL
        this.load.spritesheet('janitorWake', 'assets/images/janitor/wake.png', { frameWidth: 88, frameHeight: 30 });
        this.load.spritesheet('janitorSweep', 'assets/images/janitor/Sweep.png', { frameWidth: 88, frameHeight: 30 });
    }
    create() {
        this.scene.start('MenuScene')
    }
}
export default PreloadScene