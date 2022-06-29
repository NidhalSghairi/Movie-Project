from .models.movie import Movie
from django.contrib import admin


class MovieAdmin(admin.ModelAdmin):
    pass


admin.site.register(Movie, MovieAdmin)
