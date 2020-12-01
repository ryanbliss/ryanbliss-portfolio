<template>
  <div v-if="editor" class="menubar">
    <slot />
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="flex wrap center-main">

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          Bold
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          Italic
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          Strike
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          Underline
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          Code
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          Paragraph
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          Bullet List
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          Ordered List
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          Quote
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          Code Block
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          Horizontal Rule
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          Undo
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          Redo
        </button>

      </div>
    </editor-menu-bar>
  </div>
</template>

<script>
import { EditorMenuBar } from 'tiptap';

export default {
  name: 'Menubar',
  props: {
    editor: {
      type: Object,
      default: null,
    },
  },
  components: {
    EditorMenuBar,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/rich-text-editor/menubar.scss";
</style>
