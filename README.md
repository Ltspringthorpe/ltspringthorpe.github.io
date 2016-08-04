# Frogger
This is a simple little JavaScript browser game I built mimicking the classic arcade game. Help the poor defenseless frog navigate the scary traffic without getting him squished!

## [Live](https://ltspringthorpe.github.io)

### Built with Canvas

The root page renders a canvas where I drop in a new instance of the game and run the GameView method Start.

```html
<script type="application/javascript">

  var canvasEl = document.getElementsByTagName("canvas")[0];
  (function () {
    canvasEl.width = Frogger.Game.DIM_X;
    canvasEl.height = Frogger.Game.DIM_Y;
  })();

  var ctx = canvasEl.getContext("2d");
  var Game = new Frogger.Game();
  new Frogger.GameView(Game, ctx).start();

</script>
```

### Game Classes

Frogger is built with 6 classes: Car, Frog, Game, GameView, MovingObject, and Util. Both Car and Frog inherit from the MovingObject class. GameView handles such things as animation and keybinders, while Game handles game mechanics such as creating new instances of the Frog class and the Car class.

```javascript
Game.prototype.addFrog = function () {
  var frog = new Frogger.Frog({
    pos: [500, 450],
    game: this,
  });
  this.frog = frog;
  return frog;
};
```

### Future Ideas

There are still a few features I'd like to add to Frogger in my spare time:
* Levels increase in difficulty as you go
* You have a set number of lives
