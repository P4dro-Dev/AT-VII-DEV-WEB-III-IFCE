from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/process', methods=['POST'])
def process():
    data = request.json or {}
    text = data.get('text', '')
    # processamento de exemplo: contar palavras e reverter
    words = len(text.split())
    reversed_text = text[::-1]
    response = {
        'original': text,
        'words': words,
        'reversed': reversed_text,
        'message': f'Texto recebido com {words} palavra(s).'
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)