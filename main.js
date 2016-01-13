
$(document).ready(init);

var tNum = 001;
var accountBalance = [1000];

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
	var currency = Number($('input[type="number"]').val());
	if (amountType === "Deposit") {
		$tr.children('.deposit').text(currency.toFixed(2))
			.addClass('green');
		accountBalance.push(currency);
	} else {
		$tr.children('.withdrawal').text(currency.toFixed(2))
			.addClass('red');
		accountBalance.push(currency * -1);
	}
	$('#transactions').append($tr);
	tNum++;
	updateBalance();
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
	var removed = $(this).closest('tr').remove();
	accountBalance.splice(removed.find('.tNum').text(), 1, 0);
	updateBalance()
}

function updateBalance() {
	var myBalance = accountBalance.reduce(function(sum, num) {
		return sum + num;
	}).toFixed(2);
	// console.log(myBalance);
	console.log(accountBalance)
	$('#accBalance').text(myBalance);
}




