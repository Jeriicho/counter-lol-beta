from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .models import Champion, Lane

def index(request):
    counter = request.GET.get('counter')
    lane = request.GET.get('lane')
    champ = request.GET.get('champ')
    context = {
        'champ': champ,
        'lane': lane,
        'counter': counter,
        'all_champions': Champion.objects.all()
    }
    template = loader.get_template('champions/counter.html')
    return HttpResponse(template.render(context, request))

