
function Reload() {
    const body = document.querySelector('body')
    body.innerHTML = '';
    const content = document.createElement('div');
    content.id = "content"
    
    body.appendChild(content);
}
export default Reload;