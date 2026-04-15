import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getOrders } from "../services/orderService"

function Orders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("accessToken")
      if (!token) {
        navigate("/auth")
        return
      }
      try {
        const data = await getOrders()
        setOrders(data)
      } catch (error) {
        console.error("Failed to fetch orders", error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchOrders()
  }, [navigate])

  if (loading) return <h1 className="p-6 text-center">Loading orders...</h1>

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders placed yet 😔</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow p-6 mb-4"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-gray-700">Order #{order.id}</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{order.status}</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Placed on: {new Date(order.created_at).toLocaleDateString()}</p>
              <p className="text-sm text-gray-500 mb-4">Paid via {order.payment_method}</p>
              
              <div className="space-y-4 border-t pt-4">
                  {order.items && order.items.map(item => (
                      <div key={item.id} className="flex items-center space-x-4">
                        {item.product_image && (
                            <img
                                src={item.product_image.startsWith('http') ? item.product_image : `http://127.0.0.1:8000${item.product_image}`}
                                alt={item.product_name}
                                className="w-16 h-16 object-contain rounded border"
                            />
                        )}
                        <div className="flex-1">
                            <h2 className="font-semibold text-sm">{item.product_name}</h2>
                            {item.selected_size && <p className="text-xs text-gray-500">Size: {item.selected_size}</p>}
                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                            <p className="font-bold text-sm text-green-600">₹{item.price}</p>
                        </div>
                      </div>
                  ))}
              </div>
              <div className="text-right mt-4 pt-4 border-t">
                  <span className="font-bold text-lg">Total: ₹{order.total_price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
