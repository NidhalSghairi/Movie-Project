from .serializers.ListCreateMovieSerializer import ListCreateMoviesSerializer
from .models.movie import Movie
from rest_framework import generics


class ListCreateMoviesView(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = ListCreateMoviesSerializer
