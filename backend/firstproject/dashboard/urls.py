from .views import ListCreateMoviesView
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("list-all-movies/", ListCreateMoviesView.as_view()),
    path("create-new-movie/", ListCreateMoviesView.as_view()),
]
