from django.http import JsonResponse
from rest_framework.decorators import api_view
import random
import csv
import numpy as np
import pandas as pd
import json

df = pd.read_csv('data/test_data.csv', encoding='cp949')
array_length = 1000
random_range = 5000

@api_view(['GET'])
def bubble_sort(request):
    li = []
    for i in range(array_length):
        li.append(random.choice(range(1, random_range)))
    for i in range(len(li) - 1, 0, -1):
        for j in range(i):
            if li[j] < li[j + 1]:
                li[j], li[j + 1] = li[j + 1], li[j]
    context = {
      'top': li[0]
    }
    return JsonResponse(context)

@api_view(['GET'])
def normal_sort(request):
    li = []
    for i in range(array_length):
        li.append(random.choice(range(1, random_range)))
    li.sort(reverse=True)
    context = {
        'top': li[0]
    }
    df['나이-평균나이'] = abs(df['나이'] - df['나이'].mean())
    df_sorted = df.nsmallest(10, '나이-평균나이')
    data = df_sorted.to_dict(orient='records')

    return JsonResponse(data, safe=False)

from queue import PriorityQueue

@api_view(['GET'])
def priority_queue(request):
    pq = PriorityQueue()
    for i in range(array_length):
        pq.put(-random.choice(range(1, random_range)))
    context = {
        'top': -pq.get()
    }
    return JsonResponse(context)


def bk(request):


    # 열 채워주자 ! 절대값으로 ! 
    df['나이-평균나이'] = abs(df['나이'] - df['나이'].mean())

    # 차이값이 작은 10개의 행 선택
    df_sorted = df.nsmallest(10, '나이-평균나이')

    # JSON 형식으로 변환하여 반환
    data = df_sorted.to_dict(orient='records')
    # response = json.dumps(data)
    # response = json.dumps(data)
    # print(response)
    return JsonResponse(data, safe=False)

