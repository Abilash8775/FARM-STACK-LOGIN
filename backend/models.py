from pydantic import BaseModel

class info(BaseModel):
    name:str
    email:str
    mobile:int
    password:str
    
class Login(BaseModel):
    name:str
    password:str

