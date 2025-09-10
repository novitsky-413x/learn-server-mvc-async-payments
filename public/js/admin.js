const deleteProduct = (btn) => {
    const productId = btn.parentNode.querySelector('input[name="productId"]').value;
    const csrf = btn.parentNode.querySelector('input[name="_csrf"]').value;

    fetch(`/admin/product/${productId}`, {
        method: 'DELETE',
        headers: {
            'csrf-token': csrf,
        },
    })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
};
