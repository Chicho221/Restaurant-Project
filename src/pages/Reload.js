
function Reload() {
    const body = document.querySelector('body')
    body.innerHTML = '';
    const content = document.createElement('div');
    content.id = "content"
    const content_container = document.createElement('div');
    content_container.id = "content_container"
    const content_header = document.createElement('div');
    content_header.id = "content_header"
    
    body.appendChild(content);
    content.appendChild(content_header);
    content.appendChild(content_container);
}
export default Reload;