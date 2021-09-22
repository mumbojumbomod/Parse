import Phaser from 'phaser'
import BaseScene from './BaseScene'
class AboutScene extends BaseScene {
    constructor(config) {
        super('AboutScene', config)
    }
    create() {
        super.create()
        let aboutText = this.add.text(100, 100, "Parse was created in 2021 by Talus\nThe player and enemy sprites were\n created by @PenUsbMic on itch.io", { fontSize: '25px', fill: '#690a2d' })
        let backText = this.add.text(50, 400, "Back", { fontSize: '40px', fill: '#690a2d' }).setInteractive()
        backText.on('pointerover', () => {
            backText.setStyle({ fill: '#8f6b78' })
        })
        backText.on('pointerout', () => {
            backText.setStyle({ fill: '#690a2d' })
        })
        backText.on('pointerup', () => {
            this.scene.start('MenuScene')
        })

    }
}

export default AboutScene