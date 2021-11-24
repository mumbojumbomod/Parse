import Phaser from 'phaser'
import BaseScene from './BaseScene'
class DeathScene extends BaseScene {
    constructor(config) {
        super('DeathScene', config)
    }
    create() {
        super.create()
        let infoText = this.add.text(50, 100, "congrats... you died", { fontSize: '50px', fill: '#690a2d' })
        let playText = this.add.text(100, 50, "Click to play again", { fontSize: '40px', fill: '#690a2d' }).setInteractive()
        playText.on('pointerover', () => {
            playText.setStyle({ fill: '#8f6b78' })
        })
        playText.on('pointerout', () => {
            playText.setStyle({ fill: '#690a2d' })
        })
        playText.on('pointerup', () => {
            this.scene.start('MenuScene')
        })

    }
}

export default DeathScene