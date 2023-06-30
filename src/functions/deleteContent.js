const deleteContent = () => {
    const contentDiv = document.querySelector('#content');
    const contentDivChildren = contentDiv.children;

    console.log(contentDivChildren.length);
    
    for (let i = contentDivChildren.length - 1; i > 1; i--) {
        contentDivChildren[i].remove();
    }
};

export default deleteContent;