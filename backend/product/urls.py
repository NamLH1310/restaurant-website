from django.urls import include, path

from rest_framework import routers

from .views import ProductViewSet, CategoryViewSet, EmployeeViewSet, OrderViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]