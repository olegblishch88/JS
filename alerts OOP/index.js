class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class='${this.cssClass}'>${this.message}</p>`;
    }
}

class Alert2 extends Alert {
    constructor(a,c,d, icon) {
        super(a,c,d);
        this.icon = icon;
    }
    showIcon() {
        document.querySelector(this.out).innerHTML = `<p class='${this.cssClass}'><i class="material-icons">${this.icon}</i>${this.message}</p>`;
    }
    myAlert() {
        alert(this.message);
    }
}


let myAlert = new Alert('My message', 'green', '.test');
console.log(myAlert);
myAlert.showAlert();


let myAlert2 = new Alert2('My message', 'green', '.test', 'account_circle');
console.log(myAlert2);
myAlert2.showIcon();










