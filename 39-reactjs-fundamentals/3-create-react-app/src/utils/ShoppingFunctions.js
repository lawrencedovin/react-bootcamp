const total = (items) => items.reduce((accumulator, item) => {
    return accumulator + (item.price * item.qty);
}, 0);

export default total;