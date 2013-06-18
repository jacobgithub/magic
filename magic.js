$(document).ready(function(){
    $('#addedButton').click(function(){
        var toAdd = $('input[name=addedItem]').val();
        $('#addedList').append('<li class="itemAdded">' + toAdd + '</li>');    });
    
	$('#removedButton').click(function(){
        var toRemove = $('input[name=removedItem]').val();
        $('#removedList').append('<li class="itemRemoved">' + toRemove + '</li>');
    });

    $('#addedList').on('click', '.itemAdded', function() {
		$(this).remove();
	});
	
	$('#removedList').on('click', '.itemRemoved', function() {
		$(this).remove();
	});
	
});