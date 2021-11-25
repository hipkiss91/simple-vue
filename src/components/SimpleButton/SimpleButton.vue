<template>
    <button
        :aria-label="ariaLabel"
        :class="className"
        :disabled="disabled"
        :aria-disabled="disabled || ariaDisabled ? true : false"
        :id="id"
        :tabindex="tabindex && !ariaDisabled ? 0 : -1"
        @click="submit"
    >
        <slot name="content">
            {{ label }}
        </slot>
    </button>
</template>
<script>
export default {
    name: 'SimpleButton',
    props: {
        ariaLabel: {
            type: String,
            default: null,
        },
        ariaDisabled: {
            type: Boolean,
            default: false,
        },
        callbackName: {
            type: String,
            default: 'submit',
        },
        className: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        id: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: 'Button',
        },
        tabindex: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            default: 'submit',
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        submit () {
            if (!this.isLoading && !this.disabled) {
                this.$emit(this.callbackName);
            }
        },
    },
};
</script>
<style lang="scss" scoped>
    button {
        all: unset;
    }
</style>
