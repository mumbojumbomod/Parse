import Phaser from 'phaser'
import BaseScene from './BaseScene'
class DeathScene extends BaseScene {
    constructor(config) {
        super('DeathScene', config)
    }
    create() {
        super.create()
        let DEDtext = ''
        let randNum = Math.floor(Math.random() * 5)
        const getRandDeathText = () => {
            switch (randNum) {
                case 0:
                    DEDtext = "1"
                    break;
                case 1:
                    DEDtext = "You're cluck-cluckidy dead, Hugo"//ff00ea
                    break;
                case 2:
                    DEDtext = "3"
                    break;
                case 3:
                    DEDtext = "4"
                    break;
                case 4:
                    DEDtext = "5"
                    break;
                default:
                    DEDtext = "6"
                    break;
            }
            return DEDtext;
        }

        let infoText = this.add.text(50, 100, getRandDeathText(Math.floor(Math.random(5))), { fontSize: '50px', fill: '#690a2d' })
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