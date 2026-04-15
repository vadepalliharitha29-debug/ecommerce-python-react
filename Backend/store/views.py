from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics, permissions
from .serializers import RegisterSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import CartItem, Order, OrderItem
from .serializers import CartItemSerializer, OrderSerializer
from rest_framework.decorators import permission_classes

# Create your views here.


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)



# Registration
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer

# Custom JWT Token (optional: include user info)
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# List all cart items for the logged-in user
class CartItemListView(generics.ListCreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# Delete or update a cart item
class CartItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

# Orders
@api_view(['GET', 'POST'])
@permission_classes([permissions.IsAuthenticated])
def orders_view(request):
    if request.method == 'GET':
        orders = Order.objects.filter(user=request.user).order_by('-created_at')
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
        
    elif request.method == 'POST':
        data = request.data
        try:
            # Create Order
            order = Order.objects.create(
                user=request.user,
                address=data.get('address'),
                payment_method=data.get('paymentMethod'),
                total_price=data.get('totalPrice', 0)
            )
            
            # Create Order Items
            cart_items = data.get('items', [])
            for item in cart_items:
                try:
                    product = Product.objects.get(id=item.get('id') or item.get('product_id'))
                    OrderItem.objects.create(
                        order=order,
                        product=product,
                        quantity=item.get('quantity', 1),
                        price=item.get('price', 0),
                        selected_size=item.get('selectedSize', '')
                    )
                except Exception:
                    pass
                
            serializer = OrderSerializer(order)
            return Response(serializer.data, status=201)
        except Exception as e:
            return Response({'detail': str(e)}, status=400)
