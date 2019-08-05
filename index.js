function addingEventListener() {
    //1. The node that will be doing the listening. We store that node in the `input` constant
    const input = document.getElementById('input');
    
    input.addEventListener('click', function(event) {
        //2. The invocation of `addEventListener` on the node that will be doing the listening
            // 1. The first argument is the //*event name to listen for 
            // 2. The second argument is the //*_callback function_. 
            // It's work that will be executed when the node "hears" the event.
        alert('I was clicked!');
    });
}