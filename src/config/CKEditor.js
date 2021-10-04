export const configEditor = {
  height: 150,
  // bottomSpace: 2,
  toolbarGroups: [
    {name: "document", groups: [ "mode", "document", "doctools" ]},
    {name: "clipboard", groups: [ "clipboard", "undo" ]},
    {
      name: "editing",
      groups: [ "find", "selection", "spellchecker", "editing" ]
    },
    {name: "forms", groups: [ "forms" ]},
    {name: "basicstyles", groups: [ "basicstyles", "cleanup" ]},
    {
      name: "paragraph",
      groups: [ "list", "indent", "blocks", "align", "bidi", "paragraph" ]
    },
    {name: "links", groups: [ "links" ]},
    {name: "insert", groups: [ "insert" ]},
    {name: "styles", groups: [ "styles" ]},
    {name: "colors", groups: [ "colors" ]},
    {name: "tools", groups: [ "tools" ]},
    {name: "others", groups: [ "others" ]},
    {name: "about", groups: [ "about" ]}
  ],
  removeButtons:
    "Source,Save,Templates,Cut,NewPage,ExportPdf,Preview,Print,PasteFromWord,PasteText,Paste,Copy,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,BulletedList,NumberedList,Outdent,Indent,CreateDiv,Blockquote,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Image,Flash,Smiley,SpecialChar,PageBreak,Iframe,Anchor,Link,Unlink,BidiLtr,BidiRtl,Language,Font,Maximize,ShowBlocks,About,Styles,Format,FontSize,TextColor,BGColor"
};

export const configEditorReadOnly = {
  height: 150,
  readOnly: true,
  toolbarGroups: [
    {name: "document", groups: [ "mode", "document", "doctools" ]},
    {name: "clipboard", groups: [ "clipboard", "undo" ]},
    {
      name: "editing",
      groups: [ "find", "selection", "spellchecker", "editing" ]
    },
    {name: "forms", groups: [ "forms" ]},
    {name: "basicstyles", groups: [ "basicstyles", "cleanup" ]},
    {
      name: "paragraph",
      groups: [ "list", "indent", "blocks", "align", "bidi", "paragraph" ]
    },
    {name: "links", groups: [ "links" ]},
    {name: "insert", groups: [ "insert" ]},
    {name: "styles", groups: [ "styles" ]},
    {name: "colors", groups: [ "colors" ]},
    {name: "tools", groups: [ "tools" ]},
    {name: "others", groups: [ "others" ]},
    {name: "about", groups: [ "about" ]}
  ],
  removeButtons:
    "Source,Save,NewPage,ExportPdf,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Redo,Undo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Bold,CopyFormatting,NumberedList,Outdent,Blockquote,JustifyLeft,BidiLtr,Link,Image,Styles,TextColor,Maximize,About,ShowBlocks,BGColor,Format,Font,FontSize,Iframe,PageBreak,SpecialChar,Smiley,HorizontalRule,Table,Flash,Unlink,Anchor,JustifyRight,JustifyBlock,Language,BidiRtl,JustifyCenter,CreateDiv,Indent,BulletedList,RemoveFormat,Italic,Strike,Subscript,Superscript,Underline"
};
