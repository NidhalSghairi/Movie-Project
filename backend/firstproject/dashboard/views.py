from .serializers.ListCreateMovieSerializer import ListAllMoviesSerializer
from .models.movie import Movie
from rest_framework import generics


class ListAllMoviesView(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = ListAllMoviesSerializer
