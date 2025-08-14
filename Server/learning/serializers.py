from rest_framework import serializers
from .models import Category, Section, Concept

class ConceptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Concept
        fields = '__all__'

class SectionSerializer(serializers.ModelSerializer):
    concepts = ConceptSerializer(many=True, read_only=True)

    class Meta:
        model = Section
        fields = ['id', 'name', 'categories', 'concepts']

class CategorySerializer(serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'sections']
