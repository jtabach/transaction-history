
$(document).ready(init);

var tNum = 001;
var accountBalance = 1000;

function init() {
	$('form').submit(getInput);
	$('.amountType').on('click', setDeposit);
	$('#transactions').on('click', '.delete', removeTransaction);
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
	var datePreFormat = $('input[type="date"]').val();
	$tr.children('.date').text(moment(datePreFormat).format('LL'));

	if (amountType === "Deposit") {
		$tr.children('.deposit').text($('input[type="number"]').val())
			.addClass('green');
	} else {
		$tr.children('.withdrawal').text($('input[type="number"]').val())
			.addClass('red');
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

function removeTransaction() {
	$(this).closest('tr').remove();
}