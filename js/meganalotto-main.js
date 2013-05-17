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
	// ----- PROVA
	sistem_selected = $('#system_type :selected').text();
	repeat_limit = $('#repeat').val();
	// Set number limit for each supported game
	numbers_limit = GAMES_NUMBERS[$('#game_type :selected').val()];
	limit_max_number = GAMES_NUMBERS_LIMIT[$('#game_type :selected').val()];
	table_header = get_table_header();
	table_header = table_header.replace('<tr>', '<tr><th></th>');
	$('#generate_main_header').append(table_header);
	for (i=1; i<=repeat_limit; i++){
		table_row = get_table_row();
		table_row = table_row.replace('<tr>', '<tr><td><b><i>' + i.toString() + '</i></b></td>');
		$('#generate_main_body').append(table_row);
		}
	$('#post_message').prepend('<h4 id="alert_generated" class="alert_success">Valori generati con sistema ' + sistem_selected + '!</h4>');
}
