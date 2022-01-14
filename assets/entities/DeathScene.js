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
                    DEDtext = "As your terminal became filled with\n warnings, the ship finally plummeted into\n the depths of space.\n -me"
                    break;
                case 1:
                    DEDtext = "As you died, you gazed upon the starry\n nebula outiside one last time.\n -me"//ff00ea
                    break;
                case 2:
                    DEDtext = "“It isn’t fair, it isn’t right,” you\n screamed, and then they were upon you.\n -Shirley Jackson"
                    break;
                case 3:
                    DEDtext = "as you were compacted into a metal potato\n by the robots, you wondered, 'Why didn't I\n stay home today?'\n-me"
                    break;
                case 4:
                    DEDtext = "And as your code was parsed into the main\n dataframe, you were slowly disintegrated\n from the system\n-me"
                    break;
                default:
                    DEDtext = "YOU IS DED\n-not me"
                    break;
            }
            return DEDtext;
        }

        let infoText = this.add.text(50, 100, getRandDeathText(Math.floor(Math.random(5))), { fontSize: '25px', fill: '#690a2d' })
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