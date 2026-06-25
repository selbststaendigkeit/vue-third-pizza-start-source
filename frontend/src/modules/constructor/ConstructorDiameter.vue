<script setup>
import {ref} from 'vue';

const props = defineProps({
  diameters: {
    type: Array,
    required: true,
    validator: (value) => value.length
  },
  currentDiameter: {
    type: Number,
    default: 1
  }
});

const emits = defineEmits([
  'update:currentDiameter'
]);

const onDiameterChange = (evt) => {
  const updatedValue = Number(evt.target.value);

  emits('update:currentDiameter', updatedValue);
};

</script>

<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">Выберите размер</h2>

    <div class="sheet__content diameter">
      <label v-for="{id, alias, name} in diameters"
             :key="id"
             :class="`diameter__input--${alias}`"
             class="diameter__input">
        <input type="radio"
               name="diameter"
               :value="id"
               :checked="id === 1"
               class="visually-hidden"
               @change="onDiameterChange">
        <span>{{ name }}</span>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.title {
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  color: $black;

  &--big {
    @include b-s36-h42;
  }

  &--small {
    @include b-s18-h21;
  }
}

.sheet {
  padding-top: 15px;

  border-radius: 8px;
  background-color: $white;
  box-shadow: $shadow-light;
}

.sheet__title {
  padding-right: 18px;
  padding-left: 18px;
}

.sheet__content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 8px;
  padding-top: 18px;
  padding-right: 18px;
  padding-left: 18px;

  border-top: 1px solid rgba($green-500, 0.1);
}

.diameter__input {
  margin-right: 8.7%;
  margin-bottom: 20px;
  padding-top: 7px;
  padding-bottom: 6px;

  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 46px;

    &::before {
      @include p_center_v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-color: $green-100;
      background-image: url("@/assets/img/diameter.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &--small {
    span::before {
      background-size: 18px;
    }
  }

  &--normal {
    span::before {
      background-size: 29px;
    }
  }

  &--big {
    span::before {
      background-size: 100%;
    }
  }

  &:hover {
    span::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + span::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
