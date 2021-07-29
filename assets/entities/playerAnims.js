export default anims => {
    anims.create({
        key: 'run',
        frames: anims.generateFrameNumbers('robodude', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    anims.create({
        key: 'not',
        frames: anims.generateFrameNumbers('robodudenodust', { start: 3, end: 4 }),
        frameRate: 3,
        repeat: -1
    });
    anims.create({
        key: 'notF',
        frames: anims.generateFrameNumbers('robodudenodust2', { start: 3, end: 4 }),
        frameRate: 3,
        repeat: -1
    });
    anims.create({
        key: 'jump',
        frames: anims.generateFrameNumbers('robodudenodust', { start: 7, end: 7 }),
        frameRate: 3,
        repeat: -1
    });
    anims.create({
        key: 'jumpF',
        frames: anims.generateFrameNumbers('robodudenodust2', { start: 7, end: 7 }),
        frameRate: 3,
        repeat: -1
    });
    anims.create({
        key: 'runF',
        frames: anims.generateFrameNumbers('robodude2', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    anims.create({
        key: 'shoot',
        frames: anims.generateFrameNumbers('shooting', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
    });
    anims.create({
        key: 'shootF',
        frames: anims.generateFrameNumbers('shooting2', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
}