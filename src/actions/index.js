
export function addCategory(categories, idx, item) {
    return {
        type: 'ADD_REWARD',
        payload: { categories, idx, item }
    }
}

export function deleteCategory(categories, idx) {
    return {
        type: 'DELETE_REWARD',
        payload: { categories, idx}
    }
}

export function undoHistory() {
    return { type: 'UNDO' }
}

export function redoHistory() {
    return { type: 'REDO' }
}

export function save() {
    return { type: 'SAVE' }
}