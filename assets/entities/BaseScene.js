import Phaser from 'phaser'
class BaseScene extends Phaser.Scene {
    constructor(key, config) {

        super(key)
        this.config = config
        this.screenCenter = [this.config.width / 2, this.config.height / 4]
    }
    create() {
        this.add.image(0, 0, 'bg1').setOrigin(0, 0).setScale(3)
    }
    createMenu(menu, setupMenuEvents) {
        let lastMenuPositionY = 0
        menu.forEach(menuItem => {
            const menuPosition = [this.screenCenter[0], this.screenCenter[1] + lastMenuPositionY]
            menuItem.textGO = this.add.text(...menuPosition, menuItem.text, { fontSize: '50px', fill: '#690a2d' }).setOrigin(0.5, 0.5)
            lastMenuPositionY += 42
            setupMenuEvents(menuItem)
        });
    }
}

export default BaseScene