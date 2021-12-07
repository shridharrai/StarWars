export const setContent = (contentItems) => {
    const res = contentItems.map((currObj, index) => ({
        id: index,
        ...currObj
    }))
    console.log(res);
    return res
};