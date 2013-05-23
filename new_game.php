<!doctype html>
<html lang="en">

<head>
	<?php include_once('template/head.inc.php'); ?>
</head>


<body>

	<?php include_once('template/header.inc.php'); ?>
	
	<section id="secondary_bar">
		<div class="user">&nbsp;</div>
		<div class="breadcrumbs_container">
			<article class="breadcrumbs"><a href="index.php">Meganalotto</a> <div class="breadcrumb_divider"></div> <a class="current">Generatore</a></article>
		</div>
	</section><!-- end of secondary bar -->
	
	<?php include_once('template/sidebar.inc.php'); ?>
	
	<section id="main" class="column">

		<div id="post_message" class="clear"></div>
		
		<article class="module width_full">
			<header>
				<h3>Generatore</h3>
				<div class="submit_link">
					<select id="game_type" name="game_type">
						<option value="lotto">Lotto</option>
						<option value="superenalotto">Superenalotto</option>
					</select>
					<input type="text" id="repeat" value="1" name="repeat"/>
					<?php
						// Generate dynamic systems list
						$systems_path = 'js/systems';
						$sys_list = array_diff(scandir($systems_path), array('..', '.'));
					?>
					<select id="system_type" name="system_type">
						<?php 
							foreach ($sys_list as $sys) {
								$c_sys = str_replace('.js','',$sys);
								echo '<option value="' . $c_sys . '" >' . $c_sys . '</option>';
							}
						?>
					</select>
					<input type="submit" value="?" onclick="show_system_info();">
					<input type="submit" value="Genera" class="alt_btn" onclick="generate();">
					<input type="submit" value="Pulisci" onclick="restart_main();">
					<input type="submit" value="Stampa" onclick="print();">
				</div>
			</header>
			<div id="system_table">
				<table class="tablesorter" cellspacing="0"> 
					<thead id="generate_main_header"> 
					</thead> 
					<tbody id="generate_main_body">
						<tr><td style="text-align:center;"><img src="images/gear.jpg" /></td></tr>
					</tbody> 
				</table>
			</div>
		</article><!-- end of post new article -->
		<div class="spacer"></div>
	</section>


</body>

</html>
