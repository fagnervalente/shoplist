(function() {
    'use strict';
    new Vue({
        el: '#app-shop-list',
        data() {
            return {
                formData: {
                    name: '',
                    quantity: null
                },
                items: [
                    {
                        name: 'Sabão em pó',
                        quantity: '5 Kg'
                    },
                    {
                        name: 'Óleo',
                        quantity: '4 latas'
                    },
                    {
                        name: 'Pasta de dente',
                        quantity: '2 cx'
                    }
                ]
            };
        },
        methods: {
            addItem() {
                this.items.push(Object.assign({}, this.formData));
                this.resetFormData();
            },
            resetFormData() {
                this.formData.name = '';
                this.formData.quantity = null;
            }
        }
    });
})();
