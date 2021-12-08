# Simple Vues

This project makes no assumptions about the styling required for a particular project. Instead it focuses on the functionality. Making sure developers are provided with everything they need to create easy to use components that supply a cheat sheet for any use case.

### Install

```bash
npm install simple-vue --save
```

### Import

Import plugin:

```javascript
import SimpleVues from 'simple-vues';

Vue.use(SimpleVues);
```
**OR**

Import component:

```javascript
import { SimpleButton } from 'simple-vues';

Vue.component('SimpleButton', SimpleButton);
```

### Documentation

Individual component documentation can be found in the `/docs` directory. Each file is named the same as the component. Check out the [GitHub project](https://github.com/hipkiss91/simple-vue) for ease.
