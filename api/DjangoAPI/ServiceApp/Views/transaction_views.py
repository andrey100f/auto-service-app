from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from ServiceApp.Models.transaction_model import Transaction
from ServiceApp.Serializers.transaction_serializer import TransactionSerializer


@csrf_exempt
def transaction_api(request, id=0):
    if request.method == 'GET':
        transaction_list = Transaction.objects.all()
        transaction_list_serializer = TransactionSerializer(
            transaction_list, many=True)
        return JsonResponse(transaction_list_serializer.data, safe=False)
    elif request.method == 'POST':
        transaction_data = JSONParser().parse(request)
        transaction_serializer = TransactionSerializer(data=transaction_data)
        if transaction_serializer.is_valid():
            transaction_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to add.", safe=False)
    elif request.method == 'PUT':
        transaction_data = JSONParser().parse(request)
        transaction = Transaction.objects.get(
            id_transaction=transaction_data['id_transaction'])
        transaction_serializer = TransactionSerializer(
            transaction, data=transaction_data)
        if transaction_serializer.is_valid():
            transaction_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        return JsonResponse("Failed to update.", safe=False)
    elif request.method == 'DELETE':
        transaction = Transaction.objects.get(id_transaction=id)
        transaction.delete()
        return JsonResponse("Deleted Successfully!", safe=False)
