function Circle(_x, _y, _r){
    
    this.position = createVector(_x, _y);
    this.r = _r;

    this.draw = function(){
        ellipse(this.position.x, this.position.y, this.r, this.r);
    }

    this.setRadius = function(_r){
        this.r = _r;
    }
}