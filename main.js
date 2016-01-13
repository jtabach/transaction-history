
$(document).ready(init);

var tNum = 001;

function init() {
	$('form').submit(getInput);
	$('.amountType').on('click', setDeposit);
}

function getInput(e) {
	e.preventDefault();
	var amountType = $(this).find('#sub').text();
	cloneRow(amountType);
}

function cloneRow(amountType) {
	var $tr = $('#template').clone();
	$tr.removeAttr('id');
	$tr.children('.tNum').text(tNum);
	$tr.children('.descr').text($('input[type="text"]').val());
	$tr.children('.date').text(moment($('input[type="date"]').val()).format('LL'));
	if (amountType === "Deposit") {
		$tr.children('.deposit').text($('input[type="number"]').val());
	} else {
		$tr.children('.withdrawal').text($('input[type="number"]').val());
	}
	$('#transactions').append($tr);
	tNum++;
}

function setDeposit() {
	var $this = $(this);
	if ($this.text() === "Deposit") {
		$('#sub').text($this.text());
	} else {
		$('#sub').text($this.text());
	}
}