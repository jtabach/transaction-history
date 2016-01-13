
$(document).ready(init);

var tNum = 001;
var trans;
var date;
var amount;

function init() {
	$('form').submit(getInput);
}

function getInput(e) {
	e.preventDefault();

	trans = $('input[type="text"]').val();
	date = $('input[type="date"]').val();
	amount = $('input[type="number"]').val();
	cloneRow();
}

function cloneRow() {
	var $tr = $('#template').clone();
	$tr.removeAttr('id');
	$tr.children('.tNum').text(tNum);
	$tr.children('.descr').text(trans);
	$tr.children('.date').text(date);
	$tr.children('.deposit').text(amount);
	$('#transactions').append($tr);
	tNum++;
}