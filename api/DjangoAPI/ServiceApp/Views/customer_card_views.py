from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from ServiceApp.Models.customer_card_model import CustomerCard
from ServiceApp.Serializers.customer_card_serializer import CustomerCardSerializer


@csrf_exempt
def customer_card_api(request, id=0):
    if request.method == 'GET':
        customer_card_list = CustomerCard.objects.all()
        customer_card_list_serializer = CustomerCardSerializer(
            customer_card_list, many=True)
        return JsonResponse(customer_card_list_serializer.data, safe=False)
    elif request.method == 'POST':
        customer_card_data = JSONParser().parse(request)
        customer_card_serializer = CustomerCardSerializer(
            data=customer_card_data)
        if customer_card_serializer.is_valid():
            customer_card_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to add.", safe=False)
    elif request.method == 'PUT':
        customer_card_data = JSONParser().parse(request)
        customer_card = CustomerCard.objects.get(
            id_customer_card=customer_card_data['id_customer_card'])
        customer_card_serializer = CustomerCardSerializer(
            customer_card, data=customer_card_data)
        if customer_card_serializer.is_valid():
            customer_card_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        return JsonResponse("Failed to update.", safe=False)
    elif request.method == 'DELETE':
        customer_card = CustomerCard.objects.get(id_customer_card=id)
        customer_card.delete()
        return JsonResponse("Deleted Successfully!", safe=False)
