from django.urls import path
from . import views

urlpatterns = [
    # ex /champions/
    path('', views.index, name='champions'),
]