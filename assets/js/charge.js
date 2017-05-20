
function submitForm() {
    Stripe.card.createToken(
        {
            number: $('.card-number').val(),
            cvc: $('.card-cvc').val(),
            exp_month: $('.card-expiry-month').val(),
            exp_year: $('.card-expiry-year').val()
        },
        stripeResponseHandler
    );
}

function stripeResponseHandler(status, response) {
    var $form = $('#payment-form');

    if (response.error) {
        // Show the errors on the form
        $form.find('.payment-errors').text(response.error.message);
    } else {
        $form.find('.payment-errors').text('');

        // Get the token ID:
        var token = response.id;

        $.post('/payment',
            {'token' : token},
            function(data) {
                console.log('success');
            }
        );

    }
}
