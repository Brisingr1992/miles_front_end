
export function addCategory(categories, idx, item) {
    return {
        type: 'ADD_REWARD',
        payload: { categories, idx, item }
    }
}

export function deleteCategory(categories, idx, item) {
    return {
        type: 'DELETE_REWARD',
        payload: { categories, idx, item }
    }
}