export default anims => {
    anims.create({
        key: 'fade',
        frames: anims.generateFrameNumbers('fade', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'quickspin',
        frames: anims.generateFrameNumbers('quickspin', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });
    anims.create({
        key: 'wlak',
        frames: anims.generateFrameNumbers('wlak', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    });
    anims.create({
        key: 'idle',
        frames: anims.generateFrameNumbers('idle', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    });
}
