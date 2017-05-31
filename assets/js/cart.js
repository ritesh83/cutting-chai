function addItemToCart(id) {
    $.post('/add-to-cart',
        {'id' : id},
        function(data) {
            console.log(data);
        }
    );
}
