function print(){
	var prtContent = document.getElementById("system_table");
	var WinPrint = window.open('', '', 'letf=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
	complete_html = '<html><head><link rel="stylesheet" href="css/layout.css" type="text/css" media="screen" />';
	complete_html += '</head><body>' + prtContent.innerHTML + '</body></html>';
	WinPrint.document.write(prtContent.innerHTML);
	WinPrint.document.close();
	WinPrint.focus();
	WinPrint.print();
	WinPrint.close();
	}

function clear_all(){
	// Clear existing data
	if ($('#alert_generated')){
		$('#alert_generated').remove();
		}
	$("#generate_main_header tr").remove();
	$("#generate_main_body tr").remove();
}

function restart_main(){
	clear_all();
	$('#generate_main_body').append('<tr><td style="text-align:center;"><img src="images/gear.jpg" /></td></tr>');
	}

function generate() {
	// Clear existing data
	clear_all();
	// Include system file
	$('head').append('<script src="js/systems/' + $('#system_type :selected').val() + '.js" type="text/javascript"></script>');
	sistem_selected = $('#system_type :selected').text();
	repeat_limit = $('#repeat').val();
	// Set number limit for each supported game
	numbers_limit = GAMES_NUMBERS[$('#game_type :selected').val()];
	limit_max_number = GAMES_NUMBERS_LIMIT[$('#game_type :selected').val()];
	var system = new System();
	table_header = system.get_table_header();
	table_header = table_header.replace('<tr>', '<tr><th></th>');
	$('#generate_main_header').append(table_header);
	for (i=1; i<=repeat_limit; i++){
		table_row = system.get_table_row();
		table_row = table_row.replace('<tr>', '<tr><td><b><i>' + i.toString() + '</i></b></td>');
		$('#generate_main_body').append(table_row);
		}
	$('#post_message').prepend('<h4 id="alert_generated" class="alert_success">Valori generati con sistema ' + sistem_selected + '!</h4>');
}

function show_system_info(){
		// ----- Clear the old data first
	if ($('#modal-header-system-name')){$('#modal-header-system-name').remove();}
	if ($('#modal-content-system-developer')){$('#modal-content-system-developer').remove();}
	if ($('#modal-content-system-version')){$('#modal-content-system-version').remove();}
	if ($('#modal-content-system-description')){$('#modal-content-system-description').remove();}
	$('head').append('<script src="js/systems/' + $('#system_type :selected').val() + '.js" type="text/javascript"></script>');
	// ----- Fill the modal with rigth data
	var system = new System();
	$('#modal-header').append('<h1 id="modal-header-system-name">' + system.name + '</h1>');
	$('#modal-content').append('<p id="modal-content-system-developer"><b>Autore : </b>' + system.developer + ' «' + system.email + '» - <a href="' + system.site + '" target="_blank">' + system.site + '</a></p>');
	$('#modal-content').append('<p id="modal-content-system-version"><b>Versione : </b>' + system.version + '</p>');
	$('#modal-content').append('<p id="modal-content-system-description"><b>Dettagli : </b>' + system.description + '</p>');
	}
