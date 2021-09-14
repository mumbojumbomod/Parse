import Phaser from 'phaser'
import BaseScene from './BaseScene'
class AboutScene extends BaseScene {
    constructor(config) {

        super('AboutScene', config)

        this.menu = [
            { scene: 'Level', text: 'Play' },
            { scene: 'About', text: 'About' },
            { scene: null, text: 'Exit' }
        ]
    }
    create() {
        super.create()
        this.createMenu(this.menu, this.setupMenuEvents.bind(this))
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
        })
    }
}

export default AboutScene