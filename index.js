function SnackBar(text, duration) {
  var div = document.getElementById('snackbar-js')
  if (!div) {
      div = document.createElement("div")
      div.id = 'snackbar-js'
      div.innerHTML = text;
      div.style.height = "30px"
      div.style.width = "fit-content"
      div.style.margin = "10px"
      div.style.padding = "10px"
      div.style.position = "fixed"
      div.style.bottom = "20px"
      div.style.left = "20px"
      div.style.backgroundColor = "rgb(63, 63, 63)"
      div.style.borderRadius = "5px"
      div.style.color = "white"
      div.style.display = "flex"
      div.style.justifyContent = "center"
      div.style.alignItems = "center"
      div.style.flexDirection = 'column'
      div.style.boxShadow = "black 1px 1px 1px"
      div.style.minWidth = "100px"
      div.style.fontFamily = "'Noto Sans', sans-serif"
      document.body.innerHTML += `<style> @keyframes show{ 0%{bottom: -100px;visibility: hidden;} 100%{bottom: 20px;visibility: visible;} } @keyframes hide{ 0%{bottom: 20px;visibility: visible;} 100%{bottom: -100px;visibility: hidden;} } @keyframes snackbar-loader{ 0%{width:100%;} 100%{width:0%;} } #snackbar-js::after{ content: ''; width: 100%; height: 4px;position:absolute;bottom:0px;left:1px;border-radius:5px;background-color: red; animation: snackbar-loader ${duration/1000}s forwards linear; } </style>`
      div.style.animation = "show 0.5s ease-out forwards"
      setTimeout(() => {
          div.style.animation = "hide 0.5s ease-out forwards"
          setTimeout(()=>{div.remove()},500)
      }, duration);
      document.body.appendChild(div)
  }
  else {
      div.innerText = text;
  }
}

// module.exports = SnackBar();