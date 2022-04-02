from rest_framework import serializers
from ServiceApp.Models.customer_card_model import CustomerCard


class CustomerCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerCard
        fields = ('id_customer_card', 'last_name', 'first_name',
                  'cnp', 'date_of_birth', 'date_of_registration')
