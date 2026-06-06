<script setup>

const props = defineProps({
  doughTypes: {
    type: Array,
    required: true,
    validator: (value) => value.length
  },
  chosenDoughId: {
    type: Number,
    required: true,
  }
});

const emits = defineEmits([
  'update:chosenDoughId'
])

const onDoughInputChange = (evt) => {
  const chosenDoughId = Number(evt.target.value);

  emits('update:chosenDoughId', chosenDoughId);
};

</script>

<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">Выберите тесто</h2>

    <div class="sheet__content dough">
      <label v-for="dough in doughTypes"
             :key="dough.id"
             :class="`dough__input--${dough.doughSize}`"
             class="dough__input">
        <input type="radio"
               name="dough"
               :value="dough.id"
               class="visually-hidden"
               :checked="dough.id === 1"
               @change="onDoughInputChange">
        <b>{{ dough.name }}</b>
        <span>{{ dough.description }}</span>
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

.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  b {
    @include r-s16-h19;

    &::before {
      @include p_center-v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  span {
    @include l-s11-h13;

    display: block;
  }

  &--light {
    b {
      &::before {
        background-image: url("@/assets/img/dough-light.svg");
      }
    }
  }

  &--large {
    b {
      &::before {
        background-image: url("@/assets/img/dough-large.svg");
      }
    }
  }

  &:hover {
    b::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + b::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
