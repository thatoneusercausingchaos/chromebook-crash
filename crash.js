function crash() {
if (confirm('This will crash your Chromebook')) {
	// Run the script
	setTimeout(() =>
{
  while (true)
  {
    while (1) location.reload(1)
  }
}, 1000);
} else {
	//Do nothing
	alert('Script Canceled!');
	console.log('User Canceled...');
}
}