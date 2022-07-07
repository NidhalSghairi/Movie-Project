from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField()
    publish_date = models.DateField()
    cover_image = models.CharField(max_length=250, default="")

    def __str__(self) -> str:
        return self.title
