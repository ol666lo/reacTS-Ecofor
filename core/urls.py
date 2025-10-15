from .views import getCats
from django.urls import path


urlpatterns = [
    path('cats/', getCats.as_view(),name='fechtAllCats'),
]

#  Buscar razas de gatos por nombre, origen o temperamento

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