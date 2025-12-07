document.getElementById('textForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const text = document.getElementById('textInput').value;
  const resDiv = document.getElementById('result');
  resDiv.textContent = 'Enviando...';
  try{
    const resp = await fetch('/api/process', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({text})
    });
    if(!resp.ok) throw new Error('Resposta não ok');
    const data = await resp.json();
    resDiv.innerHTML = `<strong>Mensagem do servidor:</strong> ${data.message}<br/>
                        <strong>Palavras:</strong> ${data.words}<br/>
                        <strong>Texto invertido:</strong> <code>${data.reversed}</code>`;
  }catch(err){
    resDiv.textContent = 'Erro: ' + err.message;
  }
});