from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=30,default="")
    email=models.EmailField(max_length=20,default="")
    password=models.CharField(max_length=30,default="")

    def __str__(self):
        return self.username
    


class Job(models.Model):

    jobtitle = models.CharField(max_length=100)
    jobdescription = models.TextField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    end_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.jobtitle
    

class Applicat_Details(models.Model):

    CHOICE = [
    ('Rejected', 'Rejected'),
    ('Selected', 'Selected'),
    ('Applied', 'Applied'),
]
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
    temp_user_id = models.CharField(max_length=100, null=True, blank=True)

    jobname = models.ForeignKey(Job,on_delete=models.CASCADE)
    username = models.CharField(max_length=50,default="")
    email=models.EmailField(max_length=100,default="")
    number=models.CharField(max_length=50,default="")    
    image=models.ImageField(upload_to='Files',null=True,blank=True)
    status = models.CharField(max_length=20,choices=CHOICE,default="Applied")


    def __str__(self):
        return self.username
    
    