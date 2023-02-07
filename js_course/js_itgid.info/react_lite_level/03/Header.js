class Header {

    constructor(h1, h2, title, img, arrContacts) {
        this.h1 = h1;
        this.h2 = h2;
        this.title = title;
        this.img = img;
        this.arrContacts = arrContacts;
    }
    render(x) {
        let out = "";

        out = `
        <header>
        <h1 class="title">"${this.h1}"</h1>
        <h2 class="subtitle">${this.h2}</h2>
        <p class="disclaimer">${this.title}</p>
        <div class="sidebar sidebar-left">
        <h3 class="sidebar-category">Components</h3>
        <ul class="sidebar-links">
            <li><a href="#">Alerts</a></li>
            <li><a href="#">Breadcrumbs</a></li>
            <li><a class="active" href="#">Cards</a></li>
            <li><a href="#">Footer</a></li>
            <li><a href="#">Header</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Modal</a></li>
            <li><a href="#">Navigation</a></li>
            <li><a href="#">Pagination</a></li>
            <li><a href="#">Panels</a></li>
            <li><a href="#">Progress Bars</a></li>
            <li><a href="#">Sidebar</a></li>
            <li><a href="#">Steppers</a></li>
            <li><a href="#">Tabs</a></li>
            <li><a href="#">Tags</a></li>
            <li><a href="#">Tooltips</a></li>
        </ul>
    </div>
      
        <a class="scroll-down" href="#"></a>
      </header>
      `
        document.getElementById(x).innerHTML = out;


    }
}