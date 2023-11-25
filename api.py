import flask
from flask_cors import CORS
import json
from bcrypt import hashpw, gensalt

app = flask.Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:8100"}})  # Permitir desde el origen de tu aplicación Angular

with open('usuarios.json', 'r') as archivo_json:
    lista_de_usuarios = json.load(archivo_json)

@app.route('/login', methods=['POST'])
def login():
    data = flask.request.get_json()
    username = data.get('username')
    password = data.get('password')

    for usuario in lista_de_usuarios:
        if usuario['username'] == username and hashpw(password.encode('utf-8'), usuario['password_hash']) == usuario['password_hash']:
            return flask.jsonify({"authenticated": True, "token": "asdf1234"}), 200
    
    return flask.Response(status=401)

@app.route('/cambio-contrasena', methods=['POST'])
def cambio_contrasena():
    data = flask.request.get_json()
    username = data.get('username')
    nueva_contrasena = data.get('nuevaContrasena')

    for usuario in lista_de_usuarios:
        if usuario['username'] == username:
            usuario['password_hash'] = hashpw(nueva_contrasena.encode('utf-8'), gensalt())
            with open('usuarios.json', 'w') as archivo_json:
                json.dump(lista_de_usuarios, archivo_json, indent=2)
            return flask.Response(status=200)
    
    return flask.Response(status=401)

if __name__ == "__main__":
    app.run(debug=True)



