from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def my_view(request):
    name = request.GET.get('name', 'World')
    return HttpResponse("Hello, {}!".format(name))