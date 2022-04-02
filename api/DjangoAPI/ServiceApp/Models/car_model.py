from django.db import models


class Car(models.Model):
    id_car = models.AutoField(primary_key=True)
    model = models.CharField(max_length=100)
    year_of_purchase = models.IntegerField()
    number_of_kilometers = models.IntegerField()
    guarantee = models.BooleanField()
