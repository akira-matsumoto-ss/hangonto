document.getElementById('copy-button').onclick = function() {
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
    const target_class_name_value = document.getElementById('target-class-name').value
    chrome.tabs.sendMessage(tabs[0].id, {target_class_name: target_class_name_value}, function(log) {
      if (log) {
        navigator.clipboard.writeText(log)
      } else {
	const header = document.getElementById('toast')

	if (header.children.length > 0) {
	  return
        }

        const toast = document.createElement('div')
	toast.classList.add('toast', 'toast-error')
	toast.textContent = 'Error: Chats could not be found.'
	const button = document.createElement('button')
	button.classList.add('btn', 'btn-clear', 'float-right')
	button.onclick = function() {
	  toast.remove()
	}
	toast.appendChild(button)
	header.appendChild(toast)
      }
    });
  });
};

