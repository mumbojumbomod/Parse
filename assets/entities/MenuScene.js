import Phaser from 'phaser'
import BaseScene from './BaseScene'
class MenuScene extends BaseScene {
    constructor(config) {

        super('MenuScene', config)

        this.menu = [
            { scene: 'Level', text: 'Play' },
            { scene: 'About', text: 'About' },
            { scene: null, text: 'Exit' }
        ]
    }
    create() {
        this.anims.resumeAll()
        //this.game.sound.startAll()
        super.create()
        this.createMenu(this.menu, this.setupMenuEvents.bind(this))
        this.titleText = this.add.text(this.config.width / 4, this.config.height - 500, "PARSE", { fontSize: '120px', fill: '#690a2d' })
        this.titleText = this.add.text(this.config.width / 4, this.config.height - 400, "By Talus", { fontSize: '50px', fill: '#690a2d' })
    }
    setupMenuEvents(menuItem) {
        const textGO = menuItem.textGO
        textGO.setInteractive()
        textGO.on('pointerover', () => {
            textGO.setStyle({ fill: '#8f6b78' })
        })
        textGO.on('pointerout', () => {
            textGO.setStyle({ fill: '#690a2d' })
        })
        textGO.on('pointerup', () => {
            menuItem.scene && this.scene.start(menuItem.scene)
            if (menuItem.text === "Play") {
                this.scene.start("Level")
            }
            if (menuItem.text === "About") {
                this.scene.start("AboutScene")
            }
            if (menuItem.text === "Exit") {
                alert('THERE IS NO ESCAPE(unless you close the tab...)')
            }
        })
    }
}

export default MenuScene