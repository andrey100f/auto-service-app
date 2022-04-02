from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from ServiceApp.Models.car_model import Car
from ServiceApp.Serializers.car_serializer import \
    CarSerializer


@csrf_exempt
def car_api(request, id=0):
    if request.method == 'GET':
        car_list = Car.objects.all()
        car_list_serializer = CarSerializer(
            car_list, many=True)
        return JsonResponse(car_list_serializer.data, safe=False)
    elif request.method == 'POST':
        car_data = JSONParser().parse(request)
        car_serializer = CarSerializer(
            data=car_data)
        if car_serializer.is_valid():
            car_serializer.save()
            return JsonResponse("Added Successfully.", safe=False)
        return JsonResponse("Failed to add.", safe=False)
    elif request.method == 'PUT':
        car_data = JSONParser().parse(request)
        car = Car.objects.get(
            id_car=car_data['id_car'])
        car_serializer = CarSerializer(
            car, data=car_data)
        if car_serializer.is_valid():
            car_serializer.save()
            return JsonResponse("Updated Successfully.", safe=False)
        return JsonResponse("Failed to update.", safe=False)
    elif request.method == 'DELETE':
        car = Car.objects.get(id_car=id)
        car.delete()
        return JsonResponse("Deleted Successfully.", safe=False)
