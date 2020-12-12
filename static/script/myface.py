from __future__ import print_function, unicode_literals 
from facepplib import FacePP, exceptions 
import emoji 
import sys
   
# define global variables 
face_detection = "" 
face_comparing_localphoto = ""
faceset_initialize = "" 
face_comparing_websitephoto = ""
face_search = "" 
face_landmarks = "" 
dense_facial_landmarks = "" 
face_attributes = "" 
beauty_score_and_emotion_recognition = "" 
   
# define face comparing function 
def face_comparing(app, Image1, Image2): 
    cmp_ = app.compare.get(image_url1 = Image1, 
                           image_url2 = Image2) 
   
    # Comparing Photos 
    if cmp_.confidence > 70: 
        print('True') 
    else: 
        print('False') 
  
          
# Driver Code  
if __name__ == '__main__': 
   
    # api details 
    api_key ='xQLsTmMyqp1L2MIt7M3l0h-cQiy0Dwhl'
    api_secret ='TyBSGw8NBEP9Tbhv_JbQM18mIlorY6-D'
   
    try:    
        # call api 
        app_ = FacePP(api_key = api_key,  
                      api_secret = api_secret) 
        funcs = [ 
            face_detection, 
            face_comparing_localphoto, 
            face_comparing_websitephoto, 
            faceset_initialize, 
            face_search, 
            face_landmarks, 
            dense_facial_landmarks, 
            face_attributes, 
            beauty_score_and_emotion_recognition 
        ] 
          
        # Pair 1 
        # image1 = 'http://50b2c430d25d.ngrok.io/faceRecognition-PHP-master/faceRecognition-PHP-master/dhruv3.jpg'
        # image2 = 'http://50b2c430d25d.ngrok.io/faceRecognition-PHP-master/faceRecognition-PHP-master/WIN_20201102_06_58_45_Pro.jpg'
        # face_comparing(app_, image1, image2)                           

        image1 = str(sys.argv[1]);
        image2 = str(sys.argv[2]);
        face_comparing(app_, image1, image2)
    except exceptions.BaseFacePPError as e: 
        print('Error:', e) 


# In[ ]:




