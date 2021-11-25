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

### Use

```xml
<SimpleButton
    :aria-disabled="false"
    :aria-label="Submit form for staring this project."
    callbackName="myCallbackName"
    :class-name="small green text-left"
    :disabled="false"
    :id="starThisProject"
    label="Submit my form"
    :tabindex="true"
    :type="submit"
    :is-loading="false"
    @my-callback-name="handleButtonSubmit"
/>

<SimpleButton
    callbackName="myCallbackName"
    :class-name="small green text-left"
    :disabled="false"
    :aria-disabled="false"
    :id="starThisProject"
    :tabindex="true"
    :type="submit"
    :is-loading="false"
    @my-callback-name="handleButtonSubmit"
>
    <template #content>
        <my-icon class="buttonIcon"/>
        <span class="label">
            Submit form
        </span>
    </template>
</SimpleButton>
```

### Properties

| Name            | Type        | Default     | Description                        |
| ---             | ---         | ---         | ---                                |
| ariaDisabled    | Boolean     | false       | Disables the button for the `ariaDisabled` html attribute. This also affects `tabindex`. |
| ariaLabel       | String      | null        | Provide an aria-label, for accessibility, if required. Note that buttons normally read out their content as the aria-label. However, this `SimpleButton` requires developer to explicitly state the aria-label. Often `aria-label`'s require more detail to aid users. |
| callbackName    | String      | submit      | A provided string to determine the name of the callback on click. e.g. `@click="$emit('my-method-name')` |
| className       | String      | null        | Any classes that the developer may need to attach to the SimpleButton. `<button class="myClassName otherClassName thing">`. A "space" separated list.  |
| disabled        | Boolean     | false       | Disables the button for the `disabled` and `ariaDisabled` html attributes. Does not trigger the `callbackName` if `true`. |
| id              | String      | null        | Id of the button. |
| label           | String      | Button      | Button text / label. If the slot `#content` is not provided then the label is presented. If no label is provided then the default `Button` label is presented, unless the slot `#content` is provided. |
| tabindex        | Boolean     | true        | Determines if the component can be tabbed through / selected without a mouse. |
| type            | String      | submit      | Button type. E.g. `type="submit"` |
| isLoading       | Boolean     | false       | If the button is loading or not. When `true` the button will not allow for subsequent triggers of `callbackName`. |

### Slots
| Name            | Default     | Description                        |
| ---             | ---         | ---                                |
| content         | { label }   | If the content slot is not populated then the button will default to the `label` property provided. |

### Events

| Name   | Description              |
| ---    | ---                      |
| submit | Triggered whenever the button is pressed. <br>Default: `submit` <br>This can be changed to whatever name the developer requires through the `callbackName` property. |

### About
This project makes no assumptions about the styling required for a particular project. Instead it focuses on the functionality. Making sure developers are provided with everything they need to create easy to use components that supply a cheat sheet for any use case.
It should be noted that this button does reset styling.