from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate(self, data):
        is_active = data.get('is_active')
        count = data.get('count')
        if is_active is False or count == 0:
            raise serializers.ValidationError(
                "error"
            )
        return data