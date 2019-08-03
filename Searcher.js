
class Searcher {

    constructor(quill) {
        this.quill = quill;
        this.container = document.getElementById('search-container');

        document.getElementById('search').addEventListener('click', this.search.bind(this));
        document.getElementById('replace').addEventListener('click', this.replace.bind(this));
        document.getElementById('replace-all').addEventListener('click', this.replaceAll.bind(this));

    }


    search() {
        let SearchedString = document.getElementById('search-input').value;
        if (SearchedString) {

            let totalText = quill.getText();
            let re = new RegExp(SearchedString, 'g');
            let match = re.test(totalText);
            if (match) {
                let indices = Searcher.occurrencesIndices = totalText.getIndicesOf(SearchedString);
                let length = Searcher.SearchedStringLength = SearchedString.length;

                indices.forEach(index => quill.formatText(index, length, 'SearchedString', true));

            } else {
                Searcher.occurrencesIndices = null;
                Searcher.currentIndex = 0;
            }

        } else {
            if (Searcher.occurrencesIndices) {
                Searcher.occurrencesIndices
                    .forEach(index => 
                             quill.formatText(index, Searcher.SearchedStringLength, 'SearchedString', false));

                Searcher.occurrencesIndices = null;
                Searcher.currentIndex = 0;
            }
        }
    }


    replace() {
        // if no occurrences, then search first.
        if (!Searcher.occurrencesIndices) {
            this.search();
        }

        let indices = Searcher.occurrencesIndices;

        let oldString = document.getElementById('search-input').value;
        let newString = document.getElementById('replace-input').value;

        quill.deleteText(indices[Searcher.currentIndex], oldString.length);
        quill.insertText(indices[Searcher.currentIndex], newString);

        // update the occurrencesIndices.
        this.search();
    }

    replaceAll() {
        let oldStringLen = document.getElementById('search-input').value.length;
        let newString = document.getElementById('replace-input').value;
        // if no occurrences, then search first.
        if (!Searcher.occurrencesIndices) {
            this.search();
        }

        if (Searcher.occurrencesIndices) {
            while (Searcher.occurrencesIndices) {

                quill.deleteText(Searcher.occurrencesIndices[0], oldStringLen);
                quill.insertText(Searcher.occurrencesIndices[0], newString);

                // update the occurrencesIndices.
                this.search();
            }
        }
    }
}

Searcher.occurrencesIndices = null;
Searcher.currentIndex = 0;
Searcher.SearchedStringLength = null;

export default Searcher;
