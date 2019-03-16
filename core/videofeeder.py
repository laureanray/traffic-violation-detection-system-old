import cv2 as cv


class VideoFeeder:
    video = None
    def __init__(self, URL=None):
        if URL:
            try:
                self.video = cv.VideoCapture(URL)
            # print(self)
                if not self.video.isOpened():
                    raise NameError('Error opening file, please check the path. ')
            except cv.error as e:
                print("cv.error", e)
        else:
            self.video = cv.VideoCapture(0)


    def __del__(self):
        self.video.release()


    def get_frame(self):
        success, image = self.video.read()
        return image


 