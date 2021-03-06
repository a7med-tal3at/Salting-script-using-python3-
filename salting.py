import random, hashlib

class Salting:

    def __init__(self, upass):
        self.upass = upass
        self.salt  = ''
        self.hashedPass = ''
        self.db = {self.upass:''}
        self.run()

    # Create the random values to the Salting method

    def gNRC(self):
        return random.choice([ chr(i) for i in range(ord('A'), ord('Z')+1) ])


    def createSaltText(self):
        saltText = []
        [ saltText.append(self.gNRC()) for _ in range(50) ]
        return ''.join(saltText)


    def saltMyPassword(self):
        self.salt = self.createSaltText()
        return ''.join([ self.upass, self.salt])

    
    # Hashing methods

    def md5Hash(self, word):
        return hashlib.md5(word.encode()).hexdigest()



    def valedation(self, txt):
        return self.md5Hash(''.join([txt, self.salt])) == self.db[self.upass]


    # User Methods

    def screen(self):
        print( f'''
                 *   ##################################################  *
                 -   ###        * Welcome into your account *       ###  -
                 -   ###          we hope a grade day to you        ###  -
                 -   ###              coded by: a7med               ###  -
                 *   ##################################################  *
                    

                    your Hashed password: {self.db[self.upass]}
            ''' )

    def login(self):
        print('\t\t* Now login again to test the script * ')
        ui = str(input('Enter password: '))
        if self.valedation(ui):
            self.screen()
        else:
            print("some thing Error")


    # Run Your Script
    
    def run(self):
        self.hashedPass = self.md5Hash(self.saltMyPassword())
        self.db[self.upass] = self.hashedPass

if __name__ == '__main__':
    ui = str(input('Enter password: '))
    salt = Salting(ui)
    salt.login()

