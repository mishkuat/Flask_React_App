from flask import Flask, request, jsonify
from flask_cors import CORS 
import time
from datetime import datetime

app = Flask(__name__)

CORS(app)       # FE and BE runs on different ports So CORS implementation

entries = {}

@app.route('/submit_entry', methods=['POST']) 
def add_entry():       
    try:
        data = request.json
        if not data:
            raise ValueError("Invalid or empty JSON payload")  
        entry = data.get('entry')  

        if entry:
            entry_time = time.time()  
            formatted_time = datetime.fromtimestamp(entry_time).strftime('%Y-%m-%d %H:%M:%S')  # converting date time into understandable format
            entries[formatted_time] = entry 
            return jsonify({'message': 'Successfully added new entry!', 'entry_time': formatted_time}), 201
        
        return jsonify({'error': 'Entry field cannot be empty!'}), 400
    except ValueError as ve:
        return jsonify({'error': str(ve)}), 400
    except Exception as e:
        return jsonify({'error': 'An unexpected error occurred: ' + str(e)}), 500 


@app.route('/fetch_entry', methods=['GET'])
def get_last_entry():
    try:
        if entries:
            last_entry_time = max(entries)     # get the lastest timestamp
            return jsonify({'last_entry': entries[last_entry_time], 'entry_time': last_entry_time}), 200
        
        return jsonify({'message': 'No entries found!'}), 404
    except Exception as e:
        return jsonify({'error': 'An unexpected error occurred: ' + str(e)}), 500  
    
# custom error handler for NOT FOUND, INVALID METHOD AND INTERNAL SERVER ERROR
@app.errorhandler(404)
def page_not_found(e):
    return jsonify({'error': 'The requested URL was not found on the server.'}), 404

@app.errorhandler(405)
def method_not_allowed(e):
    return jsonify({'error': 'The method is not allowed for the requested URL.'}), 405

@app.errorhandler(500)
def internal_server_error(e):
    return jsonify({'error': 'An internal server error occurred.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
