// // // theatre.js
// //
// // class Theatre {
// //     constructor() {
// //         this.screens = {};
// //         this.currentScreen = null;
// //     }
// //
// //     registerScreen(name, component) {
// //         this.screens[name] = component;
// //     }
// //
// //     async showScreen(name, props = {}) {
// //         if (!this.screens[name]) {
// //             console.error(`Screen "${name}" not found.`);
// //             return;
// //         }
// //
// //         // Unmount the current screen if exists
// //         if (this.currentScreen) {
// //             await this.currentScreen.unmount();
// //         }
// //
// //         // Instantiate and mount the new screen
// //         this.currentScreen = new this.screens[name](props);
// //         await this.currentScreen.mount();
// //     }
// // }
// //
// // // Export as a singleton
// // const theatre = new Theatre();
// // export default theatre;
//
// // theatre.js
//
// class Theatre {
//     constructor() {
//         this.screens = {};
//         this.currentScreen = null;
//         this.components = {};
//     }
//
//     registerScreen(name, component) {
//         this.screens[name] = component;
//     }
//
//     registerComponent(name, component) {
//         this.components[name] = component;
//     }
//
//     async showScreen(name, props = {}) {
//         if (!this.screens[name]) {
//             console.error(`Screen "${name}" not found.`);
//             return;
//         }
//
//         if (this.currentScreen) {
//             await this.currentScreen.unmount();
//         }
//
//         this.currentScreen = new this.screens[name](props, this.components);
//         await this.currentScreen.mount();
//     }
// }
//
// const theatre = new Theatre();
// export default theatre;

// theatre.js

class Theatre {
    constructor() {
        this.screens = {};
        this.currentScreen = null;
        this.components = {};
    }

    registerScreen(name, component) {
        this.screens[name] = component;
    }

    registerComponent(name, component) {
        this.components[name] = component;
    }

    async showScreen(name, props = {}) {
        if (!this.screens[name]) {
            console.error(`Screen "${name}" not found.`);
            return;
        }

        // Unmount the current screen if exists
        if (this.currentScreen) {
            await this.currentScreen.unmount();
        }

        // Instantiate and mount the new screen
        this.currentScreen = new this.screens[name](props, this.components);
        await this.currentScreen.mount();
    }
}

const theatre = new Theatre();
export default theatre;