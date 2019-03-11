// Ink_Removal_Game.js
var config = {
    type: Phaser.AUTO,
    width: 1440,
    height: 2960,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 0
            } 
        }
    },
    pixelArt: false,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);

function preload() {
    console.log ("tattoo_game_v0.1")
    // change the path 
    this.load.image('tileset', 'assets/tanks/landscape-tileset.png');
    this.load.tilemapTiledJSON("tilemap", "assets/tanks/level1.json");
}

function create() {
   
    this.map = this.make.tilemap({ key: "tilemap" });
    // diffrent name like tattoo or skin 
    var landscape = this.map.addTilesetImage("landscape-tileset", "tileset");
    // skin (under layer)
    this.map.createStaticLayer('floor', landscape, 0, 0);
    // ink destruct layer 
    var destructLayer = this.map.createDynamicLayer('destructable', landscape, 0, 0);
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
   }
function update() {

}
