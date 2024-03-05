<template>
  <main>
    <teleport to="body">
      <transition name="modal">
        <modal-signin v-show="isOpen"></modal-signin>
      </transition>
    </teleport>
    <router-view />
  </main>
</template>
<script>
import ModalSignin from "@/components/UI/ModalSignin.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ModalSignin,
  },
  computed: {
    ...mapGetters("modalStore", ["isOpen"]),
  },
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
