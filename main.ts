let HErosprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f c a e 4 4 4 4 e a c f . . 
    . . f a a a a a a a a a a f . . 
    . f a a e c a e e a c e a a f . 
    . f a a f f e e e e f f a a f . 
    . f a a f b f e e f b f c c f . 
    . f a a e 1 f 4 4 f 1 e c c f . 
    f f a a f 4 4 4 4 4 4 f c c f f 
    f a a f f f e e e e f f f c c f 
    . f e e f 8 9 9 9 9 8 f e e f . 
    . . e 4 c 9 9 9 9 9 9 8 4 e . . 
    . . e f d 9 8 9 b 9 8 b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
HErosprite.setPosition(36, 28)
let Enemysprite = sprites.create(assets.image`enemy`, SpriteKind.Player)
Enemysprite.setPosition(123, 87)
let strawbweryy = sprites.create(assets.image`heart`, SpriteKind.Food)
strawbweryy.setPosition(32, 84)
let duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
duck.setPosition(122, 23)
