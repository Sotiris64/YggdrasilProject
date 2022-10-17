from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from django.shortcuts import redirect

from django.contrib.auth import authenticate, login, logout

from .models import User

# Create your views here.


class Register(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        print(request)
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(200)
