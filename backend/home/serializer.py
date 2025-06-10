from rest_framework import serializers
from .models import *



# JOB SERIALIZERS STARTS HERE
class JobSerializer(serializers.ModelSerializer):
    class Meta():
        model = Job
        fields = '__all__'
# JOB SERIALIZERS ENDS HERE



# JOB_TITLES SERIALIZERS STARTS HERE
class Job_title_serializer(serializers.ModelSerializer):
    class Meta():
        model = Job
        fields = '__all__'
# JOB_TITLES SERIALIZERS ENDS HERE

class Applications_Details_serializer(serializers.ModelSerializer):
    class Meta():
        model = Applicat_Details
        fields = '__all__'

class Status_Checking_serializer(serializers.ModelSerializer):
    class Meta():
        model = Applicat_Details
        fields = '__all__' 


# REGISTERATION STARTS HERE
class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = '__all__'

  