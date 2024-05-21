class Button {
    constructor(width, height, background, value) {
        this.width = width
        this.height = height
        this.background = background
        this.value = value
    }
    render() {
        let btn = document.createElement('button');
        btn.style.background = this.background;
        btn.innerHTML = this.value;
        btn.style.width = this.width + 'px';
        btn.style.height = this.height + 'px';
        return btn;
    }
}