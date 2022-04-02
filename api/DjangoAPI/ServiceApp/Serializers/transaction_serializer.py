from rest_framework import serializers
from ServiceApp.Models.transaction_model import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('id_transaction', 'id_car', 'id_customer_card',
                  'sum_of_labor', 'sum_of_parts', 'date', 'hour')
