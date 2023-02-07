class Car {

    constructor(brand, name, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.name = name;
        this.color = color;
        this.img = img;
    }
    render(x) {
        let out = "";

        out = `<section>
        <h1 class="h2">Pricing Tables</h1>
        <div class="pricing-table row">
          <div class="col col-sm-6">
            <div class="package">
              <p class="package-name">Startup</p>
              <hr>
      
              <p class="price">$49</p>
              <p class="disclaimer">per user</p>
              <hr>
      
              <ul class="features">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <button class="button-primary">Get Started</button>
            </div>
          </div>
          <div class="col col-sm-6">
            <div class="package featured">
              <p class="package-name">Small Business</p>
              <hr>
      
              <p class="price">$99</p>
              <p class="disclaimer">per user</p>
              <hr>
      
              <ul class="features">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <button class="button-primary">Get Started</button>
            </div>
          </div>
        </div>
      
      </section>
      
      <section>  
        <p class="h3"><strong>Get More</strong></p>
        <p>These is an example of a pricing table that is used in Mustard UI.  We like to think of it as a starter CSS framework that actually looks good.  We'd love to hear your feedback!</p>
        <p>See more examples of <a href="https://mustard-ui.com/docs/pricing-tables">CSS Pricing Table Styles</a>.</p>
      </section>`
        document.getElementById(x).innerHTML = out;


    }
}