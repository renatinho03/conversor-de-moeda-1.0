async function converter() {
  var quantia = document.getElementById("quantia").value

  var min = document.querySelector('input[name="in"]:checked').value
  var mout = document.querySelector('input[name="out"]:checked').value

  var url = "https://api.exchangerate.host/convert?from=" + min + "&to=" + mout

  var response = await fetch(url)
  var data = await response.json()

  var cotacao = data.info.rate
  var valorConvertido = cotacao * quantia


  document.getElementById("res").innerHTML = valorConvertido.toFixed(2)
}
