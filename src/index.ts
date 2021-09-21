async function openFile() {
	const [fileHandle] = await window.showOpenFilePicker();

    if (fileHandle.kind === 'file') {
        const fileData = await fileHandle.getFile();
        console.log(fileData);
    }	
}

document.getElementById('open').addEventListener('click', function () {
	openFile();
});
