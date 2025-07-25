# app.py (Python Flask Backend)

from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Route to serve the main HTML file
@app.route('/')
def index():
    return render_template('index.html')

# Route to serve static files (CSS, JS, images if any)
@app.route('/static/<path:filename>')
def static_files(filename):
    # Ensure the path is correct for serving static files
    # The 'static' folder should be in the same directory as app.py
    return send_from_directory(os.path.join(app.root_path, 'static'), filename)

if __name__ == '__main__':
    # Create 'templates' and 'static' directories if they don't exist
    if not os.path.exists('templates'):
        os.makedirs('templates')
    if not os.path.exists('static'):
        os.makedirs('static')

    print("Flask server running. Open http://127.0.0.1:10000 in your browser.")
    print("Make sure 'index.html' is in 'templates/' and 'style.css', 'script.js' are in 'static/'.")
    app.run(host='0.0.0.0', port=10000, debug=True)  # Runs on port 10000 and listens on all interfaces
