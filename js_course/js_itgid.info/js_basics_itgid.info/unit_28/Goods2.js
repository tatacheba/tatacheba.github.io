class Goods2 extends Goods {
    constructor(name, amount, image, count, out, price, sale) {
        super(name, amount, image, count, out, price);
        this.sale = sale;
    }
    draw() {
        let out = document.querySelector(`.${this.out}`);
        out.innerHTML = `<img src="img/${this.image}" alt="" class="img-12-min"><p class="name">${this.name}</p><p class="amount">количество <span>${this.amount}</span></p><p class="count">доступное количество <span>${this.count}</span></p><p class="price">Цена <span>${this.price}</span></p>`;
        if (this.sale) {
            out.innerHTML += `<p class="sale"><span>Распродажа</span></p>`;
        }
    }
}