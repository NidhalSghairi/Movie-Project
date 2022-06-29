from ..models import Movie
from rest_framework import serializers


class ListAllMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ("title", "description")
