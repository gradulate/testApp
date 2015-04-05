/**
 * Created by lena on 02.04.15.
 */

//---------------------------
function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

// задаємо батьківський клас
function Mario_Red(name,walkSpeed) {
    this.name = name;
    var speed = walkSpeed;
    this.distance = 10;
    this.life = true;
    // добавить метод, использующий private speed
    this.walk = function(time) {
        this.distance = this.distance + time*speed
    }
}

// Методи
Mario_Red.prototype = {
    speed: 0,
    power: 20,  // сила
    mind: 35,   // розум
    toString: function() {
        return this.name},
    run: function(speed) {
        this.speed += speed;
        console.log(this.name + ' біжить зі швидкістю ' +
        this.speed);
    },

    stop: function() {
        this.speed = 0;
        console.log(this.name + ' стоїть');
    }

}

// задаємо класс-нащадок
function Mario_Blue(name, walkSpeed, flySpeed) {
    Mario_Red.apply(this, arguments); // викликаємо метод батька
    Mario_Blue.superclass.constructor.call(this, name, walkSpeed)
    this.fly = function(time) {
        this.distance = this.distance + time*flySpeed
    };
    this.life = true;
}

/* наслідуємо методи батьківського класу
 2-й спосіб.
 створює новий об'єкт з властивостями прототипа батька*/
Mario_Blue.prototype = Object.create(Mario_Red.prototype);

// методи нащадка
Mario_Blue.prototype.run = function() {
    Mario_Red.prototype.run.apply(this); // визиваємо метод батька
    console.log(this + " підпригує!");
};

extend(Mario_Blue, Mario_Red);// викликаэмо ф-ю наслідування класів

exports.Mario_Blue = Mario_Blue;
exports.Mario_Red = Mario_Red;


