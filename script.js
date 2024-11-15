function triggerFileUpload() {
    document.getElementById('fileInput').click();
}
  
// Switch to the second screen after file selection and display file name
document.getElementById('fileInput').addEventListener('change', function(event) {
const file = event.target.files[0];
if (file) {
    console.log("File selected:", file.name);
    document.getElementById('converter-interface').style.display = 'none';
    document.getElementById('second-screen').style.display = 'block';
    
    // Set the file name in the demo-text element
    document.querySelector('.demo-text').textContent = file.name;
}
});
  
