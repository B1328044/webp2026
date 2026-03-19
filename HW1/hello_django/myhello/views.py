from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
import logging

from .models import Course

logger = logging.getLogger('django')


@api_view(['GET'])
def add_course(request):
    Department = request.GET.get('Department', '')
    CourseTitle = request.GET.get('CourseTitle', '')
    Instructor = request.GET.get('Instructor', '')

    if not Department or not CourseTitle or not Instructor:
        return Response(
            {"error": "Department, CourseTitle, Instructor 都必填"},
            status=status.HTTP_400_BAD_REQUEST
        )

    new_Course = Course()
    new_Course.Department = Department
    new_Course.CourseTitle = CourseTitle
    new_Course.Instructor = Instructor
    new_Course.save()

    logger.debug("course_api: " + CourseTitle)

    return Response(
        {"data": CourseTitle + " insert!"},
        status=status.HTTP_200_OK
    )


from django.http import HttpResponse
import json

@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all().values(
    #    'id', 'Department', 'CourseTitle', 'Instructor'
    )
    data = json.dumps(list(courses), ensure_ascii=False,indent=4)
    return HttpResponse(data, content_type='application/json; charset=utf-8')