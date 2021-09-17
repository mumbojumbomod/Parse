import Phaser from 'phaser'
class BaseScene extends Phaser.Scene {
    constructor(key, config) {

        super(key)
        this.config = config
        this.screenCenter = [this.config.width / 2, this.config.height / 4]
    }
    create() {
        const colorOne = Phaser.Display.Color.ValueToColor('0x914e71')

        const colorTwo = Phaser.Display.Color.ValueToColor('0xffffff')
        this.BG = this.add.image(0, 0, 'bg1').setOrigin(0, 0).setScale(3).setTint('0xa66788')
        this.tweens.addCounter({
            from: 0,
            to: 100,
            duration: 5000,
            ease: Phaser.Math.Easing.Sine.InOut,
            repeat: -1,
            yoyo: true,
            onUpdate: tween => {
                const value = tween.getValue()
                const colorObject = Phaser.Display.Color.Interpolate.ColorWithColor(
                    colorTwo,
                    colorOne,
                    100,
                    value
                )
                const color = Phaser.Display.Color.GetColor(colorObject.r, colorObject.g, colorObject.b)
                this.BG.setTint(color)

            }
        })

    }
    createMenu(menu, setupMenuEvents) {
        let lastMenuPositionY = 0
        menu.forEach(menuItem => {
            const menuPosition = [this.screenCenter[0], this.screenCenter[1] + lastMenuPositionY + 80]
            menuItem.textGO = this.add.text(...menuPosition, menuItem.text, { fontSize: '50px', fill: '#690a2d' }).setOrigin(0.5, 0.5)
            lastMenuPositionY += 42
            setupMenuEvents(menuItem)
        });
    }
    update() {
        //this.setTint();
    }
}

export default BaseScene