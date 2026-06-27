<script setup>
import {computed, ref, watch} from 'vue';
import {MIN_INGREDIENT_AMOUNT, MAX_INGREDIENT_AMOUNT} from '@/common/constants.js';

const props = defineProps({
  counterName: {
    type: String,
    required: true,
    validator: value => value.length
  },
  initialValue: {
    type: Number,
    default: 0,
    validator: value => value >= 0
  },
  isOrange: {
    type: Boolean,
    default: false,
  }
});

const emits = defineEmits([
  'update:initialValue'
]);

const isAddButtonDisabled = computed(() => {
  return props.initialValue === MAX_INGREDIENT_AMOUNT;
});
const isReduceButtonDisabled = computed(() => {
  return props.initialValue === MIN_INGREDIENT_AMOUNT;
});

const increment = () => {
  if (props.initialValue < MAX_INGREDIENT_AMOUNT) {
    emits('update:initialValue', props.initialValue + 1);
  }
};
const decrement = () => {
  if (props.initialValue > MIN_INGREDIENT_AMOUNT) {
    emits('update:initialValue', props.initialValue - 1);
  }
};
</script>

<template>
  <div class="counter ingredients__counter">
    <button type="button"
            :class="isOrange ? 'counter__button--orange' : ''"
            class="counter__button counter__button--minus"
            @click="decrement"
            :disabled="isReduceButtonDisabled">
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text"
           class="counter__input"
           :name="counterName"
           :value="props.initialValue"
           readonly>
    <button type="button"
            :class="isOrange ? 'counter__button--orange' : ''"
            class="counter__button counter__button--plus"
            @click="increment"
            :disabled="isAddButtonDisabled">
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.counter {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.counter__button {
  $el: &;
  $size_icon: 50%;

  position: relative;

  display: block;

  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  border-radius: 50%;
  outline: none;

  &--minus {
    background-color: $purple-100;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $black;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $purple-200;
    }

    &:active:not(:disabled) {
      background-color: $purple-300;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      &::before {
        opacity: 0.1;
      }
    }
  }

  &--plus {
    background-color: $green-500;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $white;
    }

    &::after {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";
      transform: translate(-50%, -50%) rotate(90deg);

      border-radius: 2px;
      background-color: $white;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $green-400;
    }

    &:active:not(:disabled) {
      background-color: $green-600;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      opacity: 0.3;
    }
  }

  &--orange {
    background-color: $orange-200;

    &:hover:not(:active):not(:disabled) {
      background-color: $orange-100;
    }

    &:active:not(:disabled) {
      background-color: $orange-300;
    }
  }
}

.counter__input {
  @include r-s14-h16;

  box-sizing: border-box;
  width: 22px;
  margin: 0;
  padding: 0 3px;

  text-align: center;

  color: $black;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  &:focus {
    box-shadow: inset $shadow-regular;
  }
}
</style>
