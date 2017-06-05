addItemToCart = (id) => {
    $.post('/add-to-cart',
        {'id' : id},
        (data) => {
            console.log(data);
        }
    );
}

updateQuantity = (id, action) => {
    $.post('/update-quantity',
        {
            'item_id' : id,
            'action': action
        },
        () => {
            location.reload(true);
        }
    );
}
