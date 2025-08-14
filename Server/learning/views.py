from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Category, Section, Concept
from .serializers import CategorySerializer, SectionSerializer, ConceptSerializer


# --------- ViewSets (for DRF Browsable API or general endpoints) ---------

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SectionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

class ConceptViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Concept.objects.all()
    serializer_class = ConceptSerializer


# --------- Custom Nested JSON API View (for React frontend) ---------

@api_view(['GET'])
def nested_learning_data(request):
    categories = Category.objects.all()
    data = []

    for category in categories:
        sections = category.sections.all()
        section_data = []
        for section in sections:
            concepts = section.concepts.all()
            concept_data = [
                {
                    "id": concept.id,
                    "title": concept.title,
                    "content": concept.content
                }
                for concept in concepts
            ]
            section_data.append({
                "id": section.id,
                "name": section.name,
                "concepts": concept_data
            })

        data.append({
            "id": category.id,
            "name": category.name,
            "sections": section_data
        })

    return Response(data)
