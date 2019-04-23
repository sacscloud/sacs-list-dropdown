'use strict';

Polymer({
    is: "sacs-list-dropdown",
    properties: {
        dataList: {
            type: Array,
            value: []
        }
    },

    attached: function () {
        this.$$(".list_dropdown").addEventListener("click", function (e) {
            const itemSelected = e.target.getAttribute('data-id');
            const name = e.target.getAttribute('data-name');
            const type = e.target.getAttribute('data-type');

            this.dispatchEvent(new CustomEvent('item-selected', {
                bubbles: true,
                composed: true,
                detail: { itemSelected, name, type }
            }));
        });
    },

    _openList: function () {
        if (this.style.display === "none" || this.style.display === "") {
            this.style.display = "block";
        }
    },

    _closeList: function () {
        if (this.style.display === "block") {
            this.style.display = "none";
        }
    }
});