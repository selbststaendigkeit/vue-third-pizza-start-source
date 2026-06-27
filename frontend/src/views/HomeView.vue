<script setup>
import diameters from '@/mocks/sizes.json';
import rawDough from '@/mocks/dough.json';
import rawSauces from '@/mocks/sauces.json';
import rawFillings from '@/mocks/ingredients.json';
import {
  normalizeFillings,
  normalizeSauces,
  normalizeDiameters,
  normalizeDough
} from '@/common/helpers/normalize.js';
import {computed, ref} from 'vue';
import {INITIAL_FILLING_AMOUNT, INITIAL_PIZZA_COST} from '@/common/constants.js';
import ConstructorDough from '@/modules/constructor/ConstructorDough.vue';
import ConstructorDiameter from '@/modules/constructor/ConstructorDiameter.vue';
import ConstructorIngredients from '@/modules/constructor/ConstructorIngredients.vue';
import ConstructorPizza from '@/modules/constructor/ConstructorPizza.vue';

const normalizedDough = normalizeDough(rawDough);
const normalizedDiameters = normalizeDiameters(diameters);
const normalizedSauces = normalizeSauces(rawSauces);
const normalizedFillings = normalizeFillings(rawFillings);

const pizzaState = ref({
  name: '',
  dough: {
    id: 1
  },
  size: {
    id: 1
  },
  sauce: {
    id: 1
  },
  fillings: {
    mushrooms: {
      count: INITIAL_FILLING_AMOUNT
    },
    cheddar: {
      count: INITIAL_FILLING_AMOUNT
    },
    salami: {
      count: INITIAL_FILLING_AMOUNT
    },
    ham: {
      count: INITIAL_FILLING_AMOUNT
    },
    ananas: {
      count: INITIAL_FILLING_AMOUNT
    },
    bacon: {
      count: INITIAL_FILLING_AMOUNT
    },
    onion: {
      count: INITIAL_FILLING_AMOUNT
    },
    chile: {
      count: INITIAL_FILLING_AMOUNT
    },
    jalapeno: {
      count: INITIAL_FILLING_AMOUNT
    },
    olives: {
      count: INITIAL_FILLING_AMOUNT
    },
    tomatoes: {
      count: INITIAL_FILLING_AMOUNT
    },
    salmon: {
      count: INITIAL_FILLING_AMOUNT
    },
    mozzarella: {
      count: INITIAL_FILLING_AMOUNT
    },
    parmesan: {
      count: INITIAL_FILLING_AMOUNT
    },
    blue_cheese: {
      count: INITIAL_FILLING_AMOUNT
    },
  },
  cost: INITIAL_PIZZA_COST
});
const stateDoughId = computed({
  get() {
    return pizzaState.value.dough?.id;
  },
  set(updatedId) {
    pizzaState.value.dough.id = updatedId;
  }
});
const stateSizeId = computed({
  get() {
    return pizzaState.value.size?.id
  },
  set(updatedValue) {
    pizzaState.value.size.id = updatedValue;
  }
});
const stateSauceId = computed({
  get() {
    return Number(pizzaState.value.sauce?.id);
  },
  set(updatedValue) {
    pizzaState.value.sauce.id = Number(updatedValue);
  }
});
const stateFillings = computed({
  get() {
    return pizzaState.value.fillings;
  },
  set(updatedFilling) {
    pizzaState.value.fillings[updatedFilling.filling].count = updatedFilling.updatedValue;
  }
});
const statePizzaName = computed({
  get() {
    return pizzaState.value.name;
  },
  set(updatedName) {
    pizzaState.value.name = String(updatedName);
  }
});
const statePizzaCost = computed({
  get() {
    return pizzaState.value.cost;
  },
  set(updatedCost) {
    pizzaState.value.cost = Number(updatedCost);
  }
});

</script>

<template>
  <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <constructor-dough
              :doughTypes="normalizedDough"
              v-model:chosenDoughId="stateDoughId"
          />
        </div>

        <div class="content__diameter">
          <constructor-diameter
              :diameters="normalizedDiameters"
              v-model:currentDiameter="stateSizeId"
          />
        </div>

        <div class="content__ingredients">
          <constructor-ingredients
              :fillings="normalizedFillings"
              :sauces="normalizedSauces"
              v-model:chosenSauceId="stateSauceId"
              v-model:chosenFillings="stateFillings"
          />
        </div>

        <div class="content__pizza">
          <constructor-pizza
              :dough="normalizedDough"
              :sauces="normalizedSauces"
              :fillings="normalizedFillings"
              :cost="statePizzaCost"
              v-model:chosenPizzaName="statePizzaName"
              v-model:chosenDoughId="stateDoughId"
              v-model:chosenSauceId="stateSauceId"
              v-model:stateFillings="stateFillings"
          />
        </div>

      </div>

    </form>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.content {
  padding-top: 20px;
}

.content__wrapper {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 920px;
  margin: 0 auto;
  padding-right: 2.12%;
  padding-bottom: 30px;
  padding-left: 2.12%;
}

.content__dough {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.content__diameter {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.content__ingredients {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.content__pizza {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.content__constructor {
  width: 315px;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
}

.content__result {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  p {
    @include b-s24-h28;

    margin: 0;
  }

  button {
    margin-left: 12px;
    padding: 16px 45px;
  }
}

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

.ingredients__sauce {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 14px;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-right: 16px;
    margin-bottom: 10px;
  }
}

.ingredients__input {
  margin-right: 24px;
  margin-bottom: 10px;
}

.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}
</style>
