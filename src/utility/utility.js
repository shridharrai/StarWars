const filterMovieList = (selectedValue, content) => {
    if (content && selectedValue) {
        const filtered = content.filter(obj => obj.id === selectedValue.id);
        return filtered[0].films;
    }
}

export default filterMovieList