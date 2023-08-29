const setFormData = (inputData) => {
    // mutate
    let formData = new FormData();

    const { categoryId, title, showDate, place, price, rating, review } = inputData;

    // 필수
    formData.append('categoryId', categoryId);
    formData.append('title', title);
    formData.append('showDate', showDate);

    // 선택사항
    formData.append('place', place);
    formData.append('price', price);
    formData.append('rating', rating);
    formData.append('review', review);

    return formData;
};

export default setFormData;
