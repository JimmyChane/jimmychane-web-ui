<script setup lang="ts">
import { computed, ref } from 'vue';

const isYesClicked = ref(false);

const noCount = ref(0);
const noTexts = ref([
  'No',
  'Are you sure?',
  'Really Sure?',
  'Are you positive???',
  'Pookie please',
  'Just think about it',
  "If you say no, I'll be very sad",
  "I'll be very very sad",
  "I'll be very very very sad",
  "I'll be very very very very sad",
  "Ok fine, I'll stop asking...",
  'Just kidding, PLEASE SAY YES',
  "I'll be very very very very very sad",
  "You're breaking my heart :(",
]);
const noText = computed(() => {
  const index = noCount.value % noTexts.value.length;
  return noTexts.value[index];
});
</script>

<template>
  <div class="valentine-page">
    <div v-if="isYesClicked" class="clicked-yes">
      <div class="clicked-yes-texts">Ok yay!!!</div>

      <div class="image-dialog">
        <img width="400" src="@/assets/valentine.png" />
      </div>
    </div>

    <div v-else class="confirming" :style="{ '--no-count': noCount * 0.25 + 1 }">
      <div class="dialog">
        <div>Will you be my valentine?</div>
        <div class="dialog-confirm">
          <button class="dialog-confirm-yes" @click="() => (isYesClicked = true)">Yes</button>
          <button class="dialog-confirm-no" @click="() => noCount++">
            {{ noText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.valentine-page {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .confirming {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dialog {
      height: 100%;
      width: 100%;

      padding: 1rem;
      flex-grow: 1;
      gap: 1.5rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 2rem;
      text-align: center;

      .dialog-confirm {
        min-height: max-content;

        gap: 1rem;
        display: flex;
        flex-direction: column;

        & > button {
          padding: 0.5em 1em;

          background: none;
          border: none;
          border-radius: 0.3em;
          font-weight: 600;
          font-size: 1.5rem;
        }
        .dialog-confirm-yes {
          min-width: max-content;

          background-color: var(--color-active);
          color: var(--background-color-opacity100);

          font-size: calc(1em * var(--no-count));

          transition:
            background-color 200ms ease,
            scale 200ms ease;

          &:hover {
            background-color: var(--text-color);
          }
        }
        .dialog-confirm-no {
          color: var(--color-active);
          transition: background-color 200ms ease;
          &:hover {
            background-color: var(--color-hover);
          }
        }
      }
    }
  }
  .clicked-yes {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .clicked-yes-texts {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 2em;
      font-weight: 600;
    }

    .image-dialog {
      overflow: hidden;

      & > img {
        margin-bottom: -10%;
      }
    }
  }
}
</style>
