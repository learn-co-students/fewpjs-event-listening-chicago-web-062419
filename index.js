
//click = the event name to listen for
//callback function = function(event) {
//    alert('I was clicked!'. I.e. what happens when the node hears the event. 
function addingEventListener() {
    const input = document.getElementById('input'); 
    // Node that is doing the listening
input.addEventListener('click', function(event) {
  alert('I was clicked!');
});
}
