const generateItems = (count, creator) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(creator(i));
    }
    return result;
};

const initialCategories = {
    cat1: { id: 1, rewards: generateItems(5, (i) => ({ id: '1' + i, data: `R${i}` }))},
    cat2: { id: 2, rewards: generateItems(5, (i) => ({ id: '2' + i, data: '' }))},
    cat3: { id: 3, rewards: generateItems(5, (i) => ({ id: '3' + i, data: '' }))},
    cat4: { id: 4, rewards: generateItems(5, (i) => ({ id: '4' + i, data: '' }))},
    cat5: { id: 5, rewards: generateItems(5, (i) => ({ id: '5' + i, data: '' }))},
    cat6: { id: 6, rewards: generateItems(5, (i) => ({ id: '6' + i, data: '' }))}
}

const myHistory = {
    curr: 0,
    undo: null,
    redo: null,
    stack: [initialCategories]
}

export default myHistory;