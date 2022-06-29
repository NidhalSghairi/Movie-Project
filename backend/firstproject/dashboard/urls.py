from .views import ListAllMoviesView
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("list-all-movies/", ListAllMoviesView.as_view()),
]
