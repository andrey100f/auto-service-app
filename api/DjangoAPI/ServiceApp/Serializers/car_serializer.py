from rest_framework import serializers
from ServiceApp.Models.car_model import Car


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id_car', 'model', 'year_of_purchase',
                  'number_of_kilometers', 'guarantee')

    def validate(self, value):
        errors = []
        if value['year_of_purchase'] <= 0:
            errors.append("error")
        if value['number_of_kilometers'] <= 0:
            errors.append("error")
        if errors:
            raise serializers.ValidationError(errors)
        return value
