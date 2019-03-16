import cv2 as cv
class CarDetector:
    frame = None
    def __init__(self):
        print("Contructor Called")

    def __del__(self):
        print("Car detector deleted")

    def getCar(self, frame):
        return cv.cvtColor(frame, cv.COLOR_BGR2GRAY)        