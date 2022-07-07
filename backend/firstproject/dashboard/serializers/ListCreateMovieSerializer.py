from ..models import Movie
from rest_framework import serializers


class ListCreateMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ("title", "description", "cover_image")
