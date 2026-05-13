<script setup>
import diameters from '@/mocks/sizes.json';
import rawDough from '@/mocks/dough.json';
import rawSauces from '@/mocks/sauces.json';
import rawIngredients from '@/mocks/ingredients.json';
import {
  normalizeIngredients,
  normalizeSauces,
  normalizeDiameters,
  normalizeDough
} from '@/common/helpers/normalize.js';

const normalizedDough = normalizeDough(rawDough);
const normalizedDiameters = normalizeDiameters(diameters);
const normalizedSauces = normalizeSauces(rawSauces);
const normalizedIngredients = normalizeIngredients(rawIngredients);

</script>

<template>
  <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label v-for="dough in normalizedDough"
                     :key="dough.id"
                     :class="`dough__input--${dough.doughSize}`"
                     class="dough__input">
                <input type="radio"
                       name="dough"
                       :value="dough.doughSize"
                       class="visually-hidden"
                       :checked="dough.id === 1">
                <b>{{ dough.name }}</b>
                <span>{{ dough.description }}</span>
              </label>
            </div>

          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label v-for="{id, alias, name} in normalizedDiameters"
                     :key="id"
                     :class="`diameter__input--${alias}`"
                     class="diameter__input">
                <input type="radio"
                       name="diameter"
                       :value="alias"
                       class="visually-hidden">
                <span>{{ name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

            <div class="sheet__content ingredients">

              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label v-for="{id, name, alias} in normalizedSauces"
                       :key="id"
                       class="radio ingredients__input">
                  <input type="radio"
                         name="sauce"
                         :value="alias"
                         :checked="id === 1">
                  <span>{{ name }}</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
                  <li v-for="{id, alias, name} in normalizedIngredients"
                      :key="id"
                      class="ingredients__item">
                    <div :class="`filling--${alias}`"
                         class="filling">{{ name }}
                    </div>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>

              </div>

            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input type="text" name="pizza_name" placeholder="Введите название пиццы">
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>

      </div>

    </form>
  </main>
</template>

<style scoped lang="scss">

</style>
