// vanilla-tilt.js
class VanillaTilt {
    constructor(element, settings = {}) {
        this.element = element;
        this.settings = this.extendSettings(settings);
        this.addEventListeners();
    }

    addEventListeners() {
        this.element.addEventListener("mousemove", (event) => this.onMouseMove(event));
        this.element.addEventListener("mouseleave", () => this.onMouseLeave());
    }

    onMouseMove(event) {
        const { width, height, left, top } = this.element.getBoundingClientRect();
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;
        const tiltX = (this.settings.max / 2 - x * this.settings.max).toFixed(2);
        const tiltY = (y * this.settings.max - this.settings.max / 2).toFixed(2);

        this.element.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    }

    onMouseLeave() {
        this.element.style.transition = "transform 0.2s ease";
        this.element.style.transform = "rotateX(0) rotateY(0)";
    }

    extendSettings(settings) {
        return {
            max: 15, // Maximum tilt angle
            ...settings,
        };
    }
}

document.querySelectorAll(".tilt").forEach((el) => new VanillaTilt(el));