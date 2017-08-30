<?php
// include ImageManipulator class
require_once('ImageManipulator.php');

if ($_FILES['filesToUpload']['error'] > 0) {
	echo "Error: " . $_FILES['filesToUpload']['error'] . "<br />";
} else {
	// array of valid extensions
	$validExtensions = array('.jpg', '.jpeg', '.gif', '.png');
	// get extension of the uploaded file
	$fileExtension = strrchr($_FILES['filesToUpload']['name'], ".");
	// check if file Extension is on the list of allowed ones
	if (in_array($fileExtension, $validExtensions)) {
		$manipulator = new ImageManipulator($_FILES['filesToUpload']['tmp_name']);
		// resizing to 200x200
		$newImage = $manipulator->resample(400,200);
		// saving file to uploads folder
		$manipulator->save('uploads/' . $newNamePrefix . $_FILES['filesToUpload']['name']);
		echo 'Done ...';
	} else {
		echo 'You must upload an image...';
	}
}
