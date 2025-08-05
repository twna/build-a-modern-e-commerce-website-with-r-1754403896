from flask import Flask, jsonify, request

app = Flask(__name__)

# Mock database for demonstration purposes
orders_db = {}

@app.route('/orders', methods=['POST'])
def create_order():
    # Assume a unique order ID is generated for each new order
    order_id = len(orders_db) + 1
    order_data = request.json
    orders_db[order_id] = order_data
    return jsonify({'id': order_id, 'order': order_data}), 201

@app.route('/orders/<int:order_id>', methods=['GET'])
def get_order(order_id):
    order = orders_db.get(order_id)
    if order:
        return jsonify(order), 200
    else:
        return jsonify({'error': 'Order not found'}), 404

@app.route('/orders/<int:order_id>', methods=['PUT'])
def update_order(order_id):
    if order_id in orders_db:
        order_data = request.json
        orders_db[order_id] = order_data
        return jsonify(order_data), 200
    else:
        return jsonify({'error': 'Order not found'}), 404

@app.route('/orders/<int:order_id>', methods=['DELETE'])
def delete_order(order_id):
    if order_id in orders_db:
        del orders_db[order_id]
        return jsonify({'message': 'Order deleted'}), 200
    else:
        return jsonify({'error': 'Order not found'}), 404

@app.route('/orders', methods=['GET'])
def list_orders():
    return jsonify(list(orders_db.values())), 200

if __name__ == '__main__':
    app.run(debug=True)
{
  "routes": [
    {"method": "POST", "path": "/orders", "description": "Create a new order"},
    {"method": "GET", "path": "/orders/<order_id>", "description": "Retrieve a specific order"},
    {"method": "PUT", "path": "/orders/<order_id>", "description": "Update an existing order"},
    {"method": "DELETE", "path": "/orders/<order_id>", "description": "Delete an order"},
    {"method": "GET", "path": "/orders", "description": "List all orders"}
  ]
}