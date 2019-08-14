import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

const RTFEditor = () => (
  <Editor
    toolbarClassName="demo-toolbar-absolute"
    wrapperClassName="demo-wrapper"
    editorClassName="demo-editor"
    toolbarOnFocus
    toolbar={{
      options: ['inline', 'blockType', 'fontSize', 'fontFamily','list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'history'],
      inline: {
		inDropdown: false,
        options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
        bold: { className: 'bordered-option-classname' },
        italic: { className: 'bordered-option-classname' },
        underline: { className: 'bordered-option-classname' },
		strikethrough: { className: 'bordered-option-classname' },
		monospace: { className: 'bordered-option-classname' },
		superscript: { className: 'bordered-option-classname' },
		subscript: { className: 'bordered-option-classname' },
      },
      blockType: {
        className: 'bordered-option-classname',
      },
      fontSize: {
        className: 'bordered-option-classname',
      },
      fontFamily: {
        className: 'bordered-option-classname',
      },
      list: {
        className: 'bordered-option-classname',
      },
      textAlign: {
        className: 'bordered-option-classname',
      },
      colorPicker: {
        className: 'bordered-option-classname',
      },
      link: {
        className: 'bordered-option-classname',
      },
      embedded: {
        className: 'bordered-option-classname',
      },
      emoji: {
        className: 'bordered-option-classname',
      },
      history: {
        className: 'bordered-option-classname',
      }
    }}
  />
);
export default RTFEditor;