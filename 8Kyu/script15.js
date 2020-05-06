const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc, cur) => { 
            if(acc + cur.length <= limit) {
                newTitle.push(cur);
            } 
            return acc + cur.length;
        }, 0);  
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}

console.log(limitRecipeTitle('if we run it back one more time then we hit the sweet spot'));