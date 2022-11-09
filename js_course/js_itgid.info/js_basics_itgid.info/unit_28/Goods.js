class Goods {
    constructor(name, amount, image, count, out, price) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
        this.out = out;
        this.price = price;
    }
    draw() {
        document.querySelector(`.${this.out}`).innerHTML = `<img src="img/${this.image}" alt="" class="img-12-min"><p class="name">${this.name}</p><p class="amount">количество <span>${this.amount}</span></p><p class="count">доступное количество <span>${this.count}</span></p><p class="price">Цена <span>${this.price}</span></p>`;

    }
}