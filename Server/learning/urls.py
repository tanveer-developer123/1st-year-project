from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, SectionViewSet, ConceptViewSet, nested_learning_data

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'sections', SectionViewSet)
router.register(r'concepts', ConceptViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('nested/', nested_learning_data),  # 👈 add this line
]
