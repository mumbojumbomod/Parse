export default anims => {
    anims.create({
        key: 'janitorDeathA',
        frames: anims.generateFrameNumbers('janitorDeath', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'janitorHitA',
        frames: anims.generateFrameNumbers('janitorHit', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'janitorWalkA',
        frames: anims.generateFrameNumbers('janitorWalk', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'janitorIdleA',
        frames: anims.generateFrameNumbers('janitorIdle', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'janitorShuffleA',
        frames: anims.generateFrameNumbers('janitorShuffle', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'janitorSlamA',
        frames: anims.generateFrameNumbers('janitorSlam', { start: 0, end: 9 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'janitorSpinSlamA',
        frames: anims.generateFrameNumbers('janitorSpinSlam', { start: 0, end: 8 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'janitorWakeA',
        frames: anims.generateFrameNumbers('janitorWake', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: 0,
    });
    anims.create({
        key: 'janitorSweepA',
        frames: anims.generateFrameNumbers('janitorSweep', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: 0,
    });
    //Dooranim
    anims.create({
        key: 'dooranim',
        frames: anims.generateFrameNumbers('dooranim', { start: 0, end: 14 }),
        frameRate: 10,
        repeat: 0,
    });

}
