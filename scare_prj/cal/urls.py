from django.urls import path
from .views import *

app_name = 'cal'

urlpatterns = [
    path('home/', home, name = "home"),
    path('home2/<int:year>/<int:month>/', home2, name="home2"),
]