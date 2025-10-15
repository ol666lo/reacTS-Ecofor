import requests
from rest_framework.response import Response
from rest_framework.views import APIView


HOST = "https://api.thecatapi.com"
VERSION = "v1"

apiKey = "live_jWdmshjBfjrb9l4wIeYsXjPLq7cWuajEX1i1BaOTBnwNNCMjH4BQA1g"
baseIMG = "https://cdn2.thecatapi.com/images/"
apiIMG = "https://api.thecatapi.com/v1/images/"

class getCats(APIView):
    def get(self,request):
        headers = {
            "x-api-key":apiKey,
            "Accept": "application/json"

        } 
        url= (f"{HOST}/{VERSION}/breeds")
        print(url)
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            print(data)
            return Response(data)
        else:
            return Response({"error":"no se pudo obtener datos" })
#  Ver detalles de la raza, nombre temperament, origen, esperanza de vida, descripción completa.
#  Visualizar la imagen principal de cada raza
#  Guardar razas cómo favoritas (persistencia en base de datos)
#  Actualizar automáticamente la información de las razas favoritas cada vez que el usuario accede a favoritos
#  Manejar estados: error, loading, sin conexión y datos vacíos

#  Buscar razas por query
#  GET /api/breeds/search?q=<query>

#  # Buscar con filtros específicos
#  GET /api/breeds/search?origin=Egypt&temperament=Active

# Obtener detalle de una raza específica
# GET /api/breeds/<breed_id>/

#  GET /api/breeds/favorites/
#  POST /api/breeds/favorites/
#  DELETE /api/breeds/favorites/<breed_id>