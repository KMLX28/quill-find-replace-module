#  Quill Find/Replace Module
A module for Quill rich text editor to allow searching/finding words and replacing them.

## Demo

[Demo](https://codepen.io/muhammedalkhudiry/pen/VoMxeK)

## Usage

JS
```
// import module files
import Searcher from "path/to/Searcher.js";
import SearchedStringBlot from "path/to/SearchBlot.js";

// register them
Quill.register('modules/Searcher', Searcher);
Quill.register(SearchedStringBlot);

// initialize Quill editor
const quill = new Quill('#editor', {
    modules: {
        Searcher: true,
    },
});
```

CSS
* you could choose how the searched word will look, but don't change, display: inline-block;
```
.ql-searched-string {
    background-color: #f8ff00;
    display: inline-block;

}

```

## UI

there should be:
* three button for search, replace, replace-all
with IDs: search, replace, replace-all
* an two input with IDs: search-input, replace-input

#### example:

```
<input id="search-input">
<input id="replace-input">
<button id="search">find</button>
<button id="replace">replace</button>
<button id="replace-all">replace all</button>
```

# Contribution
please, make an [issue](https://github.com/MuhammedAlkhudiry/quill-find-replace-module/issues).

# License
[MIT License](https://rmm5t.mit-license.org/)
