class List3 extends List {
    constructor(item, cssClass) {
        super(item);
        this.cssClass = cssClass;

    }

    render() {
        let ul = super.render();
        for (let i = 0; i < this.cssClass.length; i++) {
            ul.classList.add(`${this.cssClass}`)
        }
        return ul;
    }
}
