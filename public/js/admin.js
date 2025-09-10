const deleteProduct = (btn) => {
    const productId = btn.parentNode.querySelector('input[name="productId"]').value;
    const csrf = btn.parentNode.querySelector('input[name="_csrf"]').value;
};
