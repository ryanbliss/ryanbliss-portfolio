<template>
  <div class="rich-text-block w-richtext editor one-point-zero-spaced">

    <div v-if="editable">
      <Menubar :editor="editor">
        <div class="flex">
          <div class="spacer"/>
          <AnimatedButton style="margin-top: 8px; margin-bottom: 12px;"
            text="Copy HTML"
            @select="copyHtmlToClipboard"
          />
        </div>
      </Menubar>
    </div>

    <editor-content class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions';
import Menubar from './menubar/Menubar.vue';
import AnimatedButton from '../button/animated-button/AnimatedButton.vue';

export default {
  name: 'RichTextEditor',
  props: {
    initialRichText: {
      type: String,
      required: true,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    initialRichText(newValue, oldValue) {
      if (newValue === oldValue || !this.editor) return;
      this.editor.setContent(newValue);
    },
    editable() {
      if (!this.editor) return;
      this.editor.setOptions({
        editable: this.editable,
      });
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
      ],
      content: this.initialRichText,
      editable: this.editable,
    });
  },
  methods: {
    copyHtmlToClipboard() {
      const el = document.createElement('textarea');
      el.value = this.editor.getHTML();
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  components: {
    EditorContent,
    Menubar,
    AnimatedButton,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/rich-text-editor/editor.scss";
</style>
