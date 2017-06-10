addItemToCart = (id) => {
    $.post('/add-to-cart',
        {'id' : id},
        () => {
            location.reload(true);
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

removeItem = (id) => {
    $.post('/remove-item',
        {
            'item_id' : id
        },
        () => {
            location.reload(true);
        }
    );
}
