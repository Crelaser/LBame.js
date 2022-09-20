let canvasLuft = document.querySelector("#luftCanvas")
let drawLuftCanvas = canvasLuft.getContext("2d")
let HeightCanvasLuft = canvasLuft.height
let WidthCanvasLust = canvasLuft.width
let IntervalLuft
function LuftGame(){
    LuftBackground = new property(0, 0, 1300, 680, "background.png", "background")
    // LuftBackground = new property(0, 0, 1300, 680, "red")
    luftrunning()
}

function luftrunning(){
    IntervalLuft = setInterval(contentLuft, 10)
}
function property(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.goingX = 0
    this.goingY = 0
    this.speedHitX = 0
    this.speedHitY = 0
    this.width = width
    this.height = height
    this.color = color
    this.type = type
    if (type == "image" || type == "background"){
        this.image = new Image()
        this.image.src = color
    }
    this.update = function(){
        ctx = drawLuftCanvas 
        if (type == "image" || type == "background"){
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height)

        } else{
            ctx.fillStyle = color
            ctx.fillRect (this.x, this.y, this.width, this.height)
        }
    }
    this.movementObj = function(){
        this.x +=this.speedHitX
        this.y +=this.speedHitY
        if (this.type == "background"){
            if (this.x == -(this.width)){
                this.x = 0
            }
        }
    }
    this.movement = function(){
        this.x += this.goingX
        this.y += this.goingY
        this.hitTop()
        this.hitBottom()
        this.hitRight()
        this.hitLeft()
    }
    this.hitTop = function() {
        var rocktop = this.height - this.height
        if (this.y < rocktop){
            this.y = rocktop
        }
    }
    this.hitBottom = function(){
        var rockbottom = this.height - this.height
        if (this.y > rockbottom){
            this.y = rockbottom
        }
    }
    this.hitLeft =  function(){
        var rockLeft = this.width - this.width
        if (this.x > rockLeft){
            this.x = rockLeft

        }
    }
    this.hitRight = function() {
        var rockRight = this.width - this.width
            var rockRight = this.width - this.width
            if (this.x < rockRight) {
                this.x = rockRight
            }
        }
        this.crashWith = function(otherobj){
            var myleft = this.x
            var myright = this.x + (this.width)
            var mytop = this.y
            var mybottom = this.y + (this.height)
            var otherleft = otherobj.x
            var otherright = otherobj.x + (otherobj.width)
            var othertop = otherobj.y
            var otherbottom = otherobj.y + (otherobj.height)
            var crash = true
            if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {

            }
        return crash
    }
}
function clearCanvasLuft(){
    drawLuftCanvas.clearRect(0, 0, WidthCanvasLust, HeightCanvasLuft)
}
function contentLuft(){
    clearCanvasLuft()
    LuftBackground.update()
}