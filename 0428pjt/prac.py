import csv
import numpy as np
import pandas as pd
from django.http import JsonResponse
import json
df = pd.read_csv('data/test_data.csv', encoding='cp949')
# print(df.head().isna())
def make(df):
  # 누락된 값의 수 구하기
  df['직업'].fillna('무직',inplace=True)
  # print(df.head())
  # print(df.isna().sum())

  # nan > None 값으로 변경해줌
  df = df.replace({np.nan:None})

  # 나이 열의 NULL 값을 0으로 채워줘,,
  df['나이'].fillna('0',inplace=True)

  # 나머지 행의 None 값은 NULL로 변경
  df = df.replace({None: "NULL"})
  # print(df['나이'])

  # 0으로 채워준것들이 문자라서 평균계산이 안되니까,, 숫자로 바꿔줄거야,,
  df['나이'] = df['나이'].astype(float)

  # 평균 출력해보자 
  print(df['나이'].mean()) # 41.6

  # 평균 나이와 가장 비슷한 10명을 뽑아보자,,
  # 평균값의 차이를 각각 구하고, 절대값을 취하여 새로운 필드를 만들자

  # 일단 열 추가하기
  df['나이-평균나이'] = 0
  # print(df)

  # 열 채워주자 ! 절대값으로 ! 
  df['나이-평균나이'] = abs(df['나이'] - df['나이'].mean())
  # print(df)

  # 차이값 작은 순위,, 열 추가해볼까?..
  df['순위'] = 0
  df['순위'] = df['순위'].astype(int)
  df['순위'] = df['나이-평균나이'].rank()

  df_sorted = df.sort_values(by='순위')
  # print(df_sorted)

  # 차이값이 작은 10개의 행 선택
  df_sorted = df.nsmallest(10, '나이-평균나이')

  # JSON 형태로 변환하여 출력
  response = json.dumps(df_sorted.to_dict(orient='records'))
  return response