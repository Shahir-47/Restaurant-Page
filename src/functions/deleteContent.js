const deleteContent = () => {
    const contentDiv = document.querySelector('#content');
    const contentDivChildren = contentDiv.children;
    
    for (let i = contentDivChildren.length - 1; i > 1; i--) {
        contentDivChildren[i].remove();
    }
};

export default deleteContent;