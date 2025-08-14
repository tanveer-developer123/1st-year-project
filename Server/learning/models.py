from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Section(models.Model):
    name = models.CharField(max_length=100)
    categories = models.ManyToManyField(Category, related_name='sections')

    def __str__(self):
        return self.name


class Concept(models.Model):
    title = models.CharField(max_length=200)
    section = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='concepts')
    content = models.TextField(help_text="Use Markdown or HTML")

    def __str__(self):
        return f"{self.title} ({self.section.name})"
