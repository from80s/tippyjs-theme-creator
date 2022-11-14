/*================== IMPORTAÇÕES =================*/
import './includes/libs/jquery_3.6.1'
import './semantic/dist/semantic.css'
import './semantic/dist/semantic.js'
import './includes/libs/tippy'
import './includes/libs/prism'
import './includes/styles/style.css'

/*================== CONTEÚDO DO APP =================*/
document.querySelector('#app').innerHTML = `
    <button id="myButton">My button</button>

    <div class="ui placeholder">
  <div class="image header">
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="paragraph">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>

<pre><code class="language-css">p { color: red }</code></pre>
`

/*================== EVENTOS =================*/
window.addEventListener('load', () => {
    tippy('#myButton', {
        content: 'My tooltip!',
      });
})
