declare module '@editorjs/header' {
  import { BlockToolConstructable } from '@editorjs/editorjs';
  export default class Header implements BlockToolConstructable {}
}

declare module '@editorjs/list' {
  import { BlockToolConstructable } from '@editorjs/editorjs';
  export default class List implements BlockToolConstructable {}
}

declare module '@editorjs/checklist' {
  import { BlockToolConstructable } from '@editorjs/editorjs';
  export default class Checklist implements BlockToolConstructable {}
}

declare module '@editorjs/paragraph' {
  import { BlockToolConstructable } from '@editorjs/editorjs';
  export default class Paragraph implements BlockToolConstructable {}
}

declare module '@editorjs/warning' {
  import { BlockToolConstructable } from '@editorjs/editorjs';
  export default class Warning implements BlockToolConstructable {}
}
