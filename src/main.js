import * as components from './components';

const SimpleVues = {
    install(Vue) {
        // components
        for (const componentName in components) {
            const component = components[componentName];
            Vue.component(component.name, component);
        }
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(SimpleVues);
} else if (typeof global !== 'undefined') {
    global.Vue.use(SimpleVues);
}

export default SimpleVues;
