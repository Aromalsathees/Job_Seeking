from django.shortcuts import render
from . models import *
from . serializer import *
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework . views import APIView
from rest_framework . response import Response



# Create your views here.

# JOB VIEW STARTS HERE
class jobserilizerSAPIView(APIView):
   def get(self,request):
     jobdatas = Job.objects.all()
     serializers = JobSerializer(jobdatas,many=True)
     return Response(serializers.data,status=status.HTTP_200_OK)   
# JOB VIEW ENDS HERE


# JOB_TITLES VIEW STARTS HERE

class job_titles_APIview(APIView):
   def get(self,request,id):
      jobdata = get_object_or_404(Job,id=id)
      serializers = Job_title_serializer(jobdata)
      return Response(serializers.data,status=status.HTTP_200_OK)
   
# JOB_TITLES VIEW ENDS HERE


# APPLICANT_DETAILS VIEW STARTS HERE
class Applicants_Detail_APIView(APIView):
   def post(self,request):
      applicant_data = Applications_Details_serializer(data=request.data)
      if applicant_data.is_valid():
         applicant_data.save()
         return Response(applicant_data.data,status=status.HTTP_200_OK)      
      else:
         return Response(applicant_data.errors,status=status.HTTP_400_BAD_REQUEST)
# APPLICANT_DETAILS VIEW ENDS HERE


      



   


