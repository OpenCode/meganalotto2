function try_work(){
	alert('dispari');
	}

function get_table_header() {
	// Generate table header
	table_header = '<tr>';
	for (i=1; i<=numbers_limit; i++){
		table_header += '<th>' + i.toString() + '° Numero</th>';
		}
	table_header += '</tr>';
	return table_header;
	}

function get_table_row(){
	// Initialize
	var numbers = new Array ();
	for (n=1; n<=limit_max_number; n++){
		if (!(n%2==0)) {
			numbers.push(n);
			}
		}
	limit_max_number = 45;
	// Generate table body row
	table_body_row = '<tr>';
	for (j=1; j<=numbers_limit; j++){
		random = Math.floor(Math.random() * numbers.length);
		table_body_row += '<td>' + numbers[random].toString() + '</td>';
		numbers.splice(random - 1, 1);
		}
	table_body_row += '</tr>';
	return table_body_row;
	}