
from django.contrib import admin
from django.urls import path,include

# HOST = "api.thecatapi.com"
# apiKey = "live_jWdmshjBfjrb9l4wIeYsXjPLq7cWuajEX1i1BaOTBnwNNCMjH4BQA1g"
# baseIMG = "https://cdn2.thecatapi.com/images/"
# apiIMG = "https://api.thecatapi.com/v1/images/"

#  Buscar razas de gatos por nombre, origen o temperamento
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('core.urls')),

]
#  Ver detalles de la raza, nombre, temperamento, origen, esperanza de vida, descripción completa.
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