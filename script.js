// HEADER

// Update message count 
function countMessages() {
    $('#count').text($('p').length);
}
countMessages();

// Search messages
$('#btn-search').click(
    function() {
        var search = $('#search').val();
        searchMessage(search);
        // Reset message input field 
        $('#search').val("");
    }
);
// Find searched message (exact first & last name only)
function searchMessage(search) {
    $('h6').each(
        function() {
            if (search === "") {
                $(this).parent().parent().show();
            } else if ($(this).text() !== search) {
                $(this).parent().parent().hide();
            } else {
                $(this).parent().parent().show();
             }
        }
    )
}

// MAILBOX

// Delete a message by clicking on the trashcan (old & new messages)
$('.messages').on("click", 'i', 
    function() {
        $(this).parent().remove();
        countMessages();
    }
)

// NEW MESSAGE : click on ADD
$('#btn-add').click(
    function() {
        // assign message typed in input field
        var msg = $('#new-message').val();
        // create new message card
        createMessageCard(msg);
        // Reset message input field
        $('#new-message').val("");
        // add '+1' to counter
        countMessages();
    }
)
// Create message card for new messages
function createMessageCard(msg) {
    $('.messages').prepend('<div class="message-card"><img src="assets/avatar-5.jpg" alt="friend-5"><div class="message-text"><h6>Céline R</h6><p>'+msg+'</p></div><i class="far fa-trash-alt"></i></div>');
}

