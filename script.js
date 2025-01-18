//complete this code
class Rectangle {
	constructor(width, height) {
		this.w = width;
		this.h = height;
	}

	get height() {
		return this.h;
	}

	get width() {
		return this.w;
	}

	getArea() {
		return this.w * this.h;
	}
}

class Square extends Rectangle {
	constructor(side) {
	  super();
		this.s = side;
	}
	
	get height() {
	  return this.s;
	}
	
	get width() {
	  return this.s;
	}
	
	getArea() {
	  return this.s*this.s;
	}

	getPerimeter() {
		return 4*this.s;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
