from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [

    # path('home_page/',status_checking_applicants.as_view(),name='home_page'),
    
    path('job_listing/',jobserilizerSAPIView.as_view(),name='job_listing'),
    path('job_titles/<int:id>/',job_titles_APIview.as_view(),name='job_titles_APIview'),
    path('applicant_details/',Applicants_Detail_APIView.as_view(),name='applicant_details'),

    


]