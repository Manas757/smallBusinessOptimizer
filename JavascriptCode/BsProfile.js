function navigate(section){
    alert('Navigating to ${section} section');
}
function viewOrder(OrderId){
    alert('Viewing order details for ${OrderId}');
}

document.querySelector('.search-bar Input').addEventListener('keypress',function(e){
    if(e.key=='Enter'){
        const searchTerm = this.value;
        if(searchTerm){
            alert('Searching for : ${searchTerm}');
        }
    }
});