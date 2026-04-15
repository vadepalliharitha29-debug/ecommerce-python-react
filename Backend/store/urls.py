from django.urls import path
from .views import get_products
from .views import RegisterView, MyTokenObtainPairView
from .views import CartItemListView, CartItemDetailView
from .views import orders_view

urlpatterns = [
    path('products/', get_products),
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('cart/', CartItemListView.as_view(), name='cart_list_create'),
    path('cart/<int:pk>/', CartItemDetailView.as_view(), name='cart_detail'),
    path('orders/', orders_view, name='orders'),
]
