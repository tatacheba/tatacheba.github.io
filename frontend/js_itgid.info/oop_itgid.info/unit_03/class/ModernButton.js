class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius = 0) {
        super(width, height, background, value)
        this.borderRadius = borderRadius;
    }
    render() {
        super.render();
        let btnRadius = super.render();
        btnRadius.style.borderRadius = this.borderRadius + 'px';
        return btnRadius;
    }
};