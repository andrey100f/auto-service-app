from django.urls import re_path
from ServiceApp.Views import car_views, customer_card_views, transaction_views


urlpatterns = [
    re_path(r'^car/$', car_views.car_api),
    re_path(r'^car/([0-9]+)$', car_views.car_api),

    re_path(r'^customer_card/$', customer_card_views.customer_card_api),
    re_path(r'^customer_card/([0-9]+)$',
            customer_card_views.customer_card_api),

    re_path(r'^transaction/$', transaction_views.transaction_api),
    re_path(r'^transaction/([0-9]+)$', transaction_views.transaction_api)
]
