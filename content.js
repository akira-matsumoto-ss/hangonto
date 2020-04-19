chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const target_class_name = request.target_class_name || 'z38b6'
  const chat = document.getElementsByClassName(target_class_name)[0]

  if (!chat) {
    return sendResponse('')
  }

  const post_groups = chat.children
  log = ''

  for(const post_group of post_groups) {
    const post_data = post_group.children
    const head = post_data[0].children
    const name = head[0].textContent
    const date = head[1].textContent
    log += `<${name}> [${date}]\n`
    const body = post_data[1].children

    for(const text of body) {
      log += `${text.textContent}\n`
    }

    log += '\n----\n\n'
  }

  return sendResponse(log)
});

