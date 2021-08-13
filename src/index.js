
import Phaser from "phaser";
import PreloadScene from '../assets/entities/PreloadScene'
import Player from '../assets/entities/Player'
import BotOne from '../assets/entities/BotOne'
import Exterminator from '../assets/entities/Exterminator'
import Monster from '../assets/entities/Monster'
import Janitor from '../assets/entities/Janitor'
class Level extends Phaser.Scene {

  constructor(key) {
    super({ key: 'Level' });
  }
  create() {
    gameState.player = new Player(this, 300, 0).setPipeline('Light2D')
    this.lights.enable()//.setAmbientColor(0xffffff);
    gameState.this = this
    this.createParallaxBackgrounds()
    this.createAnimations()
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('derelict_spacecraft_tiles', 'tiles');
    const backgrounds = map.createLayer('backgrounds', tileset).setPipeline('Light2D')
    gameState.platforms = map.createLayer('platforms', tileset, 0, 0).setPipeline('Light2D')//.setScale(0.9);
    gameState.platforms.setCollisionByExclusion(-1, true);
    gameState.player.addCollider(gameState.platforms)
    gameState.active = true
    this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5)
    this.cameras.main.setBounds(0, 0, 3000, 1000);
    this.physics.world.setBounds(0, 0, 3000, 1100);
    gameState.spites = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });
    const spitesObjects = map.getObjectLayer('spites')['objects'];
    spitesObjects.forEach(spitesObject => {
      const spite = gameState.spites.create(spitesObject.x, spitesObject.y - spitesObject.height, 'spites').setOrigin(0, 0).setPipeline('Light2D');
    });
    spitesObjects.forEach(ject => {
      this.lights.addLight(ject.x, ject.y, 100, 0xffff00, 2.3)
    })
    gameState.HP = this.add.sprite(config.width - 30, 20, 'HF').setScrollFactor(0)
    gameState.HPnum = this.add.sprite(config.width - 80, 20, 'numH').setScrollFactor(0)
    gameState.player.addOverlap(gameState.spites, () => {
      gameState.player.HPint--
    })
    gameState.spitesD = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });
    const spitesObjectsD = map.getObjectLayer('spitesD')['objects'];
    spitesObjectsD.forEach(spitesObjectD => {
      const spite = gameState.spitesD.create(spitesObjectD.x, spitesObjectD.y - spitesObjectD.height, 'spitesD').setOrigin(0, 0).setPipeline('Light2D');
    });
    spitesObjectsD.forEach(ject => {
      this.lights.addLight(ject.x, ject.y, 100, 0xffff00, 2.3)
    })
    gameState.player.addOverlap(gameState.spitesD, () => {
      gameState.player.HPint--
    })
    const frontA = map.createLayer('frontA', tileset).setPipeline('Light2D')
    gameState.HPtext = this.add.text(config.width - 90, 18, '1000', { fontSize: '8px', fill: '#00a808' }).setScrollFactor(0);
    ///enemies
    gameState.saber = this.physics.add.group({
      allowGravity: true,
      immovable: true,
    });
    this.physics.add.collider(gameState.saber, gameState.platforms);

    gameState.saberObjects = map.getObjectLayer('saber3')['objects'];
    gameState.tribot = gameState.saberObjects.map(saberObject => {
      let saber = new BotOne(this, saberObject.x, saberObject.y - saberObject.height)
      gameState.saber.add(saber)
      return saber
    });
    this.physics.add.collider(gameState.player.bullets, gameState.platforms, (obj1, obj2) => {
      obj1.destroy()
    });

    gameState.this.physics.add.collider(gameState.player.bullets, gameState.saber, (obj1, obj2) => {
      obj1.destroy()
      obj2.hp -= 1
      obj2.emit('attack')
      if (obj2.hp <= 0) {
        obj2.mode = 'dead'
        obj2.setVelocityX(0)
        obj2.emit('FADE')
      }
    });
    this.physics.add.overlap(gameState.player, gameState.saber, (player, saber) => {
      saber.emit('attack')
      gameState.player.HPint -= saber.damage
    })

    gameState.exterminators = this.physics.add.group({
      allowGravity: true,
      immovable: true,
    });
    this.physics.add.overlap(gameState.player, gameState.exterminators, (player, exterminator) => {
      exterminator.emit('appear')

    })
    this.physics.add.collider(gameState.exterminators, gameState.platforms);
    gameState.extObjects = map.getObjectLayer('exterminator')['objects'];
    gameState.extArray = gameState.extObjects.map(extObject => {
      let exterminator = new Monster(this, extObject.x, extObject.y - extObject.height, 'ext_appear')
      gameState.exterminators.add(exterminator)
      return exterminator
    });
    this.physics.add.overlap(gameState.player, gameState.exterminators, (player, exterminator) => {
      if (exterminator.modeEXT != 'gas attack') {
        gameState.player.HPint -= exterminator.damage
      } else {
        gameState.player.HPint -= exterminator.damage * 3;
      }
    })
    gameState.this.physics.add.collider(gameState.player.bullets, gameState.exterminators, (obj1, obj2) => {
      obj2.emit('appear')
      obj1.destroy()
      if (obj2.modeEXT === 'follow') {
        obj2.hp -= 1
        //hit animation
        obj2.hitAnimation()
        if (obj2.left === false) {
          obj2.x -= obj2.shockDistance
        } else {
          obj2.x += obj2.shockDistance
        }
        if (obj2.hp <= 0) {
          obj2.modeEXT = 'dead'
          obj2.setVelocityX(0)
          //.emit death anim
          obj2.emit('ded')

        }
      }
    });
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    gameState.janitors = this.physics.add.group({
      allowGravity: true,
      immovable: true,
    });
    this.physics.add.overlap(gameState.player, gameState.janitors, (player, janitor) => {

    })
    this.physics.add.collider(gameState.janitors, gameState.platforms);
    gameState.extObjects = map.getObjectLayer('janitor')['objects'];
    gameState.extArray = gameState.extObjects.map(extObject => {
      let janitor = new Janitor(this, extObject.x, extObject.y - extObject.height, '')
      gameState.janitors.add(janitor)
      janitor.y -= 40;
      return janitor
    });
    this.physics.add.overlap(gameState.player, gameState.janitors, (player, janitor) => {

    })
    gameState.this.physics.add.collider(gameState.player.bullets, gameState.janitors, (obj1, obj2) => {
    });
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors
    //janitors


  }

  createParallaxBackgrounds() {
    gameState.bg1 = this.add.image(0, 0, 'bg1').setScale(5);
    gameState.bg2 = this.add.image(0, 0, 'bg2').setScale(5);
    gameState.bg4 = this.add.image(0, 0, 'bg4').setScale(5);
    gameState.bg3 = this.add.image(0, 0, 'bg3').setScale(5);
    gameState.bg5 = this.add.image(0, 0, 'bg5').setScale(5);

    gameState.bg1.setOrigin(0, 0);
    gameState.bg2.setOrigin(0, 0);
    gameState.bg3.setOrigin(0, 0);
    gameState.bg4.setOrigin(0, 0);
    gameState.bg5.setOrigin(0, 0);

    const game_width = 3000//parseFloat(gameState.bg3.getBounds().width)
    gameState.width = game_width;
    const window_width = config.width

    const bg1_width = gameState.bg1.getBounds().width
    const bg2_width = gameState.bg2.getBounds().width
    const bg3_width = gameState.bg3.getBounds().width
    const bg4_width = gameState.bg4.getBounds().width
    const bg5_width = gameState.bg5.getBounds().width
    gameState.bg4.setScrollFactor((bg4_width - window_width) / (game_width - window_width));
    gameState.bg5.setScrollFactor((bg5_width - window_width) / (game_width - window_width));
    gameState.bg2.setScrollFactor((bg2_width - window_width) / (game_width - window_width));
    gameState.bg3.setScrollFactor((bg3_width - window_width) / (game_width - window_width));
    gameState.bg1.setScrollFactor((bg1_width - window_width) / (game_width - window_width));
  }

  createAnimations() {
    this.anims.create({
      key: 'dooranim',
      frames: this.anims.generateFrameNumbers('dooranim', { start: 0, end: 14 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'spitesAnim',
      frames: this.anims.generateFrameNumbers('spites', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'spitesAnimD',
      frames: this.anims.generateFrameNumbers('spitesD', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1
    });
  }
  update(time, delta) {
    gameState.saber.children.iterate(function (sab) {
      let enimGoal = gameState.player.x - 100;
      if (sab.mode === 'attack') {
        if (enimGoal > sab.x) {
          sab.setVelocityX(+80)
        } else if (enimGoal < sab.x) {
          sab.setVelocityX(-80)
        } else if (enimGoal = sab.x) {
          sab.setVelocityX(0)
        }
      }
    })
    gameState.exterminators.children.iterate(function (exterminatorChild) {
      let playerX = gameState.player.x - 100;
      if (exterminatorChild.modeEXT === 'follow') {
        if (exterminatorChild.x > playerX - 5 && exterminatorChild.x < playerX + 5) {
          exterminatorChild.modeEXT = 'gas attack'
          exterminatorChild.setVelocity(0)
        } else if (playerX > exterminatorChild.x) {
          exterminatorChild.setVelocityX(+110)
          exterminatorChild.flipX = false;
          exterminatorChild.left = false;
          exterminatorChild.size()
        } else if (playerX < exterminatorChild.x) {
          exterminatorChild.setVelocityX(-110)
          exterminatorChild.flipX = true;
          exterminatorChild.left = true;
          exterminatorChild.size()
        }
      }
    })

    gameState.HPtext.setText(gameState.player.HPint)
    if (gameState.player.HPint < 1000) {
      gameState.HPtext.x = config.width - 86
    }
    if (gameState.player.HPint < 100) {
      gameState.HPtext.x = config.width - 84
    }
    if (gameState.player.HPint < 10) {
      gameState.HPtext.x = config.width - 80
    }
    if (gameState.player.HPint <= 800) {
      gameState.HP = this.add.sprite(config.width - 30, 20, 'H4').setScrollFactor(0)
    }
    if (gameState.player.HPint <= 600) {
      gameState.HP = this.add.sprite(config.width - 30, 20, 'H3').setScrollFactor(0)
    }
    if (gameState.player.HPint <= 400) {
      gameState.HP = this.add.sprite(config.width - 30, 20, 'H2').setScrollFactor(0)
    }
    if (gameState.player.HPint <= 200) {
      gameState.HP = this.add.sprite(config.width - 30, 20, 'H1').setScrollFactor(0)
    }
    if (gameState.player.HPint <= 0) {
      gameState.HP = this.add.sprite(config.width - 30, 20, 'H0').setScrollFactor(0)
    }
    gameState.spites.children.iterate(function (child) {
      child.anims.play('spitesAnim', true);
    });
    gameState.spitesD.children.iterate(function (child) {
      child.anims.play('spitesAnimD', true);
    });
  }
}
const gameState = {};
const config = {
  type: Phaser.WEBGL,
  width: 700,
  height: 960,
  scale: { mode: Phaser.Scale.CENTER_BOTH },
  fps: { target: 60 },
  backgroundColor: "#ffffff",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      enableBody: true,
      debug: true,

    }
  },
  scene: [PreloadScene, Level]
};

const game = new Phaser.Game(config);