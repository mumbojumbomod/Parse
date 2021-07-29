export default anims => {
    anims.create({
        key: 'appear',
        frames: anims.generateFrameNumbers('ext_appear', { start: 0, end: 10 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'attack',
        frames: anims.generateFrameNumbers('ext_attack', { start: 0, end: 17 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'damaged',
        frames: anims.generateFrameNumbers('ext_damaged', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'death',
        frames: anims.generateFrameNumbers('ext_death', { start: 0, end: 6 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'idle_ext',
        frames: anims.generateFrameNumbers('ext_idle', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'skyAttack',
        frames: anims.generateFrameNumbers('ext_skyAttack', { start: 0, end: 8 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'vanish',
        frames: anims.generateFrameNumbers('ext_vanish', { start: 0, end: 13 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'walk',
        frames: anims.generateFrameNumbers('ext_walk', { start: 0, end: 9 }),
        frameRate: 10,
        repeat: 0,
    });
}
