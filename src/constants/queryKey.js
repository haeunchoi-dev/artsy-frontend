const categoryKeys = {
    get: () => ['category'],
    getOne: (categoryId) => ['category', categoryId],
};

const ticketKeys = {
    get: (categoryId) => ['ticket', categoryId],
    getOne: (ticketId) => ['ticket', ticketId],
    post: () => ['ticket'],
    getTotalCount: () => ['ticketCount'],
    getTotalPrice: () => ['ticketPrice'],
};

const userKeys = {
    get: () => ['user'],
    post: () => ['user'],
};

const validateKey = {
    email: () => ['email'],
};

export { categoryKeys, ticketKeys, userKeys, validateKey };
