from django.db import models


class Transaction(models.Model):
    id_transaction = models.AutoField(primary_key=True)
    id_car = models.IntegerField()
    id_customer_card = models.IntegerField()
    sum_of_labor = models.IntegerField()
    sum_of_parts = models.IntegerField()
    date = models.DateField()
    hour = models.TimeField()
