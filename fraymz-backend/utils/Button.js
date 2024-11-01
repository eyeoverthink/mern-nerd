//
//
// class Button {
//     constructor({ text, onClick, styles = {} }) {
//         this.text = text;
//         this.onClick = onClick;
//         this.styles = styles;
//         this.element = null;
//     }
//
//     render() {
//         this.element = document.createElement('button');
//         this.element.textContent = this.text;
//         Object.assign(this.element.style, this.styles);
//         this.element.addEventListener('click', this.onClick);
//         return this.element;
//     }
//
//     mount(parent) {
//         parent.appendChild(this.render());
//     }
//
//     unmount() {
//         if (this.element && this.element.parentNode) {
//             this.element.parentNode.removeChild(this.element);
//         }
//     }
// }
//
// export default Button;

// Button.js

class Button {
    constructor({ text, onClick, classes = '' }) {
        this.text = text;
        this.onClick = onClick;
        this.classes = classes;
        this.element = null;
    }

    render() {
        this.element = document.createElement('button');
        this.element.textContent = this.text;
        this.element.className = this.classes;
        this.element.addEventListener('click', this.onClick);
        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }

    unmount() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
}

export default Button;