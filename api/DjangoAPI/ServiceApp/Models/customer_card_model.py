from django.db import models


class CustomerCard(models.Model):
    id_customer_card = models.AutoField(primary_key=True)
    last_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    cnp = models.CharField(max_length=13, unique=True)
    date_of_birth = models.DateField()
    date_of_registration = models.DateField()
