
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
    let $form = $('#payment-form');

    if (response.error) { // Problem!
        // Show the errors on the form:
        $form.find('.payment-errors').text(response.error.message);
    } else { // Token was created!
        $form.find('.payment-errors').text('');

        // Get the token ID:
        let token = response.id;
    }
}
